import Button from 'react-bootstrap/Button';
import React ,{ useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import "../components/Modal.css";
import { useLocation, useNavigate } from 'react-router-dom';
const CheckOutPage = () => {

    const [show, setshow] = useState(false);
    const [activeTab, setactiveTab] = useState("visa");

    const handleTabChange=(tabid)=>{
        setactiveTab(tabid);
    }
    const handleShow=()=>{
        setshow(true);
    }
    const handleClose=()=>{
        setshow(false);
    }
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.form?.pathname || "/";
    const handleOrderConfirm=()=>{
        alert("Your Order is placed Successfully!");
        localStorage.removeItem("cart");
        navigate(from,{replace:true})
    }
  return (
    <div className='modelCard'>
        <Button variant="primary" className="py-2" onClick={handleShow}>
            Proceed to Checkout
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}
        className="modal fade" centered>
            <div className="modal-dialog">
                <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="tabs mt-3">
                            <ul className='nav nav-tabs 'id='mytab' role='tablist'>
                                <li className='nav-item ' role='presentation'>
                                    <a href="#visa" className={`nav-link ${activeTab==="visa"?"active":""}`}
                                    id="visa-tab"
                                    data-toggle="tab"
                                    role="tab"
                                    aria-controls='visa'
                                    aria-selected={activeTab==="visa"}
                                    onClick={()=>handleTabChange("visa")}
                                    ><img  width="30%" height="10%"src="src\assets\images\image.png" alt="" /></a>
                                </li>
                                <li className='nav-item ' role='presentation'>
                                    <a href="#paypal" className={`nav-link ${activeTab==="visa"?"active":""}`}
                                    id="paypal-tab"
                                    data-toggle="tab"
                                    role="tab"
                                    aria-controls='paypal'
                                    aria-selected={activeTab==="paypal"}
                                    onClick={()=>handleTabChange("visa")}
                                    ><img  width="30%" height="10%"src="https://t3.ftcdn.net/jpg/03/93/36/70/360_F_393367013_08D1ZSSEiMul5dSVjq3FnktIiKb5MQiD.jpg" alt="" /></a>
                                </li>
                            </ul>

                            <div className="tab-content" id="mytabContent">
                                <div className={`tab-pane fade ${activeTab==="visa"?"show active":""}`} id="visa"
                                role='tabpanel'
                                arial-Labelledby="visa-tab"
                                
                                >
                                    <div className="mt-4 mx-4">
                                        <div className="text-center">
                                            <h5>Credit card</h5>
                                        </div>
                                        <div className="form mt-3">
                                            <div className="inputbox">
                                                <input type="text" name='name' id='name' className='form-control' required />
                                                <span>CardHolder Name</span>
                                            </div>
                                            <div className="inputbox">
                                                <input type="number" name='number' id='number' min="1" max="999" className='form-control' required />
                                                <span>Card Number <i className='fa fa-eye'></i></span>
                                        
                                            </div>
                                            <div className="d-flex flex-row">
                                            <div className="inputbox">
                                                <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                <span>Expiration Date</span>
                                        
                                            </div>
                                            <div className="inputbox">
                                                <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                <span>CVV</span>
                                        
                                            </div>
                                            </div>
                                            <div className="px-5 pay">
                                                <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div  className={`tab-pane fade ${activeTab==="paypal"?"show active":""}`} id="paypal"
                                role='tabpanel'
                                arial-Labelledby="paypal-tab"
                                >
                                     <div className="mt-4 mx-4">
                                        <div className="text-center">
                                            <h5>Paypal Account Info</h5>
                                        </div>
                                        <div className="form mt-3">
                                            <div className="inputbox">
                                                <input type="text" name='name' id='name' className='form-control' required />
                                                <span>Enter Your Email</span>
                                            </div>
                                            <div className="inputbox">
                                                <input type="number" name='number' id='number' min="1" max="999" className='form-control' required />
                                                <span>Your Name <i className='fa fa-eye'></i></span>
                                        
                                            </div>
                                            
                    
                                            <div className="inputbox">
                                                <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                <span>Extra Info</span>
                                        
                                            </div>
                                            <div className="d-flex flex-row">
                                            <div className="inputbox">
                                                <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                <span>Extra Info</span>
                                        
                                            </div>
                                            <div className="inputbox">
                                                <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                <span></span>
                                        
                                            </div>
                                            </div>
                                            {/* <div className="inputbox">
                                                <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                <span>CVV</span>
                                        
                                            </div> */}
                                        
                                            <div className="px-5 pay">
                                                <button className='btn btn-success btn-block'>Add Paypal</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              
                              <p className='mt-3 px-4 p-Disclaimer'>Payment Disclaimer : In no event shall payment  or partial payment by Owner for any amterial or Serives</p>


                        </div>
                    </div>
                </div>
            </div>
        </Modal>
        
    </div>
  )
}

export default CheckOutPage