import { useRef, useContext } from "react";
import { ColorsContext } from "../../colorsContext";
import BetterJoystick from "./betterJoystick";

export default function HomeJoystick({websocket,color,pixelArt, cursor}) {
    const colors = useContext(ColorsContext)

  const x = useRef(0.5);
  const y = useRef(0.5);
  const baseThrottle = 50;
  const frontThrottle = 20;
  const factor = frontThrottle / baseThrottle;

  function handleMove(event) {
    
    x.current+= factor*event.x;
    y.current+= factor*event.y;

    if(Math.abs(x.current)>=1 || Math.abs(y.current)>=1){

      let x_send = Math.trunc(x.current)
      let y_send = Math.trunc(y.current)

      websocket(
            {
              req : 'move',
              x : x_send,
              y : y_send
            });

      x.current = x.current - 2*x_send
      y.current = y.current - 2*y_send

      if (pixelArt == true) {
        websocket(
                {
                  req : 'chgColor',
                  color : color,
                  x:0,
                  y:0
                });
      }
    }
  }


  return (
    <BetterJoystick baseImage="joystick_smaller.png" 
              throttle={frontThrottle}
              size={200} 
              stickSize={75} 
              baseColor="white" 
              stickColor={cursor.id == -1 ? 'black' : colors[cursor.id].hexa}
              move={handleMove}
              >

    </BetterJoystick>
  )
}