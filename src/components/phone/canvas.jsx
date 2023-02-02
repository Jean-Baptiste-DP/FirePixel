import React from 'react';;
import usePixels from '../../hook/usePixelsPhone';
import useCursor from '../../hook/useCursorPhone';

const colorList = ['#10B981', '#4ADE80', '#D9F99D', '#FDE047', '#F59E0B', '#EF4444', '#FB7185', '#67E8F9', '#0EA5E9', '#A8B4FC', '#A855F7', '#92400E', '#000000', '#94A3B8', '#E2E8F0', '#FFFFFF'];





export default function PhoneCanvas({ grid, newPixel, squareSide, cursor,websocket, color}) {
  
    function draw_pixel(ctx, x, y, color,int){
      int='' //remove to show number grid
      ctx.fillStyle = colorList[color];
      ctx.fillRect(x*squareSide,y*squareSide,squareSide,squareSide)
      ctx.fillStyle = colorList[10]
      ctx.font = "30px sans-serif"
      ctx.textAlign=  "center" 
      ctx.fillText(int,(x+0.5)*squareSide,(y+0.5)*squareSide)
      ctx.restore()
    }

    function draw_cursor(ctx, cursor){

      //draw grid lines
      ctx.lineWidth = 5;
      ctx.strokeStyle = colorList[12];

      ctx.beginPath();

      for (let i=1; i<5; i++) {

      ctx.moveTo(i*squareSide,0);
      ctx.lineTo(i*squareSide,5*squareSide);
      ctx.moveTo(0,i*squareSide);
      ctx.lineTo(5*squareSide,i*squareSide);

      }

      ctx.stroke();

      //draw cursor
      ctx.lineWidth = 20;
      ctx.strokeStyle = colorList[cursor.id];
      ctx.strokeRect(2*squareSide,2*squareSide,squareSide,squareSide)
      ctx.lineWidth = 2;
      ctx.strokeStyle = colorList[12];
      ctx.strokeRect(2*squareSide-10,2*squareSide-10,squareSide+20,squareSide+20)
      ctx.strokeRect(2*squareSide+10,2*squareSide+10,squareSide-20,squareSide-20)

      ctx.restore()

    }


    const height = 5*squareSide;
    const width = 5*squareSide;
    const canvasRef = usePixels(grid, draw_pixel, newPixel,cursor)

    function canvasOnClick(event){
      let x=Math.trunc(event.clientX/squareSide)-2;
      let y=-(Math.trunc(event.clientY/squareSide)-2);
      // websocket(
      //   {
      //     req : 'move',
      //     x : x,
      //     y : y
      //   });

        websocket(
         {
            req : 'chgColor',
            color : color,
            x : x ,
            y : y >= -2 ? y : -2  // fix simple à bug : rayon du click intersepte canvas alors que centre du click est en dehors.
         });



    }

    useCursor(canvasRef, draw_cursor, cursor, newPixel)
    
    return <canvas ref={canvasRef} height={height} width={width} onClick={canvasOnClick}/>
}