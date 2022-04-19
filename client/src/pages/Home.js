import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import ProductTable from "../components/ProductList";
import { useDispatch } from 'react-redux'
import { getProducts } from "../redux/actions/GetProduct";

const Home = () => {
   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const hendleCart = (quantity,id) => {
        const user=JSON.parse(localStorage.getItem("user"))
        
        const data={
            accessToken:user.sessionToken,
            product_id:id,
            quantity:quantity
        }
        console.log("cartPayload",data)
    }

    return (
        <div>
            <Header />
            <div className="container" style={{ marginTop: "100px" }}>
                <ProductTable hendleCart={hendleCart} isAction={true} />
            </div>
        </div>
    )
}

export default Home