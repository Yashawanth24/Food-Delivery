import { useEffect, useState } from "react"
const UseonlineStauts=()=>{
    const [onlineStauts,setOnlineStatus]=useState(true);
    useEffect(()=>{
    window.addEventListener("offline",()=>{
  setOnlineStatus(false);
    })
    window.addEventListener("Online",()=>{
        setOnlineStatus(true);
    })
    }, [] )
    return onlineStauts;
}
export default UseonlineStauts;