import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [token,setToken] = useState("admin");
  return (
    <>
      <div className="flex-col flex p-2">
        <h1>Hello, click phone to play !</h1>

        <div className="flex gap-5 place-items-center">
        <Link to="/phone" className="p-2 bg-slate-200 rounded-md hover:bg-emerald-300">Phone</Link>




        {/* On envoie ce qu'il y a dans le textarea dans le component websocket grace a useLocation() */}
        <Link to="/screen" className="my-5 ml-10 p-2 bg-slate-200 rounded-md hover:bg-emerald-300" state={{token : token}}>Screen</Link>
        <input 
        type="password"
        className="bg-slate-200 text-sm text-gray-400" 
        onChange={e => setToken(e.target.value)} 
        cols={10}
        rows={2}
        defaultValue="12345" 
        onFocus={e =>{if(e.target.value == "12345") { e.target.value =""}}}/>
        </div>
      </div>
    </>
  )
}
