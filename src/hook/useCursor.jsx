import { useEffect, useRef } from "react";

export default function useCursor(grid, draw, ref, cursors, draw_cursor){

    let old_cursors = [...cursors]

    const height = grid.length;

    function clearCursor(ctx, x,y){
        draw(ctx, y, height-1-x, grid[x][y])
        draw(ctx, y, height-x, grid[x-1][y])
        draw(ctx, y, height-2-x, grid[x+1][y])
        draw(ctx, y, height-3-x, grid[x+2][y])
        draw(ctx, y, height+1-x, grid[x-2][y])
        draw(ctx, y+1, height-1-x, grid[x][y+1])
        draw(ctx, y+1, height-x, grid[x-1][y+1])
        draw(ctx, y+1, height-2-x, grid[x+1][y+1])
        draw(ctx, y-1, height-1-x, grid[x][y-1])
        draw(ctx, y-1, height-x, grid[x-1][y-1])
        draw(ctx, y-1, height-2-x, grid[x+1][y-1])
        draw(ctx, y-2, height-1-x, grid[x][y-2])
        draw(ctx, y+2, height-1-x, grid[x][y+2])
    }

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
            if(cursors[i].x!=old_cursors[i].x || cursors[i].y!=old_cursors[i].y){
                clearCursor(context, old_cursors[i].x, old_cursors[i].y)
                draw_cursor(context, cursors[i].y, height-1-cursors[i].x, cursors[i].id)
            }
            else if(cursors[i].used && !old_cursors[i].used){
                draw_cursor(context, cursors[i].y, height-1-cursors[i].x, cursors[i].id)
            }else if(!cursors[i].used && old_cursors[i].used){
                clearCursor(context, old_cursors[i].x, old_cursors[i].y)
            }
        }
        old_cursors = [...cursors]
    },[cursors])
}