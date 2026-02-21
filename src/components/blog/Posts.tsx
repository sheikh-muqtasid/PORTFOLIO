import { getPosts } from "@/utils/utils";
import { Column, Row, SmartLink, Tag, Text } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";

interface PostsProps {
  range?: [number, number?];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  direction = "row",
  exclude = [],
}: PostsProps) {
  let allPosts = getPosts(["src", "app", "blog", "posts"]);

  if (exclude.length > 0) {
    allPosts = allPosts.filter((post) => !exclude.includes(post.slug));
  }

  const sortedPosts = allPosts.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedPosts = range
    ? sortedPosts.slice(range[0] - 1, range[1] ?? sortedPosts.length)
    : sortedPosts;

  const gridColumns = columns === "2" ? "1fr 1fr" : columns === "3" ? "1fr 1fr 1fr" : "1fr";

  return (
    <Column fillWidth gap="l">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridColumns,
          gap: "var(--static-space-24)",
          width: "100%",
        }}
      >
        {displayedPosts.map((post) => (
          <SmartLink
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{ display: "block", textDecoration: "none" }}
          >
            <Column
              gap="8"
              padding="m"
              radius="l"
              border="neutral-alpha-weak"
              background="surface"
              fillWidth
              style={{ height: "100%", transition: "border-color 0.2s" }}
            >
              {post.metadata.tag && (
                <Tag size="s">{post.metadata.tag}</Tag>
              )}
              <Text variant="heading-strong-m">{post.metadata.title}</Text>
              {post.metadata.summary && (
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {post.metadata.summary}
                </Text>
              )}
              <Text variant="label-default-xs" onBackground="neutral-weak" marginTop="4">
                {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
              </Text>
            </Column>
          </SmartLink>
        ))}
      </div>
    </Column>
  );
}
