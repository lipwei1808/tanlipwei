import { FC, Fragment, SetStateAction, Dispatch, PropsWithChildren } from 'react';
import { Source_Code_Pro as SourceCodePro } from 'next/font/google';
import { Dialog, Transition } from '@headlessui/react';

const sourceCodePro = SourceCodePro({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic', 'normal'],
});

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

// eslint-disable-next-line arrow-body-style
const Modal: FC<PropsWithChildren<Props>> = ({ children, open, setOpen }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="transform rounded-2xl bg-iterm-green-800 p-6 shadow-xl transition-all">
                <div className={sourceCodePro.className}>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
