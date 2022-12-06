import { Joystick } from 'react-joystick-component';

function handleMove(event) {
  var {x,y} = event;
  x = parseInt(x*5);
  y = parseInt(y*5);
  console.log(x,y);
}

function handleStop(event) {

  console.log(event)
}


export default function HomeJoystick() {


  return (
    <>
      <Joystick size={100} baseColor="red" stickColor="blue" move={handleMove} stop={handleStop}></Joystick>
    </>
  )
}