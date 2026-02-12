import styles from './galleries.module.css';
export default function WeddingGallery() {
    return(
        <>
        
        <section className={styles.gallery}>
          <h2>Wedding Decoration Gallery</h2>
          <div className={styles.grid}>
            <div className={styles.tile}>
              <img src="/galary/wedding001.jpg" alt="Gallery Image 1" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/wedding002.jpg" alt="Gallery Image 2" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/wedding003.jpg" alt="Gallery Image 3" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/wedding004.jpg" alt="Gallery Image 4" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/wedding005.jpg" alt="Gallery Image 5" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/wedding006.jpg" alt="Gallery Image 6" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/wedding007.jpg" alt="Gallery Image 7" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/wedding008.jpg" alt="Gallery Image 8" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/gate001.jpg" alt="Gallery Image 8" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/gate003.jpg" alt="Gallery Image 8" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/gate004.jpg" alt="Gallery Image 8" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/wedding009.jpg" alt="Gallery Image 8" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/wedding010.jpg" alt="Gallery Image 8" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/wedding011.jpg" alt="Gallery Image 8" />
              <p className={styles.price}>₹0</p>
            </div>
          </div>
        </section>
        </>
    )
}