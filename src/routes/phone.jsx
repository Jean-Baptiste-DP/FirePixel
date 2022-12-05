import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import Joystick from '../components/phone/joystick'

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
          <div className="bg-gray-300 h-screen">
            <div className="h-1/2 grid grid-cols-1 place-items-center">
              <h1 className="text-3xl font-extrabold">
                Canvas
              </h1>
            </div>
            <div className="bg-red-400 rounded-lg h-1/6">
              <h1 className="text-3xl">
                Pointer Blue
              </h1>
            </div>
            <div className="bg-red-400 rounded-lg h-2/6">
               <Joystick></Joystick> 
            </div>
          </div>
        </div>
      </>
    );
  }