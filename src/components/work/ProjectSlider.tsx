
import { getPosts } from "@/utils/utils";
import { ScrollingSlider } from "@/components/work/ScrollingSlider";
import { MinimalProjectCard } from "@/components/work/MinimalProjectCard";

export function ProjectSlider() {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return (
    <ScrollingSlider gap="32">
        {sortedProjects.map((post) => (
            <MinimalProjectCard
                key={post.slug}
                href={`/work/${post.slug}`}
                image={post.metadata.images[0]}
                title={post.metadata.title}
                description={post.metadata.summary}
                link={post.metadata.link || ""}
            />
        ))}
    </ScrollingSlider>
  );
}
