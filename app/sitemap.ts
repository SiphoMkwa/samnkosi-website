import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://samnkosi.com";

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/capabilities`,
    },
    {
      url: `${baseUrl}/industries`,
    },
    {
      url: `${baseUrl}/federal-readiness`,
    },
    {
      url: `${baseUrl}/leadership`,
    },
    {
      url: `${baseUrl}/contact`,
    },
  ];
}
