import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useMinecraftStatusQuery } from "../../graphql/generated/schema";
import { Button } from "../generic/Button";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const POLL_INTERVAL_MS = 10000;

export const MinecraftModal: React.FC<IProps> = ({ isOpen, onClose }) => {
  const { data, refetch } = useMinecraftStatusQuery();

  const [copyText, setCopyText] = useState("Copy");

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-neutral-800 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-neutral-100 mb-5"
                >
                  TN1.gg Minecraft Server
                </Dialog.Title>
                <hr className="border-neutral-700 border-1 mb-4" />
                <div className="mt-2">
                  <div className="mb-2 flex flex-row items-center text-neutral-200 text-sm">
                    <span className="flex-grow">Server Address</span>

                    <code className="rounded mr-2 px-2 py-1 bg-neutral-700 text-neutral-100">
                      minecraft.tn1.gg
                    </code>
                    <span
                      className="text-neutral-200 text-sm cursor-pointer bg-indigo-600 rounded px-2 py-1 hover:bg-indigo-400 transition:ease-in-out duration-200"
                      onClick={() => {
                        setCopyText("Copied!");
                        navigator.clipboard.writeText("minecraft.tn1.gg");
                        setTimeout(() => {
                          setCopyText("Copy");
                        }, 1000);
                      }}
                    >
                      {copyText}
                    </span>
                  </div>
                  <hr className="border-neutral-700 border-1 mt-4" />
                  <ul>
                    <li className="my-2">
                      <p className="text-sm text-neutral-200">
                        Status:{" "}
                        {data?.minecraftStatus?.online ? "Online" : "Offline"}
                      </p>
                    </li>
                    <li className="my-2">
                      <p className="text-sm text-neutral-200">
                        Players online:{" "}
                        {data?.minecraftStatus?.players || "None"}
                      </p>
                    </li>
                    <li className="my-2">
                      <p className="text-sm text-neutral-200">
                        Version: {data?.minecraftStatus?.version || "Unknown"}
                      </p>
                    </li>
                    <li className="my-2">
                      <p className="flex flex-row items-center justify-between text-sm text-neutral-200">
                        <span>
                          Last updated:{" "}
                          {data?.minecraftStatus?.lastUpdated
                            ? new Date(
                                data?.minecraftStatus?.lastUpdated
                              ).toLocaleString()
                            : "Unknown"}
                        </span>
                        <span
                          className="ml-2 text-neutral-200 text-sm cursor-pointer bg-indigo-600 rounded px-2 py-1 hover:bg-indigo-400 transition:ease-in-out duration-200"
                          onClick={() => {
                            refetch();
                          }}
                        >
                          Refresh
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
                <hr className="border-neutral-700 border-1 mt-4" />
                <div className="mt-4 flex">
                  <Button onClick={() => onClose()}>
                    <span className="text-neutral-200">Got it, thanks!</span>
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
