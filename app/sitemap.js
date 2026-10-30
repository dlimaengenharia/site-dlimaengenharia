import { siteUrl } from "@/lib/seo";
import { servicePages } from "@/lib/servicePages";

// As versões de comparação (/v2 e /v3) ficam fora do sitemap.
export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    ...servicePages.map((page) => ({
      url: `${siteUrl}/servicos/${page.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    })),
    { url: `${siteUrl}/contato`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];
}
