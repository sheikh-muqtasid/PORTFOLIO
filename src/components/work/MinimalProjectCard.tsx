"use client";

import {
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Button
} from "@once-ui-system/core";
import Image from "next/image";

interface MinimalProjectCardProps {
  href: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export const MinimalProjectCard: React.FC<MinimalProjectCardProps> = ({
  href,
  image,
  title,
  description,
  link,
}) => {
  return (
    <Column 
      fillWidth 
      gap="m" 
      padding="16" 
      radius="l"
      className="pro-card"
      style={{ minWidth: '320px', maxWidth: '320px' }}
    >
      <div className="pro-card-image-wrap" style={{ position: 'relative', width: '100%', height: '140px' }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
        {link && (
          <div 
            className="live-badge" 
            style={{ 
              position: 'absolute', 
              top: '10px', 
              right: '10px', 
              background: 'rgba(0, 0, 0, 0.65)', 
              backdropFilter: 'blur(8px)',
              padding: '3px 8px',
              fontSize: '0.65rem'
            }}
          >
            <span className="live-dot" /> Live
          </div>
        )}
      </div>
      <Column gap="s">
        <Heading as="h3" variant="heading-strong-m" wrap="balance" style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}>
          {title}
        </Heading>
        <Flex gap="8" fillWidth marginTop="8">
          <Button
            href={href}
            variant="secondary"
            size="s"
            style={{ flex: 1 }}
          >
            Case Study
          </Button>
          {link && (
            <Button
              href={link}
              variant="primary"
              size="s"
              style={{ flex: 1 }}
              prefixIcon="openLink"
            >
              Live Site
            </Button>
          )}
        </Flex>
      </Column>
    </Column>
  );
};
