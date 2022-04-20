import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from "../redux/actions/productsAction";

const Home = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.products)

    useEffect(() => {
            dispatch(getAllProducts())
    }, [])

    return (
        <div className="container" style={{ marginTop: "100px" }}>
            <ProductList isAction={true} products={products} />
        </div>
    )
}

export default Home