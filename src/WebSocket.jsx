import { useState } from 'react';
import {useEffect} from 'react';
import useWebSocket from 'react-use-websocket';
import { useLocation } from 'react-router-dom'
import { getGrid } from './api';
import { API_URL } from '../env';

export default function WebSocket({Component,type, height, width}){
    const wsUrl = "ws://"+API_URL
    const { sendJsonMessage } = useWebSocket(wsUrl,{onMessage:onReceivedSocket});

    // --- Variables ---

    //Grid

    let gridHeight = height;
    let gridWidth = width;
    // let gridHeight = 100;
    // let gridWidth = 100;
    const nbPlayerMax = 16 // 16 est le nombre de personnes pouvant jouer en simultané, doit être changé si besoin
    const [grid, changeGrid] = useState([])

    // var pseudo_grid = new Array(gridHeight);

    // for (var i = 0; i < gridHeight; i++) {
    //     pseudo_grid[i] = new Array(gridWidth);
    //     for(var j=0; j< gridWidth; j++){
    //         pseudo_grid[i][j]=15;
    //     }
    // }

    // const [grid, changeGrid] = useState(pseudo_grid)

    // load grid from back
    

    // Cursor


    let pseudo_cursor;

    if(type=="screen"){
        pseudo_cursor = new Array(nbPlayerMax)
        for(let i=0;i<nbPlayerMax;i++){
            pseudo_cursor[i] = {x:0,y:0,id:-1,used:false, big: false}
        }
    }else{
        pseudo_cursor={x:0,y:0,id:-1}
    }

    const [cursor, setCursor] = useState(pseudo_cursor);

    //Last changed pixel

    const [lastChangedPixel, chglastPixel] = useState({x:0, y:0, color: -1})

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
                    console.log("Update message sent", "Screen id : " + screenId)
                },45000
            )
        }
    };

    // --- Connection ---
    const location = useLocation();


    useEffect(() => {

        const token = location.state ? location.state.token : "defautPassword";

      sendJsonMessage({
        req : "connection_"+type,
        type: type,
        height : gridHeight,
        width : gridWidth,
        token : token
      })
    },[]);


    function onReceivedSocket(message){
        let data = JSON.parse(message.data)
        if(data.req && data.req=="move" && data.x!=undefined && data.y!= undefined && data.id!=undefined){
            if(type=="screen"){
                let pseudo_cursor=[...cursor]
                pseudo_cursor[data.id] = {x:data.y, y:data.x, id:data.id, used:true, big: false}
                setCursor(pseudo_cursor)
            }else{
                setCursor({x:data.x, y:data.y,id:data.id})
            }
        }else if(data.req && data.req=="chgColor" && data.x!=undefined && data.y!= undefined && data.color!=undefined){
            let pseudo_grid = [...grid]
            pseudo_grid[data.y][data.x]=data.color
            changeGrid(pseudo_grid)
            chglastPixel({x:data.x, y:data.y, color:data.color})
        }else if (data.req && data.req == "connection_screen" && type=="screen") {
            setScreenId(data.id)
            getGrid().then((response)=>changeGrid(response))
        }else if(data?.req == "connection_phone" && type=="phone"){
            setCursor({id: data.id, x: data.x, y:data.y})
            getGrid().then((response)=>changeGrid(response))
        }else if(data?.req == "connection_phone" && type=="screen"){
            let pseudo_cursor=[...cursor]
            pseudo_cursor[data.id] = {x:data.y, y:data.x, id:data.id, used:true, big: false}
            setCursor(pseudo_cursor)
        }
        else if(data?.req == "bigCursor" && data.id!=undefined){
            if(type=="screen"){
                let pseudo_cursor=[...cursor]
                pseudo_cursor[data.id] = {...pseudo_cursor[data.id], big: !pseudo_cursor[data.id].big}
                setCursor(pseudo_cursor)
            }
        }else{
            console.log(data)
        }
    }

    if(grid.length==0){
        return (
            <p>Loading ...</p>
        )
    }else{
        return(
            <Component grid={grid} cursor={cursor} sendJsonMessage={sendJsonMessage} newPixel={lastChangedPixel}/>
        )
    }
    
}