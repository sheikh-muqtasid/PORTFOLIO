"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  reverse?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  reverse = false,
}) => {
  return (
    <Flex
      direction={reverse ? "row-reverse" : "row"}
      s={{ direction: "column" }}
      fillWidth
      gap="32"
      padding="24"
      className={`pro-card ${styles.card}`}
      vertical="center"
    >
      <Column flex={6} className="pro-card-image-wrap">
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          aspectRatio="16 / 9"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      </Column>
      <Column flex={6} gap="24" paddingX="16" paddingY="12">
        {link && (
          <div className="live-badge" style={{ width: "fit-content" }}>
            <span className="live-dot" /> Live Web App
          </div>
        )}
        {title && (
          <Heading as="h2" wrap="balance" variant="display-strong-xs">
            {title}
          </Heading>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="20" wrap paddingTop="16" vertical="center">
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-strong-m">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="openLink"
                  style={{
                    margin: "0",
                    width: "fit-content",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                  href={link}
                >
                  <Text variant="body-strong-m">View Live Site ↗</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Column>
    </Flex>
  );
};
