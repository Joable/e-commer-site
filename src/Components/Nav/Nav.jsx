import styles from './Nav.module.css';

import { Link } from 'react-router-dom'; 

import Cart from '../Cart/Cart';


function Nav() {

    return ( 
        <>
        <nav>
            <div className={styles.navContainer}>
                <Link className={styles.navLogo} to='/'>
                    <h1>Logo</h1>
                </Link>

                <div className={styles.navButtons}>
                    <Link to='/categories/all'>Categories</Link>

                    <Link to='/product/nQmNSwLXnb1JdqWn4kG5'>Product Page</Link>

                    <Cart/>
                </div>
            </div>
        </nav>
        </>
     );
}

export default Nav;