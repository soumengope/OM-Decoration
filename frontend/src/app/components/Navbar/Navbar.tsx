"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    // prevent body scroll when mobile menu is open (robust for mobile browsers)
    const scrollYRef = useRef(0);
    useEffect(() => {
        // helper to prevent touchmove (for iOS)
        const preventTouch = (e: TouchEvent) => {
            e.preventDefault();
        };

        if (open) {
            // store current scroll
            scrollYRef.current = window.scrollY || window.pageYOffset;
            // lock body via fixed positioning
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollYRef.current}px`;
            document.body.style.left = "0";
            document.body.style.right = "0";
            document.body.style.width = "100%";

            // add touchmove listener to prevent overscroll on iOS
            document.addEventListener("touchmove", preventTouch, { passive: false });
        } else {
            // restore
            const y = scrollYRef.current || 0;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.width = "";
            window.scrollTo(0, y);

            document.removeEventListener("touchmove", preventTouch as EventListener);
        }

        return () => {
            // cleanup in case component unmounts
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.width = "";
            document.removeEventListener("touchmove", preventTouch as EventListener);
        };
    }, [open]);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <img src="/omDecoration_logo.png" alt="OM Decoration Logo" width={50} />
                    <p>OM Decoration</p>
                </div>

                {/* desktop nav */}
                <nav className={styles.navDesktop}>
                    <Link href="#home">Home</Link>
                    <Link href="#about">About Us</Link>
                    <Link href="#contact">Contact Us</Link>
                    <Link href="#events">Events</Link>
                </nav>

                        {/* mobile hamburger (hide while menu open) */}
                        {!open && (
                            <button
                                className={styles.burger}
                                aria-label={open ? "Close menu" : "Open menu"}
                                onClick={() => setOpen(true)}
                            >
                                <span className={styles.bar} />
                                <span className={styles.bar} />
                                <span className={styles.bar} />
                            </button>
                        )}

                        {/* full-screen mobile menu (render only when open) */}
                {open && (
                    <div className={styles.mobileMenuWrapper}>
                        <div className={styles.backdrop} onClick={() => setOpen(false)} />
                        <div className={`${styles.mobileMenu} ${styles.show}`} role="dialog" aria-modal="true">
                            <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close menu">×</button>
                            <div className={styles.mobileMenuInner}>
                                <a href="#home" onClick={() => setOpen(false)}>Home</a>
                                <a href="#about" onClick={() => setOpen(false)}>About Us</a>
                                <a href="#contact" onClick={() => setOpen(false)}>Contact Us</a>
                                <a href="#events" onClick={() => setOpen(false)}>Events</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
