import styles from './Nav.module.css';
import Logo from './Logo.svg';

import { Link } from 'react-router-dom'; 

import Cart from '../Cart/Cart';


function Nav() {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        
        if (prevScrollPos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-121px";
        }
        prevScrollPos = currentScrollPos;
    } 

    return ( 
        <>
        <nav id='navbar'>
            <div className={styles.navContainer}>
                <Link className={styles.navLogo} to='/'>
                    <img src={Logo} alt="E-Commerce Site Logo" />
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