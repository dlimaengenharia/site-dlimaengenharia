import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";

import { servicePages, getServicePage } from "@/lib/servicePages";

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return {
    title: { absolute: `${page.metaTitle} | D'Lima Engenharia` },
    description: page.metaDescription,
    alternates: { canonical: `/servicos/${page.slug}` },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();
  return <ServicePage page={page} variant="v2" basePath="/v2" />;
}
