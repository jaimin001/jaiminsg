import { getBlogPosts } from "app/tech/utils";

export const baseUrl = "https://jaiminsg.vercel.app";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/tech/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/tech"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
