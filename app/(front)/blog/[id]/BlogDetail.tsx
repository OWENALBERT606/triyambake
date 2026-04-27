"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock, CheckCircle, Phone, ArrowRight } from "lucide-react";

type Post = {
  id: number; cat: string; catLabel: string; title: string; excerpt: string;
  author: string; initials: string; color: string; date: string; readTime: string; trending: boolean;
  content: { heading: string; body: string }[];
  keyPoints: string[];
};

export default function BlogDetail({ post, related }: { post: Post; related: Post[] }) {
  return (
    <main className="bd-root">

      {/* ══ HERO ══ */}
      <section className="bd-hero" style={{ "--pc": post.color } as React.CSSProperties}>
        <div className="bd-hero-overlay" />
        <div className="bd-hero-inner">
          <Link href="/blog" className="bd-back"><ArrowLeft size={16}/> Back to Blog</Link>
          <span className="bd-cat-badge">{post.catLabel}</span>
          {post.trending && <span className="bd-trend-badge">🔥 Trending</span>}
          <h1 className="bd-title">{post.title}</h1>
          <p className="bd-excerpt">{post.excerpt}</p>
          <div className="bd-meta">
            <div className="bd-author">
              <div className="bd-avatar" style={{ background: post.color }}>{post.initials}</div>
              <span className="bd-author-name">{post.author}</span>
            </div>
            <span className="bd-meta-item"><Calendar size={14}/> {post.date}</span>
            <span className="bd-meta-item"><Clock size={14}/> {post.readTime} read</span>
          </div>
        </div>
        <div className="bd-cut" />
      </section>

      {/* ══ BODY ══ */}
      <section className="bd-body">
        <div className="bd-container bd-layout">

          {/* Article */}
          <article className="bd-article">
            {post.content.map((section, i) => (
              <div key={i} className="bd-section">
                <h2 className="bd-section-h2">{section.heading}</h2>
                <p className="bd-section-p">{section.body}</p>
              </div>
            ))}

            {/* Key Points */}
            <div className="bd-key-points">
              <h3 className="bd-kp-title">Key Takeaways</h3>
              <ul className="bd-kp-list">
                {post.keyPoints.map((point, i) => (
                  <li key={i} className="bd-kp-item">
                    <CheckCircle size={16} className="bd-kp-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bd-article-cta">
              <div>
                <p className="bd-cta-heading">Have questions or need medical advice?</p>
                <p className="bd-cta-sub">Our team at Ggwaatiro Hospital is ready to help.</p>
              </div>
              <div className="bd-cta-btns">
                <a href="tel:+256772428467" className="bd-btn-primary"><Phone size={14}/> Call Us</a>
                <Link href="/contact" className="bd-btn-ghost">Book Appointment <ArrowRight size={14}/></Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="bd-sidebar">
            {/* Author card */}
            <div className="bd-sb-card">
              <h3 className="bd-sb-h3">About the Author</h3>
              <div className="bd-author-card">
                <div className="bd-author-avatar" style={{ background: post.color }}>{post.initials}</div>
                <div>
                  <p className="bd-author-card-name">{post.author}</p>
                  <p className="bd-author-card-dept">Ggwaatiro Hospital</p>
                </div>
              </div>
              <p className="bd-author-bio">
                Our medical team at Ggwaatiro Hospital has been serving the Bweyogerere community since 1989,
                providing quality healthcare with professionalism and compassion.
              </p>
            </div>

            {/* Hospital info */}
            <div className="bd-sb-card bd-sb-dark">
              <p className="bd-sb-tag">Ggwaatiro Hospital</p>
              <h3 className="bd-sb-h3 bd-sb-h3-light">Need Medical Assistance?</h3>
              <p className="bd-sb-p">We are located in Bweyogerere, Kira Town Council — 10 km from Kampala.</p>
              <a href="tel:+256772428467" className="bd-sb-btn"><Phone size={13}/> +256 772 428 467</a>
              <Link href="/contact" className="bd-sb-link">Book an Appointment <ArrowRight size={12}/></Link>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div className="bd-sb-card">
                <h3 className="bd-sb-h3">Related Articles</h3>
                <div className="bd-related-list">
                  {related.map(r => (
                    <Link key={r.id} href={`/blog/${r.id}`} className="bd-related-item">
                      <div className="bd-related-dot" style={{ background: r.color }} />
                      <div>
                        <p className="bd-related-title">{r.title}</p>
                        <p className="bd-related-meta">{r.date} · {r.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <style>{`
        .bd-root {
          --blue:   #1a3fa8;
          --blue-d: #1535a0;
          --blue-l: #eff3ff;
          --maroon:   #800020;
          --maroon-d: #6b001a;
          --maroon-l: #fff0f3;
          --navy:   #0f1f5c;
          --slate:  #64748b;
          --border: #e2e8f0;
          --white:  #ffffff;
          --off:    #f8fafc;
          --ff-s:   'Georgia','Charter',serif;
          --ff-u:   'Trebuchet MS','Tahoma',sans-serif;
          overflow-x: hidden;
        }
        .bd-container { max-width:1200px; margin:0 auto; }

        /* HERO */
        .bd-hero {
          position:relative; overflow:hidden;
          background:linear-gradient(145deg, #0f1f5c 0%, var(--pc, #1a3fa8) 50%, #800020 100%);
          padding:5rem 1.5rem 8rem;
        }
        .bd-hero-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to bottom, #0f1f5c55, #0f1f5caa);
        }
        .bd-hero-inner { position:relative; z-index:2; max-width:820px; margin:0 auto; }
        .bd-back {
          display:inline-flex; align-items:center; gap:0.4rem;
          font-family:var(--ff-u); font-size:0.78rem; font-weight:600; color:#93c5fd;
          text-decoration:none; margin-bottom:1.5rem; transition:color 0.2s;
        }
        .bd-back:hover { color:#fff; }
        .bd-cat-badge {
          display:inline-block; font-family:var(--ff-u); font-size:0.65rem; font-weight:700;
          letter-spacing:0.1em; text-transform:uppercase;
          background:#ffffff20; color:#fff; border:1px solid #ffffff30;
          padding:0.25rem 0.75rem; border-radius:99px; margin-right:0.5rem; margin-bottom:1rem;
        }
        .bd-trend-badge {
          display:inline-block; font-family:var(--ff-u); font-size:0.65rem; font-weight:700;
          background:#f59e0b; color:#fff; padding:0.25rem 0.65rem; border-radius:99px; margin-bottom:1rem;
        }
        .bd-title {
          font-family:var(--ff-s); font-size:clamp(1.8rem,4vw,3rem);
          font-weight:900; color:#fff; line-height:1.2; letter-spacing:-0.02em; margin:0 0 1rem;
        }
        .bd-excerpt { font-family:var(--ff-s); font-size:1rem; color:#bfdbfe; line-height:1.75; margin:0 0 1.75rem; }
        .bd-meta { display:flex; align-items:center; gap:1.25rem; flex-wrap:wrap; }
        .bd-author { display:flex; align-items:center; gap:0.6rem; }
        .bd-avatar { width:36px; height:36px; border-radius:50%; display:grid; place-items:center; font-family:var(--ff-u); font-size:0.65rem; font-weight:800; color:#fff; flex-shrink:0; }
        .bd-author-name { font-family:var(--ff-u); font-size:0.8rem; font-weight:700; color:#fff; }
        .bd-meta-item { display:inline-flex; align-items:center; gap:0.35rem; font-family:var(--ff-u); font-size:0.75rem; color:#93c5fd; }
        .bd-cut { position:absolute; bottom:-1px; left:0; right:0; height:80px; background:var(--off); clip-path:polygon(0 100%,100% 100%,100% 0); }

        /* BODY */
        .bd-body { background:var(--off); padding:4rem 1.5rem 5rem; }
        .bd-layout { display:grid; grid-template-columns:1fr 320px; gap:3rem; align-items:start; }
        @media(max-width:1024px){ .bd-layout{ grid-template-columns:1fr; } }

        /* ARTICLE */
        .bd-article { display:flex; flex-direction:column; gap:2rem; }
        .bd-section {}
        .bd-section-h2 {
          font-family:var(--ff-s); font-size:1.35rem; font-weight:800; color:var(--navy);
          margin:0 0 0.75rem; padding-left:1rem;
          border-left:4px solid var(--blue);
        }
        .bd-section-p { font-family:var(--ff-s); font-size:0.97rem; color:var(--slate); line-height:1.85; margin:0; }

        /* Key Points */
        .bd-key-points {
          background:var(--blue-l); border:1.5px solid #bfdbfe;
          border-radius:1rem; padding:1.75rem;
        }
        .bd-kp-title { font-family:var(--ff-u); font-size:0.82rem; font-weight:800; color:var(--navy); text-transform:uppercase; letter-spacing:0.08em; margin:0 0 1rem; }
        .bd-kp-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.65rem; }
        .bd-kp-item { display:flex; align-items:flex-start; gap:0.6rem; font-family:var(--ff-u); font-size:0.85rem; color:var(--navy); }
        .bd-kp-icon { color:var(--blue); flex-shrink:0; margin-top:1px; }

        /* Article CTA */
        .bd-article-cta {
          background:linear-gradient(135deg, #1a3fa8, #800020);
          border-radius:1rem; padding:2rem;
          display:flex; align-items:center; justify-content:space-between; gap:1.5rem; flex-wrap:wrap;
        }
        .bd-cta-heading { font-family:var(--ff-s); font-size:1.1rem; font-weight:700; color:#fff; margin:0 0 0.3rem; }
        .bd-cta-sub     { font-family:var(--ff-s); font-size:0.85rem; color:#bfdbfe; margin:0; }
        .bd-cta-btns    { display:flex; gap:0.75rem; flex-wrap:wrap; flex-shrink:0; }
        .bd-btn-primary {
          display:inline-flex; align-items:center; gap:0.4rem;
          background:#fff; color:var(--blue);
          font-family:var(--ff-u); font-size:0.82rem; font-weight:700;
          padding:0.7rem 1.4rem; border-radius:0.65rem; text-decoration:none; transition:all 0.2s;
        }
        .bd-btn-primary:hover { background:#eff3ff; }
        .bd-btn-ghost {
          display:inline-flex; align-items:center; gap:0.4rem;
          background:transparent; color:#fff;
          font-family:var(--ff-u); font-size:0.82rem; font-weight:600;
          padding:0.7rem 1.4rem; border-radius:0.65rem;
          border:1.5px solid #ffffff30; text-decoration:none; transition:all 0.2s;
        }
        .bd-btn-ghost:hover { background:#ffffff15; }

        /* SIDEBAR */
        .bd-sidebar { display:flex; flex-direction:column; gap:1.25rem; position:sticky; top:1.5rem; }
        .bd-sb-card { background:var(--white); border:1.5px solid var(--border); border-radius:1rem; padding:1.5rem; }
        .bd-sb-dark { background:linear-gradient(135deg, #1a3fa8, #800020); border-color:transparent; }
        .bd-sb-h3 { font-family:var(--ff-u); font-size:0.82rem; font-weight:700; color:var(--navy); margin:0 0 1rem; text-transform:uppercase; letter-spacing:0.06em; }
        .bd-sb-h3-light { color:#fff; }
        .bd-sb-tag { font-family:var(--ff-u); font-size:0.65rem; font-weight:700; color:#93c5fd; text-transform:uppercase; letter-spacing:0.1em; margin:0 0 0.4rem; display:block; }
        .bd-sb-p { font-family:var(--ff-u); font-size:0.75rem; color:#bfdbfe; line-height:1.6; margin:0 0 1rem; }
        .bd-sb-btn {
          display:flex; align-items:center; justify-content:center; gap:0.4rem;
          background:#fff; color:var(--blue); font-family:var(--ff-u); font-size:0.8rem; font-weight:700;
          padding:0.65rem; border-radius:0.65rem; text-decoration:none; margin-bottom:0.5rem; transition:background 0.2s;
        }
        .bd-sb-btn:hover { background:#eff3ff; }
        .bd-sb-link { display:flex; align-items:center; justify-content:center; gap:0.35rem; font-family:var(--ff-u); font-size:0.75rem; font-weight:600; color:#93c5fd; text-decoration:none; }
        .bd-sb-link:hover { color:#fff; }

        .bd-author-card { display:flex; align-items:center; gap:0.75rem; margin-bottom:0.85rem; }
        .bd-author-avatar { width:44px; height:44px; border-radius:50%; display:grid; place-items:center; font-family:var(--ff-u); font-size:0.75rem; font-weight:800; color:#fff; flex-shrink:0; }
        .bd-author-card-name { font-family:var(--ff-u); font-size:0.85rem; font-weight:700; color:var(--navy); margin:0 0 0.15rem; }
        .bd-author-card-dept { font-family:var(--ff-u); font-size:0.7rem; color:var(--slate); margin:0; }
        .bd-author-bio { font-family:var(--ff-s); font-size:0.8rem; color:var(--slate); line-height:1.65; margin:0; }

        .bd-related-list { display:flex; flex-direction:column; gap:0.85rem; }
        .bd-related-item { display:flex; align-items:flex-start; gap:0.75rem; text-decoration:none; padding:0.6rem; border-radius:0.6rem; transition:background 0.2s; }
        .bd-related-item:hover { background:var(--blue-l); }
        .bd-related-dot { width:10px; height:10px; border-radius:50%; flex-shrink:0; margin-top:4px; }
        .bd-related-title { font-family:var(--ff-u); font-size:0.78rem; font-weight:600; color:var(--navy); margin:0 0 0.2rem; line-height:1.4; }
        .bd-related-meta  { font-family:var(--ff-u); font-size:0.65rem; color:var(--slate); margin:0; }
      `}</style>
    </main>
  );
}
