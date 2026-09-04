"use client";

import { useState } from "react";
import { Button, Row, Text } from "@once-ui-system/core";
import { socialSharing } from "@/resources";

export function ShareSection({ title, url }) {
  const [copied, setCopied] = useState(false);

  if (!socialSharing.display) return null;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    x: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
  };

  const platformLabels = {
    x: "X",
    linkedin: "LinkedIn",
    facebook: "Facebook",
    reddit: "Reddit",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    email: "Email",
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const platforms = socialSharing.platforms || {};

  return (
    <Row fillWidth gap="8" wrap marginTop="32" vertical="center">
      <Text variant="label-strong-s" onBackground="neutral-weak">
        Share:
      </Text>
      {Object.entries(platforms).map(([platform, enabled]) => {
        if (!enabled) return null;

        if (platform === "copyLink") {
          return (
            <Button
              key="copyLink"
              size="s"
              variant="secondary"
              onClick={handleCopy}
              prefixIcon="link"
            >
              {copied ? "Copied!" : "Copy link"}
            </Button>
          );
        }

        const href = shareLinks[platform];
        if (!href) return null;

        return (
          <Button
            key={platform}
            size="s"
            variant="secondary"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {platformLabels[platform] || platform}
          </Button>
        );
      })}
    </Row>
  );
}
