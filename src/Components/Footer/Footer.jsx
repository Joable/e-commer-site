import styles from './Footer.module.css';
import Logo from './Logo.svg';

import { Link } from 'react-router-dom'

function Footer() {
    return ( 
        <footer>
            <div className={styles.footerBody}>
                <Link to="#">About</Link>

                <Link to="#">FAQs</Link>

                <Link to="#">Contact Us</Link>

                <Link to="#">News</Link>
            </div>

            <div className={styles.footerLogo}>
                <Link className={styles.logo} to="/">
                    <img src={Logo} alt="E-Commerce Site Logo" />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;