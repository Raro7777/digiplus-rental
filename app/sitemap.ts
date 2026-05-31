import type { MetadataRoute } from "next";
import { REGION_SLUGS } from "@/lib/regions-seo";
import { siteUrl } from "@/lib/seo/json-ld";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/diagnosis",
  "/faq",
  "/products",
  "/products/ricoh-d470",
  "/products/konica-bizhub",
  "/quote",
  "/regions",
  "/rental",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: siteUrl(route),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...REGION_SLUGS.map((slug) => ({
      url: siteUrl(`/regions/${slug}`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
