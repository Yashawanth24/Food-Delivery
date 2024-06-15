import { useEffect, useState } from "react"
import { Menu_API } from './constants';
const useRestauranstMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null)
   
   useEffect(()=>{
    fetchData();
    }, []);

    const  fetchData=async ()=>{
        const data = await fetch(Menu_API+resId);
        const Resjson=await data.json();
        const {name, cuisines,costForTwoMessage}=Resjson?.data?.cards[2]?.card?.card?.info;
        const{itemCards}=Resjson?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        const categories = Resjson?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        console.log(categories)
        setResInfo({
           name,cuisines,costForTwoMessage,itemCards,categories});  
    };
    return resInfo;
    
}
export default useRestauranstMenu;