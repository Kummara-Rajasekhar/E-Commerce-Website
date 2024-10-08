import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import ProductDisplay from './ProductDisplay';
import Review from './Review';
import PopularPost from './PopularPost';
const SingleProduct = () => {

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("/src/products.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const result = product.filter((p) => p.id === id);
    return (
        <div>
            <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop / Product"} />
            <div className="shop-single padding-tb aside-bg">
                <div className="container">
                    <row className="row justify-content-between">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="product-details">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-12">
                                            <div className="product-thumb">
                                                <div className='swipper-container pro-single-top'>

                                                    <Swiper
                                                    spaceBetween={30}
                                                    slidesPerView={1}
                                                    Loop={"true"}
                                                    autoplay={{
                                                        delay:2000,
                                                        disableOnInteraction:false
                                                    }}
                                                    modules={{Autoplay}}
                                                    navigation={
                                                        {
                                                            prevEl:".pro-single-prev",
                                                            nextEl:".pro-single-next",
                                                        }
                                                    }
                                                     className="mySwiper">
                                                        {
                                                            result.map((item,i)=>(
                                                                <SwiperSlide key={i}>
                                                                    <div className='single-thumb'>
                                                                    <img src={item.img} alt="" />

                                                                    </div>

                                                                </SwiperSlide>
                                                            ))
                                                        }
                                                    </Swiper>
                                                    <div className="pro-single-next">
                                                        <i className="iconfont-rounded-left">
                                                            
                                                        </i>
                                                    </div>
                                                    <div className="pro-single-prev">
                                                        <i className="iconfont-rounded-right">

                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className='post-content'>
                                                <div>
                                                    {
                                                        result.map(item=> <ProductDisplay key={item.id} item={item}/>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review">
                                    <Review/>
                                </div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside className='ps-lg-4'>
                                <PopularPost/>
                            </aside>
                        </div>
                    </row>
                </div>
            </div>

        </div>
    )
}

export default SingleProduct