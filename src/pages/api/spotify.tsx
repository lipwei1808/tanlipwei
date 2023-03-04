import type { NextApiRequest, NextApiResponse } from 'next';

const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const getAccessToken = async () => {
  const basic = `Basic ${Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64')}`;

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'post',
    headers: {
      Authorization: basic,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN as string,
      grant_type: 'refresh_token',
    }),
  });
  const data = await response.json();
  return data.access_token;
};

const getSong = async () => {
  const token = await getAccessToken();
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await getSong();
    if (response.status === 204) {
      res.status(200).json({ success: false });
      return;
    }
    const data = await response.json();

    if (!data.is_playing) {
      res.status(200).json({ success: false });
      return;
    }

    const song = {
      name: data.item.name,
      artists: data.item.artists.map((artist: { name: string }) => artist.name).join(', '),
      uri: data.item.uri,
    };
    res.status(200).json({ success: true, data: song });
  } catch (e) {
    res.status(500).json({ success: false, message: 'Unknown error occured', error: e });
  }
}
