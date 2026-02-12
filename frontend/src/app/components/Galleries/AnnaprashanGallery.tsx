import styles from './galleries.module.css';
export default function AnnaprashanGallery() {
    return(
        <>
        
        <section className={styles.gallery}>
          <h2>Annaprashan Decoration Gallery</h2>
          <div className={styles.grid}>
            <div className={styles.tile}>
              <img src="/galary/gate002.jpg" alt="Gallery Image 1" />
              <p className={styles.price}>₹0</p>
            </div>
          </div>
        </section>
        </>
    )
}