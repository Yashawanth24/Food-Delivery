import ItemList from './ItemsList';
import React, { useState } from "react";

const RestCategory = ({ data }) => {
    const [showItems,setShowItems]=useState(false)
    const handleClick=()=>{
       setShowItems(!showItems)
    }
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{width:'50%',alignItems:"center" }} className=" mx-auto my-4 p-4">
        {/* Header */}
        <div style={{cursor: "pointer"}} className="flex justify-between items-center mb-6 " onClick={handleClick}>
          <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
          <span>🔽</span>
        </div>
{ showItems && <ItemList items={data.itemCards} />}
      </div>
      </div>
    );
  }
export default RestCategory;