import React from "react";
import { CDN_URl } from './constants';
import { useDispatch } from "react-redux";
import { addItems } from './cartSlice';

const ItemList = ({ items, showAddButton=true }) => {
  const dispatch = useDispatch();
  const handleAddItems=(item)=>{
    dispatch(addItems(item));
  };
  if(!items){
    return <div>No Items In cart</div>;
  }
  return (
    <div>
      {items?.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-300 relative">
          <div className="flex items-center justify-between">
            <div className="py-2">
              <div>
                <span className="text-xl font-bold">{item.card.info.name}</span>
                <span className="text-lg font-bold font-serif"> - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="relative">
              <img
                src={CDN_URl + item.card.info.imageId}
                alt={item.card.info.name}
                style={{
                  width: "156px",
                  height: '144px',
                  objectFit: 'cover',
                }}
              />
              {showAddButton && <button style={{background:"black",  color:"white", margin:"2px",padding:"2px"}} 
              onClick={()=>handleAddItems(item)}>
                Add+
              </button>}
              
            </div>
          </div>
          <hr className="my-2 border-b-2 border-gray-300" />
        </div>
      ))}
    </div>
  );
};

export default ItemList;