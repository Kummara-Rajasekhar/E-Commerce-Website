import React ,{ useEffect, useState }from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from './CheckOutPage';
const Cartpage = () => {
  const [cartItems, setcartItems] = useState([]);
  useEffect(()=>{
     const storedItem=JSON.parse(localStorage.getItem("cart")) || [];
     setcartItems(storedItem);
  },[])
  
  const calculatetotalprice=(item)=>{
    return item.price*item.quantity;
  }

  const handleIncrease=(item)=>{
    item.quantity+=1;
    setcartItems([...cartItems]);

    localStorage.setItem("cart",JSON.stringify(cartItems));
  };
    const handleDecrease=(item)=>{
      if(item.quantity>1){
        item.quantity-=1;
        setcartItems([...cartItems]);
        localStorage.setItem("cart",JSON.stringify(cartItems));
        updateLocalStorage(updatecart);
      }
    };
    
    const handleRemoveItem=(item)=>{
      const updatecart=cartItems.filter((cartItem)=>cartItem.id!==item.id);

      setcartItems(updatecart);

    }
    const updateLocalStorage=(cart)=>{
      localStorage.setItem("cart".JSON.stringify(cart));
  }

  const cartsubtotal=cartItems.reduce((total,item)=>{
    return total+calculatetotalprice(item);
  },0)
  const ordertotal=cartsubtotal;


  return (
    <div>
      <PageHeader  title={"Sh0p Cart"} curPage={"Cart Page"}/>
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className='cat-product'>Product</th>
                    <th className='cat-price'>Price</th>
                    <th className='cat-quantity'>Quantity</th>
                    <th className='cat-total'>Total</th>
                    <th className='cat-edit'>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map((item,i)=>(
                      <tr key={i}>
                        <td className='product-item cat-product'>
                          <div className="p-thumb">
                            <Link to="/shop"><img src={item.img} alt="" /></Link>
                          </div>
                          <div className="p-content">
                            <Link to="/shop">{item.name}</Link>
                          </div>
                        </td>
                        <td className="cat-price">
                         $ {item.price}
                        </td>
                        <td className="cat-quantity">
                          <div className="cart-plus-minus">
                            <div className="dec qty" onClick={handleDecrease(item)}>-</div>
                            <input type="text" className='cart-plus-minus-box' name="qtybutton"  value={item.quantity}/>
                            <div className="inc qty"onClick={handleIncrease(item)}>+</div>
                          </div>
                        </td>
                        <td className='cat-toprice'>
                          ${calculatetotalprice(item)}
                        </td>
                        <td className='cat-edit'>
                          <a href="#" onClick={()=>handleRemoveItem}><img src={delImgUrl} alt="" /></a>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

            <div className="cart-bottom">
              <div className="cart-checkout-box">
                  <form  className='coupon'>
                    <input type="text " name="coupon" id="coupon"  placeholder='Coupon Code...' className='cart-page-input-text'/>
                    <input type="submit" value={"Apply coupon"} />
                  </form>
                  <form className='cart-checkout'>
                    <input type="submit" value={"Update Cart"} />
                    <div><CheckOutPage/></div>
                  </form>
              </div>


              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom</option>
                          <option value="bd">Bangladesh</option>
                          <option value="pak">Pakisthan</option>
                          <option value="ind">India</option>
                          <option value="np">Nepal</option>
                        </select>
                        <span className='select-icon'>
                          <i className='icofont-rounded-down'></i>
                        </span>
                      </div>
                      <div className="outline-select shiping-select">
                      <select>
                          <option value="uk">New York</option>
                          <option value="bd">London</option>
                          <option value="pak">Dhaka</option>
                          <option value="ind">New Delhi</option>
                          <option value="np">Karachi</option>
                        </select>
                        <span className='select-icon'>
                          <i className='icofont-rounded-down'></i>
                        </span>
                      </div>
                      <input type="text"  name="postcode" id="postcode" placeholder='PostCOde/ZIP *' className='cart-page-input-text'/>
                      <button type='submit'>Update Address</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                         <h3>Cart Totals</h3>
                         <ul className="lab-ul">
                          <li>
                            <span className='pull-left'>Cart SubTotal</span>
                            <p className='pull-right'>${cartsubtotal}</p>
                          </li>
                          <li>
                            <span className='pull-left'>Shiping and Handling</span>
                            <p className='pull-right'>Free Shiping</p>
                          </li>
                          <li>
                            <span className='pull-left'>Order Total</span>
                            <p className='pull-right'>${ordertotal.toFixed(2)}</p>
                          </li>

                         </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartpage