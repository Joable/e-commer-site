export default function PageNumbers({productsPerPage, totalProducts}){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalProducts/ productsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <ul>
            {pageNumbers.map(number => (
                <li key={number}>
                    <a href="#">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    );
}