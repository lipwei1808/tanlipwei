import { Dispatch, FC, SetStateAction, useState, FormEvent, useEffect } from 'react';

import Modal from '@/components/Modal';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

enum PageView {
  FORM,
  SUCCESS,
  FAILURE,
}

// default open state to be false, else fail pre rendering
const Popup: FC<Props> = ({ open = false, setOpen }) => {
  const [password, setPassword] = useState('');
  const [view, setView] = useState<PageView>(PageView.FORM);
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    if (!open) {
      return;
    }

    if (timer === 0) {
      setOpen(false);
    }
  }, [timer, open, setOpen]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === '') {
      return;
    }
    if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setView(PageView.FAILURE);
      setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setView(PageView.SUCCESS);
    }
    setPassword('');
  };

  const generateComponent = () => {
    switch (view) {
      case PageView.FORM: {
        return (
          <form onSubmit={onSubmit} className="relative">
            <label className="flex items-center gap-x-2" htmlFor="password">
              <span>Password</span>
              <input
                id="password"
                className="bg-transparent border border-iterm-green-600 px-2 py-1 focus:outline-none"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </form>
        );
      }
      case PageView.SUCCESS: {
        return (
          <div>
            <div>hacked!!!</div>
            <div>ask me for drink </div>
          </div>
        );
      }
      case PageView.FAILURE: {
        return (
          <div>
            Intruder... Closing in&nbsp;
            {timer}
          </div>
        );
      }
      default:
    }
    return 0;
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="w-80">{generateComponent()}</div>
    </Modal>
  );
};

export default Popup;
