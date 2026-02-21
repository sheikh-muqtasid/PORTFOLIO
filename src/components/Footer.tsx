import { Row, IconButton, Text, Button } from "@once-ui-system/core";
import { person, social, about } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      s={{ direction: "column" }}
    >
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>

        <Row gap="16" horizontal="center">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              )
          )}
        </Row>

        {about.calendar.display && (
          <Row gap="16" horizontal="center" s={{ direction: "column" }}>
            <Button href={about.calendar.link} variant="secondary" size="s" arrowIcon>
              {about.calendar.label}
            </Button>
          </Row>
        )}
      </Row>

      <Row height="128" hide s={{ hide: false }} />
    </Row>
  );
};
