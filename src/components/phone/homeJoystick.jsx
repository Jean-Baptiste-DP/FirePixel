import { Joystick } from 'react-joystick-component';



function handleStop(event) {

  //console.log(event)
}


export default function HomeJoystick({websocket}) {

  function handleMove(event) {
    var {x,y} = event;
    x = parseInt(x*5);
    y = parseInt(y*5);
    websocket(
      {
        req : 'move',
        x : x,
        y : y
      });
      console.log("Msg sent to back : " , JSON.stringify({req : 'move',
      x : x,
      y : y}))
      
  }

  return (
    <>
      <Joystick baseImage="joystick_smaller.png" 
                throttle={1000} 
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