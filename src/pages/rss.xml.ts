import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Grogz's Blog",
    description: "Musings of Gregor Gilchrist",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**.mdx"),
  });
