import { ExclamationTriangleIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid'
import Canvas from "../components/screen/Canvas"

const colordict = {0:'bg-emerald-500', 1 : 'bg-green-400', 3 : 'bg-yellow-300', 4 : 'bg-amber-500', 2 : 'bg-lime-200', 5 : 'bg-red-500', 6 : 'bg-rose-400', 7 : 'bg-cyan-300', 8 : 'bg-sky-500', 10 : 'bg-purple-500', 9 : 'bg-indigo-300', 11 : 'bg-amber-800', 12 : 'bg-black', 13 : 'bg-slate-400', 14 : 'bg-slate-200', 15 : 'bg-white'};
const namedict = {0:'Emerald', 1 : 'Green', 3 : 'Yellow', 4 : 'Amber', 2 : 'Lime', 5 : 'Red', 6 : 'Rose', 7 : 'Cyan', 8 : 'Sky', 10 : 'Purple', 9 : 'Indigo', 11 : 'Brown', 12 : 'Black', 13 : 'Dark Grey', 14 : 'Light Grey', 15 : 'White'};

export default function Screen({grid, cursor, newPixel}) {

  return (
    <>
      <div className="block sm:hidden rounded-md bg-yellow-100 p-4 m-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Attention</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                Cette page n'est pas censée être consultée depuis un écran aussi petit !
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="w-full min-h-screen flex">
          <div className='w-1/5 bg-primary flex flex-col items-center justify-evenly'>
            <img src="logo_fire_pixel.png" alt="Logo FirePixel" className='w-3/5' />
            <h1 className="text-white text-[4rem] font-title">FirePixel</h1>
            <img src="qr-code.png" alt="melisse.ovh1.ec-m.fr/#/phone" className='w-4/5' />
          </div>
          <div className="w-4/5 bg-secondary">
            <Canvas grid={grid} newPixel={newPixel} squareSide={10} cursors={cursor}/>
          </div>
        </div>
      </div>
    </>
  );
}