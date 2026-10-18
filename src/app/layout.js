import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";
import {
  Background,
  Column,
  Flex,
  Meta,
  RevealFx,
} from "@once-ui-system/core";
import { Footer, Header, RouteGuard, Providers } from "@/components";
import { baseURL, effects, fonts, style, dataStyle, home } from "@/resources";

export async function generateMetadata() {
  const title = "Sheikh Muqtasid — Custom Websites for Businesses";
  const description =
    "Custom-coded, high-performance websites and web applications built with Next.js, React, and Node.js for restaurants, local businesses, and growing startups. Fast, secure, and built to convert.";

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
    icons: {
      icon: "/images/avatar.jpg",
    },
  };
}

export default async function RootLayout({ children }) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      data-theme="dark"
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  root.setAttribute('data-theme', 'dark');
                  localStorage.setItem('data-theme', 'dark');
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
              brand: style.brand,
              accent: style.accent,
              neutral: style.neutral,
              solid: style.solid,
              "solid-style": style.solidStyle,
              border: style.border,
              surface: style.surface,
              transition: style.transition,
              scaling: style.scaling,
              "viz-style": dataStyle.variant,
            })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <Providers>
        <Column
          as="body"
          suppressHydrationWarning
          background="page"
          fillWidth
          style={{ minHeight: "100vh", backgroundColor: "#0A0A0B" }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          {/* Subtle noise grain texture overlay */}
          <div className="noise-overlay" aria-hidden="true" />
          
          <Header />
          <Flex zIndex={0} fillWidth padding="0" horizontal="center" flex={1}>
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
