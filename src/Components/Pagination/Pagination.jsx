import styles from "./Pagination.module.css"

import { useState } from "react";

import ProductItem from "../ProductItem/ProductItem";
import PageNumbers from "../PageNumbers/PageNumbers";

export default function Pagination({products}){
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(4);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const displayProducts = (productsToDiplay) => {
        return productsToDiplay.map((product) => <ProductItem id={product.id} productData={product.data()}/>)

    }

    return(
        <>
        {displayProducts(currentProducts)}

        <PageNumbers totalProducts={products.length} productsPerPage={productsPerPage}/>
        </>
    );
}