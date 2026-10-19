import { Playfair_Display, Inter } from "next/font/google";
import styles from "./ember.module.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--eo-display",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--eo-body",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export default function EmberOakLayout({ children }) {
  return <div className={`${display.variable} ${body.variable} ${styles.root}`}>{children}</div>;
}
