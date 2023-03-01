import { useState } from 'react';
import {useEffect, useRef} from 'react';
import useWebSocket from 'react-use-websocket';

export default function WebSocket({Component,type}){
    const wsUrl = "ws://localhost:10406"
    const { sendJsonMessage } = useWebSocket(wsUrl,{onMessage:onReceivedSocket});

    // --- Variables ---

    //Grid

    const gridHeight = 100
    const gridWidth = 100
    const nbPlayerMax = 16 // 16 est le nombre de personnes pouvant jouer en simultané, doit être changé si besoin

    var pseudo_grid = new Array(gridHeight);

    for (var i = 0; i < gridHeight; i++) {
        pseudo_grid[i] = new Array(gridWidth);
        for(var j=0; j< gridWidth; j++){
            pseudo_grid[i][j]=15;
        }
    }

    const [grid, changeGrid] = useState(pseudo_grid)


    // Cursor


    let pseudo_cursor;

    if(type=="screen"){
        pseudo_cursor = new Array(nbPlayerMax)
        for(let i=0;i<nbPlayerMax;i++){
            pseudo_cursor[i] = {x:0,y:0,id:-1,used:false}
        }
    }else{
        pseudo_cursor={x:0,y:0,id:-1}
    }

    const [cursor, setCursor] = useState(pseudo_cursor);

    //Last changed pixel

    const [lastChangedPixel, chglastPixel] = useState({x:0, y:0, color: grid[0][0]})

    // --- Websockets ---

    // --- Screen update messages routine ---
    const [screenId, setScreenId] = useState(-1)

    useEffect(()=>{ let updateRoutine = setupUpdateRoutine(screenId) ;return () => clearInterval(updateRoutine) },[screenId]);

    function setupUpdateRoutine(id){
        if (id != -1) {
            console.log("Update routine setup")
            return setInterval(
                ()=>{
                    sendJsonMessage(
                        {
                            req : "update",
                            id : id
                        }
                    )
                    console.log("Update message sent", "Screen id : " + screenId,)
                },2000
            )
        }
    };

    // --- Connection ---

    useEffect(() => {

      sendJsonMessage({
        req : "connection",
        type: type
      })
  
    },[]);


    function onReceivedSocket(message){
        let data = JSON.parse(message.data)
        if(data.req && data.req=="move" && data.x!=undefined && data.y!= undefined && data.id!=undefined){
            if(type=="screen"){
                let pseudo_cursor=[...cursor]
                pseudo_cursor[data.id] = {x:data.y, y:data.x, id:data.id, used:true}
                setCursor(pseudo_cursor)
            }else{
                setCursor({x:data.x, y:data.y,id:data.id})
            }
        }else if(data.req && data.req=="chgColor" && data.x!=undefined && data.y!= undefined && data.color!=undefined){
            let pseudo_grid = [...grid]
            pseudo_grid[data.y][data.x]=data.color
            changeGrid(pseudo_grid)
            chglastPixel({x:data.x, y:data.y, color:data.color})
        }else if (data.req && data.req == "connection") {
            setScreenId(data.id)                  
        }
    }

    return(
        <Component grid={grid} cursor={cursor} sendJsonMessage={sendJsonMessage} newPixel={lastChangedPixel}/>
    )
}