import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.container}>
                <div className={styles.brand}>
                    <h3>OM Decoration</h3>
                    <p>Beautiful floral decorations for every moment.</p>
                </div>

                <div className={styles.contacts}>
                    <h4>Contact</h4>
                    <p>
                        <strong>Name:</strong> OM Decoration
                    </p>
                    <p>
                        <strong>Phone:</strong> +91 6295910343
                    </p>
                    <p>
                        <strong>Email:</strong> omdecoration@gmail.com
                    </p>
                    <p>
                        <strong>Address:</strong> Guniada,Hirbandh,Bankura
                    </p>
                </div>

                <div className={styles.smallprint}>
                    <p>© 2025 OM Decoration — All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}