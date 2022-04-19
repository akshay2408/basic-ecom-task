import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../redux/actions/GetProduct";

const Home = () => {
   
    const dispatch = useDispatch()
    const products = useSelector(state=>state.GetProductReducer.Products)
    useEffect(() => {
        dispatch(getProducts())
    }, [])


    return (
        <div>
            <div className="container" style={{ marginTop: "100px" }}>
                <ProductList isAction={true}  products={products}/>
            </div>
        </div>
    )
}

export default Home