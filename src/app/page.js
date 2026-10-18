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

      {/* 5.3 Services */}
      <ServicesSection />

      {/* 5.4 Selected Work */}
      <ProjectsSection />

      {/* 5.5 Process */}
      <ProcessSection />

      {/* 5.6 Testimonials */}
      <TestimonialsSection />

      {/* 5.7 About */}
      <AboutSection />

      {/* 5.8 Tech & Tools */}
      <TechStackSection />

      {/* 5.9 FAQ */}
      <FAQSection />

      {/* 5.10 Contact / Get in Touch */}
      <ContactForm />
    </main>
  );
}
