import { API_URL } from "../env"

export async function getGrid(){
    return fetch("http://"+API_URL+"/grid").then((response)=>
        response.json()
    )
}