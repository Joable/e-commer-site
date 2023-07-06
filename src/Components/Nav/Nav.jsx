import styles from './Nav.module.css';

import { Link } from 'react-router-dom'; 


function Nav() {

    return ( 
        <>
        <nav className={styles.navContainer}>
            <h1>NAV</h1>
            <div className={styles.navButtons}>
                <a href="#">Categories</a>
                <Link to="/product">Product Page</Link>
                <button>Carrito</button>
            </div>
        </nav>
        </>
     );
}

export default Nav;