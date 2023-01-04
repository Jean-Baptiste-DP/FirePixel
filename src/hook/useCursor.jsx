import { useEffect, useRef } from "react";



export default function useCursor(grid, draw, ref, cursors, draw_cursor){

    const old_cursors = useRef();
    const height = grid.length;
    const width = grid[0].length;

    function getGrid(x, y){
            if(x>=0 && x<width && y>=0 && y<height){
                return grid[x][y]
            }
            return 0
        }

    function clearCursor(ctx, x,y){
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

        console.log("Cursors")
        console.log(cursors)

        for(let i=0; i<cursors.length; i++){
            if(cursors[i].x!=old_cursors.current[i].x || cursors[i].y!=old_cursors.current[i].y){
                clearCursor(context, old_cursors.current[i].x, old_cursors.current[i].y)
                draw_cursor(context, cursors[i].y, height-1-cursors[i].x, cursors[i].id)
                draw(context, cursors[i].y, height-1-cursors[i].x, grid[cursors[i].x][cursors[i].y])
            }
            else if(cursors[i].used && !old_cursors.current[i].used){
                draw_cursor(context, cursors[i].y, height-1-cursors[i].x, cursors[i].id)
            }else if(!cursors[i].used && old_cursors.current[i].used){
                clearCursor(context, old_cursors.current[i].x, old_cursors.current[i].y)
            }else{
                console.log("No change in Cursors")
            }
        }
        old_cursors.current = cursors
    },[cursors])
}