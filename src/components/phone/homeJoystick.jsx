import { Joystick } from 'react-joystick-component';


const moveX = {'RIGHT' : 1, 'LEFT' : -1, 'BACKWARD' :0, 'FORWARD' : 0};
const moveY = {'FORWARD' : 1, 'BACKWARD' : -1, 'LEFT' : 0, 'RIGHT' : 0};



export default function HomeJoystick({websocket,color}) {



  function handleMove(event) {
    var {x,y} = event;
    websocket(
      {
        req : 'move',
        x : x*2,
        y : y*2
      });
      websocket(
        {
          req : 'chgColor',
          color : color
        });
      console.log("Msg sent to back : " , JSON.stringify({req : 'move',
      x : x,
      y : y}))

  }


  /*let t = 100;

  function handleMove(event) {
    var {x,y,distance,direction} = event;
    t = 420-4*parseInt(distance);
    websocket(
      {
        req : 'move',
        x : moveX[direction],
        y : moveY[direction]
      });
      websocket(
        {
          req : 'chgColor',
          color : color
        });
      console.log("Msg sent to back : " , JSON.stringify({req : 'move',
      x : x,
      y : y}))
      console.log('throttle:',t,'direction:',direction)
      
  }*/


  return (
    <>
      <Joystick baseImage="joystick_smaller.png" 
                throttle={50}
                size={200} 
                stickSize={50} 
                baseColor="white" 
                stickColor="black" 
                //start={handleStart}
                move={handleMove} 
                //stop={handleStop}
                >

      </Joystick>
    </>
  )
}