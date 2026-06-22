import type { MetadataRoute } from "next";

const BASE = "https://triyambake.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                    lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/about`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/business`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/projects`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/clientele`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
  ];
}
