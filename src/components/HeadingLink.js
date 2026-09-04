"use client";

import { Heading, Flex, IconButton, useToast } from "@once-ui-system/core";
import styles from "@/components/HeadingLink.module.scss";

export const HeadingLink = ({ id, level = 2, children, style }) => {
  const { addToast } = useToast();

  const copyURL = (targetId) => {
    const url = `${window.location.origin}${window.location.pathname}#${targetId}`;
    navigator.clipboard.writeText(url).then(
      () => {
        addToast({
          variant: "success",
          message: "Link copied to clipboard.",
        });
      },
      () => {
        addToast({
          variant: "danger",
          message: "Failed to copy link.",
        });
      },
    );
  };

  const variantMap = {
    1: "display-strong-xs",
    2: "heading-strong-xl",
    3: "heading-strong-l",
    4: "heading-strong-m",
    5: "heading-strong-s",
    6: "heading-strong-xs",
  };

  const variant = variantMap[level] || "heading-strong-xl";
  const asTag = `h${level}`;

  return (
    <Flex
      style={style}
      onClick={() => copyURL(id)}
      className={styles.control}
      vertical="center"
      gap="4"
    >
      <Heading className={styles.text} id={id} variant={variant} as={asTag}>
        {children}
      </Heading>
      <IconButton
        className={styles.visibility}
        size="s"
        icon="openLink"
        variant="ghost"
        tooltip="Copy"
        tooltipPosition="right"
      />
    </Flex>
  );
};
