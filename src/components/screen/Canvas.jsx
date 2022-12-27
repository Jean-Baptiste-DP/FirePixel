import React, { useRef, useEffect } from 'react';

export default function Canvas({ height, width}) {
    const canvasRef = useRef(null)
  
    const draw = ctx => {
      ctx.fillStyle = '#ff0000'
      ctx.beginPath()
      ctx.arc(height/2, width/2, 30, 0, Math.PI)
      ctx.fill()
    }
    
    useEffect(() => {
      
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      
      draw(context)
    }, [draw])
    
    return <canvas ref={canvasRef} height={heigth} width={width}/>
}