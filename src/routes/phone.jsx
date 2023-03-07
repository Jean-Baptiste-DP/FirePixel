import { ExclamationTriangleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import HomeJoystick from "../components/phone/homeJoystick";
import Switch from '../components/phone/switch';
import React, { useState, useRef } from "react";
import PhoneCanvas from '../components/phone/canvas';
import Scrollbar from "../components/phone/scrollbar";
import { Steps } from "intro.js-react";

import "intro.js/introjs.css";

const namedict = {0:'Emerald', 1 : 'Green', 3 : 'Yellow', 4 : 'Amber', 2 : 'Lime', 5 : 'Red', 6 : 'Rose', 7 : 'Cyan', 8 : 'Sky', 10 : 'Purple', 9 : 'Indigo', 11 : 'Brown', 12 : 'Black', 13 : 'Dark Grey', 14 : 'Light Grey', 15 : 'White'};
const regles =
    "Dessinez ce que vous voulez sur l'écran! Dans l'onglet color, choissisez une couleur avec laquelle dessiner,puis déplacez le joystick pour appliquer la couleur. Si vous avez décidé de faire du PixelArt, 'Apply' vous permet de placer les pixels un à un.";

export default function Phone({ grid, cursor, sendJsonMessage, newPixel }) {

    const [enabled,setEnabled] = useState(false);
    const [initialStep,setInitialStep] = useState(0);
  
    const onExit = () => {
        setEnabled(false)
    }

    const steps =  [
        {
            element: "#canvas",
            intro: `Tu as le curseur ${cursor.id != -1 ? namedict[cursor.id] : "noir"} ! Utilise la grille pour dessiner sur l'écran. Clique pour colorier. Clique long pour te déplacer`,
            position: 'right',
          },
          {
            element: "#palette",
            intro: "La palette te permet de choisir avec quelle couleur tu vas dessiner sur l'écran.",
            position: 'top',
          },
          {
            element: "#joystick",
            intro: "Le joystick te permet de te déplacer",
            position: 'top',
          },
        {
          element: "#switch",
          intro: "Tu peux choisir : Te déplacer ou te déplacer en déssinant",
          position: 'top',
        },
      ]
 
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const [pixel, setPixel] = useState(0);
    const [continuous, setContinuous] = useState(false);

    return (
        <>

            <div className="hidden sm:block rounded-md bg-yellow-100 p-4 m-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <ExclamationTriangleIcon
                            className="h-5 w-5 text-yellow-400"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">
                            Attention
                        </h3>
                        <div className="mt-2 text-sm text-yellow-700">
                            <p>
                                Cette page n'est pas censée être consultée
                                depuis un écran aussi grand !
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Affichage des blocs qui apparaissent quand on clique sur un bouton */}

            <div className="block sm:hidden overflow-hidden">

            <Steps
              enabled={enabled}
              steps={steps}
              initialStep={initialStep}
              onExit={onExit}
            />
            <div className="flex flex-col h-screen  bg-[#454141] justify-start">
                <div className="w-full aspect-square bg-gray-200" id="canvas">
                    <PhoneCanvas grid={grid} newPixel={newPixel} squareSide={windowSize.current[0]/5} cursor={cursor} websocket={sendJsonMessage} color={pixel} className="canvas"/>
                </div>
                <div className=" flex-col -outline -outline-red-500">
                    <div className="flex my-2 bg-[#686060] rounded-2xl" id="palette">
                        <div className="absolute pointer-events-none bg-gradient-to-l from-transparent to-gray-800 h-16 w-7 rounded-l-2xl "/>
                        <Scrollbar pixel={pixel} click={setPixel}></Scrollbar>
                        <div className="absolute right-0 pointer-events-none bg-gradient-to-r from-transparent to-gray-800 h-16 w-7 rounded-r-2xl "/>
                    </div>
                </div>
                <div className="relative bg-[#686060] w-full flex flex-col items-center justify-evenly flex-grow rounded-t-2xl  -outline outline-emerald-500 place-items-center">
                <button onClick={()=>setEnabled(true)} className="absolute top-0 left-0 text-white p-2">
                    {/* <img src="/Info-Button.svg" alt="Help" width="25" height="25"/> */}
                    <InformationCircleIcon className="h-10 aspect-square" />
                </button>
                    <div id="joystick">
                        <HomeJoystick websocket={sendJsonMessage} color= {pixel} pixelArt={continuous}></HomeJoystick>
                    </div>
                    <div className="p-2" id="switch">
                        <Switch state={continuous} set={setContinuous}/>
                    </div>
                    
                </div>
            </div>

            </div>
        </>
    );
}
