import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://samnkosi.com";
  const lastModified = new Date();

  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/capabilities", priority: 0.9 },
    { path: "/industries", priority: 0.7 },
    { path: "/federal-readiness", priority: 0.9 },
    { path: "/leadership", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
