import styles from './Nav.module.css';

import { Link } from 'react-router-dom'; 


function Nav() {

    return ( 
        <>
        <nav className={styles.navContainer}>
            <Link className={styles.navLogo} to='/'>
                <h1>Logo</h1>
            </Link>

            <div className={styles.navButtons}>
                <Link to='/categories/all' target='_blank'>Categories</Link>

                <Link to='/product/nQmNSwLXnb1JdqWn4kG5' target='_blank'>Product Page</Link>

                <button>Carrito</button>
            </div>
        </nav>
        </>
     );
}

export default Nav;