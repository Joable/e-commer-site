import styles from './Categories.module.css'

function Categories() {
    return (
        <>
        <div className={styles.categoriesBody}>
            <div className={styles.categoriesTitle}>
                <h1>Categories</h1>
            </div>

            <div className={styles.categoriesButtons}>
                <button>All</button>
                
                <button>Furnitures</button>
                
                <button>Kitchen</button>
                
                <button>Lamps</button>
                
                <button>Clothes</button>
                
                <button>Electronics</button>
                
                <button>Peripherals</button>
            </div>
        </div>
        </> 
    );
}

export default Categories;