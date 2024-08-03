import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductDisplay = ({item}) => {

    const {name,id,price,seller,ratingCount,quantity,desc,img}=item;
    const [prequantity,setQuantity]=useState(quantity);
    const [coupon,setCoupon]=useState("");
    const [size,setSize]=useState("Select Size");
    const [color,setColor]=useState("Select Color");
    const handleSizeChanger=(e)=>{
        setSize(e.target.value);
    }
    const handleColorChanger=(e)=>{
        setColor(e.target.value);
    }
    const handleDecrease=()=>{
        if(prequantity>1){
            setQuantity(prequantity-1)
        }
    }
    const handleIncrease=()=>{
        setQuantity(prequantity+1)
        
    }
    const handleSubmit=(e)=>{
        e.prevantDefault();
        const product={
            id:id,
            img:img,
            name:name,
            price:price,
            quantity:prequantity,
            size:size,
            color:color,
            coupon:coupon
        };
        const existingCart=JSON.parse(localStorage.getItem("cart"))||[];
        const existingProductIndex=existingCart.findIndex((item)=>item.id==id);
        

        if(existingProductIndex!==-1){
            existingCart[existingProductIndex].quantity+=prequantity;

        }
        else{
            existingCart.push(product)
        }
        localStorage.setItem("cart",JSON.stringify(existingCart));
        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupon("");
    };
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span>{ratingCount}</span>
            </p>
            <h4>${price}</h4>
            <h6>${seller}</h6>
            <p>{desc}</p>
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <div className="select-product size">
                    <select name="" id="" value={size} onChange={handleSizeChanger}>
                        <option value="Select Size">Select Size</option>
                        <option value="SM">SM</option>
                        <option value="MD">MD</option>
                        <option value="LG">LG</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>
                <div className="select-product color">
                    <select name="" id="" value={color} onChange={handleColorChanger}>
                        <option value="Select Size">Select Color</option>
                        <option value="SM">Pink</option>
                        <option value="MD">Ash</option>
                        <option value="LG">Red</option>
                        <option value="XL">Blue</option>
                        <option value="XXL">Black</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>
                <div className="cart-plus-minus" onClick={handleDecrease}>
                    <div className='dec qtybutton'>-</div>
                    <input  className=" cart-plus-minus-box"type="text" name='qtybutton'  id='qtybutton' value={prequantity} onChange={(e)=>setQuantity(parseInt(e.target.value),10)}/>
                    <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                </div>

                <div className="discount-code mb-2">
                    <input type="text" placeholder='Enter Discount Code' onChange={(e)=>setCoupon(e.target.value)} />
                </div>

                <button type='submit'  className='lab-btn'>
                    Add to Cart
                </button>
                
                <Link to='/cart-page'className='lab-btn bg-primary'>
                    <span>Check Out</span>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default ProductDisplay