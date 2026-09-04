import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import { slugify as transliterate } from "transliteration";

import {
  Heading,
  HeadingLink,
  Text,
  InlineCode,
  CodeBlock,
  Accordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card,
  Grid,
  Row,
  Column,
  Icon,
  Media,
  SmartLink,
  List,
  ListItem,
  Line,
} from "@once-ui-system/core";
import { ScrollingSlider } from "@/components/work/ScrollingSlider";

function CustomLink({ href, children, ...props }) {
  if (href?.startsWith("/")) {
    return (
      <SmartLink href={href} {...props}>
        {children}
      </SmartLink>
    );
  }

  if (href?.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function createImage({ alt, src, ...props }) {
  if (!src) {
    console.error("Media requires a valid 'src' property.");
    return null;
  }

  return (
    <Media
      marginTop="8"
      marginBottom="16"
      enlarge
      radius="m"
      border="neutral-alpha-medium"
      className="pro-media-compact"
      sizes="(max-width: 760px) 100vw, 760px"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function slugify(str) {
  const strWithAnd = String(str).replace(/&/g, " and ");
  return transliterate(strWithAnd, {
    lowercase: true,
    separator: "-",
  }).replace(/\-\-+/g, "-");
}

function createHeading(as) {
  const CustomHeading = ({ children, ...props }) => {
    const slug = typeof children === "string" ? slugify(children) : "heading";
    const isMajor = as === "h2" || as === "h3";
    return (
      <HeadingLink
        className={isMajor ? "case-study-heading" : ""}
        marginTop="24"
        marginBottom="12"
        as={as}
        id={slug}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  };

  CustomHeading.displayName = `${as}`;
  return CustomHeading;
}

function createParagraph({ children }) {
  return (
    <Text
      style={{ lineHeight: "180%", letterSpacing: "-0.01em" }}
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="16"
    >
      {children}
    </Text>
  );
}

function createInlineCode({ children }) {
  return <InlineCode>{children}</InlineCode>;
}

function createCodeBlock(props) {
  if (props.children && props.children.props && props.children.props.className) {
    const { className, children } = props.children.props;
    const language = className.replace("language-", "");
    const label = language.charAt(0).toUpperCase() + language.slice(1);

    return (
      <CodeBlock
        marginTop="8"
        marginBottom="16"
        codes={[
          {
            code: children,
            language,
            label,
          },
        ]}
        copyButton={true}
      />
    );
  }

  return <pre {...props} />;
}

function createList(as) {
  return ({ children }) => (
    <Column gap="4" marginTop="8" marginBottom="16">
      {children}
    </Column>
  );
}

function createListItem({ children }) {
  return (
    <div className="case-study-list-item">
      <span className="case-study-bullet">✦</span>
      <div style={{ flex: 1, lineHeight: "165%" }}>{children}</div>
    </div>
  );
}

function createHR() {
  return <div className="pro-divider" />;
}

const components = {
  p: createParagraph,
  h1: createHeading("h1"),
  h2: createHeading("h2"),
  h3: createHeading("h3"),
  h4: createHeading("h4"),
  h5: createHeading("h5"),
  h6: createHeading("h6"),
  img: createImage,
  a: CustomLink,
  code: createInlineCode,
  pre: createCodeBlock,
  ol: createList("ol"),
  ul: createList("ul"),
  li: createListItem,
  hr: createHR,
  Heading,
  Text,
  CodeBlock,
  InlineCode,
  Accordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card,
  Grid,
  Row,
  Column,
  Icon,
  Media,
  SmartLink,
  List,
  ListItem,
  Line,
  ScrollingSlider,
};

export function CustomMDX(props) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
