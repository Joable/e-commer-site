import styles from './Footer.module.css';

function Footer() {
    return ( 
        <footer className={styles.footer}>
            <div className={styles.footerBody}>
                <a href="#">About</a>

                <a href="#">FAQs</a>

                <a href="#">Contact Us</a>

                <a href="#">News</a>
            </div>
            <div className={styles.footerLogo}>
                <h2>
                    E-Comerce Logo                    
                </h2>
            </div>
        </footer>
    );
}

export default Footer;