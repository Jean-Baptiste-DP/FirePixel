import { Joystick } from 'react-joystick-component';


function handleMove(event) {
  console.log(event)
}

function handleStop(event) {
  console.log(event)
}


export default function HomeJoystick() {


  return (
    <>
      <Joystick size={100} sticky={true} baseColor="red" stickColor="blue" move={handleMove} stop={handleStop}></Joystick>
    </>
  )
}