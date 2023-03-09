import { useState} from "react";
import { Switch } from "@headlessui/react";
import { ArrowsPointingOutIcon, PencilIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example({state,set}) {

    return (
        <div className="flex items-center gap-2">
            <span className={classNames(state ? 'text-neutral-800' : 'text-white', 'font-semibold text-lg transition-colors')}>Move</span>
            {/* <Switch
                checked={state}
                onChange={set}
                className={classNames(
                    "bg-gray-200 relative inline-flex h-9 w-20 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
                    )}
            >
                <span
                    aria-hidden="true"
                    className={classNames(
                        state ? "translate-x-10" : "translate-x-2",
                        "pointer-events-none inline-block h-8 w-8 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                />
            </Switch> */}
            <Switch
                checked={state}
                onChange={set}
                className={classNames(
                    'bg-gray-200 relative inline-flex h-10 w-20 flex-shrink-0 cursor-pointer rounded-full border-4 border-transparent transition-colors duration-500 ease-in-out focus:outline-none'
                )}
                >
                <span
                    className={classNames(
                    state ? 'translate-x-10' : 'translate-x-0',
                    'pointer-events-none relative inline-block h-8 w-8 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                >
                    <span
                    className={classNames(
                        state ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                        'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                    )}
                    aria-hidden="true"
                    >
                        <ArrowsPointingOutIcon className="h-5 w-5 rotate-45 text-gray-400" />
                    </span>
                    <span
                    className={classNames(
                        state ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                        'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                    )}
                    aria-hidden="true"
                    >
                        <PencilIcon className="h-5 w-5 text-gray-400" />
                    </span>
                </span>
            </Switch>
            <span className={classNames(state ? 'text-white' : 'text-neutral-800', 'font-semibold text-lg transition-colors')}>Draw</span>
        </div>

    );
}
