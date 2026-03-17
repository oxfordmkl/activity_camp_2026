'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── Data ────────────────────────────────────────────────────────────────────

const COURSES = [
  { idx:'01/09', emoji:'📣', name:'AI Digital Marketing',      color:'gold',   age:'Age 14+ · Class 9 onwards',   desc:'Master SEO, Google Ads, social media strategy, and AI copywriting. Run real campaigns and grow audiences using the latest AI marketing tools.', skills:['SEO','Google Ads','Social Media AI','Analytics','Email Marketing'] },
  { idx:'02/09', emoji:'💼', name:'AI Office Suite',           color:'cyan',   age:'Age 13+ · Class 8 onwards',   desc:'Supercharge productivity with AI in MS Word, Excel, PowerPoint and email. Automate reports, build smart spreadsheets, and design presentations in minutes.', skills:['MS Word AI','Excel AI','PowerPoint AI','Outlook AI','Automation'] },
  { idx:'03/09', emoji:'🌐', name:'AI Web App Development',    color:'red',    age:'Age 15+ · Class 10 onwards',  desc:'Build and deploy real web apps using HTML, CSS, JavaScript and React. AI coding assistants accelerate every step — ship your first live app before camp ends.', skills:['HTML/CSS','JavaScript','React','AI Coding','Live Deploy'] },
  { idx:'04/09', emoji:'🎬', name:'Junior YouTuber',           color:'green',  age:'Age 10+ · Class 5 onwards',   desc:'Script, film, edit, and publish. Use AI to create viral video ideas, stunning thumbnails, and grow a real YouTube channel. Perfect for young creators.', skills:['Video Scripting','Editing','AI Thumbnails','YouTube SEO','Monetisation'] },
  { idx:'05/09', emoji:'🧠', name:'Junior AI Prompt Engineer', color:'purple', age:'Age 12+ · Class 7 onwards',   desc:'Master the art of talking to AI. Learn prompt engineering for ChatGPT, Gemini, Claude and image generators — turn ideas into professional outputs instantly.', skills:['Prompt Design','ChatGPT','Gemini','Image Prompts','AI Workflows'] },
  { idx:'06/09', emoji:'🎨', name:'AI Designer',               color:'pink',   age:'Age 10+ · Class 5 onwards',   desc:'No drawing skills needed. Use Canva AI, Midjourney, and Adobe Firefly to design logos, posters, social media graphics and full brand identities.', skills:['Canva AI','Midjourney','Adobe Firefly','Logo Design','Brand Identity'] },
  { idx:'07/09', emoji:'🐍', name:'Junior Python Programmer',  color:'gold',   age:'Age 13+ · Class 8 onwards',   desc:'Learn the world\'s most popular AI language from scratch. Write real Python scripts, build mini-apps, automate tasks, and understand the code behind AI tools.', skills:['Python Basics','Variables & Loops','Functions','Mini Projects','AI Automation'] },
  { idx:'08/09', emoji:'🎮', name:'Junior Game Developer',     color:'cyan',   age:'Age 12+ · Class 7 onwards',   desc:'Design and build your own 2D games using beginner-friendly tools and AI assistance. Share your game with friends before camp ends!', skills:['Game Design','2D Development','Scratch / Unity','AI Characters','Publish & Share'] },
  { idx:'09/09', emoji:'🤖', name:'Generative AI & ChatGPT',   color:'red',    age:'Age 14+ · Class 9 onwards',   desc:'Master the most powerful AI tools of our era. Create text, images, code, and audio using ChatGPT, DALL·E, Sora, and more. Build AI workflows that work 24/7.', skills:['ChatGPT Pro','DALL·E Image Gen','Prompt Mastery','AI Workflows','Content Creation'] },
];

const STATS = [
  { num:5000, label:'Students Trained',    color:'#FFB800', suffix:'+' },
  { num:25,   label:'Days Per Course',     color:'#00E5FF', suffix:''  },
  { num:9,    label:'AI Courses',          color:'#00FF9D', suffix:''  },
  { num:95,   label:'% Placement Rate',   color:'#B47FFF', suffix:'%' },
];

const WHY_ITEMS = [
  { num:'01', title:'Kerala State Rutronix Approved',   body:'Government-recognised certification. Your Oxford certificate is valid across Kerala, India, and accepted in government job applications and higher education.' },
  { num:'02', title:'5000+ Students Trained',           body:'Over a decade of quality computer education in Malayinkeezhu. Our alumni work in IT companies, run businesses, and hold government positions across Kerala.' },
  { num:'03', title:'Hands-On AI Projects',             body:'Every student builds real projects — not just theory. You leave camp with a portfolio of actual work to show colleges, employers, and clients.' },
  { num:'04', title:'Malayalam + English Medium',       body:'Instruction in both languages ensures no student is left behind. Trainers are fluent in Malayalam and explain every concept until understood.' },
  { num:'05', title:'95% Placement Support',            body:'Career guidance, resume building, and placement assistance included. Our 95% placement rate speaks for itself — we invest in your success beyond the classroom.' },
];

const TIMELINE = [
  { dot:'🚀', day:'Days 1–5 · Week 1',    title:'Foundation & AI Tool Onboarding',    body:'Orientation, tool setup, and skill baseline assessment. Get introduced to 14+ AI tools curated for your course. Build your first mini-project with trainer guidance.' },
  { dot:'⚙️', day:'Days 6–12 · Week 2',   title:'Core Skills Development',            body:'Deep-dive into course-specific tools and techniques. Work on structured assignments daily. Peer learning, trainer feedback sessions, and skill assessments every Friday.' },
  { dot:'🛠️', day:'Days 13–19 · Week 3',  title:'Real-World Project Build',           body:'Apply everything learned to build your major project — a real website, marketing campaign, YouTube channel, AI design portfolio, or prompt engineering workbook.' },
  { dot:'🎯', day:'Days 20–24 · Week 4',  title:'Project Polish & Presentation',      body:'Refine your project with trainer mentorship. Prepare your project presentation for the final day showcase. Career guidance, resume tips, and alumni networking session.' },
  { dot:'🏅', day:'Day 25 · Grand Finale', title:'Certificate Ceremony & Showcase',   body:'Present your project to parents, trainers, and guests. Receive your Kerala State Rutronix Government Certificate. Celebrate your transformation from student to AI creator.' },
];

const TESTIMONIALS = [
  { stars:5, quote:'"I joined the AI Digital Marketing course during my Plus Two vacation. Within 25 days I ran a real Google Ads campaign. Now I handle my uncle\'s shop social media and earn pocket money."', name:'Arun M.', role:'Plus Two Student · Trivandrum', avatar:'🧑' },
  { stars:5, quote:'"My daughter attended the Junior YouTuber course. She now has 800 subscribers and posts regularly. The trainers were patient and explained everything in Malayalam. Highly recommended."', name:'Priya S. (Parent)', role:'Daughter: Class 7 · Malayinkeezhu', avatar:'👩' },
  { stars:5, quote:'"The AI Web App Development course was intense but incredibly rewarding. I deployed my first website live on Day 22. The Oxford team gave personal attention to every student."', name:'Vishnu R.', role:'BCA Student · Neyyattinkara', avatar:'👨‍💻' },
];

const FAQS = [
  { q:'What is the AI Vacation Activity Camp 2026?', a:'A 25-day AI-powered summer camp by The Oxford Computers, Malayinkeezhu. Students choose from 9 specialised AI courses and earn a Kerala State Rutronix Government Certificate on completion.' },
  { q:'Who can join? What is the age requirement?', a:'Open to school students from Class 5 onwards and college students up to degree level. Age varies by course — Junior YouTuber starts from age 10, AI Web App Dev requires Class 10+. No prior computer experience needed.' },
  { q:'Is the certificate government recognised?', a:'Yes. The Oxford Computers is a Kerala State Rutronix-approved institute. The certificate is government-certified and nationally recognised — valid for government job applications and higher education admissions across Kerala.' },
  { q:'How long is each course and what are the timings?', a:'Each course is 25 days, conducted on weekdays. Classes run 2–3 hours per day. Morning, afternoon, and evening batches are available. Contact us to check current availability.' },
  { q:'What is the fee for the AI Activity Camp?', a:'Course fees vary by programme. Special early-bird rates and sibling discounts are available for the 2026 batch. Call +91 94473 29972 or visit us at Malayinkeezhu for the latest fee structure.' },
  { q:'Is instruction in Malayalam or English?', a:'Both. Trainers are fluent in Malayalam and English. Most classes are conducted bilingually so every student understands fully. Study materials are in English with Malayalam explanations during class.' },
  { q:'How do I register for the 2026 batch?', a:'Fill the registration form below, call/WhatsApp +91 94473 29972, or visit The Oxford Computers at Malayinkeezhu, Trivandrum — 695571. Seats are limited; early registration is strongly recommended.' },
];

const SHEET_URL = 'https://script.google.com/macros/s/AKfycby8hn6MU0dRGPFcFPYSNM4sKj8xV0Zf6ilSIojIEVhJzUt8TmPU1q18Zoy-dM8eGTgB/exec';

// ─── Color maps ───────────────────────────────────────────────────────────────
const C: Record<string, string> = {
  gold:'#FFB800', cyan:'#00E5FF', red:'#FF3860', green:'#00FF9D', purple:'#B47FFF', pink:'#FF6EBF',
};
const CBORDER: Record<string, string> = {
  gold:'rgba(255,184,0,.4)', cyan:'rgba(0,229,255,.4)', red:'rgba(255,56,96,.4)',
  green:'rgba(0,255,157,.4)', purple:'rgba(180,127,255,.4)', pink:'rgba(255,110,191,.4)',
};

// ─── Micro-components ─────────────────────────────────────────────────────────

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span style={{ fontSize:9, letterSpacing:'0.4em', textTransform:'uppercase', color:'#00E5FF', display:'block', marginBottom:16, fontFamily:'JetBrains Mono, monospace' }}>{children}</span>;
}

function SectionTitle({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <h2 style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:'clamp(36px,5.5vw,72px)', lineHeight:0.96, marginBottom:24, color:'#EFF3FF', ...style }}>{children}</h2>;
}

function Gold({ children }: { children: React.ReactNode }) {
  return <span style={{ color:'#FFB800' }}>{children}</span>;
}

function StatCounter({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = () => {
      start += Math.ceil(target / 60);
      if (start >= target) { setCount(target); return; }
      setCount(start);
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return (
    <div ref={ref} style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:'clamp(36px,5vw,60px)', lineHeight:1, color, marginBottom:8 }}>
      {count}{suffix}
    </div>
  );
}

function CourseCard({ course, index }: { course: typeof COURSES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const col = C[course.color];
  const bdr = CBORDER[course.color];
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => document.getElementById('ac-register')?.scrollIntoView({ behavior:'smooth' })}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22,1,0.36,1] }}
      style={{
        padding:'48px 40px', background: hovered ? 'rgba(3,6,15,.95)' : 'rgba(3,6,15,.6)',
        border:`1px solid ${hovered ? 'rgba(255,255,255,.18)' : 'rgba(255,255,255,.05)'}`,
        position:'relative', overflow:'hidden', cursor:'pointer',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition:'all 0.4s cubic-bezier(0.22,1,0.36,1)',
      }}>
      {/* top accent line */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:col, transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin:'left', transition:'transform 0.5s ease' }} />
      {/* glow */}
      <div style={{ position:'absolute', width:220, height:220, borderRadius:'50%', filter:'blur(70px)', top:-60, right:-60, background:col, opacity: hovered ? 0.18 : 0, transition:'opacity 0.5s', pointerEvents:'none' }} />
      <div style={{ fontSize:9, letterSpacing:'0.2em', color:'#2a3050', marginBottom:20, fontFamily:'JetBrains Mono, monospace' }}>{course.idx}</div>
      <span style={{ fontSize:52, marginBottom:20, display:'block', lineHeight:1 }}>{course.emoji}</span>
      <h3 style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:22, lineHeight:1.1, marginBottom:14, color:col }}>{course.name}</h3>
      <span style={{ fontSize:8, letterSpacing:'0.15em', textTransform:'uppercase', padding:'5px 12px', border:`1px solid ${bdr}`, color:col, display:'inline-block', marginBottom:20, fontFamily:'JetBrains Mono, monospace' }}>{course.age}</span>
      <p style={{ fontFamily:'DM Serif Display, serif', fontStyle:'italic', fontSize:15, lineHeight:1.65, color:'rgba(239,243,255,.48)', marginBottom:24 }}>{course.desc}</p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:28 }}>
        {course.skills.map(s => (
          <span key={s} style={{ fontSize:7, letterSpacing:'0.12em', textTransform:'uppercase', padding:'4px 9px', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.06)', color:'#2a3050', fontFamily:'JetBrains Mono, monospace' }}>{s}</span>
        ))}
      </div>
      <span style={{ fontSize:14, color:col, opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0)' : 'translateX(-8px)', transition:'all 0.3s', display:'block', fontFamily:'JetBrains Mono, monospace', fontWeight:700 }}>→ Enroll Now</span>
    </motion.div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom:'1px solid rgba(255,255,255,.05)' }}>
      <div onClick={() => setOpen(!open)} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'24px 0', cursor:'pointer', gap:20 }}>
        <span style={{ fontFamily:'Syne, sans-serif', fontWeight:700, fontSize:16, color:'#EFF3FF', lineHeight:1.3 }}>{q}</span>
        <div style={{
          width:28, height:28, border:`1px solid ${open ? '#FFB800' : 'rgba(255,255,255,.1)'}`,
          display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
          background: open ? '#FFB800' : 'transparent', color: open ? '#000507' : '#2a3050',
          transform: open ? 'rotate(45deg)' : 'none', transition:'all 0.3s', fontSize:14,
        }}>+</div>
      </div>
      <motion.div animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} initial={false} transition={{ duration: 0.35 }} style={{ overflow:'hidden' }}>
        <p style={{ fontFamily:'DM Serif Display, serif', fontStyle:'italic', fontSize:16, lineHeight:1.75, color:'rgba(239,243,255,.5)', paddingBottom:24 }}>{a}</p>
      </motion.div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ActivityCampSection() {
  const [formData, setFormData] = useState({ name:'', phone:'', studentClass:'', course:'', location:'', message:'' });
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);
  const [sending, setSending] = useState(false);
  const [countdown, setCountdown] = useState({ d:'--', h:'--', m:'--', s:'--' });

  // Countdown
  useEffect(() => {
    const campStart = new Date('2026-04-01T00:00:00+05:30').getTime();
    const tick = () => {
      const diff = campStart - Date.now();
      if (diff <= 0) { setCountdown({ d:'00', h:'00', m:'00', s:'00' }); return; }
      setCountdown({
        d: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const showToast = (msg: string, ok: boolean) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 4500);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.course) {
      showToast('⚠️ Please fill Name, Phone & Course', false); return;
    }
    setSending(true);
    const ist = new Date().toLocaleString('en-IN', { timeZone:'Asia/Kolkata', hour12:true });
    try {
      await fetch(SHEET_URL, { method:'POST', body: JSON.stringify({ timestamp:ist, source:'ActivityCamp2026', ...formData }) });
      showToast('✓ Application Received! We will call you soon.', true);
      setFormData({ name:'', phone:'', studentClass:'', course:'', location:'', message:'' });
    } catch {
      showToast('✓ Received! But check your connection.', true);
    }
    setSending(false);
  };

  const inputStyle: React.CSSProperties = {
    width:'100%', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)',
    padding:'14px 18px', color:'#EFF3FF', fontFamily:'JetBrains Mono, monospace', fontSize:13,
    outline:'none', transition:'border-color 0.3s',
  };

  return (
    <div style={{ background:'#000507', color:'#EFF3FF', fontFamily:'JetBrains Mono, monospace', overflowX:'hidden' }}>

      {/* ── Toast ── */}
      {toast && (
        <div style={{
          position:'fixed', bottom:32, left:'50%', transform:'translateX(-50%)',
          background: toast.ok ? '#00FF9D' : '#FF3860', color:'#000507',
          fontFamily:'JetBrains Mono, monospace', fontSize:11, fontWeight:700,
          letterSpacing:'0.15em', textTransform:'uppercase', padding:'16px 32px', zIndex:9999,
          borderRadius:0, boxShadow:'0 8px 32px rgba(0,0,0,0.4)',
        }}>{toast.msg}</div>
      )}

      {/* ── WhatsApp Sticky ── */}
      <a href="https://wa.me/919447329972?text=Hi!%20I%20want%20to%20know%20about%20the%20AI%20Vacation%20Activity%20Camp%202026." target="_blank" rel="noopener noreferrer"
        style={{ position:'fixed', bottom:28, right:28, zIndex:8500, width:58, height:58, background:'#25D366', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 8px 32px rgba(37,211,102,.4)', textDecoration:'none' }}>
        <svg viewBox="0 0 24 24" style={{ width:28, height:28, fill:'#fff' }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ══ HERO ══ */}
      <section style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', position:'relative', overflow:'hidden', padding:'120px 48px 80px' }}>
        {/* Animated grid bg */}
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(0,229,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,.025) 1px,transparent 1px)', backgroundSize:'64px 64px', animation:'gridDrift 25s linear infinite' }} />
        <div style={{ position:'absolute', width:800, height:800, background:'radial-gradient(circle,rgba(255,184,0,.09) 0%,transparent 70%)', borderRadius:'50%', top:'40%', left:'30%', transform:'translate(-50%,-50%)', animation:'breathe 6s ease-in-out infinite' }} />
        <div style={{ position:'absolute', width:600, height:600, background:'radial-gradient(circle,rgba(0,229,255,.07) 0%,transparent 70%)', borderRadius:'50%', top:'60%', left:'70%', transform:'translate(-50%,-50%)', animation:'breathe 8s ease-in-out infinite reverse' }} />

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;700&display=swap');
          @keyframes gridDrift{to{background-position:64px 64px,64px 64px;}}
          @keyframes breathe{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.2)}}
          @keyframes tick{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
          @keyframes ctaGlow{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.1)}}
          @keyframes shDot{0%,100%{transform:translateY(0);opacity:1}70%{transform:translateY(9px);opacity:0}}
          * { box-sizing: border-box; }
        `}</style>

        <div style={{ position:'relative', zIndex:2, maxWidth:1000 }}>
          <motion.span initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ delay:.3, duration:.9 }}
            style={{ fontSize:9, letterSpacing:'0.42em', textTransform:'uppercase', color:'#00E5FF', marginBottom:24, display:'block' }}>
            🌐 Kerala State Rutronix Approved · Vacation Activity Camp
          </motion.span>

          <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ delay:.5, duration:.9 }}
            style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap', marginBottom:32 }}>
            {[['25 Days','#FFB800'],['9 AI Courses','#00E5FF'],['Gov Certified','#00FF9D'],['Limited Seats','#FF3860']].map(([l,c]) => (
              <span key={l} style={{ fontSize:8, letterSpacing:'0.15em', textTransform:'uppercase', padding:'6px 14px', border:`1px solid ${c}`, color:c, fontFamily:'JetBrains Mono, monospace' }}>{l}</span>
            ))}
          </motion.div>

          <motion.h1 initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.7, duration:1 }}
            style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:'clamp(48px,10vw,120px)', lineHeight:.88, letterSpacing:'-0.04em', marginBottom:28 }}>
            <span style={{ display:'block', color:'#FFB800' }}>AI Vacation</span>
            <span style={{ display:'block', color:'#EFF3FF' }}>Activity</span>
            <span style={{ display:'block', color:'transparent', WebkitTextStroke:'1.5px rgba(240,243,255,.18)' }}>Camp 2026</span>
          </motion.h1>

          <motion.p initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ delay:.95, duration:.9 }}
            style={{ fontFamily:'DM Serif Display, serif', fontStyle:'italic', fontSize:'clamp(16px,2.5vw,24px)', color:'rgba(239,243,255,.45)', marginBottom:16 }}>
            25 days. 9 AI-powered courses. One life-changing summer.
          </motion.p>

          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.1, duration:.9 }}
            style={{ fontSize:9, letterSpacing:'0.25em', textTransform:'uppercase', color:'#2a3050', marginBottom:48 }}>
            📍 <span style={{ color:'#FFB800' }}>The Oxford Computers</span> · Malayinkeezhu, Trivandrum, Kerala
          </motion.p>

          <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.25, duration:.9 }}
            style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:52 }}>
            <a href="#ac-register" onClick={e => { e.preventDefault(); document.getElementById('ac-register')?.scrollIntoView({ behavior:'smooth' }); }}
              style={{ background:'#FFB800', color:'#000507', fontFamily:'JetBrains Mono, monospace', fontSize:10, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', padding:'18px 44px', border:'none', cursor:'pointer', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
              Apply for 2026 Batch →
            </a>
            <a href="#ac-courses" onClick={e => { e.preventDefault(); document.getElementById('ac-courses')?.scrollIntoView({ behavior:'smooth' }); }}
              style={{ background:'transparent', color:'#EFF3FF', fontFamily:'JetBrains Mono, monospace', fontSize:10, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', padding:'18px 44px', border:'1px solid #2a3050', cursor:'pointer', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
              View All 9 Courses
            </a>
          </motion.div>

          {/* Countdown */}
          <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.5, duration:.9 }}>
            <p style={{ fontSize:8, letterSpacing:'0.3em', textTransform:'uppercase', color:'#2a3050', marginBottom:14 }}>Camp starts soon — secure your seat</p>
            <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
              {[['d','Days'],['h','Hours'],['m','Mins'],['s','Secs']].map(([k, unit], i) => (
                <React.Fragment key={k}>
                  {i > 0 && <span style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:28, color:'#2a3050', alignSelf:'flex-start', marginTop:4 }}>:</span>}
                  <div style={{ width:72, textAlign:'center' }}>
                    <span style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:36, color:'#FFB800', lineHeight:1, display:'block' }}>{countdown[k as keyof typeof countdown]}</span>
                    <span style={{ fontSize:7, letterSpacing:'0.2em', textTransform:'uppercase', color:'#2a3050', marginTop:4, display:'block' }}>{unit}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <div style={{ background:'#FFB800', overflow:'hidden', padding:'14px 0' }}>
        <div style={{ display:'flex', animation:'tick 32s linear infinite', whiteSpace:'nowrap' }}>
          {['AI Digital Marketing','AI Office Suite','AI Web App Dev','Junior YouTuber','AI Prompt Engineer','AI Designer','Junior Python','Game Dev','Generative AI','25 Days','Kerala Rutronix Approved','Malayinkeezhu Trivandrum','Real Certificates','School & College Students','2026 Batch',
            'AI Digital Marketing','AI Office Suite','AI Web App Dev','Junior YouTuber','AI Prompt Engineer','AI Designer','Junior Python','Game Dev','Generative AI','25 Days','Kerala Rutronix Approved','Malayinkeezhu Trivandrum','Real Certificates','School & College Students','2026 Batch'].map((t, i) => (
            <div key={i} style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'#000507', padding:'0 32px', display:'flex', alignItems:'center', gap:14, flexShrink:0 }}>
              {t} <span style={{ fontSize:7 }}>★</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ STATS ══ */}
      <section style={{ background:'#080d18', borderTop:'1px solid rgba(255,255,255,.04)', borderBottom:'1px solid rgba(255,255,255,.04)', padding:'56px 56px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:2, maxWidth:1200, margin:'0 auto' }}>
          {STATS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ padding:'40px 36px', background:'rgba(255,255,255,.015)', textAlign:'center', borderRight: i < STATS.length-1 ? '1px solid rgba(255,255,255,.04)' : 'none' }}>
                <StatCounter target={s.num} suffix={s.suffix} color={s.color} />
                <div style={{ fontSize:8, letterSpacing:'0.22em', textTransform:'uppercase', color:'#2a3050' }}>{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══ COURSES ══ */}
      <section id="ac-courses" style={{ padding:'120px 56px', background:'#000507', position:'relative' }}>
        <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,#FFB800,transparent)' }} />
        <div style={{ maxWidth:1200, margin:'0 auto 80px', display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:32 }}>
          <div>
            <FadeIn><SectionLabel>Nine AI Courses · Pick Your Passion</SectionLabel></FadeIn>
            <FadeIn delay={0.1}><SectionTitle>The <Gold>2026</Gold><br/>Course <span style={{ color:'transparent', WebkitTextStroke:'1px rgba(239,243,255,.18)' }}>Lineup</span></SectionTitle></FadeIn>
          </div>
          <FadeIn delay={0.2}><p style={{ fontFamily:'DM Serif Display, serif', fontStyle:'italic', fontSize:17, color:'rgba(239,243,255,.4)', maxWidth:380 }}>Choose any one course for your 25-day journey — or discuss combinations with our counsellors.</p></FadeIn>
        </div>

        {/* Rutronix AI Banner */}
        <FadeIn>
          <div style={{ maxWidth:1200, margin:'0 auto 60px', padding:'0 0px' }}>
            <div style={{ background:'linear-gradient(135deg,rgba(255,184,0,.08) 0%,rgba(0,229,255,.06) 50%,rgba(180,127,255,.08) 100%)', border:'1px solid rgba(255,184,0,.25)', padding:'40px 48px', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:0, left:0, width:4, height:'100%', background:'linear-gradient(180deg,#FFB800,#00E5FF,#B47FFF)' }} />
              <div style={{ display:'flex', alignItems:'flex-start', gap:24, flexWrap:'wrap' }}>
                <div style={{ fontSize:48, lineHeight:1 }}>🏛️</div>
                <div style={{ flex:1, minWidth:260 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:12, flexWrap:'wrap', marginBottom:14 }}>
                    <span style={{ fontSize:8, letterSpacing:'0.3em', textTransform:'uppercase', color:'#FFB800', background:'rgba(255,184,0,.12)', border:'1px solid rgba(255,184,0,.3)', padding:'4px 12px', fontFamily:'JetBrains Mono, monospace' }}>Kerala State Rutronix Initiative</span>
                    <span style={{ fontSize:8, letterSpacing:'0.2em', textTransform:'uppercase', color:'#00E5FF', background:'rgba(0,229,255,.1)', border:'1px solid rgba(0,229,255,.25)', padding:'4px 12px', fontFamily:'JetBrains Mono, monospace' }}>🤖 14+ AI Tools Included</span>
                  </div>
                  <h3 style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:'clamp(20px,3.5vw,34px)', lineHeight:1.1, marginBottom:14, color:'#EFF3FF' }}>
                    "AI Education for All" <span style={{ color:'#FFB800' }}>— Kerala State Rutronix</span>
                  </h3>
                  <p style={{ fontFamily:'DM Serif Display, serif', fontStyle:'italic', fontSize:17, lineHeight:1.7, color:'rgba(239,243,255,.65)', marginBottom:20 }}>
                    Kerala State Rutronix is bringing you <strong style={{ color:'#EFF3FF', fontStyle:'normal' }}>"AI Education for All"</strong> — along with your chosen course, you get to explore <strong style={{ color:'#FFB800', fontStyle:'normal' }}>14+ powerful AI tools</strong> to supercharge your learning.
                  </p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                    {[['ChatGPT','#FFB800'],['Gemini AI','#00E5FF'],['Midjourney','#00FF9D'],['Canva AI','#B47FFF'],['Claude AI','#FF6EBF'],['Adobe Firefly','#FF7A2F'],['+ 8 More Tools','rgba(239,243,255,.6)']].map(([t,c]) => (
                      <span key={t} style={{ fontSize:8, letterSpacing:'0.15em', textTransform:'uppercase', padding:'5px 12px', border:`1px solid ${c}40`, color:c, fontFamily:'JetBrains Mono, monospace' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }}>
          {COURSES.map((c, i) => <CourseCard key={i} course={c} index={i} />)}
        </div>
      </section>

      {/* ══ WHO CAN JOIN ══ */}
      <section style={{ padding:'120px 56px', background:'#080d18', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,#00E5FF,transparent)' }} />
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <FadeIn><SectionLabel>Eligibility</SectionLabel></FadeIn>
          <FadeIn delay={0.1}><SectionTitle>Who Can <Gold>Join?</Gold></SectionTitle></FadeIn>
          <FadeIn delay={0.2}><p style={{ fontFamily:'DM Serif Display, serif', fontStyle:'italic', fontSize:18, lineHeight:1.7, color:'rgba(239,243,255,.5)', maxWidth:560 }}>This camp is built for young minds at every level. No prior computer knowledge required — just curiosity and the willingness to learn.</p></FadeIn>
        </div>
        <div style={{ maxWidth:1200, margin:'60px auto 0', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
          {[
            { icon:'🏫', title:'School Students', body:'Class 5 to Class 12. Both Malayalam and English medium students are welcome. Separate junior (Class 5–8) and senior (Class 9–12) batches ensure the right learning pace.', accent:'#FFB800' },
            { icon:'🎓', title:'College Students', body:'Degree, Diploma, and Plus Two students. Vacation time is the perfect opportunity to gain AI skills that your course doesn\'t teach — and your future employer will value.', accent:'#00E5FF' },
            { icon:'👩‍💻', title:'Beginners Welcome', body:'Zero computer knowledge needed. Our trainers start from basics and guide every student through real projects at their own pace, in both Malayalam and English.', accent:'#00FF9D' },
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div style={{ padding:'40px 32px', background:'rgba(3,6,15,.5)', border:'1px solid rgba(255,255,255,.05)', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, width:3, height:'100%', background:card.accent }} />
                <span style={{ fontSize:44, marginBottom:20, display:'block' }}>{card.icon}</span>
                <h3 style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:22, color:'#EFF3FF', marginBottom:12 }}>{card.title}</h3>
                <p style={{ fontFamily:'DM Serif Display, serif', fontStyle:'italic', fontSize:16, lineHeight:1.65, color:'rgba(239,243,255,.5)' }}>{card.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══ WHY OXFORD ══ */}
      <section style={{ padding:'120px 56px', background:'#000507', position:'relative' }}>
        <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,#B47FFF,transparent)' }} />
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <FadeIn><SectionLabel>Our Advantage</SectionLabel></FadeIn>
          <FadeIn delay={0.1}><SectionTitle>Why Choose <Gold>Oxford?</Gold></SectionTitle></FadeIn>
        </div>
        <div style={{ maxWidth:1200, margin:'60px auto 0', display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
          <div>
            {WHY_ITEMS.map((item, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div style={{ display:'flex', gap:20, padding:'28px 0', borderBottom: i < WHY_ITEMS.length-1 ? '1px solid rgba(255,255,255,.04)' : 'none', alignItems:'flex-start' }}>
                  <span style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:13, color:'#FFB800', minWidth:28, marginTop:2 }}>{item.num}</span>
                  <div>
                    <div style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:18, color:'#EFF3FF', marginBottom:8 }}>{item.title}</div>
                    <div style={{ fontFamily:'DM Serif Display, serif', fontStyle:'italic', fontSize:15, lineHeight:1.65, color:'rgba(239,243,255,.45)' }}>{item.body}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div style={{ width:'100%', aspectRatio:'1/1', background:'rgba(3,6,15,.6)', border:'1px solid rgba(255,255,255,.05)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:20, position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 50% 50%,rgba(255,184,0,.07) 0%,transparent 65%)' }} />
              <span style={{ fontSize:96, position:'relative', zIndex:2 }}>🏛️</span>
              <div style={{ border:'1px solid rgba(255,184,0,.3)', padding:'16px 28px', textAlign:'center', position:'relative', zIndex:2 }}>
                <div style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:14, color:'#FFB800', letterSpacing:'0.1em', marginBottom:6 }}>GOVERNMENT CERTIFIED</div>
                <div style={{ fontSize:9, letterSpacing:'0.15em', textTransform:'uppercase', color:'#2a3050' }}>Kerala State Rutronix Approved</div>
              </div>
              <div style={{ color:'#FFB800', fontSize:16, letterSpacing:4, position:'relative', zIndex:2 }}>★★★★★</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section style={{ padding:'120px 56px', background:'#080d18', position:'relative' }}>
        <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,#00FF9D,transparent)' }} />
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <FadeIn><SectionLabel>25-Day Journey</SectionLabel></FadeIn>
          <FadeIn delay={0.1}><SectionTitle>Camp <Gold>Schedule</Gold></SectionTitle></FadeIn>
        </div>
        <div style={{ maxWidth:900, margin:'60px auto 0', position:'relative' }}>
          <div style={{ position:'absolute', left:28, top:0, bottom:0, width:1, background:'linear-gradient(to bottom,#FFB800,#00E5FF,#00FF9D,#B47FFF)', opacity:.3 }} />
          {TIMELINE.map((item, i) => (
            <FadeIn key={i} delay={i * 0.16}>
              <div style={{ display:'flex', gap:40, marginBottom:52, position:'relative' }}>
                <div style={{ width:56, height:56, background:'rgba(3,6,15,.8)', border:'1px solid rgba(255,184,0,.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, flexShrink:0, position:'relative', zIndex:2 }}>{item.dot}</div>
                <div style={{ paddingTop:8 }}>
                  <div style={{ fontSize:8, letterSpacing:'0.25em', textTransform:'uppercase', color:'#FFB800', marginBottom:8, fontFamily:'JetBrains Mono, monospace' }}>{item.day}</div>
                  <h3 style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:20, color:'#EFF3FF', marginBottom:8 }}>{item.title}</h3>
                  <p style={{ fontFamily:'DM Serif Display, serif', fontStyle:'italic', fontSize:15, lineHeight:1.65, color:'rgba(239,243,255,.45)' }}>{item.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section style={{ padding:'120px 56px', background:'#000507', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,#FF6EBF,transparent)' }} />
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <FadeIn><SectionLabel>Student Success</SectionLabel></FadeIn>
          <FadeIn delay={0.1}><SectionTitle>What Our <Gold>Students Say</Gold></SectionTitle></FadeIn>
        </div>
        <div style={{ maxWidth:1200, margin:'60px auto 0', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div style={{ padding:'40px 32px', background:'rgba(3,6,15,.6)', border:'1px solid rgba(255,255,255,.05)' }}>
                <div style={{ color:'#FFB800', fontSize:12, letterSpacing:3, marginBottom:18 }}>{'★'.repeat(t.stars)}</div>
                <p style={{ fontFamily:'DM Serif Display, serif', fontStyle:'italic', fontSize:16, lineHeight:1.75, color:'rgba(239,243,255,.6)', marginBottom:24 }}>{t.quote}</p>
                <div style={{ display:'flex', alignItems:'center', gap:14 }}>
                  <div style={{ width:40, height:40, background:'rgba(255,184,0,.12)', border:'1px solid rgba(255,184,0,.25)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontFamily:'Syne, sans-serif', fontWeight:700, fontSize:12, color:'#EFF3FF' }}>{t.name}</div>
                    <div style={{ fontSize:8, letterSpacing:'0.12em', textTransform:'uppercase', color:'#2a3050', fontFamily:'JetBrains Mono, monospace' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section style={{ padding:'120px 56px', background:'#080d18', position:'relative' }}>
        <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,#FFB800,transparent)' }} />
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <FadeIn><SectionLabel>FAQs</SectionLabel></FadeIn>
          <FadeIn delay={0.1}><SectionTitle>Common <Gold>Questions</Gold></SectionTitle></FadeIn>
        </div>
        <div style={{ maxWidth:800, margin:'60px auto 0' }}>
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <FaqItem q={faq.q} a={faq.a} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══ REGISTER ══ */}
      <section id="ac-register" style={{ padding:'120px 56px', background:'#000507', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,#00E5FF,transparent)' }} />
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 60%,rgba(0,229,255,.06) 0%,transparent 65%)' }} />
        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start', position:'relative', zIndex:2 }}>
          {/* LEFT: form */}
          <FadeIn>
            <SectionLabel>Register Now</SectionLabel>
            <SectionTitle>Apply for<br/><Gold>2026 Batch</Gold></SectionTitle>
            <p style={{ fontFamily:'DM Serif Display, serif', fontStyle:'italic', fontSize:18, lineHeight:1.7, color:'rgba(239,243,255,.5)' }}>Seats are limited. Fill the form and our team will call you within 24 hours to confirm your spot.</p>
            <div style={{ marginTop:40 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:20 }}>
                <div>
                  <label style={{ fontSize:8, letterSpacing:'0.22em', textTransform:'uppercase', color:'#2a3050', display:'block', marginBottom:8, fontFamily:'JetBrains Mono, monospace' }}>Student Name *</label>
                  <input style={inputStyle} type="text" placeholder="Full name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name:e.target.value }))} />
                </div>
                <div>
                  <label style={{ fontSize:8, letterSpacing:'0.22em', textTransform:'uppercase', color:'#2a3050', display:'block', marginBottom:8, fontFamily:'JetBrains Mono, monospace' }}>WhatsApp Number *</label>
                  <input style={inputStyle} type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone:e.target.value }))} />
                </div>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:20 }}>
                <div>
                  <label style={{ fontSize:8, letterSpacing:'0.22em', textTransform:'uppercase', color:'#2a3050', display:'block', marginBottom:8, fontFamily:'JetBrains Mono, monospace' }}>Class / Course Year</label>
                  <input style={inputStyle} type="text" placeholder="e.g. Class 10 / B.Com 2nd year" value={formData.studentClass} onChange={e => setFormData(p => ({ ...p, studentClass:e.target.value }))} />
                </div>
                <div>
                  <label style={{ fontSize:8, letterSpacing:'0.22em', textTransform:'uppercase', color:'#2a3050', display:'block', marginBottom:8, fontFamily:'JetBrains Mono, monospace' }}>Preferred AI Course *</label>
                  <select style={{ ...inputStyle, appearance:'none' }} value={formData.course} onChange={e => setFormData(p => ({ ...p, course:e.target.value }))}>
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
              <div style={{ marginBottom:20 }}>
                <label style={{ fontSize:8, letterSpacing:'0.22em', textTransform:'uppercase', color:'#2a3050', display:'block', marginBottom:8, fontFamily:'JetBrains Mono, monospace' }}>Your Location / Area</label>
                <input style={inputStyle} type="text" placeholder="e.g. Neyyattinkara, Attingal, Trivandrum" value={formData.location} onChange={e => setFormData(p => ({ ...p, location:e.target.value }))} />
              </div>
              <div style={{ marginBottom:20 }}>
                <label style={{ fontSize:8, letterSpacing:'0.22em', textTransform:'uppercase', color:'#2a3050', display:'block', marginBottom:8, fontFamily:'JetBrains Mono, monospace' }}>Any Questions? (Optional)</label>
                <textarea style={{ ...inputStyle, resize:'vertical', minHeight:88 }} placeholder="Fee details, batch timings, course doubts..." value={formData.message} onChange={e => setFormData(p => ({ ...p, message:e.target.value }))} />
              </div>
              <button onClick={handleSubmit} disabled={sending}
                style={{ width:'100%', background:'#FFB800', color:'#000507', fontFamily:'JetBrains Mono, monospace', fontSize:11, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', padding:18, border:'none', cursor:'pointer', marginTop:8, transition:'all 0.3s' }}>
                {sending ? 'Sending...' : 'Reserve My Seat →'}
              </button>
              <p style={{ fontSize:8, letterSpacing:'0.12em', textTransform:'uppercase', color:'#2a3050', marginTop:12, textAlign:'center' }}>🔒 Your data is safe. We will never share your information.</p>
            </div>
          </FadeIn>

          {/* RIGHT: contact */}
          <FadeIn delay={0.2}>
            <div style={{ paddingTop:40 }}>
              <div style={{ marginBottom:48 }}>
                <div style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:18, color:'#EFF3FF', marginBottom:20 }}>Contact Us Directly</div>
                {[
                  { icon:'📞', lbl:'Phone / WhatsApp', val:<a href="tel:+919447329972" style={{ color:'#FFB800', textDecoration:'none' }}>+91 94473 29972</a> },
                  { icon:'✉️', lbl:'Email', val:<a href="mailto:t.005.rutronix@gmail.com" style={{ color:'#FFB800', textDecoration:'none' }}>t.005.rutronix@gmail.com</a> },
                  { icon:'📍', lbl:'Address', val:<>The Oxford Computers<br/>Malayinkeezhu, Thiruvananthapuram<br/>Kerala — 695571</> },
                  { icon:'🕐', lbl:'Office Hours', val:'Mon – Sat: 9:00 AM – 6:00 PM' },
                ].map((item, i) => (
                  <div key={i} style={{ display:'flex', gap:16, alignItems:'flex-start', marginBottom:16 }}>
                    <div style={{ width:36, height:36, background:'rgba(255,184,0,.08)', border:'1px solid rgba(255,184,0,.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, flexShrink:0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize:8, letterSpacing:'0.2em', textTransform:'uppercase', color:'#2a3050', marginBottom:4, fontFamily:'JetBrains Mono, monospace' }}>{item.lbl}</div>
                      <div style={{ fontSize:13, color:'#EFF3FF' }}>{item.val}</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop:20 }}>
                  <a href="https://wa.me/919447329972?text=Hi!%20I%20want%20to%20know%20about%20the%20AI%20Vacation%20Activity%20Camp%202026." target="_blank" rel="noopener noreferrer"
                    style={{ background:'#FFB800', color:'#000507', fontFamily:'JetBrains Mono, monospace', fontSize:9, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', padding:'14px 28px', display:'inline-flex', alignItems:'center', gap:8, textDecoration:'none' }}>
                    💬 WhatsApp Us Now
                  </a>
                </div>
              </div>
              <div style={{ border:'1px solid rgba(255,255,255,.06)', overflow:'hidden' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.7634729636504!2d77.00880147461548!3d8.401381991642408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbf7adf9c3d3%3A0x13ead778b1e2bc93!2sMalayinkeezhu%2C%20Kerala%20695571!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  style={{ display:'block', width:'100%', height:220, filter:'invert(.9) hue-rotate(180deg) saturate(.6)', border:'none' }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="The Oxford Computers map" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section style={{ minHeight:'70vh', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'80px 48px', position:'relative', overflow:'hidden', background:'#080d18' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 60%,rgba(255,184,0,.09) 0%,transparent 60%)', animation:'ctaGlow 4s ease-in-out infinite' }} />
        <FadeIn>
          <div style={{ position:'relative', zIndex:2 }}>
            <span style={{ fontSize:9, letterSpacing:'0.4em', textTransform:'uppercase', color:'#00E5FF', marginBottom:24, display:'block', fontFamily:'JetBrains Mono, monospace' }}>🚀 2026 Batch · Limited Seats</span>
            <h2 style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:'clamp(44px,9vw,110px)', lineHeight:.88, letterSpacing:'-0.04em', marginBottom:28 }}>
              <span style={{ display:'block', color:'#EFF3FF' }}>Your AI</span>
              <span style={{ display:'block', color:'#FFB800' }}>Future Starts</span>
              <span style={{ display:'block', color:'transparent', WebkitTextStroke:'1px rgba(239,243,255,.14)' }}>This Summer</span>
            </h2>
            <p style={{ fontFamily:'DM Serif Display, serif', fontStyle:'italic', fontSize:20, color:'rgba(239,243,255,.38)', marginBottom:44 }}>25 days. Real projects. Government certificate. Trivandrum, Kerala.</p>
            <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
              <a href="#ac-register" onClick={e => { e.preventDefault(); document.getElementById('ac-register')?.scrollIntoView({ behavior:'smooth' }); }}
                style={{ background:'#FFB800', color:'#000507', fontFamily:'JetBrains Mono, monospace', fontSize:10, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', padding:'18px 44px', border:'none', cursor:'pointer', textDecoration:'none' }}>
                Apply for 2026 Camp →
              </a>
              <a href="tel:+919447329972"
                style={{ background:'transparent', color:'#EFF3FF', fontFamily:'JetBrains Mono, monospace', fontSize:10, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', padding:'18px 44px', border:'1px solid #2a3050', cursor:'pointer', textDecoration:'none' }}>
                📞 Call Us Now
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background:'#000507', borderTop:'1px solid rgba(255,255,255,.05)', padding:'56px 56px 32px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr 1fr', gap:40, marginBottom:48, maxWidth:1200, margin:'0 auto 48px' }}>
          <div>
            <span style={{ fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:16, color:'#FFB800', letterSpacing:'0.12em', display:'block', marginBottom:14 }}>The Oxford Computers</span>
            <p style={{ fontFamily:'DM Serif Display, serif', fontStyle:'italic', fontSize:15, lineHeight:1.65, color:'rgba(239,243,255,.35)', maxWidth:260 }}>Kerala State Rutronix-approved AI & computer education institute. Transforming students into tech professionals since 1995.</p>
          </div>
          <div>
            <span style={{ fontSize:9, letterSpacing:'0.3em', textTransform:'uppercase', color:'#2a3050', marginBottom:20, display:'block', fontFamily:'JetBrains Mono, monospace' }}>AI Courses</span>
            {['AI Digital Marketing','AI Office Suite','AI Web App Dev','Junior YouTuber','AI Prompt Engineer','AI Designer','Junior Python','Game Dev','Generative AI'].map(l => (
              <span key={l} onClick={() => document.getElementById('ac-courses')?.scrollIntoView({ behavior:'smooth' })} style={{ display:'block', fontSize:12, color:'rgba(239,243,255,.35)', marginBottom:10, cursor:'pointer' }}>{l}</span>
            ))}
          </div>
          <div>
            <span style={{ fontSize:9, letterSpacing:'0.3em', textTransform:'uppercase', color:'#2a3050', marginBottom:20, display:'block', fontFamily:'JetBrains Mono, monospace' }}>Quick Links</span>
            {[['Home','https://theoxfordedu.com'],['All Courses','https://theoxfordedu.com/course'],['About Us','https://theoxfordedu.com/about'],['Contact','https://theoxfordedu.com/contact'],['Leave a Review ★','https://g.page/r/CTLGp4P09cviEBM/review']].map(([l,h]) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" style={{ display:'block', fontSize:12, color:'rgba(239,243,255,.35)', marginBottom:10, textDecoration:'none' }}>{l}</a>
            ))}
          </div>
          <div>
            <span style={{ fontSize:9, letterSpacing:'0.3em', textTransform:'uppercase', color:'#2a3050', marginBottom:20, display:'block', fontFamily:'JetBrains Mono, monospace' }}>Contact</span>
            <a href="tel:+919447329972" style={{ display:'block', fontSize:12, color:'rgba(239,243,255,.35)', marginBottom:10, textDecoration:'none' }}>+91 94473 29972</a>
            <a href="mailto:t.005.rutronix@gmail.com" style={{ display:'block', fontSize:12, color:'rgba(239,243,255,.35)', marginBottom:10, textDecoration:'none' }}>t.005.rutronix@gmail.com</a>
            <span style={{ display:'block', fontSize:12, color:'rgba(239,243,255,.35)', marginBottom:10 }}>Malayinkeezhu</span>
            <span style={{ display:'block', fontSize:12, color:'rgba(239,243,255,.35)', marginBottom:10 }}>Trivandrum, Kerala 695571</span>
            <a href="https://wa.me/919447329972" target="_blank" rel="noopener noreferrer" style={{ display:'block', fontSize:12, color:'#FFB800', textDecoration:'none' }}>💬 WhatsApp</a>
          </div>
        </div>
        <div style={{ borderTop:'1px solid rgba(255,255,255,.04)', paddingTop:24, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12, maxWidth:1200, margin:'0 auto' }}>
          <span style={{ fontSize:8, letterSpacing:'0.12em', color:'#2a3050', textTransform:'uppercase', fontFamily:'JetBrains Mono, monospace' }}>© 2026 The Oxford Computers · Kerala State Rutronix Approved · AI Vacation Activity Camp 2026</span>
          <div style={{ display:'flex', gap:16 }}>
            {[['f','https://www.facebook.com/oxfordtvm'],['in','https://www.instagram.com/oxfordmkl'],['w','https://wa.me/919447329972']].map(([l,h]) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" style={{ width:34, height:34, border:'1px solid rgba(255,255,255,.07)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, textDecoration:'none', color:'#EFF3FF' }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
