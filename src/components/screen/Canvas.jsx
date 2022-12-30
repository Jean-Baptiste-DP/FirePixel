import React from 'react';
import useCanvas from '../../hook/useCanvas';

const colorList = ['#10B981', '#4ADE80', '#D9F99D', '#FDE047', '#F59E0B', '#EF4444', '#FB7185', '#67E8F9', '#0EA5E9', '#A8B4FC', '#A855F7', '#92400E', '#000000', '#94A3B8', '#E2E8F0', '#FFFFFF'];

export default function Canvas({ grid, newPixel, squareSide}) {
    
    function draw_pixel(ctx, x, y, color){
      ctx.fillStyle = colorList[color];
      ctx.fillRect(x*squareSide,y*squareSide,squareSide,squareSide)
    }

    const height = grid.length*squareSide;
    const width = grid[0].length*squareSide;
    const canvasRef = useCanvas(grid, draw_pixel, newPixel)
    
    return <canvas ref={canvasRef} height={height} width={width}/>
}