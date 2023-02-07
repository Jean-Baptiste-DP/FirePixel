import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const [paint, setPaint] = useState(false);

    return (
        <div className="flex items-center gap-2">
            <span className={classNames(paint ? 'text-gray-200' : 'text-red-500', 'text-lg font-semibold')}>Pixel</span>
            <Switch
                checked={paint}
                onChange={setPaint}
                className={classNames(
                    "bg-gray-200 relative inline-flex h-9 w-20 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
                    )}
            >
                <span
                    aria-hidden="true"
                    className={classNames(
                        paint ? "translate-x-10" : "translate-x-2",
                        "pointer-events-none inline-block h-8 w-8 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                />
            </Switch>
            <span className={classNames(paint ? 'text-red-500' : 'text-gray-200', 'text-lg font-semibold')}>Line</span>
        </div>
    );
}
