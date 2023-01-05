import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import HomeJoystick from '../components/phone/homeJoystick';
import Button from '../components/phone/button';
import Godet from '../components/phone/godet'
import React,{useState,useEffect} from 'react';


const colordict = {0:'bg-emerald-500', 1 : 'bg-green-400', 3 : 'bg-yellow-300', 4 : 'bg-amber-500', 2 : 'bg-lime-200', 5 : 'bg-red-500', 6 : 'bg-rose-400', 7 : 'bg-cyan-300', 8 : 'bg-sky-500', 10 : 'bg-purple-500', 9 : 'bg-indigo-300', 11 : 'bg-amber-800', 12 : 'bg-black', 13 : 'bg-slate-400', 14 : 'bg-slate-200', 15 : 'bg-white'};
const namedict = {0:'Emerald', 1 : 'Green', 3 : 'Yellow', 4 : 'Amber', 2 : 'Lime', 5 : 'Red', 6 : 'Rose', 7 : 'Cyan', 8 : 'Sky', 10 : 'Purple', 9 : 'Indigo', 11 : 'Brown', 12 : 'Black', 13 : 'Dark Grey', 14 : 'Light Grey', 15 : 'White'};

export default function Phone({grid,cursor,sendJsonMessage}) {



  const rows = [];
for (let i=0;i<16;i++){
  rows.push(<Godet color={i} onClick={()=>setPixel(i)} key={i}/>)
};

  const [helpState, setHelpState] = useState({Display : '-z-10 opacity-0', State : 'off' });
  const [paletteState,setPaletteState] = useState({Display : '-z-10 opacity-0', State : 'off', Color : 'black' });
  const [pixel,setPixel] = useState(0);
  

//   function onReceivedSocket(message){
//     let playerModif = JSON.parse(message.data)
//     setPlayer(prevState => ({...prevState,id : playerModif.id, Color : colordict[playerModif.id],Name : namedict[playerModif.id] }))
//     console.log('Message sent from Back to player',playerModif)
// }

// const { sendJsonMessage, lastJsonMessage, lastMessage } = useWebSocket(socketUrl,{onMessage:onReceivedSocket});


 function applyOnClick(websocket, pixel){
      console.log(pixel);
        websocket(
          { 
            req : 'chgColor',
            color : pixel,

           }
      )
      };

      //console.log('Received from WS component',cursor)

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

  const regles = "Dessinez ce que vous voulez sur l'écran! Dans l'onglet color, choissisez une couleur avec laquelle dessiner,puis déplacer le joystick pour appliquer la couleur. Si vous avez décidé de faire du PixelArt, appuyer sur 'Apply' pour placer les pixels un à un.";


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
            <div className="h-3/4 w-2/3  bg-dark rounded-lg p-4 ">
              <p className="text-white text-xl">{regles}</p>
            </div>
          </div>

          <div className={`grid place-items-center  absolute h-full w-full ${paletteState.Display} transition duration-300 `}>
            <div className='m-12'/>
            <div className="grid grid-rows-4 h-1/2 w-[92%] place-items-center  bg-dark rounded-lg p-4 gap-2 -translate-y-1 drop-shadow-lg">
              <div className='grid grid-cols-5 gap-4'>
                {rows.slice(0,5)}
              </div>
              <div className='grid grid-cols-6 gap-4'>
              {rows.slice(5,11)}
              </div>
              <div className='grid grid-cols-5 gap-4'>
              {rows.slice(11,16)}
              </div>
              <div className='grid grid-cols-4 place-items-center'>
              <div className='text-xl font-extrabold text-white'>Color Selected:</div>
                <Godet color={pixel}/> 
                <div className='text-xl font-extrabold text-white'>PixelArt:</div>
                <Godet state={true}/>
                
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
                {namedict[cursor.id]} Player
              </h1>
              {/*On ne peut pas faire bg-${player}-400 car tailwind n'autorise pas ce genre de syntax,
               il faudra donc créer un dict qui possède le nom de la couleur du joueur et son équivalent tailwind ou un hex*/}
              <div  className={`${colordict[cursor.id]} mx-2 rounded-lg w-8 h-8 border-black border-2`}>
              </div>
            </div>
            <div className="my-1 grid grid-rows-1 bg-primary rounded-lg h-1/3 place-items-center">
            <HomeJoystick websocket={sendJsonMessage} color={pixel}/>
            </div>
              <div className='h-[8%] p-2 grid grid-cols-3 place-items-center gap-5 relative z-10 bg-primary rounded-lg'>
                <Button text='Help' onClick={helpOnClick} state={helpState.State}/>
                <Button text='Color' onClick={colorOnClick} state = {paletteState.State}/>
                <Button text='Apply' onClick={() => applyOnClick(sendJsonMessage,pixel)}/>
              </div>
            
          </div>
        </div>
      </>
    );
  }