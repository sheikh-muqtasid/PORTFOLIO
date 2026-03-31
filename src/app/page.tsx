import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { ProjectSlider } from "@/components/work/ProjectSlider";
import { SkillsSlider } from "@/components/work/SkillsSlider";
import { ContactForm } from "@/components/ContactForm";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="128" paddingY="24" horizontal="center" className="hero-glow">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="48">
        <Column horizontal="center" gap="24">
          <RevealFx translateY="4" horizontal="center">
            <div className="avatar-float">
              <Avatar
                src={person.avatar}
                size="xl"
                style={{ width: '160px', height: '160px' }}
              />
            </div>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} horizontal="center">
            <Badge
              style={{ padding: 'var(--static-space-4) var(--static-space-12)' }}
            >
              {person.name}
            </Badge>
          </RevealFx>
        </Column>

        <Column maxWidth="s" horizontal="center" gap="32">
          <RevealFx translateY="12" delay={0.4} fillWidth horizontal="center">
            <Heading
              wrap="balance"
              variant="display-strong-xl"
              style={{ letterSpacing: '-0.02em', textAlign: 'center', lineHeight: '1.2' }}
              className="gradient-text"
            >
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="16" delay={0.6} fillWidth horizontal="center">
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-l"
              style={{ textAlign: 'center', lineHeight: '1.6' }}
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="20" delay={0.8} horizontal="center">
            <Row gap="16" wrap horizontal="center">
              <Button
                id="work"
                data-border="rounded"
                href="/work"
                variant="primary"
                size="l"
                arrowIcon
              >
                View Work
              </Button>
              <Button
                id="contact"
                data-border="rounded"
                href="mailto:sheikhmuqtasid@gmail.com"
                variant="secondary"
                size="l"
                prefixIcon="email"
              >
                Contact Me
              </Button>
            </Row>
          </RevealFx>
        </Column>

        {home.featured.display && (
          <RevealFx translateY="24" delay={1} paddingTop="m">
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={false}
              href={home.featured.href}
            >
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
        )}
      </Column>
      


      <Column fillWidth gap="64" horizontal="center">
        <RevealFx translateY="16" delay={0.6} fillWidth horizontal="center">
          <Column fillWidth gap="32" horizontal="center">
            <Heading variant="display-strong-xs">
              Selected Projects
            </Heading>
            <ProjectSlider />
          </Column>
        </RevealFx>

        <RevealFx translateY="16" delay={0.8} fillWidth horizontal="center">
          <Column fillWidth gap="32" horizontal="center">
            <Heading variant="display-strong-xs">
              Tech and Tools
            </Heading>
            <SkillsSlider />
          </Column>
        </RevealFx>
      </Column>

      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <ContactForm />
    </Column>
  );
}
