import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import HomeJoystick from '../components/phone/homeJoystick';
import Button from '../components/phone/button';
import React,{useState,useEffect} from 'react';




export default function Phone() {

  const [helpState, setHelpState] = useState(['-z-10 opacity-0']);
  
  function helpOnCLick() {
    if (helpState != '-z-10 opacity-0') {
    setHelpState('-z-10 opacity-0');}
    else {
      setHelpState('z-10');
    }
  }

  
  const player = {
    Name : 'Blue Player',
    Color : 'bg-sky-400'
  }


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
          <div className={`grid grid-cols-1 place-items-center absolute h-full w-full ${helpState} transition duration-300 `}>
            <div className="h-2/3 w-2/3  bg-dark rounded-lg p-4 ">
              <p className="text-white text-xl"> Regles du jeux :
              Yo tell me what you want what you really really really want</p>
            </div>
          </div>
          <div className="bg-secondary h-screen">
            <div className="h-1/2 grid grid-cols-1 place-items-center">
              <h1 className="text-3xl font-extrabold">
                Canvas
              </h1>
            </div>
            <div className="my-2 py-2 flex bg-primary rounded-lg items-center justify-center">
              <h1 className="text-3xl text-white font-extrabold">
                {player.Name}
              </h1>
              {/*On ne peut pas faire bg-${player}-400 car tailwind n'autorise pas ce genre de syntax,
               il faudra donc créer un dict qui possède le nom de la couleur du joueur et son équivalent tailwind ou un hex*/}
              <div  className={`${player.Color} mx-2 rounded-lg w-8 h-8 border-black border-2`}>
              </div>
            </div>
            <div className="my-2 pt-9 grid grid-rows-2 bg-primary rounded-lg h-2/6 place-items-center gap-10">
              <HomeJoystick/>
              <div className='grid grid-cols-3 place-items-center gap-5 relative z-10'>
                <Button text='Help' onClick={helpOnCLick}/>
                <Button text='Color' onClick={() => console.log("COLOR") }/>
                <Button text='Apply' onClick={() => console.log("Apply") }/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }