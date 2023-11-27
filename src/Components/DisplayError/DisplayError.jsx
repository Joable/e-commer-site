import styles from './DisplayError.module.css';

function DisplayError({ children }){
    return(
        <span className={styles.errorBox}>
            <h4>
                {children}
            </h4>
        </span>
    );
};

export default DisplayError;