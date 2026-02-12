import styles from './galleries.module.css';
export default function FunctionGallery() {
    return(
        <>
        
        <section className={styles.gallery}>
          <h2>Our Puja & Festivals Decoration Gallery</h2>
          <div className={styles.grid}>
            <div className={styles.tile}>
              <img src="/galary/puja001.jpg" alt="Gallery Image 1" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/puja002.jpg" alt="Gallery Image 2" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/puja003.jpg" alt="Gallery Image 3" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/puja004.jpg" alt="Gallery Image 4" />
              <p className={styles.price}>₹0</p>
            </div>
            <div className={styles.tile}>
              <img src="/galary/puja005.jpg" alt="Gallery Image 4" />
              <p className={styles.price}>₹0</p>
            </div>
          </div>
        </section>
        </>
    )
}