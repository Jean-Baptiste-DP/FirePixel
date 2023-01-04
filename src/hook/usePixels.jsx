import { useRef, useEffect } from "react";

export default function usePixels(grid, draw, newPixel){
    const canvasRef = useRef(null)

    const height = grid.length;
    const width = grid[0].length;

    useEffect(() => {
      
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      
      for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            draw(context, j, height-1-i, grid[i][j])
        }
      }
    }, [])

    useEffect(()=> {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        draw(context, newPixel.x, height-1-newPixel.y, newPixel.color)
    }, [newPixel])

    return canvasRef
}