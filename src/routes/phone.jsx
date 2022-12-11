import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import HomeJoystick from '../components/phone/homeJoystick';
import Button from '../components/phone/button';
import Godet from '../components/phone/godet'
import React,{useState} from 'react';
import useWebSocket from 'react-use-websocket';




export default function Phone() {

  const rows = [];
for (let i=0;i<16;i++){
  rows.push(<Godet color={i} onClick={()=>godetOnClick(i)} key={i}/>)
};

  const [helpState, setHelpState] = useState({Display : '-z-10 opacity-0', State : 'off' });
  const [paletteState,setPaletteState] = useState({Display : '-z-10 opacity-0', State : 'off', Color : 'black' });
  const [pixel,setPixel] = useState({position : [0,0], Color : 'black'});
  
  
  function helpOnClick() {
    if (helpState.Display != '-z-10 opacity-0') {
    setHelpState(prevhelpState => ({...prevhelpState,Display : '-z-10 opacity-0', State : 'off'}));
  }
    else {
      setHelpState(prevhelpState => ({...prevhelpState , Display:'z-10',State : 'on'}));
    }
  }

  function colorOnClick() {
    if (paletteState.Display != '-z-10 opacity-0') {
    setPaletteState(prevPaletteState => ({...prevPaletteState,Display : '-z-10 opacity-0', State : 'off'}));
  }
    else {
      setPaletteState(prevPaletteState => ({...prevPaletteState , Display:'z-10',State : 'on'}));
    }
  }

  function applyOnClick() {
    console.log(pixel);
  }

  function godetOnClick(couleur) {

    setPixel(prevPixel => ({...prevPixel,Color : couleur}));
  
  }


  
  const player = {
    Name : 'Blue Player',
    Color : 'bg-sky-400',
  }

  const regles = ' Regles du jeux : Yo tell me what you want what you really really really want';


  // Websockets 
  // let socket = new WebSocket('ws://localhost:10406');
  // socket.send(JSON.stringify({
  //     type: "phone"
  // }));

  // function sendJoystick(x,y){
  //   socket.send(JSON.stringify({
  //       x:x,
  //       y:y
  //   }))
  // }

  const socketUrl = "ws://localhost:10406"

  const { sendJsonMessage } = useWebSocket(socketUrl);
  sendJsonMessage({
        type: "phone"
    })

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
        
        {/* Affichage des blocs qui apparaissent quand on clique sur un bouton */}
        
        <div className="block sm:hidden">

          <div className={`grid grid-cols-1 place-items-center absolute h-full w-full ${helpState.Display} transition duration-300 `}>
            <div className="h-2/3 w-2/3  bg-dark rounded-lg p-4 ">
              <p className="text-white text-xl">{regles}</p>
            </div>
          </div>

          <div className={`grid place-items-center  absolute h-full w-full ${paletteState.Display} transition duration-300 `}>
            <div className='m-12'/>
            <div className="grid grid-rows-3 h-1/2 w-[90%] place-items-center  bg-dark rounded-lg p-4 gap-2 -translate-y-1 drop-shadow-lg">
              <div className='grid grid-cols-5 gap-4'>
                {rows.slice(0,5)}
              </div>
              <div className='grid grid-cols-6 gap-4'>
              {rows.slice(5,11)}
              </div>
              <div className='grid grid-cols-5 gap-4'>
              {rows.slice(11,16)}
              </div>
            </div>
          </div>

          <div className="bg-secondary h-screen">
            <div className="h-1/2 grid grid-cols-1 place-items-center">
              <h1 className="text-3xl font-extrabold">
                Canvas
              </h1>


            </div>
            <div className="my-1 py-2 flex bg-primary rounded-lg items-center justify-center">
              <h1 className="text-xl text-white font-extrabold">
                {player.Name}
              </h1>
              {/*On ne peut pas faire bg-${player}-400 car tailwind n'autorise pas ce genre de syntax,
               il faudra donc créer un dict qui possède le nom de la couleur du joueur et son équivalent tailwind ou un hex*/}
              <div  className={`${player.Color} mx-2 rounded-lg w-8 h-8 border-black border-2`}>
              </div>
            </div>
            <div className="my-1 grid grid-rows-1 bg-primary rounded-lg h-1/3 place-items-center">
            <HomeJoystick websocket={sendJsonMessage}/>
            </div>
              <div className='h-[8%] p-2 grid grid-cols-3 place-items-center gap-5 relative z-10 bg-primary rounded-lg'>
                <Button text='Help' onClick={helpOnClick} state={helpState.State}/>
                <Button text='Color' onClick={colorOnClick} state = {paletteState.State} />
                <Button text='Apply' onClick={applyOnClick}/>
              </div>
            
          </div>
        </div>
      </>
    );
  }