import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { BLOG_POSTS } from "@/lib/blogPosts";

const staticPaths = [
  "/",
  "/products",
  "/about",
  "/why-us",
  "/blog",
  "/contact",
  "/faq",
  "/shipping-policy",
  "/returns-refunds",
  "/privacy-policy",
  "/terms-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticPaths.map((path) => ({
      url: `${SITE_CONFIG.url}${path}`,
      lastModified,
      changeFrequency:
        path === "/" || path === "/products"
          ? ("daily" as const)
          : ("monthly" as const),
      priority: path === "/" ? 1 : path === "/products" ? 0.9 : 0.6,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      lastModified: new Date(post.published_at),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
