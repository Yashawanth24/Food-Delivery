
export const ResCard = ({resData})=>{
const{cloudinaryImageId,name,cuisines,avgRating,sla,
  costForTwo}=resData.info;
  
return (
    <div className="m-4 p-4 w-48 h-80 flex-wrap bg-stone-200">
      <img className="rounded-lg w-52 h-28 "
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
    <div  className="flex-wrap py-2">
    <h5 className="font-bold py-1">{name}</h5> 
    <h5 className="truncate font-medium py-1"> {cuisines+","}</h5> 
    <h5 className="font-medium py-1" >{avgRating}</h5>
    <h5 className="font-medium py-1">{sla.slaString}</h5>
   </div>
  </div>
  );
};



