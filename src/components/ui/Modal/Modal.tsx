import { Dialog, Transition } from "@headlessui/react";
import type { VFC } from "react";
import { Fragment } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  actionButtonLabel: string;
  onActionButtonClick: () => void;
};

export const Modal: VFC<ModalProps> = (props) => {
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="overflow-y-auto fixed inset-0 z-10" onClose={props.onClose}>
        <div className="px-4 min-h-screen  text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block overflow-hidden p-6 my-8 w-full max-w-md text-left align-middle bg-white rounded-2xl shadow-xl transition-all">
              <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-gray-900">
                {props.title}
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-900">{props.description}</p>
              </div>

              <div className="flex justify-end mt-8">
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-6 mr-4 text-sm font-bold text-gray-900 bg-slate-200 rounded-full focus:outline-none"
                  onClick={props.onClose}
                >
                  キャンセル
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-6 text-sm font-bold text-white bg-red-500 rounded-full focus:outline-none"
                  onClick={props.onActionButtonClick}
                >
                  {props.actionButtonLabel}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
