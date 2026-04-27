"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, Tag, Heart, Baby, Shield, Activity, BookOpen, Mail, Bell, Star, Phone } from "lucide-react";
import { posts } from "@/lib/blog-data";

const categories = [
  { label:"All",             icon:BookOpen, value:"all"        },
  { label:"Health Tips",     icon:Heart,    value:"health"     },
  { label:"Maternity",       icon:Baby,     value:"maternity"  },
  { label:"Preventive Care", icon:Shield,   value:"preventive" },
  { label:"Wellness",        icon:Activity, value:"wellness"   },
];

const topics = ["Malaria","Diabetes","Maternity","Eye Care","Dental","Surgery","Vaccination","Physiotherapy","Blood Pressure","Family Planning"];

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === "all" || p.cat === activeCategory;
    const matchSearch = !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="bl-root">

      {/* ══ HERO ══ */}
      <section className="bl-hero">
        <div className="bl-blob blb1"/><div className="bl-blob blb2"/>
        <div className="bl-hero-inner">
          <span className="bl-eyebrow"><span className="bl-dash"/>Health Journal<span className="bl-dash"/></span>
          <h1 className="bl-h1">Ggwaatiro Hospital<br/><em>Health Blog</em></h1>
          <p className="bl-sub">Health tips, medical advice, and wellness articles from our team — written to help you and your family stay healthy.</p>
          <div className="bl-search-wrap">
            <Search size={18} className="bl-search-icon"/>
            <input type="text" placeholder="Search articles…" value={search}
              onChange={e => { setSearch(e.target.value); setActiveCategory("all"); }}
              className="bl-search-input"/>
            {search && <button className="bl-clear" onClick={() => setSearch("")}>✕</button>}
          </div>
        </div>
        <div className="bl-cut"/>
      </section>

      {/* ══ CATEGORY TABS ══ */}
      <div className="bl-cat-bar-wrap">
        <div className="bl-cat-bar">
          {categories.map(c => {
            const Icon = c.icon;
            return (
              <button key={c.value} className={`bl-cat-tab ${activeCategory === c.value && !search ? "bl-cat-active" : ""}`}
                onClick={() => { setActiveCategory(c.value); setSearch(""); }}>
                <Icon size={14} strokeWidth={1.8}/> {c.label}
                <span className="bl-cat-count">{c.value === "all" ? posts.length : posts.filter(p => p.cat === c.value).length}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ══ BODY ══ */}
      <section className="bl-body">
        <div className="bl-layout">

          {/* Posts */}
          <div className="bl-posts-col">
            <div className="bl-results-bar">
              <p className="bl-results-title">
                {search ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${search}"`
                  : activeCategory === "all" ? "Latest Articles"
                  : categories.find(c => c.value === activeCategory)?.label}
              </p>
              {(search || activeCategory !== "all") && (
                <button className="bl-results-clear" onClick={() => { setSearch(""); setActiveCategory("all"); }}>Clear</button>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="bl-no-results">
                <BookOpen size={44} strokeWidth={1}/>
                <p>No articles match your search.</p>
                <button onClick={() => { setSearch(""); setActiveCategory("all"); }}>Browse all articles</button>
              </div>
            ) : (
              <div className="bl-grid">
                {filtered.map((post, i) => (
                  <div key={post.id} className="bl-card" style={{"--pd":`${i*0.06}s`} as React.CSSProperties}>
                    <div className="bl-card-img" style={{"--pc":post.color} as React.CSSProperties}>
                      <span className="bl-card-cat">{post.catLabel}</span>
                      {post.trending && <span className="bl-card-trend">🔥 Trending</span>}
                    </div>
                    <div className="bl-card-body">
                      <div className="bl-card-meta">
                        <span><Calendar size={11}/> {post.date}</span>
                        <span><Clock size={11}/> {post.readTime}</span>
                      </div>
                      <h3 className="bl-card-title">{post.title}</h3>
                      <p className="bl-card-excerpt">{post.excerpt}</p>
                      <div className="bl-card-footer">
                        <div className="bl-card-author">
                          <div className="bl-avatar" style={{background:post.color}}>{post.initials}</div>
                          <span className="bl-author-name">{post.author}</span>
                        </div>
                        <Link href={`/blog/${post.id}`} className="bl-read-more">Read <ArrowRight size={12}/></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="bl-sidebar">
            <div className="bl-sb-card bl-sb-dark">
              <Bell size={20} strokeWidth={1.5} className="bl-sb-bell"/>
              <h3 className="bl-sb-h3 bl-sb-h3-light">Stay Informed</h3>
              <p className="bl-sb-p bl-sb-p-light">Get health tips and hospital news delivered to your inbox.</p>
              {subscribed ? (
                <div className="bl-subscribed"><Star size={13}/> You are subscribed!</div>
              ) : (
                <>
                  <input type="email" placeholder="Your email address" value={email}
                    onChange={e => setEmail(e.target.value)} className="bl-email-input"/>
                  <button className="bl-subscribe-btn" onClick={() => email.includes("@") && setSubscribed(true)}>
                    Subscribe <Mail size={13}/>
                  </button>
                </>
              )}
            </div>

            <div className="bl-sb-card">
              <h3 className="bl-sb-h3">Popular Topics</h3>
              <div className="bl-topics">
                {topics.map(t => (
                  <button key={t} className="bl-topic-tag" onClick={() => setSearch(t)}>
                    <Tag size={10}/> {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="bl-sb-card bl-sb-cta">
              <p className="bl-sb-cta-emoji">🏥</p>
              <h3 className="bl-sb-cta-title">Need Medical Help?</h3>
              <p className="bl-sb-cta-body">Our team is ready to assist you — walk in or call us today.</p>
              <a href="tel:+256772428467" className="bl-sb-cta-btn"><Phone size={13}/> +256 772 428 467</a>
              <Link href="/contact" className="bl-sb-cta-link">Book Appointment <ArrowRight size={12}/></Link>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        .bl-root {
          --blue:   #1a3fa8;
          --blue-d: #1535a0;
          --blue-l: #eff3ff;
          --navy:   #0f1f5c;
          --slate:  #64748b;
          --border: #e2e8f0;
          --white:  #ffffff;
          --off:    #f8fafc;
          --ff-s:   'Georgia','Charter',serif;
          --ff-u:   'Trebuchet MS','Tahoma',sans-serif;
          overflow-x: hidden;
        }
        .bl-hero {
          position:relative; overflow:hidden;
          background:linear-gradient(145deg, #0f1f5c 0%, #1a3fa8 55%, #1535a0 100%);
          padding:6rem 1.5rem 9rem; text-align:center;
        }
        .bl-blob { position:absolute; border-radius:50%; filter:blur(100px); opacity:0.2; pointer-events:none; }
        .blb1 { width:460px;height:460px; background:radial-gradient(#93c5fd,transparent); top:-160px;right:-80px; }
        .blb2 { width:320px;height:320px; background:radial-gradient(#bfdbfe,transparent); bottom:-80px;left:-60px; }
        .bl-hero-inner { position:relative; z-index:2; max-width:760px; margin:0 auto; }
        .bl-eyebrow { display:inline-flex; align-items:center; gap:0.6rem; font-family:var(--ff-u); font-size:0.72rem; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#93c5fd; margin-bottom:1.25rem; }
        .bl-dash { display:inline-block; width:28px; height:2px; background:#93c5fd; border-radius:2px; }
        .bl-h1 { font-family:var(--ff-s); font-size:clamp(2.5rem,6vw,4rem); font-weight:900; color:#fff; line-height:1.1; letter-spacing:-0.03em; margin:0 0 1rem; }
        .bl-h1 em { color:#93c5fd; font-style:italic; }
        .bl-sub { font-family:var(--ff-s); font-size:1rem; color:#bfdbfe; max-width:560px; margin:0 auto 2.5rem; line-height:1.75; }
        .bl-search-wrap { position:relative; max-width:500px; margin:0 auto; display:flex; align-items:center; }
        .bl-search-icon { position:absolute; left:1rem; color:#93c5fd; pointer-events:none; }
        .bl-search-input { width:100%; padding:0.85rem 2.5rem 0.85rem 3rem; background:#ffffff12; backdrop-filter:blur(12px); border:1.5px solid #ffffff20; border-radius:0.9rem; font-family:var(--ff-u); font-size:0.88rem; color:#fff; outline:none; transition:border-color 0.2s; }
        .bl-search-input::placeholder { color:#93c5fd99; }
        .bl-search-input:focus { border-color:#93c5fd; }
        .bl-clear { position:absolute; right:1rem; background:none; border:none; color:#93c5fd; cursor:pointer; font-size:0.8rem; }
        .bl-cut { position:absolute; bottom:-1px; left:0; right:0; height:80px; background:var(--off); clip-path:polygon(0 100%,100% 100%,100% 0); }
        .bl-cat-bar-wrap { background:var(--off); border-bottom:1.5px solid var(--border); overflow-x:auto; position:sticky; top:68px; z-index:40; }
        .bl-cat-bar { max-width:1200px; margin:0 auto; padding:0.7rem 1.5rem; display:flex; gap:0.4rem; min-width:max-content; }
        .bl-cat-tab { display:inline-flex; align-items:center; gap:0.4rem; font-family:var(--ff-u); font-size:0.76rem; font-weight:600; color:var(--slate); padding:0.48rem 0.95rem; border-radius:99px; border:1.5px solid transparent; background:none; cursor:pointer; white-space:nowrap; transition:all 0.2s; }
        .bl-cat-tab:hover { color:var(--blue); background:var(--blue-l); border-color:#bfdbfe; }
        .bl-cat-active { background:var(--blue); color:#fff; border-color:var(--blue); }
        .bl-cat-count { font-size:0.6rem; font-weight:700; background:#ffffff30; border-radius:99px; padding:0.1rem 0.45rem; }
        .bl-body { background:var(--off); padding:3rem 1.5rem 5rem; }
        .bl-layout { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 300px; gap:2.5rem; align-items:start; }
        @media(max-width:1024px){ .bl-layout{ grid-template-columns:1fr; } }
        .bl-results-bar { display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.5rem; }
        .bl-results-title { font-family:var(--ff-s); font-size:1.1rem; font-weight:700; color:var(--navy); margin:0; }
        .bl-results-clear { font-family:var(--ff-u); font-size:0.75rem; font-weight:600; color:var(--blue); background:var(--blue-l); border:none; padding:0.35rem 0.85rem; border-radius:99px; cursor:pointer; }
        .bl-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:1.25rem; }
        @media(max-width:700px){ .bl-grid{ grid-template-columns:1fr; } }
        .bl-card { background:var(--white); border:1.5px solid var(--border); border-radius:1rem; overflow:hidden; transition:box-shadow 0.2s, transform 0.2s; animation: blUp 0.5s ease var(--pd) both; }
        .bl-card:hover { box-shadow:0 8px 32px #1a3fa818; transform:translateY(-3px); border-color:#bfdbfe; }
        @keyframes blUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:none;} }
        .bl-card-img { height:140px; position:relative; background:linear-gradient(135deg, var(--pc), color-mix(in srgb, var(--pc) 60%, #0f1f5c)); display:flex; align-items:flex-end; padding:0.75rem; }
        .bl-card-cat { font-family:var(--ff-u); font-size:0.62rem; font-weight:700; background:#ffffff25; backdrop-filter:blur(8px); color:#fff; border:1px solid #ffffff30; padding:0.22rem 0.65rem; border-radius:99px; }
        .bl-card-trend { position:absolute; top:0.75rem; right:0.75rem; font-family:var(--ff-u); font-size:0.6rem; font-weight:700; background:#f59e0b; color:#fff; padding:0.2rem 0.55rem; border-radius:99px; }
        .bl-card-body { padding:1.1rem; display:flex; flex-direction:column; gap:0.5rem; }
        .bl-card-meta { display:flex; gap:0.75rem; flex-wrap:wrap; }
        .bl-card-meta span { display:inline-flex; align-items:center; gap:0.3rem; font-family:var(--ff-u); font-size:0.65rem; color:var(--slate); }
        .bl-card-title { font-family:var(--ff-s); font-size:0.95rem; font-weight:700; color:var(--navy); margin:0; line-height:1.4; }
        .bl-card-excerpt { font-family:var(--ff-s); font-size:0.78rem; color:var(--slate); line-height:1.65; margin:0; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; }
        .bl-card-footer { display:flex; align-items:center; justify-content:space-between; padding-top:0.5rem; border-top:1px solid var(--border); }
        .bl-card-author { display:flex; align-items:center; gap:0.5rem; }
        .bl-avatar { width:28px; height:28px; border-radius:50%; display:grid; place-items:center; font-family:var(--ff-u); font-size:0.6rem; font-weight:800; color:#fff; flex-shrink:0; }
        .bl-author-name { font-family:var(--ff-u); font-size:0.68rem; font-weight:600; color:var(--slate); }
        .bl-read-more { display:inline-flex; align-items:center; gap:0.3rem; font-family:var(--ff-u); font-size:0.72rem; font-weight:700; color:var(--blue); text-decoration:none; transition:gap 0.2s; }
        .bl-read-more:hover { gap:0.55rem; }
        .bl-no-results { display:flex; flex-direction:column; align-items:center; text-align:center; padding:4rem 1rem; gap:1rem; color:var(--slate); }
        .bl-no-results p { font-family:var(--ff-s); font-size:1rem; margin:0; }
        .bl-no-results button { background:var(--blue); color:#fff; font-family:var(--ff-u); font-size:0.82rem; font-weight:700; padding:0.6rem 1.25rem; border:none; border-radius:0.65rem; cursor:pointer; }
        .bl-sidebar { display:flex; flex-direction:column; gap:1.25rem; }
        .bl-sb-card { background:var(--white); border:1.5px solid var(--border); border-radius:1rem; padding:1.5rem; }
        .bl-sb-dark { background:linear-gradient(135deg, #0f1f5c, #1a3fa8); border-color:transparent; }
        .bl-sb-bell { color:#93c5fd; margin-bottom:0.5rem; }
        .bl-sb-h3 { font-family:var(--ff-u); font-size:0.88rem; font-weight:700; color:var(--navy); margin:0 0 0.4rem; }
        .bl-sb-h3-light { color:#fff; }
        .bl-sb-p { font-family:var(--ff-u); font-size:0.75rem; color:var(--slate); margin:0 0 1rem; line-height:1.55; }
        .bl-sb-p-light { color:#bfdbfe; }
        .bl-email-input { width:100%; padding:0.6rem 0.85rem; border:1.5px solid #ffffff25; border-radius:0.6rem; background:#ffffff12; color:#fff; font-family:var(--ff-u); font-size:0.8rem; outline:none; margin-bottom:0.6rem; box-sizing:border-box; }
        .bl-email-input::placeholder { color:#93c5fd99; }
        .bl-subscribe-btn { width:100%; display:flex; align-items:center; justify-content:center; gap:0.4rem; background:#fff; color:var(--blue); font-family:var(--ff-u); font-size:0.8rem; font-weight:700; padding:0.6rem; border:none; border-radius:0.6rem; cursor:pointer; transition:background 0.2s; }
        .bl-subscribe-btn:hover { background:#eff3ff; }
        .bl-subscribed { display:flex; align-items:center; gap:0.4rem; font-family:var(--ff-u); font-size:0.8rem; font-weight:700; color:#93c5fd; }
        .bl-topics { display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.5rem; }
        .bl-topic-tag { display:inline-flex; align-items:center; gap:0.3rem; font-family:var(--ff-u); font-size:0.68rem; font-weight:600; background:var(--blue-l); color:var(--blue); border:1px solid #bfdbfe; padding:0.28rem 0.65rem; border-radius:99px; cursor:pointer; transition:all 0.2s; }
        .bl-topic-tag:hover { background:var(--blue); color:#fff; border-color:var(--blue); }
        .bl-sb-cta { text-align:center; }
        .bl-sb-cta-emoji { font-size:2rem; margin:0 0 0.5rem; }
        .bl-sb-cta-title { font-family:var(--ff-u); font-size:0.88rem; font-weight:700; color:var(--navy); margin:0 0 0.4rem; }
        .bl-sb-cta-body { font-family:var(--ff-u); font-size:0.75rem; color:var(--slate); margin:0 0 1rem; line-height:1.55; }
        .bl-sb-cta-btn { display:flex; align-items:center; justify-content:center; gap:0.4rem; background:var(--blue); color:#fff; font-family:var(--ff-u); font-size:0.8rem; font-weight:700; padding:0.65rem; border-radius:0.65rem; text-decoration:none; margin-bottom:0.5rem; transition:background 0.2s; }
        .bl-sb-cta-btn:hover { background:var(--blue-d); }
        .bl-sb-cta-link { display:flex; align-items:center; justify-content:center; gap:0.35rem; font-family:var(--ff-u); font-size:0.75rem; font-weight:600; color:var(--blue); text-decoration:none; }
        .bl-sb-cta-link:hover { text-decoration:underline; }
      `}</style>
    </main>
  );
}
