import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../redux/actions/productsAction";

const Home = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.Products)
  
    useEffect(() => {
            dispatch(getProducts())
    }, [])

    return (
        <div className="container" style={{ marginTop: "100px" }}>
            {products?.length && <ProductList isAction={true} products={products} />}
        </div>
    )
}

export default Home