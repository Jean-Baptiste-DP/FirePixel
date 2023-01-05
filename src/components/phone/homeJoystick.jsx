import BetterJoystick from "./betterJoystick";

export default function HomeJoystick({websocket,color,pixelArt}) {

  var x = 0;
  var y = 0;

  function handleMove(event) {
    
    x+= event.x;
    y+= event.y;

    if(Math.abs(x)>=1 || Math.abs(y)>=1){

      websocket(
            {
              req : 'move',
              x : Math.trunc(x),
              y : Math.trunc(y)
            });

      x= 0
      y= 0

      if (pixelArt == true) {
        websocket(
                {
                  req : 'chgColor',
                  color : color
                });
      }
    }
  }


  return (
    <BetterJoystick baseImage="joystick_smaller.png" 
              throttle={50}
              size={200} 
              stickSize={50} 
              baseColor="white" 
              stickColor="black"
              move={handleMove}
              >

    </BetterJoystick>
  )
}