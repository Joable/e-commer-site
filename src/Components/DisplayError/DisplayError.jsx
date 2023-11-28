import styles from './DisplayError.module.css';

function DisplayError({ children }){
    if(children){
            return(
                <span className={styles.errorBox}>
                    <h4>
                        {children}
                    </h4>
                </span>
            );
        }else{
            return <></>
        }
};

export default DisplayError;