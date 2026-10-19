import { Schema } from "@once-ui-system/core";
import { home, person, baseURL, about } from "@/resources";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactForm } from "@/components/ContactForm";
import { Reveal, Marquee, SectionNumber } from "@/components/fx";

export async function generateMetadata() {
  const title = "Sheikh Muqtasid — Custom Websites for Businesses";
  const description =
    "Custom-coded, high-converting websites and web applications built with Next.js, React, and Node.js for restaurants, local businesses, and startups. Fast, secure, and built to convert.";

  return {
    title,
    description,
    metadataBase: new URL(baseURL),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title,
      description,
      url: baseURL,
      siteName: "Sheikh Muqtasid Portfolio",
      images: [
        {
          url: "/images/og/home.jpg",
          width: 1200,
          height: 630,
          alt: "Sheikh Muqtasid — Custom Websites for Businesses",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og/home.jpg"],
    },
  };
}

function MarqueeItems({ items }) {
  return (
    <>
      {items.map((item) => (
        <span key={item} className="flex items-center shrink-0">
          <span className="px-6 text-sm uppercase tracking-[0.25em] text-[#CFC3B1]">
            {item}
          </span>
          <span aria-hidden="true" className="text-[#E8702A] text-xs">
            ✦
          </span>
        </span>
      ))}
    </>
  );
}

function NumberedSection({ number, label, children }) {
  return (
    <Reveal className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionNumber number={number} label={label} />
      </div>
      {children}
    </Reveal>
  );
}

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      {/* Structured Schema Data */}
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/images/og/home.jpg`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* 5.2 Hero */}
      <HeroSection />

      {/* Marquee — services */}
      <Marquee speed={28} ariaLabel="Services offered" className="border-y border-white/10 bg-black/40 py-5">
        <MarqueeItems
          items={[
            "Custom Websites",
            "Online Ordering",
            "Table Reservations",
            "Local SEO",
            "Menu Design",
            "Speed Optimization",
          ]}
        />
      </Marquee>

      {/* 5.3 Services */}
      <NumberedSection number="01" label="Services">
        <ServicesSection />
      </NumberedSection>

      {/* 5.4 Selected Work */}
      <NumberedSection number="02" label="Selected Work">
        <ProjectsSection />
      </NumberedSection>

      {/* Marquee — tech */}
      <Marquee
        speed={38}
        direction="right"
        ariaLabel="Technologies"
        className="border-y border-white/10 bg-black/40 py-5"
      >
        <MarqueeItems
          items={[
            "Next.js",
            "React",
            "Node.js",
            "Tailwind CSS",
            "Three.js",
            "Framer Motion",
            "TypeScript",
          ]}
        />
      </Marquee>

      {/* 5.5 Process */}
      <NumberedSection number="03" label="Process">
        <ProcessSection />
      </NumberedSection>

      {/* 5.6 Testimonials */}
      <NumberedSection number="04" label="Testimonials">
        <TestimonialsSection />
      </NumberedSection>

      {/* 5.7 About */}
      <NumberedSection number="05" label="About">
        <AboutSection />
      </NumberedSection>

      {/* 5.8 Tech & Tools */}
      <NumberedSection number="06" label="Tech Stack">
        <TechStackSection />
      </NumberedSection>

      {/* 5.9 FAQ */}
      <NumberedSection number="07" label="FAQ">
        <FAQSection />
      </NumberedSection>

      {/* 5.10 Contact / Get in Touch */}
      <NumberedSection number="08" label="Contact">
        <ContactForm />
      </NumberedSection>
    </main>
  );
}
