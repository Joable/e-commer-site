import styles from './Nav.module.css';

function Nav() {

    return ( 
        <>
        <nav className={styles.navContainer}>
            <h1>NAV</h1>
            <div className={styles.navButtons}>
                <a href="#">Categories</a>
                <a href="#">Product Page</a>
                <button>Carrito</button>
            </div>
        </nav>
        </>
     );
}

export default Nav;