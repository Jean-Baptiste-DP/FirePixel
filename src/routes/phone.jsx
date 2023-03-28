import { ExclamationTriangleIcon, InformationCircleIcon, MapPinIcon } from "@heroicons/react/20/solid";
import HomeJoystick from "../components/phone/homeJoystick";
import Switch from '../components/phone/switch';
import React, { useState, useRef } from "react";
import PhoneCanvas from '../components/phone/canvas';
import Scrollbar from "../components/phone/scrollbar";
import FullLobby from "../components/phone/fullLobby";
import { Steps } from "intro.js-react";

import "intro.js/introjs.css";
import { ColorsContext } from "../colorsContext";

// const namedict = {0:'Emerald', 1 : 'Green', 3 : 'Yellow', 4 : 'Amber', 2 : 'Lime', 5 : 'Red', 6 : 'Rose', 7 : 'Cyan', 8 : 'Sky', 10 : 'Purple', 9 : 'Indigo', 11 : 'Brown', 12 : 'Black', 13 : 'Dark Grey', 14 : 'Light Grey', 15 : 'White'};
const regles =
    "Dessinez ce que vous voulez sur l'écran! Dans l'onglet color, choisissez une couleur avec laquelle dessiner,puis déplacez le joystick pour appliquer la couleur. Si vous avez décidé de faire du PixelArt, 'Apply' vous permet de placer les pixels un à un.";

export default function Phone({ grid, cursor, sendJsonMessage, newPixel }) {

    const colors = React.useContext(ColorsContext);

    const [enabled,setEnabled] = useState(false);
    const [initialStep,setInitialStep] = useState(0);
  
    const onExit = () => {
        setEnabled(false)
    }

    const steps =  [
        {
            element: "#canvas",
            intro: `Tu as le curseur ${cursor.id != -1 ? colors[cursor.id].name : "noir"} ! Utilise la grille pour dessiner sur l'écran. Clique pour colorier. Clique long pour te déplacer.`,
            position: 'right',
          },
          {
            element: "#palette",
            intro: "La palette te permet de choisir avec quelle couleur tu vas dessiner sur l'écran.",
            position: 'top',
          },
          {
            element: "#joystick",
            intro: "Le joystick te permet de te déplacer.",
            position: 'top',
          },
         { 
            element: "#map",
            intro: "Agrandis ton curseur sur l'écran pour te retrouver quand tu es perdu.",
            position: 'bottom',

            },
            {
          element: "#switch",
          intro: "Tu peux choisir : Te déplacer ou te déplacer en dessinant.",
          position: 'top',
        },
      ]
 
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const [pixel, setPixel] = useState(Math.floor(Math.random()*10));
    const [continuous, setContinuous] = useState(false);
    const FullLobbyModal =  <div className="sm:hidden absolute screen-dvh z-10 flex place-items-center">
                                <FullLobby/>
                            </div>
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

            {cursor?.id == -1  ? FullLobbyModal : null}

            <div className={`sm:hidden ${cursor?.id == -1 ? 'opacity-60' : ''}`} >
                <Steps
                    enabled={enabled}
                    steps={steps}
                    initialStep={initialStep}
                    onExit={onExit}
                />
                <div className="flex flex-col screen-dvh bg-[#454141] justify-start">
                    <div className="w-full aspect-square bg-gray-200" id="canvas">
                        <PhoneCanvas grid={grid} newPixel={newPixel} squareSide={windowSize.current[0]/5} cursor={cursor} websocket={sendJsonMessage} color={pixel} className="canvas"/>
                    </div>
                    <div className="flex my-2 bg-[#686060] rounded-2xl" id="palette">
                        <Scrollbar pixel={pixel} click={setPixel}></Scrollbar>
                    </div>
                    <div className="relative bg-[#686060] w-full flex flex-col items-center justify-evenly flex-grow rounded-t-2xl">
                        <button onClick={()=>setEnabled(true)} className="absolute top-0 left-0 text-white p-2">
                            <InformationCircleIcon className="h-10 aspect-square" />
                        </button>
                        <button id="map" onClick={()=>{sendJsonMessage({req: "bigCursor"})}} className="absolute top-0 right-0 text-white p-2">
                            <MapPinIcon className="h-10 aspect-square" />
                        </button>
                        <div id="joystick" disabled>
                            <HomeJoystick websocket={sendJsonMessage} cursor={cursor} color={pixel} pixelArt={continuous}></HomeJoystick>
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
