import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${siteUrl}/assets/2g5a3446.jpg.jpeg`,
        `${siteUrl}/assets/2g5a3382.jpg.jpeg`,
      ],
    },
  ];
}
