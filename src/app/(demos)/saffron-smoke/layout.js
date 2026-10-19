import { Cormorant_Garamond, Inter } from "next/font/google";
import styles from "./saffron-smoke.module.css";
import SkipLink from "./skip-link";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--ss-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--ss-body",
  display: "swap",
});

const NAV_LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reservations", label: "Reservations" },
  { href: "#visit", label: "Visit" },
];

function Brand() {
  return (
    <a href="#top" className={`${styles.brand} ${styles.navBrand}`} aria-label="Saffron and Smoke — back to top">
      <span className={styles.brandMark} aria-hidden="true">
        S
      </span>
      <span>
        <span className={styles.brandName}>Saffron &amp; Smoke</span>
        <span className={styles.brandTag}>Pakistani · Indian Kitchen</span>
      </span>
    </a>
  );
}

function SiteNav() {
  return (
    <nav className={styles.nav} aria-label="Restaurant navigation">
      <div className={`${styles.container} ${styles.navInner}`}>
        <div className={styles.navTop}>
          <Brand />
          <a href="#reservations" className={`${styles.btn} ${styles.btnGold} ${styles.btnSmall} ${styles.navCta}`}>
            Reserve a Table
          </a>
        </div>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Brand />
            <p>
              Slow-cooked curries, charcoal kebabs, and dum biryanis sealed the
              old way — served in a candlelit room on Hillcroft.
            </p>
          </div>
          <div>
            <h2 className={styles.footerTitle}>Explore</h2>
            <ul className={styles.footerList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.footerTitle}>Visit Us</h2>
            <ul className={styles.footerList}>
              <li>5901 Hillcroft St</li>
              <li>Houston, TX 77036</li>
              <li>
                <a href="tel:+17135550312">(713) 555-0312</a>
              </li>
              <li>Tue – Sun · 12 PM – 10 PM</li>
              <li>Closed Mondays</li>
            </ul>
          </div>
        </div>
        <div className={styles.demoBanner}>
          <strong>Concept demo</strong> — a fictional restaurant website designed
          by Sheikh Muqtasid. 5901 Hillcroft St, Houston, TX 77036 is a fictional
          address; (713) 555-0312 is not a working number.
        </div>
      </div>
    </footer>
  );
}

export default function SaffronSmokeLayout({ children }) {
  return (
    <div id="top" className={`${styles.page} ${display.variable} ${body.variable}`}>
      <SkipLink />
      <SiteNav />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
