import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import useRestauranstMenu from './useRestaurantMenu';
import RestCategory from './ResCategory';

const ResMenu=()=>{
    const {resId}=useParams();
    const resInfo=useRestauranstMenu(resId);
    // console.log(resInfo);
    return  resInfo===null ? (<Shimmer/>) : (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl" >{resInfo?.name}</h1>
        <h5 className="font-bold ">{resInfo?.cuisines} -{ resInfo?.costForTwoMessage}</h5>
 {resInfo?.categories.map((category)=><RestCategory key={category?.card?.card.title} data={category?.card?.card}/>)}
     </div>
    );

}
export default ResMenu;