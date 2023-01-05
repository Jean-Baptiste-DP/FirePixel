import { Joystick } from 'react-joystick-component';

export default function HomeJoystick({websocket,color,pixelArt}) {

  var x = 0.5;
  var y = 0.5;

  function handleMove(event) {
    var d_x = event.x;
    var d_y = event.y;
    
    x+= d_x*2;
    y+= d_y*2;

    if(Math.abs(x)>=1 || Math.abs(y)>=1){
      var x_int = Math.trunc(x)
      var y_int = Math.trunc(y)

      x-= x_int
      y-= y_int

      websocket(
            {
              req : 'move',
              x : x_int,
              y : y_int
            });
        
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
    <>
      <Joystick baseImage="joystick_smaller.png" 
                throttle={50}
                size={200} 
                stickSize={50} 
                baseColor="white" 
                stickColor="black"
                move={handleMove}
                >

      </Joystick>
    </>
  )
}