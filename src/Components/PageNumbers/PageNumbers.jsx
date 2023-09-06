export default function PageNumbers({productsPerPage, totalProducts, paginate}){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalProducts/ productsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <ul>
            {pageNumbers.map(number => (
                <li key={number}>
                    <button onClick={() => paginate(number)}>
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    );
}