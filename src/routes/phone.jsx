import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

export default function Phone() {
    return (
      <>
        <div className="hidden sm:block rounded-md bg-yellow-100 p-4 m-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Attention</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Cette page n'est pas censée être consultée depuis un écran aussi grand !
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="block sm:hidden">
          <h1 className="text-3xl text-blue-700">
            Hello from Phone !
          </h1>
        </div>
      </>
    );
  }