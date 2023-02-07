import { useState} from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example({state,set}) {

    return (
        <div className="flex items-center gap-2">
            <span className={classNames(state ? 'text-gray-300' : 'text-red-500', 'text-lg font-semibold')}>Move</span>
            <Switch
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
            </Switch>
            <span className={classNames(state ? 'text-red-500' : 'text-gray-300', 'text-lg font-semibold')}>Draw</span>
        </div>

    );
}
