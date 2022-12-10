import { Joystick } from 'react-joystick-component';



function handleStop(event) {

  console.log(event)
}


export default function HomeJoystick({websocket}) {

  function handleMove(event) {
    var {x,y} = event;
    x = parseInt(x*5);
    y = parseInt(y*5);
    // websocket(
    //   {
    //     x:x,
    //     y:y
    //   }
    //   )
    console.log(x,"/",y)
  }

  return (
    <>
      <Joystick size={100} baseColor="white" stickColor="black" move={handleMove} stop={handleStop}></Joystick>
    </>
  )
}