import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24" horizontal="center" gap="48">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" horizontal="center" align="center" gap="16">
        <Heading variant="display-strong-l" align="center" className="gradient-text">
          Featured Engineering & Projects
        </Heading>
        <span style={{ color: "var(--neutral-on-background-weak)", textAlign: "center", fontSize: "1.1rem" }}>
          A curated collection of full-stack web applications, live enterprise platforms, and mobile solutions.
        </span>
      </Column>
      <Projects />
    </Column>
  );
}
