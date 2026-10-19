import Image from "next/image";
import styles from "./ember.module.css";
import ReservationForm from "./reservation-form";

export async function generateMetadata() {
  return {
    title: "Ember & Oak — Modern American Steakhouse | Houston, TX",
    description:
      "Ember & Oak is a modern American steakhouse in Houston, Texas. Oak-fired steaks, 45-day dry-aged cuts, craft cocktails, and warm candlelit dining. Reserve your table today.",
  };
}

const SIGNATURE = [
  {
    name: "45-Day Dry-Aged Ribeye",
    price: "$78",
    tag: "Chef's Signature",
    img: "/demos/ember-oak/dish-1.jpg",
    alt: "Sliced 45-day dry-aged ribeye with a charred crust and pink medium-rare center, garnished with flaky sea salt and thyme on a dark ceramic plate",
    copy: "Aged in-house for 45 days for deep, nutty flavor, then seared over Texas oak and finished with smoked butter and flaky sea salt.",
  },
  {
    name: "12-Hour Smoked Short Rib",
    price: "$64",
    tag: "House Favorite",
    img: "/demos/ember-oak/dish-2.jpg",
    alt: "Smoked beef short rib glazed with dark barbecue sauce on a black slate plate with charred scallions, lit by warm amber light",
    copy: "Slow-smoked for twelve hours until it yields to the touch, lacquered with a dark cherry-bourbon glaze and charred scallions.",
  },
  {
    name: "Oak-Fired Tomahawk for Two",
    price: "$140",
    tag: "To Share",
    img: "/demos/ember-oak/dish-1.jpg",
    alt: "Thick-cut tomahawk steak sliced to show its blushing interior, served on a dark ceramic plate with thyme and sea salt",
    copy: "A 32-ounce bone-in showpiece, dry-aged and roasted over open oak embers, carved tableside with roasted garlic and beef tallow potatoes.",
  },
];

const MENU = [
  {
    title: "To Begin",
    items: [
      ["Ember-Roasted Bone Marrow", "$19", "Grilled sourdough, smoked sea salt, parsley gremolata"],
      ["Jumbo Shrimp Cocktail", "$21", "Poached Gulf shrimp, charred-lemon cocktail sauce"],
      ["Wagyu Beef Tartare", "$22", "Hand-cut tenderloin, cured yolk, crispy capers, rye toast"],
      ["Charred Octopus", "$24", "Oak-grilled tentacle, white bean puree, salsa verde"],
      ["Burrata & Prosciutto", "$18", "Creamy burrata, 18-month prosciutto, aged balsamic, basil"],
    ],
  },
  {
    title: "From the Oak Fire",
    items: [
      ["Filet Mignon · 8 oz", "$58", "Center-cut tenderloin, red wine jus, bone marrow butter"],
      ["New York Strip · 14 oz", "$62", "Dry-aged 28 days, cracked pepper crust, garlic confit"],
      ["Dry-Aged Ribeye · 16 oz", "$68", "Dry-aged 45 days, smoked butter, flaky sea salt"],
      ["Porterhouse · 24 oz", "$110", "The best of both cuts — for serious appetites"],
      ["Tomahawk · 32 oz (for two)", "$140", "Bone-in, carved tableside, roasted garlic, beef tallow potatoes"],
    ],
  },
  {
    title: "Sides",
    items: [
      ["Truffle Pommes Frites", "$14", "Hand-cut, parmesan, white truffle oil, herbs"],
      ["Creamed Spinach", "$12", "Béchamel, nutmeg, aged cheddar crust"],
      ["Charred Asparagus", "$13", "Oak-fired, lemon aioli, toasted almonds"],
      ["Loaded Baked Potato", "$11", "Smoked cheddar, bacon lardons, chives, sour cream"],
      ["Wild Mushroom Medley", "$15", "Roasted maitake and shiitake, thyme, sherry butter"],
    ],
  },
  {
    title: "Sweet Endings",
    items: [
      ["Dark Chocolate Lava Cake", "$14", "Molten 70% chocolate, smoked salt, vanilla gelato"],
      ["Bourbon Pecan Pie", "$13", "Kentucky bourbon caramel, candied pecans, whipped cream"],
      ["Vanilla Bean Crème Brûlée", "$12", "Tahitian vanilla custard, torched sugar glass"],
      ["Oak-Smoked Cheesecake", "$12", "New York style, graham crust, cherry compote"],
      ["Affogato for Two", "$10", "Espresso poured over fior di latte gelato"],
    ],
  },
];

const GALLERY = [
  {
    img: "/demos/ember-oak/hero.jpg",
    alt: "The Ember & Oak dining room glowing with candlelight and an open wood-fired grill",
    caption: "The dining room, lit by oak fire",
  },
  {
    img: "/demos/ember-oak/dish-1.jpg",
    alt: "Sliced dry-aged ribeye with charred crust and pink center on dark ceramic",
    caption: "45-day dry-aged ribeye, sliced to order",
  },
  {
    img: "/demos/ember-oak/dish-2.jpg",
    alt: "Glazed smoked short rib with charred scallions on black slate",
    caption: "12-hour smoked short rib, cherry-bourbon glaze",
  },
];

export default function EmberOakPage() {
  return (
    <>
      {/* ---------- Restaurant nav ---------- */}
      <header className={styles.nav}>
        <nav className={styles.navInner} aria-label="Ember & Oak">
          <a href="#top" className={styles.brand} aria-label="Ember & Oak — back to top">
            Ember <em>&amp;</em> Oak
          </a>
          <div className={styles.links}>
            <a href="#menu">Menu</a>
            <a href="#story">Our Story</a>
            <a href="#gallery">Gallery</a>
            <a href="#visit">Visit</a>
          </div>
          <a href="#reservations" className={`${styles.btn} ${styles.navCta}`}>
            Reserve
          </a>
        </nav>
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroBg} aria-hidden="true">
            <Image
              src="/demos/ember-oak/hero.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className={styles.heroShade} aria-hidden="true" />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>A Modern American Steakhouse — Houston, TX</p>
            <h1 id="hero-heading">
              Where Fire <span className={styles.accent}>Meets</span> Flavor
            </h1>
            <p>
              Prime cuts aged in-house, roasted over Texas oak embers, and served
              in a room built for long evenings. This is steak the way it was
              meant to be.
            </p>
            <div className={styles.heroActions}>
              <a href="#reservations" className={styles.btn}>
                Reserve a Table
              </a>
              <a href="#menu" className={styles.btnOutline}>
                View the Menu
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Story ---------- */}
        <section id="story" className={`${styles.section} ${styles.wrap}`} aria-labelledby="story-heading">
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <p className={styles.eyebrow}>Our Story</p>
              <h2 className={styles.h2} id="story-heading">
                Born of Embers, Built on Oak
              </h2>
              <p>
                <span className={styles.dropcap}>E</span>mber &amp; Oak began with a
                single wood-fired grill and a stubborn belief: great steak needs
                nothing more than fire, patience, and honest beef. Every cut in our
                house is dry-aged on-site, hand-seasoned with smoked salt, and
                finished over Texas oak — no gas, no shortcuts.
              </p>
              <p>
                Our dining room glows with that same fire. Leather booths, oak
                tables, candlelight, and the low hum of a kitchen that treats
                every plate like a celebration. Whether it&apos;s your first visit or
                your fiftieth, you&apos;re family the moment you walk in.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <b>45</b>
                  <span>Days dry-aged</span>
                </div>
                <div className={styles.stat}>
                  <b>12</b>
                  <span>Hour smoked ribs</span>
                </div>
                <div className={styles.stat}>
                  <b>100%</b>
                  <span>Oak-fired, always</span>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <Image
                  src="/demos/ember-oak/dish-1.jpg"
                  alt="Sliced dry-aged ribeye with flaky sea salt and thyme on a dark plate"
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.tag}>The Craft</span>
                <h3>Aged. Fired. Rested.</h3>
                <p>
                  Prime beef rests in our aging room for up to 45 days, developing
                  the deep, concentrated flavor that defines every steak we serve.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.emberRule} aria-hidden="true" />
        </section>

        {/* ---------- Signature dishes ---------- */}
        <section className={`${styles.section} ${styles.wrap}`} aria-labelledby="signature-heading">
          <div className={styles.center}>
            <p className={styles.eyebrow}>Signature Dishes</p>
            <h2 className={styles.h2} id="signature-heading">
              The Plates We&apos;re Known For
            </h2>
            <p className={styles.lede}>
              Three dishes that built our name — each one touched by oak fire and
              finished with care.
            </p>
          </div>
          <div className={styles.cards}>
            {SIGNATURE.map((dish) => (
              <article key={dish.name} className={styles.card}>
                <div className={styles.cardImg}>
                  <Image
                    src={dish.img}
                    alt={dish.alt}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1200px) 33vw, 360px"
                  />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.tag}>{dish.tag}</span>
                  <h3>{dish.name}</h3>
                  <p>{dish.copy}</p>
                  <span className={styles.price}>{dish.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Full menu ---------- */}
        <section id="menu" className={`${styles.section} ${styles.wrap}`} aria-labelledby="menu-heading">
          <div className={styles.center}>
            <p className={styles.eyebrow}>The Menu</p>
            <h2 className={styles.h2} id="menu-heading">
              Dinner, Done Right
            </h2>
            <p className={styles.lede}>
              Served nightly from 5 PM. Ask your server about dry-aging
              selections and tonight&apos;s cuts from the ember room.
            </p>
          </div>
          <div className={styles.menuBoard}>
            <div className={styles.menuCols}>
              {MENU.map((cat) => (
                <div key={cat.title} className={styles.menuCat}>
                  <h3>{cat.title}</h3>
                  {cat.items.map(([name, price, desc]) => (
                    <div key={name} className={styles.menuItem}>
                      <div className={styles.menuRow}>
                        <h4>{name}</h4>
                        <span className={styles.dots} aria-hidden="true" />
                        <span className={styles.price}>{price}</span>
                      </div>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p className={styles.menuNote}>
              A 20% service charge is added for parties of six or more. Please tell
              us about allergies — our kitchen is happy to adapt.
            </p>
          </div>
        </section>

        {/* ---------- Gallery ---------- */}
        <section id="gallery" className={`${styles.section} ${styles.wrap}`} aria-labelledby="gallery-heading">
          <div className={styles.center}>
            <p className={styles.eyebrow}>Gallery</p>
            <h2 className={styles.h2} id="gallery-heading">
              A Glimpse Inside
            </h2>
            <p className={styles.lede}>
              Candlelight, oak smoke, and plates that speak for themselves.
            </p>
          </div>
          <div className={styles.strip}>
            {GALLERY.map((g) => (
              <figure key={g.caption}>
                <Image
                  src={g.img}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 720px) 78vw, 480px"
                />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------- Hours & location ---------- */}
        <section id="visit" className={`${styles.section} ${styles.wrap}`} aria-labelledby="visit-heading">
          <div className={styles.center}>
            <p className={styles.eyebrow}>Hours &amp; Location</p>
            <h2 className={styles.h2} id="visit-heading">
              Find Us in the Heart of Houston
            </h2>
          </div>
          <div className={styles.visitGrid}>
            <div className={styles.infoCard}>
              <h3>Address</h3>
              <address>
                Ember &amp; Oak
                <br />
                4210 Kirby Dr
                <br />
                Houston, TX 77098
              </address>
            </div>
            <div className={styles.infoCard}>
              <h3>Hours</h3>
              <ul>
                {[
                  ["Monday", "Closed"],
                  ["Tuesday", "5 PM – 11 PM"],
                  ["Wednesday", "5 PM – 11 PM"],
                  ["Thursday", "5 PM – 11 PM"],
                  ["Friday", "5 PM – 11 PM"],
                  ["Saturday", "5 PM – 11 PM"],
                  ["Sunday", "5 PM – 11 PM"],
                ].map(([day, hours]) => (
                  <li
                    key={day}
                    className={`${styles.hoursRow} ${hours === "Closed" ? styles.closed : ""}`}
                  >
                    <span>{day}</span>
                    <span>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.infoCard}>
              <h3>Contact</h3>
              <p>Reservations: (713) 555-0184</p>
              <p>Private dining: (713) 555-0184</p>
              <p>
                Valet parking nightly from 5 PM.
                <br />
                Dress code: smart casual.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Reservations ---------- */}
        <section id="reservations" className={`${styles.section} ${styles.wrap}`} aria-labelledby="res-heading">
          <div className={styles.center}>
            <p className={styles.eyebrow}>Reservations</p>
            <h2 className={styles.h2} id="res-heading">
              Reserve Your Table
            </h2>
            <p className={styles.lede}>
              Tables release 30 days out and weekends fill fast — book ahead for
              the ember room.
            </p>
          </div>
          <div className={styles.formCard}>
            <ReservationForm />
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.footGrid}>
            <div>
              <h3 className={styles.serif}>
                Ember <span style={{ color: "#e8a04c" }}>&amp;</span> Oak
              </h3>
              <address>
                4210 Kirby Dr, Houston, TX 77098
                <br />
                Tue–Sun, 5 PM – 11 PM · Closed Mondays
                <br />
                (713) 555-0184
              </address>
            </div>
            <div>
              <p className={styles.footHead}>Explore</p>
              <nav className={styles.footNav} aria-label="Footer">
                <a href="#menu">Menu</a>
                <a href="#story">Our Story</a>
                <a href="#gallery">Gallery</a>
                <a href="#reservations">Reservations</a>
                <a href="#visit">Visit</a>
              </nav>
            </div>
            <div>
              <p className={styles.footHead}>Good to know</p>
              <p>
                Valet nightly from 5 PM.
                <br />
                Private dining for parties of 9+.
                <br />
                Oak-fired everything — always.
              </p>
            </div>
          </div>
          <p className={styles.demoLabel}>
            <strong>Concept demo</strong> — a fictional restaurant website designed
            by Sheikh Muqtasid. Ember &amp; Oak, 4210 Kirby Dr, Houston, TX 77098
            is an imaginary restaurant; the phone number and hours are
            illustrative.
          </p>
        </div>
      </footer>
    </>
  );
}
