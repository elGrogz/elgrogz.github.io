import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Grogz's Blog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**.mdx"),
  });
