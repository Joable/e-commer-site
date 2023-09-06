import styles from "./Pagination.module.css"

import { useState } from "react";

import ProductItem from "../ProductItem/ProductItem";
import PageNumbers from "../PageNumbers/PageNumbers";

export default function Pagination({products}){
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const displayProducts = (productsToDiplay) => {
        return productsToDiplay.map((product) => <ProductItem id={product.id} productData={product.data()}/>)
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber); 

    return(
        <>
        {displayProducts(currentProducts)}

        <PageNumbers totalProducts={products.length} productsPerPage={productsPerPage} paginate={paginate}/>
        </>
    );
}