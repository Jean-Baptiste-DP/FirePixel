import React from 'react';
import useCanvas from '../../hook/useCanvas';

export default function Canvas({ grid, newPixel, height, width }) {
    
    function draw(ctx, x, y, color){
      console.log("Draw at position ",x,", ", y, " the color ",color)
    }

    const canvasRef = useCanvas(grid, draw, newPixel)
    
    return <canvas ref={canvasRef} height={height} width={width}/>
}