import React from 'react'
import PageHeader from '../components/PageHeader'

const Shop = () => {
  return (
    <div>
        <PageHeader title="Shop Page" curPage="Shop"/>
    </div>
  )
}

export default Shop 


/* 
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const showResults="Showing 01 - 12 of 139 Results";
import Data from "../products.json";
import ProductCard from "./ProductCard";
import  Pagination  from "./Pagination.jsx";
import Search from './Search.jsx';
import ShopCategory from './ShopCategory.jsx';

const [currentPage, setCurrentPage] = useState(1);
const productsPerPage=12;


const indexOfLastProduct=currentPage* productsPerPage;
const indexOfFirstProduct= indexOfLastProduct- productsPerPage;

const currentProducts= products.slice(indexOfFirstProduct,indexOfLastProduct);

const paginate= (pageNumber)=> {
    setCurrentPage(pageNumber)
};
const [selectedCategory,setSelectedcategory]=useState("All");
const menuItems=[...new Set(Data.map((val)=>val.vat.category))];
const filterItem=(curcat)=>{
    const newItem=Data.filter((newval)=>{
        return newval.category===curcat;
    })
    setSelectedcategory(curcat);
    setProducts(newItem);
};
 
const Shop = () => {
    const [gridList,setGridList]=useState(true);
    const [products, setProducts] = useState(Data);
  return (
    <div>
        <PageHeader title="Our Shop Page" curPage="Shop"/>
        <div className='shop-page padding-tb'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <article>
                            <div className='shop-title d-flex flex-wrap justify-content-between'>
                                <p>
                                    {showResults}
                                </p>
                                <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                                    <a  className='grid'onClick={() => setGridList(!gridList)}>
                                        <i className="icofont-ghost"></i>
                                    </a>
                                    <a  className='list'onClick={() => setGridList(!gridList)}>
                                        <i className="icofont-listine-dots"></i>
                                    </a>

                                </div>
                            </div>
                            <div>
                                 <ProductCard gridList={gridList} products={currentProducts}/>
                            </div>
                            <Pagination
                            productsPerPage={productsPerPage}
                            totalProducts={products.length}
                            paginate={paginate}
                            activePage={currentPage}
                            />
                        </article>
                    </div>
                    <div className="col-lg-4 col-12">
                        <aside>
                            <Search products={products}  />
                            <ShopCategory 
                            filterItem={filterItem}
                            setItem={setProducts}
                            menuItems={menuItems}
                            setProducts={setProducts}
                            selectedCategory={selectedCategory}
                            />
                        </aside>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Shop;  */





