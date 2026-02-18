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
      padding="m" 
      background="surface" 
      radius="l" 
      border="neutral-medium"
      style={{ minWidth: '300px', maxWidth: '300px' }}
    >
      <div style={{ position: 'relative', width: '100%', height: '120px', borderRadius: 'var(--radius-m)', overflow: 'hidden' }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Column gap="s">
        <Heading as="h3" variant="heading-strong-m">
          {title}
        </Heading>
         {/* <Text variant="body-default-s" onBackground="neutral-weak" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {description}
        </Text> */}
        <Button
            href={href}
            variant="secondary"
            size="s"
            fillWidth
        >
            View Project
        </Button>
      </Column>
    </Column>
  );
};
