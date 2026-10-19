import Image from "next/image";
import ReservationForm from "./components/ReservationForm";

const SIGNATURES = [
  {
    img: "/demos/casa-fuego/dish-1.jpg",
    alt: "Three tacos al pastor topped with charred pineapple, onion, and cilantro on a ceramic plate",
    tag: "House Favorite",
    name: "Tacos al Pastor",
    desc: "Achiote-marinated pork shaved fresh off the trompo, crowned with charred pineapple, white onion, and cilantro on house-pressed corn tortillas.",
    price: "$13.95",
    note: "three to an order",
    spice: "Medium heat",
  },
  {
    img: "/demos/casa-fuego/dish-2.jpg",
    alt: "Salted-rim margarita with lime wheel beside a plate of elote street corn with cotija and chili",
    tag: "Cantina Classic",
    name: "La Casa Margarita & Elote",
    desc: "Our signature margarita — blanco tequila, fresh-squeezed lime, agave, salted rim — paired with charred street corn rolled in crema, cotija, and tajín.",
    price: "$11.00",
    note: "margarita · elote $5.50",
    spice: "Mild",
  },
];

const MENU = [
  {
    cat: "Tacos",
    sub: "On house-pressed corn tortillas",
    items: [
      {
        name: "Tacos al Pastor",
        price: "$4.50",
        desc: "Achiote pork off the trompo, charred pineapple, onion, cilantro.",
        badge: "House favorite",
      },
      {
        name: "Baja Fish",
        price: "$5.25",
        desc: "Crispy cod, chipotle crema, shredded cabbage, fresh lime.",
      },
      {
        name: "Carne Asada",
        price: "$5.00",
        desc: "Grilled skirt steak, salsa roja, onion, cilantro.",
      },
      {
        name: "Carnitas",
        price: "$4.75",
        desc: "Slow-braised pork, pickled red onion, salsa verde.",
      },
      {
        name: "Hongos",
        price: "$4.25",
        desc: "Roasted mushrooms, poblano rajas, crema, cotija. (V)",
      },
    ],
  },
  {
    cat: "Burritos",
    sub: "Wrapped in 12-inch flour tortillas",
    items: [
      {
        name: "Fuego Burrito",
        price: "$12.95",
        desc: "Carne asada, cilantro rice, black beans, cheese, guacamole, salsa roja.",
        badge: "Most loved",
      },
      {
        name: "Breakfast Burrito",
        price: "$9.95",
        desc: "Chorizo, scrambled egg, crispy potato, cheese, salsa verde. Weekends till 2pm.",
      },
      {
        name: "Garden Burrito",
        price: "$10.95",
        desc: "Grilled seasonal vegetables, black beans, rice, avocado, salsa verde. (V)",
      },
    ],
  },
  {
    cat: "Quesadillas",
    sub: "Grilled with Oaxaca cheese",
    items: [
      {
        name: "Birria Quesadilla",
        price: "$13.50",
        desc: "Slow-braised beef birria with rich consommé for dipping.",
        badge: "Most loved",
      },
      { name: "Clásica", price: "$9.50", desc: "Oaxaca cheese, sautéed mushrooms, epazote." },
      {
        name: "Huitlacoche",
        price: "$11.95",
        desc: "Corn truffle, squash blossom, Oaxaca cheese. (V)",
      },
    ],
  },
  {
    cat: "Cantina Drinks",
    sub: "Fresh-squeezed, never from a mix",
    items: [
      {
        name: "La Casa Margarita",
        price: "$11.00",
        desc: "Blanco tequila, fresh lime, agave nectar, salted rim.",
        badge: "House favorite",
      },
      {
        name: "Fuego Margarita",
        price: "$12.50",
        desc: "Reposado, habanero-infused agave, tajín rim. For the brave.",
      },
      {
        name: "Paloma Rosa",
        price: "$10.50",
        desc: "Blanco tequila, fresh grapefruit, lime, sparkling water.",
      },
      { name: "Horchata", price: "$4.50", desc: "House cinnamon rice milk, served over ice." },
      { name: "Jamaica", price: "$4.00", desc: "Tart hibiscus iced tea, lightly sweetened." },
      {
        name: "Jarritos / Mexican Coke",
        price: "$3.50",
        desc: "Assorted Jarritos flavors or ice-cold Coca-Cola in the bottle.",
      },
    ],
  },
  {
    cat: "Desserts",
    sub: "Made fresh every afternoon",
    items: [
      {
        name: "Churros con Chocolate",
        price: "$7.50",
        desc: "Cinnamon-sugar churros with warm drinking chocolate.",
      },
      {
        name: "Flan de Cajeta",
        price: "$6.95",
        desc: "Silky caramel custard with a whisper of sea salt.",
      },
      {
        name: "Tres Leches Cake",
        price: "$7.25",
        desc: "Milk-soaked sponge, macerated strawberries, crema.",
      },
    ],
  },
];

const BUNTING = [
  { id: "bunting-1", color: "#c0392b" },
  { id: "bunting-2", color: "#f0a833" },
  { id: "bunting-3", color: "#5e7d46" },
  { id: "bunting-4", color: "#c2602e" },
  { id: "bunting-5", color: "#f0a833" },
  { id: "bunting-6", color: "#c0392b" },
  { id: "bunting-7", color: "#5e7d46" },
];

function TacoIllustration() {
  return (
    <svg viewBox="0 0 200 140" width="120" height="84" aria-hidden="true" role="presentation">
      <path d="M20 120 A80 80 0 0 1 180 120 Z" fill="#f2c063" stroke="#a34d22" strokeWidth="4" />
      <path d="M30 118 A70 70 0 0 1 170 118 Z" fill="#e8a94a" />
      <g>
        <circle cx="65" cy="88" r="10" fill="#7a4a2b" />
        <circle cx="95" cy="78" r="11" fill="#8a5633" />
        <circle cx="125" cy="88" r="10" fill="#7a4a2b" />
        <circle cx="80" cy="96" r="9" fill="#8a5633" />
        <circle cx="110" cy="98" r="9" fill="#7a4a2b" />
        <path d="M55 84 l8 -12 8 12z" fill="#5e7d46" />
        <path d="M100 70 l8 -12 8 12z" fill="#6b9448" />
        <path d="M138 78 l8 -12 8 12z" fill="#5e7d46" />
        <circle cx="72" cy="70" r="6" fill="#c0392b" />
        <circle cx="118" cy="66" r="6" fill="#c0392b" />
      </g>
    </svg>
  );
}

export default function CasaFuegoPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="cf-hero" id="top" aria-label="Welcome to Casa Fuego">
        <Image
          src="/demos/casa-fuego/hero.jpg"
          alt="Golden-hour glow inside Casa Fuego's dining room, with papel picado banners overhead and a long wooden table covered in tacos, salsas, and fresh limes"
          fill
          priority
          sizes="100vw"
          className="cf-hero-img"
          style={{ objectFit: "cover" }}
        />
        <div className="cf-hero-content">
          <span className="cf-eyebrow">Houston · Taqueria &amp; Cantina</span>
          <h1 className="cf-display">
            Tacos worth <em>crossing town</em> for.
          </h1>
          <p className="cf-lede">
            Trompo-roasted al pastor, hand-shaken margaritas, and a dining room that glows like a
            fiesta — right here in Montrose, every single day.
          </p>
          <div className="cf-hero-actions">
            <a className="cf-btn" href="#reservations">
              Reserve a Table
            </a>
            <a className="cf-btn cf-btn-ghost" href="#menu">
              See the Menu
            </a>
          </div>
        </div>
      </section>

      {/* ---------- STORY ---------- */}
      <section className="cf-section cf-story" id="story" aria-labelledby="cf-story-h">
        <div className="cf-wrap cf-story-grid">
          <div className="cf-story-copy">
            <p className="cf-kicker">Our Story</p>
            <h2 className="cf-display" id="cf-story-h">
              Three generations, <span className="cf-accent">one trompo.</span>
            </h2>
            <p>
              Casa Fuego started in 2016 with Abuela Elena&apos;s recipe box, a secondhand trompo,
              and a stubborn belief that a taco should never be boring. The Reyes family still
              marinates every batch of al pastor for a full 24 hours, presses tortillas to order,
              and squeezes every lime by hand.
            </p>
            <p>
              Today the dining room hums with birthday songs, first dates, and regulars who
              don&apos;t need a menu — but newcomers are always family by dessert.
            </p>
            <ul className="cf-story-stats" aria-label="Casa Fuego by the numbers">
              <li className="cf-stat">
                <strong>2016</strong>
                <span>Family-founded</span>
              </li>
              <li className="cf-stat">
                <strong>24h</strong>
                <span>Al pastor marinade</span>
              </li>
              <li className="cf-stat">
                <strong>100%</strong>
                <span>Tortillas pressed daily</span>
              </li>
            </ul>
          </div>
          <div>
            <svg
              className="cf-bunting"
              viewBox="0 0 600 50"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {BUNTING.map((b, i) => (
                <g key={b.id}>
                  <line
                    x1={i * 86}
                    y1="0"
                    x2={i * 86 + 43}
                    y2="50"
                    stroke="#3d2313"
                    strokeWidth="2"
                  />
                  <line
                    x1={i * 86 + 86}
                    y1="0"
                    x2={i * 86 + 43}
                    y2="50"
                    stroke="#3d2313"
                    strokeWidth="2"
                  />
                  <path
                    d={`M${i * 86 + 4} 2 L${i * 86 + 82} 2 L${i * 86 + 43} 46 Z`}
                    fill={b.color}
                  />
                  <circle cx={i * 86 + 43} cy="22" r="6" fill="#fff8ec" opacity="0.75" />
                </g>
              ))}
            </svg>
            <figure className="cf-story-art" style={{ margin: "1.2rem 0 0" }}>
              <div className="cf-dish-art" style={{ aspectRatio: "4 / 4.6" }}>
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <TacoIllustration />
                  <p
                    className="cf-display"
                    style={{ fontSize: "1.5rem", color: "#3d2313", margin: "0.8rem 0 0.3rem" }}
                  >
                    &ldquo;De nuestra familia a tu mesa.&rdquo;
                  </p>
                  <p style={{ color: "#6b4a2f", fontWeight: 700, margin: 0 }}>
                    From our family to your table.
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- SIGNATURES ---------- */}
      <section className="cf-section cf-signature" id="signatures" aria-labelledby="cf-sig-h">
        <div className="cf-wrap">
          <p className="cf-kicker">Can&apos;t-miss plates</p>
          <h2 className="cf-display" id="cf-sig-h">
            Signature <span className="cf-accent">Dishes</span>
          </h2>
          <p className="cf-standfirst">
            The three plates Houston keeps talking about — the ones our regulars order before they
            even sit down.
          </p>
          <div className="cf-dish-grid">
            {SIGNATURES.map((d) => (
              <article className="cf-dish" key={d.name}>
                <div className="cf-dish-media">
                  <Image src={d.img} alt={d.alt} fill sizes="(max-width: 700px) 100vw, 33vw" />
                  <span className="cf-dish-tag">{d.tag}</span>
                </div>
                <div className="cf-dish-body">
                  <h3 className="cf-display">{d.name}</h3>
                  <p>{d.desc}</p>
                  <div className="cf-dish-foot">
                    <span className="cf-price">
                      {d.price} <small>{d.note}</small>
                    </span>
                    <span className="cf-spice">{d.spice}</span>
                  </div>
                </div>
              </article>
            ))}
            <article className="cf-dish">
              <div className="cf-dish-art">
                <TacoIllustration />
              </div>
              <div className="cf-dish-body">
                <h3 className="cf-display">Birria Quesadilla</h3>
                <p>
                  Slow-braised beef folded into a crisp Oaxaca-cheese quesadilla, served with a
                  steaming cup of consommé for dipping. Weekend lines form for a reason.
                </p>
                <div className="cf-dish-foot">
                  <span className="cf-price">
                    $13.50 <small>with consommé</small>
                  </span>
                  <span className="cf-spice">Rich &amp; savory</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- FULL MENU ---------- */}
      <section className="cf-section cf-menu" id="menu" aria-labelledby="cf-menu-h">
        <div className="cf-wrap">
          <p className="cf-kicker">Eat &amp; drink</p>
          <h2 className="cf-display" id="cf-menu-h">
            The Full <span className="cf-accent">Menu</span>
          </h2>
          <p className="cf-menu-note">
            Everything is made in-house daily. Tacos come two or three to an order; ask your server
            about today&apos;s salsa lineup — we always have at least five on the bar.
          </p>
          <div className="cf-menu-grid">
            {MENU.map((cat) => (
              <div className="cf-menu-cat" key={cat.cat}>
                <h3 className="cf-display">{cat.cat}</h3>
                <p
                  style={{
                    margin: "0 0 0.4rem",
                    fontSize: "0.88rem",
                    color: "#d9b98f",
                    fontStyle: "italic",
                  }}
                >
                  {cat.sub}
                </p>
                <ul>
                  {cat.items.map((item) => (
                    <li className="cf-menu-item" key={item.name}>
                      <div className="cf-menu-line">
                        <strong>
                          {item.name}
                          {item.badge && <span className="cf-menu-badge">{item.badge}</span>}
                        </strong>
                        <span className="cf-dots" aria-hidden="true" />
                        <span className="cf-item-price">{item.price}</span>
                      </div>
                      <p>{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- GALLERY ---------- */}
      <section className="cf-gallery" id="gallery" aria-labelledby="cf-gal-h">
        <div
          className="cf-wrap"
          style={{ padding: "clamp(3rem, 8vw, 5.5rem) clamp(1.25rem, 5vw, 2.5rem) 1.6rem" }}
        >
          <p className="cf-kicker">A little taste</p>
          <h2 className="cf-display" id="cf-gal-h">
            From the <span className="cf-accent">Casa</span>
          </h2>
        </div>
        <ul className="cf-strip" aria-label="Photo gallery">
          <li>
            <figure>
              <Image
                src="/demos/casa-fuego/hero.jpg"
                alt="The Casa Fuego dining room glowing at golden hour with papel picado and a taco-laden table"
                width={640}
                height={420}
                sizes="(max-width: 700px) 80vw, 33vw"
              />
              <figcaption>The dining room at golden hour</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <Image
                src="/demos/casa-fuego/dish-1.jpg"
                alt="Close-up of tacos al pastor with charred pineapple, onion, and cilantro"
                width={640}
                height={420}
                sizes="(max-width: 700px) 80vw, 33vw"
              />
              <figcaption>Al pastor, fresh off the trompo</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <Image
                src="/demos/casa-fuego/dish-2.jpg"
                alt="A salted-rim margarita and elote street corn on a wooden cantina table"
                width={640}
                height={420}
                sizes="(max-width: 700px) 80vw, 33vw"
              />
              <figcaption>Elote &amp; margaritas on the patio</figcaption>
            </figure>
          </li>
        </ul>
      </section>

      {/* ---------- RESERVATIONS ---------- */}
      <section className="cf-section cf-reserve" id="reservations" aria-labelledby="cf-res-h">
        <div className="cf-wrap">
          <p className="cf-kicker">Save your seat</p>
          <h2 className="cf-display" id="cf-res-h">
            Reserve a <span className="cf-accent">Table</span>
          </h2>
          <p className="cf-standfirst">
            Parties of 1–12, bookable same-day. For 13 or more, call us at{" "}
            <a href="tel:+17135550237" style={{ color: "#fff", fontWeight: 800 }}>
              (713) 555-0237
            </a>{" "}
            and we&apos;ll set the long table.
          </p>
          <ReservationForm />
        </div>
      </section>

      {/* ---------- VISIT ---------- */}
      <section className="cf-section cf-visit" id="visit" aria-labelledby="cf-visit-h">
        <div className="cf-wrap">
          <p className="cf-kicker">Hours &amp; location</p>
          <h2 className="cf-display" id="cf-visit-h">
            Come <span className="cf-accent">Hungry</span>
          </h2>
          <p className="cf-standfirst">
            Two blocks from the Menil, with free parking behind the building and a patio made for
            long evenings.
          </p>
          <div className="cf-visit-grid">
            <div className="cf-card">
              <h3 className="cf-display">Hours</h3>
              <ul className="cf-hours">
                <li>
                  <span>Monday – Thursday</span>
                  <span>11:00 AM – 10:00 PM</span>
                </li>
                <li>
                  <span>Friday – Saturday</span>
                  <span>11:00 AM – 12:00 AM</span>
                </li>
                <li>
                  <span>Sunday</span>
                  <span>11:00 AM – 10:00 PM</span>
                </li>
              </ul>
              <p style={{ margin: "1rem 0 0", fontSize: "0.95rem", color: "#6b4a2f" }}>
                Kitchen closes 30 minutes before close. Happy hour weekdays 3–6 PM: $8 house
                margaritas.
              </p>
            </div>
            <div className="cf-card">
              <h3 className="cf-display">Find Us</h3>
              <address>
                <strong>Casa Fuego</strong>
                2418 Dunlavy St
                <br />
                Houston, TX 77006
              </address>
              <a className="cf-phone" href="tel:+17135550237">
                (713) 555-0237
              </a>
              <div
                className="cf-map-placeholder"
                role="img"
                aria-label="Illustrated map marker showing Casa Fuego's fictional location on Dunlavy Street in Montrose, Houston"
              >
                📍 Montrose, Houston — corner of Dunlavy &amp; West Alabama
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
