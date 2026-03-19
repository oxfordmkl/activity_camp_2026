'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const COURSES = [
  { idx: '01/09', emoji: '📣', name: 'AI Digital Marketing', color: 'gold', age: 'Age 14+ · Class 9+', desc: 'Master SEO, Google Ads, social media strategy, and AI copywriting. Run real campaigns and grow audiences using the latest AI marketing tools.', skills: ['SEO', 'Google Ads', 'Social Media AI', 'Analytics'] },
  { idx: '02/09', emoji: '💼', name: 'AI Office Suite', color: 'cyan', age: 'Age 13+ · Class 8+', desc: 'Supercharge productivity with AI in MS Word, Excel, PowerPoint and email. Automate reports, build smart spreadsheets, and design presentations in minutes.', skills: ['MS Word AI', 'Excel AI', 'PowerPoint AI', 'Automation'] },
  { idx: '03/09', emoji: '🌐', name: 'AI Web App Development', color: 'red', age: 'Age 15+ · Class 10+', desc: 'Build and deploy real web apps using HTML, CSS, JavaScript and React. AI coding assistants accelerate every step — ship your first live app before camp ends.', skills: ['HTML/CSS', 'JavaScript', 'React', 'AI Coding'] },
  { idx: '04/09', emoji: '🎬', name: 'Junior YouTuber', color: 'green', age: 'Age 10+ · Class 5+', desc: 'Script, film, edit, and publish. Use AI to create viral video ideas, stunning thumbnails, and grow a real YouTube channel.', skills: ['Scripting', 'Editing', 'AI Thumbnails', 'YouTube SEO'] },
  { idx: '05/09', emoji: '🧠', name: 'Junior AI Prompt Engineer', color: 'purple', age: 'Age 12+ · Class 7+', desc: 'Master the art of talking to AI. Learn prompt engineering for ChatGPT, Gemini, Claude and image generators — turn ideas into professional outputs instantly.', skills: ['Prompt Design', 'ChatGPT', 'Gemini', 'Image Prompts'] },
  { idx: '06/09', emoji: '🎨', name: 'AI Designer', color: 'pink', age: 'Age 10+ · Class 5+', desc: 'No drawing skills needed. Use Canva AI, Midjourney, and Adobe Firefly to design logos, posters, social media graphics and full brand identities.', skills: ['Canva AI', 'Midjourney', 'Adobe Firefly', 'Logo Design'] },
  { idx: '07/09', emoji: '🐍', name: 'Junior Python Programmer', color: 'gold', age: 'Age 13+ · Class 8+', desc: "Learn the world's most popular AI language from scratch. Write real Python scripts, build mini-apps, automate tasks, and understand the code behind AI tools.", skills: ['Python Basics', 'Functions', 'Mini Projects', 'AI Automation'] },
  { idx: '08/09', emoji: '🎮', name: 'Junior Game Developer', color: 'cyan', age: 'Age 12+ · Class 7+', desc: 'Design and build your own 2D games using beginner-friendly tools and AI assistance. Share your game with friends before camp ends!', skills: ['Game Design', '2D Development', 'Scratch/Unity', 'Publish & Share'] },
  { idx: '09/09', emoji: '🤖', name: 'Generative AI & ChatGPT', color: 'red', age: 'Age 14+ · Class 9+', desc: "Master the most powerful AI tools of our era. Create text, images, code, and audio using ChatGPT, DALL·E, Sora, and more. Build AI workflows that work 24/7.", skills: ['ChatGPT Pro', 'DALL·E', 'Prompt Mastery', 'AI Workflows'] },
];

const STATS = [
  { num: 5000, label: 'Students Trained', color: '#FFB800', suffix: '+' },
  { num: 25, label: 'Days Per Course', color: '#00E5FF', suffix: '' },
  { num: 9, label: 'AI Courses', color: '#00FF9D', suffix: '' },
  { num: 95, label: 'Placement Rate', color: '#B47FFF', suffix: '%' },
];

const WHY_ITEMS = [
  { num: '01', title: 'Kerala State Rutronix Approved', body: 'Government-recognised certification valid across Kerala and India — accepted for government job applications and higher education.' },
  { num: '02', title: '5000+ Students Trained', body: 'Over a decade of quality computer education in Malayinkeezhu. Our alumni work in IT companies, run businesses, and hold government positions.' },
  { num: '03', title: 'Hands-On AI Projects', body: 'Every student builds real projects — not just theory. You leave camp with a portfolio of actual work to show colleges, employers, and clients.' },
  { num: '04', title: 'Malayalam + English Medium', body: 'Instruction in both languages ensures no student is left behind. Trainers are fluent in Malayalam and explain every concept until understood.' },
  { num: '05', title: '95% Placement Support', body: 'Career guidance, resume building, and placement assistance included. Our 95% placement rate speaks for itself.' },
];

const TIMELINE = [
  { dot: '🚀', day: 'Days 1–5 · Week 1', title: 'Foundation & AI Tool Onboarding', body: 'Orientation, tool setup, and skill baseline assessment. Get introduced to 14+ AI tools curated for your course. Build your first mini-project.' },
  { dot: '⚙️', day: 'Days 6–12 · Week 2', title: 'Core Skills Development', body: 'Deep-dive into course-specific tools and techniques. Work on structured assignments daily with peer learning and trainer feedback.' },
  { dot: '🛠️', day: 'Days 13–19 · Week 3', title: 'Real-World Project Build', body: 'Apply everything learned to build your major project — a real website, marketing campaign, YouTube channel, or AI design portfolio.' },
  { dot: '🎯', day: 'Days 20–24 · Week 4', title: 'Project Polish & Presentation', body: 'Refine your project with trainer mentorship. Prepare your presentation for the final day showcase. Career guidance and alumni networking.' },
  { dot: '🏅', day: 'Day 25 · Grand Finale', title: 'Certificate Ceremony & Showcase', body: 'Present your project to parents and guests. Receive your Kerala State Rutronix Government Certificate. Celebrate your transformation!' },
];

const TESTIMONIALS = [
  { stars: 5, quote: '"I joined the AI Digital Marketing course during my Plus Two vacation. Within 25 days I ran a real Google Ads campaign. Now I handle my uncle\'s shop social media and earn pocket money."', name: 'Arun M.', role: 'Plus Two Student · Trivandrum', avatar: '🧑' },
  { stars: 5, quote: '"My daughter attended the Junior YouTuber course. She now has 800 subscribers and posts regularly. The trainers were patient and explained everything in Malayalam."', name: 'Priya S. (Parent)', role: 'Daughter: Class 7 · Malayinkeezhu', avatar: '👩' },
  { stars: 5, quote: '"The AI Web App Development course was intense but incredibly rewarding. I deployed my first website live on Day 22. The Oxford team gave personal attention to every student."', name: 'Vishnu R.', role: 'BCA Student · Neyyattinkara', avatar: '👨‍💻' },
];

const FAQS = [
  { q: 'What is the AI Vacation Activity Camp 2026?', a: 'A 25-day AI-powered summer camp by The Oxford Computers, Malayinkeezhu. Students choose from 9 specialised AI courses and earn a Kerala State Rutronix Government Certificate on completion.' },
  { q: 'Who can join? What is the age requirement?', a: 'Open to school students from Class 5 onwards and college students up to degree level. Age varies by course — Junior YouTuber starts from age 10, AI Web App Dev requires Class 10+. No prior computer experience needed.' },
  { q: 'Is the certificate government recognised?', a: 'Yes. The Oxford Computers is Kerala State Rutronix-approved. The certificate is government-certified and nationally recognised — valid for government job applications and higher education admissions across Kerala.' },
  { q: 'How long is each course and what are the timings?', a: 'Each course is 25 days, conducted on weekdays. Classes run 2–3 hours per day. Morning, afternoon, and evening batches are available. Contact us to check current availability.' },
  { q: 'What is the fee for the AI Activity Camp?', a: 'Course fees vary by programme. Special early-bird rates and sibling discounts are available for the 2026 batch. Call +91 94473 29972 or visit us at Malayinkeezhu for the latest fee structure.' },
  { q: 'Is instruction in Malayalam or English?', a: 'Both. Trainers are fluent in Malayalam and English. Most classes are conducted bilingually so every student understands fully.' },
  { q: 'How do I register for the 2026 batch?', a: 'Fill the registration form below, call/WhatsApp +91 94473 29972, or visit The Oxford Computers at Malayinkeezhu, Trivandrum — 695571. Seats are limited; early registration is strongly recommended.' },
];

const SHEET_URL = 'https://script.google.com/macros/s/AKfycby8hn6MU0dRGPFcFPYSNM4sKj8xV0Zf6ilSIojIEVhJzUt8TmPU1q18Zoy-dM8eGTgB/exec';
const C: Record<string, string> = { gold: '#FFB800', cyan: '#00E5FF', red: '#FF3860', green: '#00FF9D', purple: '#B47FFF', pink: '#FF6EBF' };
const CBORDER: Record<string, string> = { gold: 'rgba(255,184,0,.4)', cyan: 'rgba(0,229,255,.4)', red: 'rgba(255,56,96,.4)', green: 'rgba(0,255,157,.4)', purple: 'rgba(180,127,255,.4)', pink: 'rgba(255,110,191,.4)' };

function FadeIn({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div ref={ref} style={style} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function StatCounter({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = () => { n += Math.ceil(target / 60); if (n >= target) { setCount(target); return; } setCount(n); requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <div ref={ref} style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(28px,7vw,52px)', lineHeight: 1, color, marginBottom: 6 }}>{count}{suffix}</div>;
}

function CourseCard({ course, index }: { course: typeof COURSES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const col = C[course.color], bdr = CBORDER[course.color];
  return (
    <motion.div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onClick={() => document.getElementById('ac-register')?.scrollIntoView({ behavior: 'smooth' })}
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{ padding: 'clamp(22px,4vw,40px) clamp(18px,3.5vw,32px)', background: hovered ? 'rgba(3,6,15,.95)' : 'rgba(3,6,15,.6)', border: `1px solid ${hovered ? 'rgba(255,255,255,.18)' : 'rgba(255,255,255,.05)'}`, position: 'relative', overflow: 'hidden', cursor: 'pointer', transform: hovered ? 'translateY(-5px)' : 'translateY(0)', transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)', minWidth: 0 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: col, transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.45s ease' }} />
      <div style={{ fontSize: 'clamp(7px,1.5vw,9px)', letterSpacing: '0.18em', color: '#2a3050', marginBottom: 14, fontFamily: 'JetBrains Mono,monospace' }}>{course.idx}</div>
      <span style={{ fontSize: 'clamp(36px,7vw,46px)', marginBottom: 14, display: 'block', lineHeight: 1 }}>{course.emoji}</span>
      <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(17px,2.8vw,21px)', lineHeight: 1.1, marginBottom: 8, color: col }}>{course.name}</h3>
      <span style={{ fontSize: 'clamp(7px,1.4vw,8px)', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 9px', border: `1px solid ${bdr}`, color: col, display: 'inline-block', marginBottom: 12, fontFamily: 'JetBrains Mono,monospace' }}>{course.age}</span>
      <p style={{ fontFamily: 'DM Serif Display,serif', fontStyle: 'italic', fontSize: 'clamp(13px,2vw,15px)', lineHeight: 1.6, color: 'rgba(239,243,255,.48)', marginBottom: 16 }}>{course.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        {course.skills.map(s => <span key={s} style={{ fontSize: 'clamp(6px,1.2vw,7px)', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 7px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)', color: '#2a3050', fontFamily: 'JetBrains Mono,monospace' }}>{s}</span>)}
      </div>
      {hovered && <div style={{ marginTop: 14, fontSize: 13, color: col, fontFamily: 'JetBrains Mono,monospace', fontWeight: 700 }}>→ Enroll Now</div>}
    </motion.div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
      <div onClick={() => setOpen(!open)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0', cursor: 'pointer', gap: 14 }}>
        <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 'clamp(13px,2vw,15px)', color: '#EFF3FF', lineHeight: 1.3 }}>{q}</span>
        <div style={{ width: 24, height: 24, border: `1px solid ${open ? '#FFB800' : 'rgba(255,255,255,.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: open ? '#FFB800' : 'transparent', color: open ? '#000507' : '#2a3050', transform: open ? 'rotate(45deg)' : 'none', transition: 'all 0.3s', fontSize: 13 }}>+</div>
      </div>
      <motion.div animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} initial={false} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
        <p style={{ fontFamily: 'DM Serif Display,serif', fontStyle: 'italic', fontSize: 'clamp(13px,2vw,15px)', lineHeight: 1.7, color: 'rgba(239,243,255,.5)', paddingBottom: 18 }}>{a}</p>
      </motion.div>
    </div>
  );
}

export default function ActivityCampSection() {
  const [form, setForm] = useState({ name: '', phone: '', studentClass: '', course: '', location: '', message: '' });
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);
  const [sending, setSending] = useState(false);
  const [cd, setCd] = useState({ d: '--', h: '--', m: '--', s: '--' });

  useEffect(() => {
    const t = new Date('2026-04-01T00:00:00+05:30').getTime();
    const tick = () => {
      const diff = t - Date.now();
      if (diff <= 0) { setCd({ d: '00', h: '00', m: '00', s: '00' }); return; }
      setCd({ d: String(Math.floor(diff / 86400000)).padStart(2, '0'), h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'), m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'), s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0') });
    };
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);

  const showToast = (msg: string, ok: boolean) => { setToast({ msg, ok }); setTimeout(() => setToast(null), 4000); };

  const submit = async () => {
    if (!form.name || !form.phone || !form.course) { showToast('⚠️ Please fill Name, Phone & Course', false); return; }
    setSending(true);
    const ist = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true });
    try { await fetch(SHEET_URL, { method: 'POST', body: JSON.stringify({ timestamp: ist, source: 'ActivityCamp2026', ...form }) }); showToast('✓ Application Received! We will call you soon.', true); setForm({ name: '', phone: '', studentClass: '', course: '', location: '', message: '' }); }
    catch { showToast('✓ Received! Check your connection.', true); }
    setSending(false);
  };

  const inp: React.CSSProperties = { width: '100%', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)', padding: '12px 15px', color: '#EFF3FF', fontFamily: 'JetBrains Mono,monospace', fontSize: 'clamp(12px,2vw,13px)', outline: 'none', borderRadius: 0 };
  const scrollTo = (id: string) => (e: React.MouseEvent) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <div style={{ background: '#000507', color: '#EFF3FF', fontFamily: 'JetBrains Mono,monospace', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;700&display=swap');
        @keyframes gDrift{to{background-position:64px 64px,64px 64px;}}
        @keyframes breathe{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.12)}}
        @keyframes tickR{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes ctaP{0%,100%{opacity:.6}50%{opacity:1}}
        *{box-sizing:border-box;}
        .g2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        .g3{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;}
        .g3w{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
        .g4{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;}
        .g2c{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;}
        .g2w{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center;}
        .gf{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:36px;}
        .sp{padding:clamp(64px,10vw,112px) clamp(20px,5vw,56px);}
        .mx{max-width:1200px;margin:0 auto;}
        .sl{font-size:clamp(7px,1.6vw,9px);letter-spacing:.36em;text-transform:uppercase;color:#00E5FF;display:block;margin-bottom:13px;font-family:'JetBrains Mono',monospace;}
        .st{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(30px,6.5vw,68px);line-height:.93;margin-bottom:20px;}
        .sb{font-family:'DM Serif Display',serif;font-style:italic;font-size:clamp(14px,2.2vw,17px);line-height:1.7;color:rgba(239,243,255,.5);}
        @media(max-width:860px){
          .g2{grid-template-columns:1fr;}
          .g3{grid-template-columns:1fr;}
          .g3w{grid-template-columns:1fr;}
          .g4{grid-template-columns:1fr 1fr;}
          .g2c{grid-template-columns:1fr;gap:40px;}
          .g2w{grid-template-columns:1fr;gap:36px;}
          .gf{grid-template-columns:1fr 1fr;gap:24px;}
          .why-vis{display:none !important;}
        }
        @media(max-width:520px){
          .g4{grid-template-columns:1fr 1fr;}
          .gf{grid-template-columns:1fr;}
          .hero-btns{flex-direction:column;align-items:stretch !important;}
          .hero-btns a{text-align:center;}
        }
      `}</style>

      {/* Toast */}
      {toast && <div style={{ position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', background: toast.ok ? '#00FF9D' : '#FF3860', color: '#000507', fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '13px 26px', zIndex: 9999, whiteSpace: 'nowrap', boxShadow: '0 8px 32px rgba(0,0,0,.4)' }}>{toast.msg}</div>}

      {/* WhatsApp */}
      <a href="https://wa.me/919447329972?text=Hi!%20I%20want%20to%20know%20about%20the%20AI%20Vacation%20Activity%20Camp%202026." target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: 22, right: 22, zIndex: 8500, width: 52, height: 52, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 24px rgba(37,211,102,.45)', textDecoration: 'none' }}>
        <svg viewBox="0 0 24 24" style={{ width: 25, height: 25, fill: '#fff' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>

      {/* ══ HERO ══ */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', padding: 'clamp(90px,14vw,130px) clamp(20px,5vw,48px) clamp(56px,8vw,80px)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,229,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,.02) 1px,transparent 1px)', backgroundSize: '64px 64px', animation: 'gDrift 25s linear infinite' }} />
        <div style={{ position: 'absolute', width: 'min(700px,130vw)', height: 'min(700px,130vw)', background: 'radial-gradient(circle,rgba(255,184,0,.08) 0%,transparent 70%)', borderRadius: '50%', top: '40%', left: '30%', transform: 'translate(-50%,-50%)', animation: 'breathe 6s ease-in-out infinite' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 'min(960px,96vw)', width: '100%' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: .8 }} className="sl" style={{ marginBottom: 18 }}>
            🌐 Kerala State Rutronix Approved · Vacation Activity Camp
          </motion.span>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: .8 }} style={{ display: 'flex', gap: 7, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            {[['25 Days', '#FFB800'], ['9 AI Courses', '#00E5FF'], ['Gov Certified', '#00FF9D'], ['Limited Seats', '#FF3860']].map(([l, c]) => (
              <span key={l} style={{ fontSize: 'clamp(7px,1.6vw,8px)', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 11px', border: `1px solid ${c}`, color: c, fontFamily: 'JetBrains Mono,monospace' }}>{l}</span>
            ))}
          </motion.div>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7, duration: .9 }}
            style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(40px,11vw,112px)', lineHeight: .88, letterSpacing: '-0.04em', marginBottom: 20 }}>
            <span style={{ display: 'block', color: '#FFB800' }}>AI Vacation</span>
            <span style={{ display: 'block', color: '#EFF3FF' }}>Activity</span>
            <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '1.5px rgba(240,243,255,.18)' }}>Camp 2026</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9, duration: .8 }}
            style={{ fontFamily: 'DM Serif Display,serif', fontStyle: 'italic', fontSize: 'clamp(14px,2.8vw,21px)', color: 'rgba(239,243,255,.45)', marginBottom: 10 }}>
            25 days. 9 AI-powered courses. One life-changing summer.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
            style={{ fontSize: 'clamp(7px,1.6vw,9px)', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2a3050', marginBottom: 32 }}>
            📍 <span style={{ color: '#FFB800' }}>The Oxford Computers</span> · Malayinkeezhu, Trivandrum
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15 }} className="hero-btns" style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 44 }}>
            <a href="#ac-register" onClick={scrollTo('ac-register')} style={{ background: '#FFB800', color: '#000507', fontFamily: 'JetBrains Mono,monospace', fontSize: 'clamp(9px,1.8vw,10px)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: 'clamp(13px,2.5vw,17px) clamp(24px,5vw,40px)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7 }}>Apply for 2026 Batch →</a>
            <a href="#ac-courses" onClick={scrollTo('ac-courses')} style={{ background: 'transparent', color: '#EFF3FF', fontFamily: 'JetBrains Mono,monospace', fontSize: 'clamp(9px,1.8vw,10px)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: 'clamp(13px,2.5vw,17px) clamp(24px,5vw,40px)', border: '1px solid #2a3050', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7 }}>View All 9 Courses</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.35 }}>
            <p style={{ fontSize: 'clamp(7px,1.5vw,8px)', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#2a3050', marginBottom: 10 }}>Camp starts soon — secure your seat</p>
            <div style={{ display: 'flex', gap: 'clamp(6px,2vw,12px)', justifyContent: 'center', alignItems: 'center' }}>
              {([['d', 'Days'], ['h', 'Hours'], ['m', 'Mins'], ['s', 'Secs']] as [string, string][]).map(([k, u], i) => (
                <React.Fragment key={k}>
                  {i > 0 && <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(20px,4.5vw,28px)', color: '#2a3050' }}>:</span>}
                  <div style={{ width: 'clamp(52px,12vw,68px)', textAlign: 'center' }}>
                    <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(26px,6.5vw,34px)', color: '#FFB800', lineHeight: 1, display: 'block' }}>{cd[k as keyof typeof cd]}</span>
                    <span style={{ fontSize: 'clamp(6px,1.3vw,7px)', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#2a3050', marginTop: 3, display: 'block' }}>{u}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <div style={{ background: '#FFB800', overflow: 'hidden', padding: '11px 0' }}>
        <div style={{ display: 'flex', animation: 'tickR 30s linear infinite', whiteSpace: 'nowrap' }}>
          {[...Array(2)].map((_, r) => ['AI Digital Marketing', 'AI Office Suite', 'AI Web App Dev', 'Junior YouTuber', 'AI Prompt Engineer', 'AI Designer', 'Junior Python', 'Game Dev', 'Generative AI', '25 Days', 'Rutronix Approved', 'Limited Seats'].map((t, i) => (
            <span key={`${r}-${i}`} style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(9px,1.8vw,11px)', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#000507', padding: '0 22px', flexShrink: 0 }}>{t} <span style={{ fontSize: 6 }}>★</span></span>
          )))}
        </div>
      </div>

      {/* ══ STATS ══ */}
      <section style={{ background: '#080d18', padding: 'clamp(36px,7vw,52px) clamp(20px,5vw,56px)' }}>
        <div className="g4 mx">
          {STATS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.09}>
              <div style={{ padding: 'clamp(22px,4vw,36px) clamp(14px,3vw,28px)', background: 'rgba(255,255,255,.015)', textAlign: 'center', borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,.04)' : 'none' }}>
                <StatCounter target={s.num} suffix={s.suffix} color={s.color} />
                <div style={{ fontSize: 'clamp(7px,1.4vw,8px)', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2a3050' }}>{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══ COURSES ══ */}
      <section id="ac-courses" className="sp" style={{ background: '#000507', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,#FFB800,transparent)' }} />
        <div className="mx" style={{ marginBottom: 40 }}>
          <FadeIn><span className="sl">Nine AI Courses · Pick Your Passion</span></FadeIn>
          <FadeIn delay={0.1}><h2 className="st">The <span style={{ color: '#FFB800' }}>2026</span><br />Course <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(239,243,255,.18)' }}>Lineup</span></h2></FadeIn>
          <FadeIn delay={0.15}><p className="sb" style={{ maxWidth: 400 }}>Choose any one course for your 25-day journey — or discuss combinations with our counsellors.</p></FadeIn>
        </div>
        <FadeIn>
          <div className="mx" style={{ marginBottom: 36 }}>
            <div style={{ background: 'linear-gradient(135deg,rgba(255,184,0,.08),rgba(0,229,255,.06),rgba(180,127,255,.08))', border: '1px solid rgba(255,184,0,.25)', padding: 'clamp(22px,4vw,38px) clamp(18px,3.5vw,40px)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: 'linear-gradient(180deg,#FFB800,#00E5FF,#B47FFF)' }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 'clamp(32px,6vw,44px)', lineHeight: 1, flexShrink: 0 }}>🏛️</span>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 10 }}>
                    <span style={{ fontSize: 'clamp(6px,1.4vw,8px)', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#FFB800', background: 'rgba(255,184,0,.12)', border: '1px solid rgba(255,184,0,.3)', padding: '3px 9px', fontFamily: 'JetBrains Mono,monospace' }}>Kerala State Rutronix</span>
                    <span style={{ fontSize: 'clamp(6px,1.4vw,8px)', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#00E5FF', background: 'rgba(0,229,255,.1)', border: '1px solid rgba(0,229,255,.25)', padding: '3px 9px', fontFamily: 'JetBrains Mono,monospace' }}>🤖 14+ AI Tools</span>
                  </div>
                  <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(16px,3vw,28px)', lineHeight: 1.1, marginBottom: 10, color: '#EFF3FF' }}>"AI Education for All" <span style={{ color: '#FFB800' }}>— Kerala State Rutronix</span></h3>
                  <p style={{ fontFamily: 'DM Serif Display,serif', fontStyle: 'italic', fontSize: 'clamp(13px,2vw,15px)', lineHeight: 1.65, color: 'rgba(239,243,255,.65)', marginBottom: 14 }}>Along with your chosen course, explore <strong style={{ color: '#FFB800', fontStyle: 'normal' }}>14+ powerful AI tools</strong> to supercharge your learning.</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {[['ChatGPT', '#FFB800'], ['Gemini AI', '#00E5FF'], ['Midjourney', '#00FF9D'], ['Canva AI', '#B47FFF'], ['Claude AI', '#FF6EBF'], ['Adobe Firefly', '#FF7A2F'], ['+ 8 More', 'rgba(239,243,255,.6)']].map(([t, c]) => (
                      <span key={t} style={{ fontSize: 'clamp(6px,1.2vw,8px)', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 8px', border: `1px solid ${c}40`, color: c, fontFamily: 'JetBrains Mono,monospace' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <div className="g3 mx">
          {COURSES.map((c, i) => <CourseCard key={i} course={c} index={i} />)}
        </div>
      </section>

      {/* ══ WHO ══ */}
      <section className="sp" style={{ background: '#080d18', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,#00E5FF,transparent)' }} />
        <div className="mx">
          <FadeIn><span className="sl">Eligibility</span></FadeIn>
          <FadeIn delay={0.1}><h2 className="st">Who Can <span style={{ color: '#FFB800' }}>Join?</span></h2></FadeIn>
          <FadeIn delay={0.15}><p className="sb" style={{ maxWidth: 500, marginBottom: 40 }}>Built for young minds at every level. No prior computer knowledge required — just curiosity and willingness to learn.</p></FadeIn>
          <div className="g3w">
            {[
              { icon: '🏫', title: 'School Students', body: 'Class 5 to Class 12. Both Malayalam and English medium welcome. Separate junior (5–8) and senior (9–12) batches ensure the right pace.', accent: '#FFB800' },
              { icon: '🎓', title: 'College Students', body: "Degree, Diploma, and Plus Two students. Vacation time is the perfect opportunity to gain AI skills your course doesn't teach.", accent: '#00E5FF' },
              { icon: '👩‍💻', title: 'Beginners Welcome', body: 'Zero computer knowledge needed. Trainers start from basics and guide every student through real projects in both Malayalam and English.', accent: '#00FF9D' },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ padding: 'clamp(24px,4.5vw,38px) clamp(18px,3.5vw,30px)', background: 'rgba(3,6,15,.5)', border: '1px solid rgba(255,255,255,.05)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: card.accent }} />
                  <span style={{ fontSize: 'clamp(34px,7vw,42px)', marginBottom: 14, display: 'block' }}>{card.icon}</span>
                  <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(17px,3vw,21px)', color: '#EFF3FF', marginBottom: 8 }}>{card.title}</h3>
                  <p style={{ fontFamily: 'DM Serif Display,serif', fontStyle: 'italic', fontSize: 'clamp(13px,2vw,15px)', lineHeight: 1.65, color: 'rgba(239,243,255,.5)' }}>{card.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY ══ */}
      <section className="sp" style={{ background: '#000507', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,#B47FFF,transparent)' }} />
        <div className="mx">
          <FadeIn><span className="sl">Our Advantage</span></FadeIn>
          <FadeIn delay={0.1}><h2 className="st">Why Choose <span style={{ color: '#FFB800' }}>Oxford?</span></h2></FadeIn>
          <div className="g2w" style={{ marginTop: 36 }}>
            <div>
              {WHY_ITEMS.map((item, i) => (
                <FadeIn key={i} delay={i * 0.09}>
                  <div style={{ display: 'flex', gap: 16, padding: 'clamp(18px,3.5vw,26px) 0', borderBottom: i < WHY_ITEMS.length - 1 ? '1px solid rgba(255,255,255,.04)' : 'none', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 12, color: '#FFB800', minWidth: 24, marginTop: 2, flexShrink: 0 }}>{item.num}</span>
                    <div>
                      <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(14px,2.5vw,17px)', color: '#EFF3FF', marginBottom: 5 }}>{item.title}</div>
                      <div style={{ fontFamily: 'DM Serif Display,serif', fontStyle: 'italic', fontSize: 'clamp(13px,1.8vw,15px)', lineHeight: 1.65, color: 'rgba(239,243,255,.45)' }}>{item.body}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <div className="why-vis"><FadeIn delay={0.2}>
              <div style={{ width: '100%', aspectRatio: '1/1', background: 'rgba(3,6,15,.6)', border: '1px solid rgba(255,255,255,.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%,rgba(255,184,0,.07) 0%,transparent 65%)' }} />
                <span style={{ fontSize: 80 }}>🏛️</span>
                <div style={{ border: '1px solid rgba(255,184,0,.3)', padding: '13px 22px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 13, color: '#FFB800', letterSpacing: '0.1em', marginBottom: 4 }}>GOVERNMENT CERTIFIED</div>
                  <div style={{ fontSize: 8, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#2a3050' }}>Kerala State Rutronix Approved</div>
                </div>
                <div style={{ color: '#FFB800', fontSize: 15, letterSpacing: 4 }}>★★★★★</div>
              </div>
            </FadeIn></div>
          </div>
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section className="sp" style={{ background: '#080d18', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,#00FF9D,transparent)' }} />
        <div className="mx">
          <FadeIn><span className="sl">25-Day Journey</span></FadeIn>
          <FadeIn delay={0.1}><h2 className="st">Camp <span style={{ color: '#FFB800' }}>Schedule</span></h2></FadeIn>
          <div style={{ maxWidth: 820, marginTop: 36, position: 'relative' }}>
            <div style={{ position: 'absolute', left: 26, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom,#FFB800,#00E5FF,#00FF9D,#B47FFF)', opacity: .3 }} />
            {TIMELINE.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ display: 'flex', gap: 'clamp(18px,3.5vw,36px)', marginBottom: 'clamp(28px,5vw,48px)', position: 'relative' }}>
                  <div style={{ width: 'clamp(40px,7vw,52px)', height: 'clamp(40px,7vw,52px)', background: 'rgba(3,6,15,.8)', border: '1px solid rgba(255,184,0,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(16px,3.5vw,20px)', flexShrink: 0, position: 'relative', zIndex: 2 }}>{item.dot}</div>
                  <div style={{ paddingTop: 4, minWidth: 0 }}>
                    <div style={{ fontSize: 'clamp(6px,1.4vw,8px)', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFB800', marginBottom: 5, fontFamily: 'JetBrains Mono,monospace' }}>{item.day}</div>
                    <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(15px,2.8vw,19px)', color: '#EFF3FF', marginBottom: 5 }}>{item.title}</h3>
                    <p style={{ fontFamily: 'DM Serif Display,serif', fontStyle: 'italic', fontSize: 'clamp(12px,1.8vw,14px)', lineHeight: 1.65, color: 'rgba(239,243,255,.45)' }}>{item.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="sp" style={{ background: '#000507', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,#FF6EBF,transparent)' }} />
        <div className="mx">
          <FadeIn><span className="sl">Student Success</span></FadeIn>
          <FadeIn delay={0.1}><h2 className="st">What Our <span style={{ color: '#FFB800' }}>Students Say</span></h2></FadeIn>
          <div className="g3w" style={{ marginTop: 36 }}>
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ padding: 'clamp(24px,4.5vw,38px) clamp(18px,3.5vw,30px)', background: 'rgba(3,6,15,.6)', border: '1px solid rgba(255,255,255,.05)' }}>
                  <div style={{ color: '#FFB800', fontSize: 13, letterSpacing: 3, marginBottom: 14 }}>{'★'.repeat(t.stars)}</div>
                  <p style={{ fontFamily: 'DM Serif Display,serif', fontStyle: 'italic', fontSize: 'clamp(13px,2vw,15px)', lineHeight: 1.75, color: 'rgba(239,243,255,.6)', marginBottom: 18 }}>{t.quote}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                    <div style={{ width: 36, height: 36, background: 'rgba(255,184,0,.12)', border: '1px solid rgba(255,184,0,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 12, color: '#EFF3FF' }}>{t.name}</div>
                      <div style={{ fontSize: 'clamp(6px,1.3vw,8px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2a3050', fontFamily: 'JetBrains Mono,monospace' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="sp" style={{ background: '#080d18', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,#FFB800,transparent)' }} />
        <div className="mx">
          <FadeIn><span className="sl">FAQs</span></FadeIn>
          <FadeIn delay={0.1}><h2 className="st">Common <span style={{ color: '#FFB800' }}>Questions</span></h2></FadeIn>
          <div style={{ maxWidth: 740, marginTop: 36 }}>
            {FAQS.map((faq, i) => <FadeIn key={i} delay={i * 0.05}><FaqItem q={faq.q} a={faq.a} /></FadeIn>)}
          </div>
        </div>
      </section>

      {/* ══ REGISTER ══ */}
      <section id="ac-register" className="sp" style={{ background: '#000507', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,#00E5FF,transparent)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 60%,rgba(0,229,255,.05) 0%,transparent 65%)' }} />
        <div className="g2c mx" style={{ position: 'relative', zIndex: 2 }}>
          <FadeIn>
            <span className="sl">Register Now</span>
            <h2 className="st">Apply for<br /><span style={{ color: '#FFB800' }}>2026 Batch</span></h2>
            <p className="sb" style={{ marginBottom: 28 }}>Seats are limited. Fill the form and our team will call you within 24 hours to confirm your spot.</p>
            <div className="g2" style={{ marginBottom: 14 }}>
              <div>
                <label style={{ fontSize: 'clamp(7px,1.4vw,8px)', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2a3050', display: 'block', marginBottom: 6, fontFamily: 'JetBrains Mono,monospace' }}>Student Name *</label>
                <input style={inp} placeholder="Full name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
              </div>
              <div>
                <label style={{ fontSize: 'clamp(7px,1.4vw,8px)', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2a3050', display: 'block', marginBottom: 6, fontFamily: 'JetBrains Mono,monospace' }}>WhatsApp Number *</label>
                <input style={inp} type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
              </div>
            </div>
            <div className="g2" style={{ marginBottom: 14 }}>
              <div>
                <label style={{ fontSize: 'clamp(7px,1.4vw,8px)', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2a3050', display: 'block', marginBottom: 6, fontFamily: 'JetBrains Mono,monospace' }}>Class / Course Year</label>
                <input style={inp} placeholder="e.g. Class 10 / B.Com 2nd yr" value={form.studentClass} onChange={e => setForm(p => ({ ...p, studentClass: e.target.value }))} />
              </div>
              <div>
                <label style={{ fontSize: 'clamp(7px,1.4vw,8px)', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2a3050', display: 'block', marginBottom: 6, fontFamily: 'JetBrains Mono,monospace' }}>Preferred AI Course *</label>
                <select style={{ ...inp, appearance: 'none' }} value={form.course} onChange={e => setForm(p => ({ ...p, course: e.target.value }))}>
                  <option value="">Select a course</option>
                  <option>AI Digital Marketing</option>
                  <option>AI Office Suite</option>
                  <option>AI Web App Development</option>
                  <option>Junior YouTuber</option>
                  <option>Junior AI Prompt Engineer</option>
                  <option>AI Designer</option>
                  <option>Junior Python Programmer</option>
                  <option>Junior Game Developer</option>
                  <option>Generative AI & ChatGPT</option>
                  <option>Not decided yet — please advise</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 'clamp(7px,1.4vw,8px)', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2a3050', display: 'block', marginBottom: 6, fontFamily: 'JetBrains Mono,monospace' }}>Your Location / Area</label>
              <input style={inp} placeholder="e.g. Neyyattinkara, Attingal, Trivandrum" value={form.location} onChange={e => setForm(p => ({ ...p, location: e.target.value }))} />
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 'clamp(7px,1.4vw,8px)', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2a3050', display: 'block', marginBottom: 6, fontFamily: 'JetBrains Mono,monospace' }}>Any Questions? (Optional)</label>
              <textarea style={{ ...inp, resize: 'vertical', minHeight: 76 }} placeholder="Fee details, batch timings, course doubts..." value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} />
            </div>
            <button onClick={submit} disabled={sending}
              style={{ width: '100%', background: '#FFB800', color: '#000507', fontFamily: 'JetBrains Mono,monospace', fontSize: 'clamp(9px,1.8vw,11px)', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', padding: 'clamp(13px,2.5vw,17px)', border: 'none', cursor: 'pointer' }}>
              {sending ? 'Sending...' : 'Reserve My Seat →'}
            </button>
            <p style={{ fontSize: 'clamp(6px,1.3vw,8px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2a3050', marginTop: 9, textAlign: 'center' }}>🔒 Your data is safe. We will never share your information.</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(15px,2.5vw,18px)', color: '#EFF3FF', marginBottom: 18 }}>Contact Us Directly</div>
            {[
              { icon: '📞', lbl: 'Phone / WhatsApp', val: <a href="tel:+919447329972" style={{ color: '#FFB800', textDecoration: 'none' }}>+91 94473 29972</a> },
              { icon: '✉️', lbl: 'Email', val: <a href="mailto:t.005.rutronix@gmail.com" style={{ color: '#FFB800', textDecoration: 'none', wordBreak: 'break-all' as const }}>t.005.rutronix@gmail.com</a> },
              { icon: '📍', lbl: 'Address', val: <>The Oxford Computers<br />Malayinkeezhu, Thiruvananthapuram<br />Kerala — 695571</> },
              { icon: '🕐', lbl: 'Office Hours', val: 'Mon – Sat: 9:00 AM – 6:00 PM' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 13, alignItems: 'flex-start', marginBottom: 13 }}>
                <div style={{ width: 33, height: 33, background: 'rgba(255,184,0,.08)', border: '1px solid rgba(255,184,0,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 'clamp(6px,1.3vw,8px)', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#2a3050', marginBottom: 3, fontFamily: 'JetBrains Mono,monospace' }}>{item.lbl}</div>
                  <div style={{ fontSize: 'clamp(12px,1.8vw,13px)', color: '#EFF3FF' }}>{item.val}</div>
                </div>
              </div>
            ))}
            <div style={{ margin: '18px 0 24px' }}>
              <a href="https://wa.me/919447329972?text=Hi!%20I%20want%20to%20know%20about%20the%20AI%20Activity%20Camp%202026." target="_blank" rel="noopener noreferrer"
                style={{ background: '#FFB800', color: '#000507', fontFamily: 'JetBrains Mono,monospace', fontSize: 'clamp(8px,1.6vw,9px)', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: 'clamp(11px,2.5vw,13px) clamp(18px,3.5vw,24px)', display: 'inline-flex', alignItems: 'center', gap: 7, textDecoration: 'none' }}>
                💬 WhatsApp Us Now
              </a>
            </div>
            <div style={{ border: '1px solid rgba(255,255,255,.06)', overflow: 'hidden' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.7634729636504!2d77.00880147461548!3d8.401381991642408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbf7adf9c3d3%3A0x13ead778b1e2bc93!2sMalayinkeezhu%2C%20Kerala%20695571!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                style={{ display: 'block', width: '100%', height: 190, filter: 'invert(.9) hue-rotate(180deg) saturate(.6)', border: 'none' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Oxford Computers map" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(56px,9vw,80px) clamp(20px,5vw,48px)', position: 'relative', overflow: 'hidden', background: '#080d18' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 60%,rgba(255,184,0,.08) 0%,transparent 60%)', animation: 'ctaP 4s ease-in-out infinite' }} />
        <FadeIn>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span className="sl" style={{ marginBottom: 18 }}>🚀 2026 Batch · Limited Seats</span>
            <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(38px,9.5vw,100px)', lineHeight: .88, letterSpacing: '-0.04em', marginBottom: 20 }}>
              <span style={{ display: 'block', color: '#EFF3FF' }}>Your AI</span>
              <span style={{ display: 'block', color: '#FFB800' }}>Future Starts</span>
              <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '1px rgba(239,243,255,.14)' }}>This Summer</span>
            </h2>
            <p style={{ fontFamily: 'DM Serif Display,serif', fontStyle: 'italic', fontSize: 'clamp(14px,2.8vw,19px)', color: 'rgba(239,243,255,.38)', marginBottom: 32 }}>25 days. Real projects. Government certificate. Trivandrum, Kerala.</p>
            <div className="hero-btns" style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#ac-register" onClick={scrollTo('ac-register')} style={{ background: '#FFB800', color: '#000507', fontFamily: 'JetBrains Mono,monospace', fontSize: 'clamp(9px,1.8vw,10px)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: 'clamp(13px,2.5vw,17px) clamp(24px,5vw,40px)', textDecoration: 'none' }}>Apply for 2026 Camp →</a>
              <a href="tel:+919447329972" style={{ background: 'transparent', color: '#EFF3FF', fontFamily: 'JetBrains Mono,monospace', fontSize: 'clamp(9px,1.8vw,10px)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: 'clamp(13px,2.5vw,17px) clamp(24px,5vw,40px)', border: '1px solid #2a3050', textDecoration: 'none' }}>📞 Call Us Now</a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: '#000507', borderTop: '1px solid rgba(255,255,255,.05)', padding: 'clamp(36px,7vw,52px) clamp(20px,5vw,52px) clamp(20px,4vw,28px)' }}>
        <div className="gf" style={{ maxWidth: 1200, margin: '0 auto 36px' }}>
          <div>
            <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(12px,2.2vw,15px)', color: '#FFB800', letterSpacing: '0.1em', display: 'block', marginBottom: 11 }}>The Oxford Computers</span>
            <p style={{ fontFamily: 'DM Serif Display,serif', fontStyle: 'italic', fontSize: 'clamp(12px,1.8vw,14px)', lineHeight: 1.65, color: 'rgba(239,243,255,.35)', maxWidth: 240 }}>Kerala State Rutronix-approved AI & computer education institute. Transforming students into tech professionals since 1995.</p>
          </div>
          <div>
            <span style={{ fontSize: 'clamp(7px,1.3vw,8px)', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2a3050', marginBottom: 14, display: 'block', fontFamily: 'JetBrains Mono,monospace' }}>AI Courses</span>
            {['AI Digital Marketing', 'AI Office Suite', 'AI Web App Dev', 'Junior YouTuber', 'AI Prompt Engineer', 'AI Designer'].map(l => (
              <span key={l} onClick={() => document.getElementById('ac-courses')?.scrollIntoView({ behavior: 'smooth' })} style={{ display: 'block', fontSize: 'clamp(10px,1.8vw,12px)', color: 'rgba(239,243,255,.35)', marginBottom: 7, cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
          <div>
            <span style={{ fontSize: 'clamp(7px,1.3vw,8px)', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2a3050', marginBottom: 14, display: 'block', fontFamily: 'JetBrains Mono,monospace' }}>Quick Links</span>
            {[['Home', 'https://theoxfordedu.com'], ['All Courses', 'https://theoxfordedu.com/course'], ['About Us', 'https://theoxfordedu.com/about'], ['Contact', 'https://theoxfordedu.com/contact']].map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: 'clamp(10px,1.8vw,12px)', color: 'rgba(239,243,255,.35)', marginBottom: 7, textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
          <div>
            <span style={{ fontSize: 'clamp(7px,1.3vw,8px)', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2a3050', marginBottom: 14, display: 'block', fontFamily: 'JetBrains Mono,monospace' }}>Contact</span>
            <a href="tel:+919447329972" style={{ display: 'block', fontSize: 'clamp(10px,1.8vw,12px)', color: 'rgba(239,243,255,.35)', marginBottom: 7, textDecoration: 'none' }}>+91 94473 29972</a>
            <a href="mailto:t.005.rutronix@gmail.com" style={{ display: 'block', fontSize: 'clamp(10px,1.8vw,12px)', color: 'rgba(239,243,255,.35)', marginBottom: 7, textDecoration: 'none', wordBreak: 'break-all' }}>t.005.rutronix@gmail.com</a>
            <span style={{ display: 'block', fontSize: 'clamp(10px,1.8vw,12px)', color: 'rgba(239,243,255,.35)', marginBottom: 7 }}>Malayinkeezhu, Trivandrum</span>
            <a href="https://wa.me/919447329972" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: 'clamp(10px,1.8vw,12px)', color: '#FFB800', textDecoration: 'none' }}>💬 WhatsApp</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.04)', paddingTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, maxWidth: 1200, margin: '0 auto' }}>
          <span style={{ fontSize: 'clamp(7px,1.3vw,8px)', letterSpacing: '0.1em', color: '#2a3050', textTransform: 'uppercase', fontFamily: 'JetBrains Mono,monospace' }}>© 2026 The Oxford Computers · Kerala State Rutronix Approved</span>
          <div style={{ display: 'flex', gap: 10 }}>
            {[['f', 'https://www.facebook.com/oxfordtvm'], ['in', 'https://www.instagram.com/oxfordmkl'], ['w', 'https://wa.me/919447329972']].map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" style={{ width: 30, height: 30, border: '1px solid rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, textDecoration: 'none', color: '#EFF3FF' }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}