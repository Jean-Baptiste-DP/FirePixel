import { Joystick } from 'react-joystick-component';



function handleStop(event) {

  //console.log(event)
}


export default function HomeJoystick({websocket}) {

  function handleMove(event) {
    var {x,y} = event;
    websocket(
      {
        req : 'move',
        x : x*2,
        y : y*2
      });
      console.log("Msg sent to back : " , JSON.stringify({req : 'move',
      x : x,
      y : y}))
      
  }

  return (
    <>
      <Joystick baseImage="joystick_smaller.png" 
                throttle={200}
                size={200} 
                stickSize={50} 
                baseColor="white" 
                stickColor="black" 
                move={handleMove} 
                stop={handleStop}>

      </Joystick>
    </>
  )
}