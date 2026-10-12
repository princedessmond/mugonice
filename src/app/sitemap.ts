import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mugonice.com",
      lastModified: "2026-10-12",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
