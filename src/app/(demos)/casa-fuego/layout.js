import { Fredoka, Nunito } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles.css";

const display = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--cf-font-display",
  fallback: ["Arial Rounded MT Bold", "Trebuchet MS", "system-ui", "sans-serif"],
});

const body = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--cf-font-body",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const metadata = {
  title: "Casa Fuego — Taqueria & Cantina | Houston, TX",
  description:
    "Casa Fuego is Houston's neighborhood taqueria & cantina: tacos al pastor off the trompo, hand-shaken margaritas, and marigold-lit family dinners at 2418 Dunlavy St. Open daily 11am–10pm, Fri–Sat till midnight.",
  openGraph: {
    title: "Casa Fuego — Taqueria & Cantina",
    description:
      "Tacos al pastor, hand-shaken margaritas, and family dinners in the heart of Houston.",
    images: [{ url: "/demos/casa-fuego/hero.jpg", width: 1600, height: 900 }],
    type: "website",
  },
};

export default function CasaFuegoLayout({ children }) {
  return (
    <div className={`cf-root ${display.variable} ${body.variable}`}>
      <a className="cf-skip" href="#cf-main">
        Skip to content
      </a>
      <Navbar />
      <main id="cf-main">{children}</main>
      <Footer />
    </div>
  );
}
