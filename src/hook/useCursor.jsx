import { useEffect, useRef } from "react";



export default function useCursor(grid, draw, ref, cursors, draw_cursor){

    const old_cursors = useRef();
    const height = grid.length;
    const width = grid[0].length;

    function getGrid(x, y){
            if(x>=0 && x<height && y>=0 && y<width){
                return grid[x][y]
            }
            return 12
        }

    function clearCursor(ctx, x, y, big=false){
        draw(ctx, y, height-1-x, getGrid(x,y))
        draw(ctx, y, height-x, getGrid(x-1,y))
        draw(ctx, y, height-2-x, getGrid(x+1,y))
        draw(ctx, y, height-3-x, getGrid(x+2,y))
        draw(ctx, y, height+1-x, getGrid(x-2,y))
        draw(ctx, y+1, height-1-x, getGrid(x,y+1))
        draw(ctx, y+1, height-x, getGrid(x-1,y+1))
        draw(ctx, y+1, height-2-x, getGrid(x+1,y+1))
        draw(ctx, y-1, height-1-x, getGrid(x,y-1))
        draw(ctx, y-1, height-x, getGrid(x-1,y-1))
        draw(ctx, y-1, height-2-x, getGrid(x+1,y-1))
        draw(ctx, y-2, height-1-x, getGrid(x,y-2))
        draw(ctx, y+2, height-1-x, getGrid(x,y+2))
        if(big){
            draw(ctx, y+3, height-1-x, getGrid(x,y+3))
            draw(ctx, y+2, height-2-x, getGrid(x+1,y+2))
            draw(ctx, y+1, height-3-x, getGrid(x+2,y+1))
            draw(ctx, y, height-4-x, getGrid(x+3,y))
            draw(ctx, y-1, height-3-x, getGrid(x+2,y-1))
            draw(ctx, y-2, height-2-x, getGrid(x+1,y-2))
            draw(ctx, y-3, height-1-x, getGrid(x,y-3))
            draw(ctx, y-2, height-x, getGrid(x-1,y-2))
            draw(ctx, y-1, height+1-x, getGrid(x-2,y-1))
            draw(ctx, y, height+2-x, getGrid(x-3,y))
            draw(ctx, y+1, height+1-x, getGrid(x-2,y+1))
            draw(ctx, y+2, height-x, getGrid(x-1,y+2))

            draw(ctx, y+3, height-(x+2), getGrid(x+1,y+3))
            draw(ctx, y+2, height-(x+3), getGrid(x+2,y+2))
            draw(ctx, y+1, height-(x+4), getGrid(x+3,y+1))
            draw(ctx, y+3, height-(x), getGrid(x-1,y+3))
            draw(ctx, y+2, height-(x-1), getGrid(x-2,y+2))
            draw(ctx, y+1, height-(x-2), getGrid(x-3,y+1))
            draw(ctx, y-3, height-(x), getGrid(x-1,y-3))
            draw(ctx, y-2, height-(x-1), getGrid(x-2,y-2))
            draw(ctx, y-1, height-(x-2), getGrid(x-3,y-1))
            draw(ctx, y-3, height-(x+2), getGrid(x+1,y-3))
            draw(ctx, y-2, height-(x+3), getGrid(x+2,y-2))
            draw(ctx, y-1, height-(x+4), getGrid(x+3,y-1))
            
            draw(ctx, y+3, height-(x+3), getGrid(x+2,y+3))
            draw(ctx, y+3, height-(x+4), getGrid(x+3,y+3))
            draw(ctx, y+2, height-(x+4), getGrid(x+3,y+2))
            draw(ctx, y-3, height-(x+3), getGrid(x+2,y-3))
            draw(ctx, y-3, height-(x+4), getGrid(x+3,y-3))
            draw(ctx, y-2, height-(x+4), getGrid(x+3,y-2))
            draw(ctx, y-3, height-(x-1), getGrid(x-2,y-3))
            draw(ctx, y-3, height-(x-2), getGrid(x-3,y-3))
            draw(ctx, y-2, height-(x-2), getGrid(x-3,y-2))
            draw(ctx, y+3, height-(x-1), getGrid(x-2,y+3))
            draw(ctx, y+3, height-(x-2), getGrid(x-3,y+3))
            draw(ctx, y+2, height-(x-2), getGrid(x-3,y+2))
        }
    }

    useEffect(()=>{
            old_cursors.current = cursors;
        }, [])

    useEffect(()=>{
        const canvas = ref.current
        const context = canvas.getContext('2d')


        for(let i=0; i<cursors.length; i++){
            if(cursors[i].used){
                draw_cursor(context,cursors[i].y,height-1-cursors[i].x,cursors[i].id)
            }
        }
    },[])

    useEffect(()=>{
        const canvas = ref.current
        const context = canvas.getContext('2d')
        
        for(let i=0; i<cursors.length; i++){
            
            if(cursors[i].x!=old_cursors.current[i].x || cursors[i].y!=old_cursors.current[i].y || cursors[i].big!=old_cursors.current[i].big){
                clearCursor(context, old_cursors.current[i].x, old_cursors.current[i].y, old_cursors.current[i].big)
                draw_cursor(context, cursors[i].y, height-1-cursors[i].x, cursors[i].id, cursors[i].big)
                draw(context, cursors[i].y, height-1-cursors[i].x < height ? height-1-cursors[i].x : height , grid[cursors[i].x][cursors[i].y])
            }
            else if(cursors[i].used && !old_cursors.current[i].used){
                draw_cursor(context, cursors[i].y, height-1-cursors[i].x, cursors[i].id, cursors[i].big)
            }else if(!cursors[i].used && old_cursors.current[i].used){
                clearCursor(context, old_cursors.current[i].x, old_cursors.current[i].y, old_cursors.current[i].big)
            }
        }
        old_cursors.current = cursors
    },[cursors])
}