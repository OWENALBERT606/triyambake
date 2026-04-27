import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/lib/blog-data";
import BlogDetail from "./BlogDetail";

export function generateStaticParams() {
  return posts.map(p => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find(p => p.id === Number(id));
  if (!post) return {};
  return {
    title: `${post.title} | Ggwaatiro Hospital`,
    description: post.excerpt,
    keywords: ["Ggwaatiro Hospital", "health tips Uganda", post.catLabel, post.author],
    alternates: { canonical: `/blog/${post.id}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.id}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts.find(p => p.id === Number(id));
  if (!post) notFound();

  const related = posts.filter(p => p.cat === post.cat && p.id !== post.id).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": post.title,
    "description": post.excerpt,
    "author": { "@type": "Organization", "name": post.author, "memberOf": { "@type": "Hospital", "name": "Ggwaatiro Hospital" } },
    "datePublished": post.date,
    "publisher": { "@type": "Hospital", "name": "Ggwaatiro Hospital", "url": "https://ggwaatirahospital.com" },
    "url": `https://ggwaatirahospital.com/blog/${post.id}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <BlogDetail post={post} related={related} />
    </>
  );
}
