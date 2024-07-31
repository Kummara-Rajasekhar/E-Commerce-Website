import React from 'react'
import { isValidElement } from 'react'

const ShopCategory = ({filterItem,setItem,menuItems,setProducts,selectedcatedory}) => {
  return (
    <>
    <div className='widget-header'>
        <h5 className="ms-2">
            All Categories
        </h5>

    </div>
    <div>
        <button onClick={()=>setProducts(Data)} className={`m-2 ${selectedCategory==="All"?"bg-warning":""}`}>All</button>
        {
            menuItems.map((val,id)=>{
                return(
                    <button className={`m-2 ${selectedcatedory===val ? "bg-warning":""}`} key={id} onClick={()=> filterItem(val)}>
                       {isValidElement}
                    </button>
                )
            })
        }
    </div>
    </>
  )
}

export default ShopCategory