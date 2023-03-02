import { Courier_Prime as CourierPrime } from 'next/font/google';
import { useEffect, useState } from 'react';
import moment from 'moment';

const courier = CourierPrime({ subsets: ['latin'], weight: '400' });

const Age = () => {
  const [current, setCurrent] = useState('');
  const birthTime = 998078400000;
  useEffect(() => {
    const interval = setInterval(() => {
      const birthday = moment(birthTime);
      const now = moment(new Date());
      const years = now.diff(birthday, 'years');
      birthday.add(years, 'years');
      const months = now.diff(birthday, 'months');
      birthday.add(months, 'months');
      const days = now.diff(birthday, 'days');
      birthday.add(days, 'days');
      const hours = now.diff(birthday, 'hours');
      birthday.add(hours, 'hours');
      const minutes = now.diff(birthday, 'minutes');
      birthday.add(minutes, 'minutes');
      const seconds = now.diff(birthday, 'seconds');

      setCurrent(
        `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={`${courier.className} text-lg text-green-500 mt-2`}>
      Current level:&nbsp;
      <span>{current}</span>
    </div>
  );
};

export default Age;
