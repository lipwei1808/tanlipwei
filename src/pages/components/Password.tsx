import { useState } from 'react';

import Modal from '@/components/Modal';

const Password = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        aria-label="Password"
        onClick={() => {
          setOpen(true);
        }}
        role="button"
        tabIndex={-1}
        onKeyDown={undefined}
        className="bg-green-400 rounded-full h-4 w-4"
      />
      <Modal open={open} setOpen={setOpen}>
        <div>You hacked me!! Password:</div>
        <div className="flex flex-col">
          <span className="whitespace-pre leading-2">{'o |  _      _   _  _   _| o ._   _  '}</span>
          <span className="whitespace-pre">{'| | (_) \\/ (/_ (_ (_) (_| | | | (_| '}</span>
          <span className="whitespace-pre leading-2">{'                                _|'}</span>
        </div>
        <button
          className="px-4 py-2 border border-iterm-green-400 rounded-xl hover:bg-iterm-green-500"
          type="button"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </Modal>
    </>
  );
};

export default Password;
