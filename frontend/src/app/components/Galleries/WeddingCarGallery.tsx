import styles from './galleries.module.css';
export default function WeddingCarGallery() {
    return(
        <>
        
        <section className={styles.gallery}>
          <h2>Wedding Car Decoration Gallery</h2>
          <div className={styles.grid}>
            <div className={styles.tile}>
              <img src="/galary/car001.jpg" alt="Gallery Image 1" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/car002.jpg" alt="Gallery Image 2" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/car003.jpg" alt="Gallery Image 3" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/car004.jpg" alt="Gallery Image 4" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/car005.jpg" alt="Gallery Image 5" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/car006.jpg" alt="Gallery Image 6" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/car007.jpg" alt="Gallery Image 7" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/car008.jpg" alt="Gallery Image 8" />
              <p className={styles.price}>₹0</p>
            </div>
          </div>
        </section>
        </>
    )
}