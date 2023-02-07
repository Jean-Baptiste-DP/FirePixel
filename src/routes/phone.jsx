import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import HomeJoystick from "../components/phone/homeJoystick";
import Switch from '../components/phone/switch';
import React, { useState, useRef } from "react";
import PhoneCanvas from '../components/phone/canvas';
import Scrollbar from "../components/phone/scrollbar";

const regles =
    "Dessinez ce que vous voulez sur l'écran! Dans l'onglet color, choissisez une couleur avec laquelle dessiner,puis déplacez le joystick pour appliquer la couleur. Si vous avez décidé de faire du PixelArt, 'Apply' vous permet de placer les pixels un à un.";

export default function Phone({ grid, cursor, sendJsonMessage, newPixel }) {
 

    const [helpState, setHelpState] = useState({
        Display: "-z-10 opacity-0",
        State: "off",
    });

    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const [pixel, setPixel] = useState(0);
    const [continuous, setContinuous] = useState(false);

    //   function onReceivedSocket(message){
    //     let playerModif = JSON.parse(message.data)
    //     setPlayer(prevState => ({...prevState,id : playerModif.id, Color : colordict[playerModif.id],Name : namedict[playerModif.id] }))
    //     console.log('Message sent from Back to player',playerModif)
    // }

    // const { sendJsonMessage, lastJsonMessage, lastMessage } = useWebSocket(socketUrl,{onMessage:onReceivedSocket});

    function applyOnClick(websocket, pixel) {
        console.log(pixel);
        websocket({
            req: "chgColor",
            color: pixel,
        });
    }


    //console.log('Received from WS component',cursor)

    function helpOnClick() {
        if (helpState.Display != "-z-10 opacity-0") {
            setHelpState((prevhelpState) => ({
                ...prevhelpState,
                Display: "-z-10 opacity-0",
                State: "off",
            }));
        } else {
            setHelpState((prevhelpState) => ({
                ...prevhelpState,
                Display: "z-20",
                State: "on",
            }));
        }
    }

    function colorOnClick() {
        if (paletteState.Display != "-z-10 opacity-0") {
            setPaletteState((prevPaletteState) => ({
                ...prevPaletteState,
                Display: "-z-10 opacity-0",
                State: "off",
            }));
        } else {
            setPaletteState((prevPaletteState) => ({
                ...prevPaletteState,
                Display: "z-20",
                State: "on",
            }));
        }
    }

    function togglePixelArt() {
        if (pixelArt == false) {
            setPixelArt(true);
        } else {
            setPixelArt(false);
        }
    }

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

            <div className="block sm:hidden">
                {/* HELP */}
                {/* <div
                    className={`grid grid-cols-1 place-items-center absolute h-full w-full ${helpState.Display} transition duration-300 `}
                >
                    <button
                        className="absolute h-full w-full bg-gray-300 opacity-70 "
                        onClick={helpOnClick}
                    ></button>
                    <button
                        className="relative h-3/4 w-2/3  bg-dark rounded-lg p-4 "
                        onClick={helpOnClick}
                    >
                        <p className="text-white text-xl">{regles}</p>
                    </button>
                </div> */}

                {/* PALETTE */}
                {/* <div
                    className={`grid place-items-center  absolute h-full w-full ${paletteState.Display} transition duration-300 `}
                >
                    <button
                        className="absolute h-full w-full bg-gray-300 opacity-70 "
                        onClick={colorOnClick}
                    ></button>
                    <div className="m-12" />
                    <div className="relative grid grid-rows-4 h-1/2 w-[92%] place-items-center  bg-dark rounded-lg p-4 gap-2 -translate-y-1 drop-shadow-lg">
                        <div className="grid grid-cols-5 gap-4">
                            {rows.slice(0, 5)}
                        </div>
                        <div className="grid grid-cols-6 gap-4">
                            {rows.slice(5, 11)}
                        </div>
                        <div className="grid grid-cols-5 gap-4">
                            {rows.slice(11, 16)}
                        </div>
                        <div className="grid grid-cols-4 place-items-center">
                            <div className="text-xl font-extrabold text-white">
                                Color Selected:
                            </div>
                            <Godet color={pixel} />
                            <div className="text-xl font-extrabold text-white">
                                PixelArt:
                            </div>
                            <Godet
                                pixelArt={pixelArt}
                                onClick={togglePixelArt}
                            />
                        </div>
                    </div>
                </div> */}

                {/* <div className="bg-secondary h-screen">
                    <div className="h-1/2 grid grid-cols-1 place-items-center">
                        <h1 className="text-3xl font-extrabold">Canvas</h1>
                    </div>
                    <div className="my-1 py-2 flex bg-primary rounded-lg items-center justify-center">
                        <h1 className="text-xl text-white font-extrabold">
                            {namedict[cursor.id]} Player
                        </h1>
                        // On ne peut pas faire bg-${player}-400 car tailwind n'autorise pas ce genre de syntax,
               il faudra donc créer un dict qui possède le nom de la couleur du joueur et son équivalent tailwind ou un hex
                        <div
                            className={`${
                                colordict[cursor.id]
                            } mx-2 rounded-lg w-8 h-8 border-black border-2`}
                        ></div>
                    </div>
                    <div className="my-1 grid grid-rows-1 bg-primary rounded-lg h-1/3 place-items-center">
                        <HomeJoystick
                            websocket={sendJsonMessage}
                            color={pixel}
                            pixelArt={pixelArt}
                        />
                    </div>
                    <div className="h-[8%] p-2 grid grid-cols-3 place-items-center gap-5 relative z-20 bg-primary rounded-lg">
                        <Button
                            text="Help"
                            onClick={helpOnClick}
                            state={helpState.State}
                        />
                        <Button
                            text="Color"
                            onClick={colorOnClick}
                            state={paletteState.State}
                        />
                        <Button
                            text="Apply"
                            onClick={() => applyOnClick(sendJsonMessage, pixel)}
                        />
                    </div>
                </div> */}
            <div className="flex flex-col h-screen  bg-[#454141] justify-start">
                <div className="w-full aspect-square bg-gray-200">
                    <PhoneCanvas grid={grid} newPixel={newPixel} squareSide={windowSize.current[0]/5} cursor={cursor} websocket={sendJsonMessage} color={pixel}/>
                </div>
                <div className=" flex-col -outline -outline-red-500">
                    <div className="flex my-2 bg-[#686060] rounded-2xl">
                        <div className="absolute pointer-events-none bg-gradient-to-l from-transparent to-gray-800 h-16 w-7 rounded-l-2xl "/>
                        <Scrollbar pixel={pixel} click={setPixel}></Scrollbar>
                        <div className="absolute right-0 pointer-events-none bg-gradient-to-r from-transparent to-gray-800 h-16 w-7 rounded-r-2xl "/>
                    </div>
                </div>
                <div className=" bg-[#686060] w-full flex flex-col flex-grow rounded-t-2xl justify-self-center place-self-center -outline outline-emerald-500 justify-evenly place-items-center">
                    <div className="">
                        <HomeJoystick websocket={sendJsonMessage} color= {pixel} pixelArt={continuous}></HomeJoystick>
                    </div>
                    <div className="p-2">
                        <Switch state={continuous} set={setContinuous} />
                    </div>
                    
                </div>
            </div>

            </div>
        </>
    );
}
