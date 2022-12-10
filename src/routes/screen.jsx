import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import Case from "../components/screen/case"
import useWebSocket from 'react-use-websocket';
import { useState } from 'react';

export default function Screen() {

    const [caseLighted,changeCase]=useState(44)

    let cases=[]
    for(let i=0;i<100;i++){
        cases.push(<Case key={i} enlightCase={caseLighted} case_number={i}/>)
    }

    //Websockets

    // let socket = new WebSocket('ws://localhost:10406');
    // socket.send(JSON.stringify({
    //     type: "screen"
    // }));
    // socket.onmessage = function(str) {
    //     console.log("Someone sent: ", str);
    // };

    function onReceivedSocket(message){
        changeCase(10*(4-lastJsonMessage.y)+4+lastJsonMessage.x)
        console.log(10*(4-lastJsonMessage.y)+4+lastJsonMessage.x)
    }

    const socketUrl = "ws://localhost:10406"

    const { sendJsonMessage, lastJsonMessage } = useWebSocket(socketUrl,{onMessage:onReceivedSocket});
    sendJsonMessage({
        type: "screen"
    })

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
          <div className="w-1/5 bg-primary flex flex-col items-center justify-center">
            coucou
          </div>
          <div className="w-4/5 bg-secondary">
            <div className='grid grid-cols-10 w-80'>

              {cases}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}