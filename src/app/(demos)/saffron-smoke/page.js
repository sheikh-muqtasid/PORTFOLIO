import Image from "next/image";
import styles from "./saffron-smoke.module.css";
import ReservationForm from "./ReservationForm";

export async function generateMetadata() {
  return {
    title: "Saffron & Smoke — Pakistani & Indian Fine Dining in Houston",
    description:
      "Saffron & Smoke is a fictional fine-dining restaurant on Hillcroft in Houston, TX: charcoal kebabs, dum biryanis, slow-cooked curries, and kashmiri chai in a candlelit emerald-and-gold dining room. Concept demo designed by Sheikh Muqtasid.",
  };
}

/* ---------------- data ---------------- */

const SIGNATURE_DISHES = [
  {
    name: "Charcoal Chicken Tikka Sizzler",
    desc: "Overnight-marinated thigh, smoked over real charcoal and finished tableside on a screaming-hot sizzler with charred onions and peppers.",
    price: "$28",
    note: "Serves one generously",
    image: "/demos/saffron-smoke/dish-1.jpg",
    alt: "Charcoal chicken tikka sizzling on a cast-iron platter with caramelized onions and peppers",
    tag: "Chef's signature",
  },
  {
    name: "Old Delhi Handi Lamb Biryani",
    desc: "Aged basmati layered with saffron milk, sealed under dough and slow-steamed in a copper handi. Opened at your table, still breathing steam.",
    price: "$32",
    note: "Dum-style, serves one",
    image: "/demos/saffron-smoke/dish-2.jpg",
    alt: "Lamb biryani with saffron-stained basmati rice served in a traditional copper handi pot",
    tag: "Sealed & steamed",
  },
];

const MENU = [
  {
    title: "Kebabs & Tandoor",
    sub: "From the clay oven, over real charcoal",
    items: [
      { name: "Chicken Tikka", price: "$18", desc: "Overnight yogurt marinade, charred peppers, mint chutney." },
      { name: "Seekh Kebab", price: "$19", desc: "Hand-minced beef, green chili, grilled onion — four skewers." },
      { name: "Malai Boti", price: "$21", desc: "Cream-and-cheese marinated chicken, impossibly tender." },
      { name: "Tandoori Wings", price: "$14", desc: "Smoked wings, Kashmiri chili glaze, lemon." },
    ],
  },
  {
    title: "Biryanis",
    sub: "Dum-style, sealed and slow-steamed",
    items: [
      { name: "Chicken Dum Biryani", price: "$22", desc: "Saffron basmati, crispy onion, served with raita and mirchi ka salan." },
      { name: "Handi Lamb Biryani", price: "$28", desc: "Our signature — sealed in a copper handi, opened tableside." },
      { name: "Shrimp Biryani", price: "$30", desc: "Gulf shrimp, coconut-kissed masala, fried curry leaves." },
      { name: "Sabzi Biryani", price: "$18", desc: "Seasonal vegetables, saffron, toasted cashews." },
    ],
  },
  {
    title: "Curries",
    sub: "Slow-cooked, finished with cream and ghee",
    items: [
      { name: "Butter Chicken", price: "$24", desc: "Tandoor-charred chicken folded into tomato-makhani silk." },
      { name: "Lamb Rogan Josh", price: "$27", desc: "Braised lamb shoulder, Kashmiri chilies, warm garam masala." },
      { name: "Chicken Karahi", price: "$23", desc: "Wok-tossed with tomato, ginger, and green chili — Lahori style." },
      { name: "Palak Paneer", price: "$19", desc: "Hand-torn spinach, seared paneer, garlic tempering." },
    ],
  },
  {
    title: "Breads",
    sub: "Slapped fresh to order in the tandoor",
    items: [
      { name: "Garlic Naan", price: "$4", desc: "Roasted garlic, coriander, ghee brush." },
      { name: "Roghni Naan", price: "$3.50", desc: "Sesame-crusted, pillowy — the biryani's best friend." },
      { name: "Cheese Naan", price: "$6", desc: "Molten mozzarella core, chili flakes." },
      { name: "Tandoori Roti", price: "$2.50", desc: "Whole wheat, blistered, brushed with ghee." },
    ],
  },
  {
    title: "Desserts",
    sub: "A sweet finish, the subcontinental way",
    items: [
      { name: "Pistachio Kulfi Falooda", price: "$12", desc: "Dense hand-churned kulfi, rose vermicelli, basil seeds." },
      { name: "Gulab Jamun", price: "$9", desc: "Warm milk dumplings, saffron syrup, crushed pistachio." },
      { name: "Gajar Halwa", price: "$11", desc: "Slow-reduced carrot pudding, khoya, toasted almonds." },
      { name: "Shahi Kheer", price: "$8", desc: "Cardamom rice pudding, chilled, silver leaf." },
    ],
  },
  {
    title: "Chai & Lassi",
    sub: "Brewed strong, churned thick",
    items: [
      { name: "Kashmiri Chai", price: "$6", desc: "Pink salt tea, crushed pistachio and almond." },
      { name: "Doodh Patti", price: "$5", desc: "Milk-only brew, slow-simmered, cardamom." },
      { name: "Mango Lassi", price: "$7", desc: "Alphonso mango, thick yogurt, saffron threads." },
      { name: "Sweet / Salted Lassi", price: "$6", desc: "Churned to order — your call on the salt." },
    ],
  },
];

const GALLERY = [
  {
    src: "/demos/saffron-smoke/hero.jpg",
    alt: "Candlelit dining room with emerald velvet banquettes, brass lanterns, and carved wooden screens",
    title: "The Dining Room",
    caption: "Emerald velvet, brass lanterns, and candlelight — 68 seats, no rush.",
  },
  {
    src: "/demos/saffron-smoke/dish-1.jpg",
    alt: "Charcoal chicken tikka sizzling on a cast-iron platter with onions and peppers",
    title: "From the Charcoal Pit",
    caption: "Every kebab passes through real charcoal before it reaches you.",
  },
  {
    src: "/demos/saffron-smoke/dish-2.jpg",
    alt: "Lamb biryani with saffron rice in a traditional copper handi pot",
    title: "Sealed Under Dough",
    caption: "Our biryanis steam in their own handi until the moment they're served.",
  },
];

/* ---------------- sections ---------------- */

function Hero() {
  return (
    <section className={styles.hero} aria-label="Welcome to Saffron and Smoke">
      <div className={styles.heroMedia}>
        <Image
          src="/demos/saffron-smoke/hero.jpg"
          alt="Candlelit dining room of Saffron and Smoke with emerald velvet banquettes, hanging brass lanterns, and gold accents"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.heroShade} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Houston · Hillcroft</span>
          <h1 className={styles.heroHeadline}>
            Where <em>saffron</em> meets <em>smoke</em>.
          </h1>
          <p className={styles.heroSub}>
            Pakistani and Indian fine dining — charcoal kebabs, dum biryanis
            sealed the old way, and curries that take all day. Served slowly,
            in a room built for lingering.
          </p>
          <div className={styles.heroCtas}>
            <a href="#reservations" className={`${styles.btn} ${styles.btnGold}`}>
              Reserve a Table
            </a>
            <a href="#menu" className={`${styles.btn} ${styles.btnGhost}`}>
              Explore the Menu
            </a>
          </div>
          <div className={styles.heroMeta}>
            <span>
              <strong>Tue – Sun</strong> · 12 PM – 10 PM
            </span>
            <span>
              <strong>5901 Hillcroft St</strong> · Houston, TX
            </span>
            <span>
              <strong>(713) 555-0312</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className={`${styles.section} ${styles.story}`} aria-labelledby="story-title">
      <div className={styles.container}>
        <div className={styles.storyGrid}>
          <div className={styles.storyCopy}>
            <span className={styles.eyebrow}>Our Story</span>
            <h2 id="story-title" className={styles.sectionTitle}>
              Two grills, one grandmother&apos;s notebook.
            </h2>
            <p>
              Saffron &amp; Smoke began with a family recipe book carried from
              Lahore to Houston — pages stained with turmeric, margins full of
              corrections. Our chefs trained in Karachi and Delhi before they
              ever touched a Houston tandoor, and every masala in this kitchen
              is ground in-house, every morning.
            </p>
            <p>
              We cook the slow way on purpose: biryanis sealed under dough and
              steamed for the better part of an hour, kebabs over real charcoal
              instead of gas, curries that start before sunrise. Fine dining,
              but the flavors your grandmother would recognize.
            </p>
            <div className={styles.stats}>
              <div>
                <div className={styles.statNum}>18</div>
                <div className={styles.statLabel}>House-ground spices</div>
              </div>
              <div>
                <div className={styles.statNum}>900°F</div>
                <div className={styles.statLabel}>Tandoor heat</div>
              </div>
              <div>
                <div className={styles.statNum}>0</div>
                <div className={styles.statLabel}>Shortcuts taken</div>
              </div>
            </div>
          </div>
          <aside className={styles.quoteCard} aria-label="Chef's note">
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <p className={styles.quoteText}>
              A biryani should arrive still arguing with its own steam. If it
              doesn&apos;t, we start over.
            </p>
            <p className={styles.quoteBy}>Chef Imran Qureshi · Founder</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SignatureDishes() {
  return (
    <section className={styles.section} aria-labelledby="signatures-title">
      <div className={styles.container}>
        <span className={`${styles.eyebrow} ${styles.center}`}>Signatures</span>
        <h2 id="signatures-title" className={styles.sectionTitle} style={{ textAlign: "center" }}>
          The dishes we&apos;re known for
        </h2>
        <p className={styles.lede} style={{ textAlign: "center", marginInline: "auto" }}>
          Three plates that never leave the menu — the rest of it changes with
          the seasons and the chef&apos;s mood.
        </p>
        <div className={styles.dishGrid}>
          {SIGNATURE_DISHES.map((dish) => (
            <article key={dish.name} className={styles.dishCard}>
              <div className={styles.dishMedia}>
                <Image src={dish.image} alt={dish.alt} fill sizes="(max-width: 48rem) 100vw, 33vw" />
                <span className={styles.dishTag}>{dish.tag}</span>
              </div>
              <div className={styles.dishBody}>
                <h3 className={styles.dishName}>{dish.name}</h3>
                <p className={styles.dishDesc}>{dish.desc}</p>
                <div className={styles.dishFoot}>
                  <span className={styles.dishPrice}>{dish.price}</span>
                  <span className={styles.dishNote}>{dish.note}</span>
                </div>
              </div>
            </article>
          ))}
          <article className={styles.dishCard}>
            <div className={styles.dishArt} role="img" aria-label="Ornamental gold emblem for the pistachio kulfi falooda dessert">
              <span className={styles.dishArtMonogram} aria-hidden="true">
                K
              </span>
              <span className={styles.dishArtLabel}>Hand-churned nightly</span>
            </div>
            <div className={styles.dishBody}>
              <h3 className={styles.dishName}>Pistachio Kulfi Falooda</h3>
              <p className={styles.dishDesc}>
                Dense, hand-churned kulfi over rose vermicelli with basil seeds
                and a snowfall of Sicilian pistachio. The dessert regulars plan
                their week around.
              </p>
              <div className={styles.dishFoot}>
                <span className={styles.dishPrice}>$12</span>
                <span className={styles.dishNote}>The sweet finish</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function FullMenu() {
  return (
    <section id="menu" className={`${styles.section} ${styles.menuSection}`} aria-labelledby="menu-title">
      <div className={styles.container}>
        <span className={`${styles.eyebrow} ${styles.center}`}>The Menu</span>
        <h2 id="menu-title" className={styles.sectionTitle} style={{ textAlign: "center" }}>
          Eat like you mean it
        </h2>
        <p className={styles.lede} style={{ textAlign: "center", marginInline: "auto" }}>
          Everything below is cooked to order. Spice levels are a conversation,
          not a number — tell your server how brave you&apos;re feeling.
        </p>
        <div className={styles.menuGrid}>
          {MENU.map((cat) => (
            <div key={cat.title} className={styles.menuCard}>
              <h3 className={styles.menuCardTitle}>{cat.title}</h3>
              <p className={styles.menuCardSub}>{cat.sub}</p>
              <ul className={styles.menuList}>
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <div className={styles.menuItemHead}>
                      <span className={styles.menuItemName}>{item.name}</span>
                      <span className={styles.menuDots} aria-hidden="true" />
                      <span className={styles.menuPrice}>{item.price}</span>
                    </div>
                    <p className={styles.menuItemDesc}>{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className={styles.menuFoot}>
          <strong>Allergies?</strong> Tell us before you order — the kitchen
          takes nuts, dairy, and gluten seriously. Halal meats, always.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className={styles.section} aria-labelledby="gallery-title">
      <div className={styles.container}>
        <span className={styles.eyebrow}>Gallery</span>
        <h2 id="gallery-title" className={styles.sectionTitle}>
          A room built for lingering
        </h2>
        <div className={styles.galleryTrack}>
          {GALLERY.map((g) => (
            <figure key={g.title} className={styles.galleryItem} style={{ margin: 0 }}>
              <div className={styles.galleryMedia}>
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 48rem) 78vw, 33vw" />
              </div>
              <figcaption className={styles.galleryCaption}>
                <strong>{g.title}</strong>
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className={`${styles.section} ${styles.visit}`} aria-labelledby="visit-title">
      <div className={styles.container}>
        <span className={styles.eyebrow}>Hours &amp; Location</span>
        <h2 id="visit-title" className={styles.sectionTitle}>
          Find us on Hillcroft
        </h2>
        <p className={styles.lede}>
          In the heart of Houston&apos;s Mahatma Gandhi District, two minutes
          off the Southwest Freeway. Free parking behind the building.
        </p>
        <div className={styles.visitGrid}>
          <div className={styles.hoursCard}>
            <h3 className={styles.cardTitle}>Hours</h3>
            <ul className={styles.hoursList}>
              <li className={styles.hoursRow}>
                <span className={styles.hoursDay}>Tuesday – Thursday</span>
                <span className={styles.menuDots} aria-hidden="true" />
                <span className={styles.hoursTime}>12:00 PM – 10:00 PM</span>
              </li>
              <li className={styles.hoursRow}>
                <span className={styles.hoursDay}>Friday – Sunday</span>
                <span className={styles.menuDots} aria-hidden="true" />
                <span className={styles.hoursTime}>12:00 PM – 10:00 PM</span>
              </li>
              <li className={styles.hoursRow}>
                <span className={styles.hoursDay}>Monday</span>
                <span className={styles.menuDots} aria-hidden="true" />
                <span className={styles.hoursClosed}>Closed</span>
              </li>
            </ul>
          </div>
          <div className={styles.findCard}>
            <h3 className={styles.cardTitle}>Find Us</h3>
            <p className={styles.visitLine}>
              <strong>Address</strong>
              5901 Hillcroft St
              <br />
              Houston, TX 77036
            </p>
            <p className={styles.visitLine}>
              <strong>Phone</strong>
              <a href="tel:+17135550312">(713) 555-0312</a>
            </p>
            <p className={styles.visitLine} style={{ marginBottom: 0 }}>
              <strong>Directions</strong>
              <a
                href="https://www.google.com/maps/search/?api=1&query=5901+Hillcroft+St+Houston+TX+77036"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reservations() {
  return (
    <section id="reservations" className={styles.section} aria-labelledby="reservations-title">
      <div className={styles.container}>
        <span className={`${styles.eyebrow} ${styles.center}`}>Reservations</span>
        <h2 id="reservations-title" className={styles.sectionTitle} style={{ textAlign: "center" }}>
          Book your evening
        </h2>
        <div className={styles.reserveGrid}>
          <div className={styles.reserveCopy}>
            <p>
              Dinner at Saffron &amp; Smoke is unhurried — plan on two hours,
              order the biryani, and let the evening do what evenings do.
              Weekends fill up fast; weeknights are gloriously calm.
            </p>
            <ul className={styles.reservePoints}>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Tables are held for 15 minutes past the reservation time.
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Parties over 12? Call us — we&apos;ll set the long table.
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Candlelit corner booths go first — request one in the notes.
              </li>
            </ul>
          </div>
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Request a table</h3>
            <p className={styles.formSub}>
              We confirm every request by phone within the hour.
            </p>
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- page ---------------- */

export default function SaffronSmokePage() {
  return (
    <>
      <Hero />
      <Story />
      <SignatureDishes />
      <FullMenu />
      <Gallery />
      <Visit />
      <Reservations />
    </>
  );
}
