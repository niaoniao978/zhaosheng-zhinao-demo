import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const heroMetrics = [
  { value: "162 所", label: "已覆盖院校数据源" },
  { value: "182,000+", label: "已整理招生相关文档" },
  { value: "24/7", label: "在线招生咨询能力" },
];

function HeroPage() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#fbfdff] text-slate-950">
      <style>{`
        @keyframes silkFloatLeft { 0%,100%{transform:translate3d(-1.5%,0,0) scale(1) rotate(-1deg)} 50%{transform:translate3d(1.2%,-1.5%,0) scale(1.025) rotate(.5deg)} }
        @keyframes silkFloatRight { 0%,100%{transform:translate3d(1.2%,0,0) scale(1) rotate(1deg)} 50%{transform:translate3d(-1.5%,1.2%,0) scale(1.025) rotate(-.5deg)} }
        @keyframes glowBreath { 0%,100%{opacity:.48;transform:scale(1)} 50%{opacity:.76;transform:scale(1.06)} }
        @keyframes softSweep { 0%{transform:translateX(-16%) rotate(15deg);opacity:.08} 50%{opacity:.18} 100%{transform:translateX(16%) rotate(15deg);opacity:.08} }
        .hero-silk-left{animation:silkFloatLeft 16s ease-in-out infinite;transform-origin:12% 50%;filter:url(#heroSoftDisplace) drop-shadow(0 30px 90px rgba(14,165,233,.14))}
        .hero-silk-right{animation:silkFloatRight 17s ease-in-out infinite;transform-origin:88% 50%;filter:url(#heroSoftDisplace) drop-shadow(0 30px 90px rgba(14,165,233,.14))}
        .hero-ambient-glow{animation:glowBreath 11s ease-in-out infinite}
        .hero-light-sweep{animation:softSweep 13s ease-in-out infinite alternate}
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,1)_0%,rgba(255,255,255,.96)_31%,rgba(240,249,255,.70)_62%,rgba(251,253,255,1)_100%)]" />
      <div className="hero-ambient-glow absolute -left-24 top-16 h-[30rem] w-[30rem] rounded-full bg-sky-200/30 blur-3xl" />
      <div className="hero-ambient-glow absolute -right-24 top-12 h-[32rem] w-[32rem] rounded-full bg-cyan-200/26 blur-3xl" style={{ animationDelay: "-4s" }} />
      <div className="absolute left-1/2 top-[-10rem] h-[38rem] w-[58rem] -translate-x-1/2 rounded-full bg-white/72 blur-3xl" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="heroLeftSilkA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e0f7ff" stopOpacity="0.07" />
            <stop offset="18%" stopColor="#7dd3fc" stopOpacity="0.31" />
            <stop offset="42%" stopColor="#38bdf8" stopOpacity="0.40" />
            <stop offset="64%" stopColor="#ffffff" stopOpacity="0.48" />
            <stop offset="82%" stopColor="#bae6fd" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="heroLeftSilkB" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.02" />
            <stop offset="28%" stopColor="#bae6fd" stopOpacity="0.34" />
            <stop offset="52%" stopColor="#0ea5e9" stopOpacity="0.28" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.50" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="heroRightSilkA" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.06" />
            <stop offset="20%" stopColor="#7dd3fc" stopOpacity="0.30" />
            <stop offset="44%" stopColor="#22d3ee" stopOpacity="0.40" />
            <stop offset="66%" stopColor="#ffffff" stopOpacity="0.46" />
            <stop offset="84%" stopColor="#bae6fd" stopOpacity="0.27" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="heroRightSilkB" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.02" />
            <stop offset="25%" stopColor="#cffafe" stopOpacity="0.34" />
            <stop offset="48%" stopColor="#0284c7" stopOpacity="0.26" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.50" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.08" />
          </linearGradient>
          <filter id="heroSoftDisplace" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.008 0.018" numOctaves="2" seed="11" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="heroGrain" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer><feFuncA type="table" tableValues="0 0.03" /></feComponentTransfer>
          </filter>
        </defs>
        <g className="hero-silk-left">
          <path d="M-120 -40 C90 44 210 130 340 276 C455 405 432 506 310 660 C178 828 35 908 -122 954 Z" fill="url(#heroLeftSilkA)" />
          <path d="M-42 -80 C132 66 246 168 338 330 C421 476 373 600 230 774 C116 910 14 950 -92 982 Z" fill="url(#heroLeftSilkB)" opacity="0.68" />
          <path d="M-94 18 C70 110 190 220 292 366 C365 470 348 560 254 690 C148 834 46 908 -72 946" fill="none" stroke="rgba(255,255,255,.44)" strokeWidth="31" strokeLinecap="round" opacity="0.50" />
        </g>
        <g className="hero-silk-right">
          <path d="M1720 -40 C1512 48 1390 136 1265 284 C1150 420 1168 520 1296 674 C1428 834 1568 910 1724 956 Z" fill="url(#heroRightSilkA)" />
          <path d="M1642 -80 C1472 64 1352 176 1260 338 C1178 484 1228 608 1368 778 C1480 912 1586 952 1694 984 Z" fill="url(#heroRightSilkB)" opacity="0.68" />
          <path d="M1688 18 C1518 112 1390 224 1290 370 C1218 476 1240 566 1338 696 C1446 838 1548 910 1670 948" fill="none" stroke="rgba(255,255,255,.42)" strokeWidth="31" strokeLinecap="round" opacity="0.50" />
        </g>
        <rect width="1600" height="900" filter="url(#heroGrain)" opacity="0.38" />
      </svg>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[54rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/88 blur-2xl" />
      <div className="hero-light-sweep pointer-events-none absolute left-0 right-0 top-[12%] h-52 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#fbfdff]/85 to-[#f8fbff]" />

      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6 py-12">
        <div className="mx-auto w-full max-w-6xl text-center">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mb-6 w-fit text-center text-xs font-semibold tracking-[0.22em] text-sky-700 sm:text-sm">
            面向高校招生办的 AI 招生平台
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.86, ease: [0.22, 1, 0.36, 1] }} className="mx-auto max-w-5xl">
            <p className="mb-3 text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">招生智脑</p>
            <h1 className="text-center text-4xl font-black leading-[1.06] tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-[4.58rem]">
              <span className="block whitespace-nowrap">懂心理的 <span className="bg-gradient-to-r from-sky-500 via-cyan-600 to-slate-900 bg-clip-text text-transparent">AI 招生官</span></span>
              <span className="block whitespace-nowrap">看得见的 <span className="bg-gradient-to-r from-slate-900 via-sky-700 to-cyan-500 bg-clip-text text-transparent">生源控制台</span></span>
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.72, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mt-6 max-w-3xl text-center text-base font-light leading-7 text-slate-500 sm:text-lg">
            <span className="block">通过智能对话理解考生兴趣、专业偏好与升学焦虑，</span>
            <span className="block">并将分散的咨询内容沉淀为院校可复盘的生源数据。</span>
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34, duration: 0.72, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mt-9 max-w-3xl rounded-[1.45rem] border border-white/70 bg-white/54 px-4 py-3 shadow-[0_18px_56px_rgba(14,165,233,0.11)] backdrop-blur-md">
            <div className="grid gap-2 sm:grid-cols-3 sm:divide-x sm:divide-slate-200/80">
              {heroMetrics.map((item) => (
                <div key={item.value} className="px-3 py-2">
                  <div className="text-xl font-black tracking-[-0.04em] text-slate-950 sm:text-2xl">{item.value}</div>
                  <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const leftMethods = [
  { key: "empathy", eyebrow: "METHOD 01", title: "共情反映", desc: "识别“纠结”“权衡”等情绪词，先承接学生焦虑。" },
  { key: "value", eyebrow: "METHOD 03", title: "价值澄清", desc: "通过排序追问，让学生说出真正看重的因素。" },
];

const rightMethods = [
  { key: "conflict", eyebrow: "METHOD 02", title: "决策冲突拆解", desc: "把“学校 vs 专业”拆成平台、培养和未来发展。" },
  { key: "evidence", eyebrow: "METHOD 04", title: "证据溯源", desc: "把推荐理由落到培养方案、竞赛资源和毕业去向。" },
];

const Highlight = forwardRef(function Highlight({ children, nowrap = false }, ref) {
  return (
    <span ref={ref} className={`inline-flex rounded-md bg-sky-100 px-1.5 py-0.5 font-semibold text-sky-700 ring-1 ring-sky-200/70 ${nowrap ? "whitespace-nowrap" : ""}`}>
      {children}
    </span>
  );
});

const MethodCard = forwardRef(function MethodCard({ eyebrow, title, desc, delay = 0 }, ref) {
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }} className="rounded-[22px] border border-white/75 bg-white/70 px-4 py-3.5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <div className="mb-2 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /><span className="text-[10px] font-black tracking-[0.24em] text-sky-500">{eyebrow}</span></div>
      <h3 className="text-[18px] font-black tracking-[-0.04em] text-slate-950">{title}</h3>
      <p className="mt-1.5 text-[13px] leading-5 text-slate-500">{desc}</p>
    </motion.div>
  );
});

function ChatBubble({ role = "ai", delay = 0, children }) {
  const isStudent = role === "student";
  return (
    <motion.div initial={{ opacity: 0, y: 10, scale: 0.985 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.34, delay, ease: [0.22, 1, 0.36, 1] }} className={`flex ${isStudent ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[90%] rounded-[17px] px-3.5 py-2.5 text-[12px] leading-[1.55] shadow-sm ${isStudent ? "rounded-br-md bg-[linear-gradient(135deg,#1cc8ea_0%,#16b5dd_100%)] text-white shadow-[0_10px_24px_rgba(14,165,233,0.18)]" : "rounded-bl-md border border-slate-200/80 bg-white text-slate-700 shadow-[0_7px_20px_rgba(15,23,42,0.05)]"}`}>{children}</div>
    </motion.div>
  );
}

function SideAnalysisLines() {
  return (
    <svg className="pointer-events-none absolute inset-0 z-[2] hidden h-full w-full lg:block" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true">
      <defs><filter id="sideGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
      <g fill="none" stroke="#7dd3fc" strokeWidth="1.1" strokeDasharray="4 9" opacity="0.28">
        <path id="leftFlowA" d="M90 210 C172 266 234 338 326 438" /><path id="leftFlowB" d="M105 648 C190 592 250 522 338 448" /><path id="leftFlowC" d="M224 314 C274 358 320 405 366 454" />
        <path id="rightFlowA" d="M1510 220 C1428 274 1360 342 1265 438" /><path id="rightFlowB" d="M1492 652 C1408 592 1350 528 1260 456" /><path id="rightFlowC" d="M1382 322 C1332 372 1288 412 1238 460" />
      </g>
      {[[90,210],[224,314],[105,648],[338,448],[1510,220],[1382,322],[1492,652],[1260,456]].map(([x,y],i)=>(<g key={i} opacity="0.45"><circle cx={x} cy={y} r="20" fill="#38bdf8" opacity="0.08" filter="url(#sideGlow)" /><circle cx={x} cy={y} r="3.5" fill="#38bdf8" /></g>))}
      <g fill="#38bdf8" opacity="0.68">
        <circle r="3.1"><animateMotion dur="8s" repeatCount="indefinite"><mpath href="#leftFlowA" /></animateMotion></circle><circle r="2.8"><animateMotion dur="9.5s" begin="-3.2s" repeatCount="indefinite"><mpath href="#leftFlowB" /></animateMotion></circle><circle r="2.7"><animateMotion dur="7.8s" begin="-1.8s" repeatCount="indefinite"><mpath href="#leftFlowC" /></animateMotion></circle>
        <circle r="3.1"><animateMotion dur="8.4s" begin="-2.1s" repeatCount="indefinite"><mpath href="#rightFlowA" /></animateMotion></circle><circle r="2.8"><animateMotion dur="9.8s" begin="-4.1s" repeatCount="indefinite"><mpath href="#rightFlowB" /></animateMotion></circle><circle r="2.7"><animateMotion dur="7.9s" begin="-1.1s" repeatCount="indefinite"><mpath href="#rightFlowC" /></animateMotion></circle>
      </g>
    </svg>
  );
}

function buildCurve({ start, end, side }) {
  const dx = Math.abs(end.x - start.x);
  const c = Math.min(Math.max(dx * 0.34, 44), 118);
  if (side === "left") return `M ${start.x} ${start.y} C ${start.x + c} ${start.y}, ${end.x - c} ${end.y}, ${end.x} ${end.y}`;
  return `M ${start.x} ${start.y} C ${start.x - c} ${start.y}, ${end.x + c} ${end.y}, ${end.x} ${end.y}`;
}

function AnnotationOverlay({ overlayRef, cardRefs, keywordRefs }) {
  const [paths, setPaths] = useState([]);
  const [box, setBox] = useState({ width: 1080, height: 500 });
  const calculate = () => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const overlayRect = overlay.getBoundingClientRect();
    const overlayWidth = overlay.offsetWidth || overlayRect.width || 1080;
    const overlayHeight = overlay.offsetHeight || overlayRect.height || 500;
    const scaleX = overlayRect.width / overlayWidth || 1;
    const scaleY = overlayRect.height / overlayHeight || 1;
    setBox({ width: overlayWidth, height: overlayHeight });
    const pointInOverlay = (x, y) => ({ x: (x - overlayRect.left) / scaleX, y: (y - overlayRect.top) / scaleY });
    const getCardAnchor = (el, side) => {
      const r = el.getBoundingClientRect();
      if (side === "left") return pointInOverlay(r.right, r.top + r.height / 2);
      return pointInOverlay(r.left, r.top + r.height / 2);
    };
    const getKeywordAnchor = (el, side) => {
      const r = el.getBoundingClientRect();
      if (side === "left") return pointInOverlay(r.left, r.top + r.height / 2);
      return pointInOverlay(r.right, r.top + r.height / 2);
    };
    const pairs = [
      { id: "empathy", side: "left", card: "empathy", keyword: "struggle", delay: 1.0 },
      { id: "conflict", side: "right", card: "conflict", keyword: "dimensions", delay: 1.16 },
      { id: "value", side: "left", card: "value", keyword: "platform", delay: 1.32 },
      { id: "evidence", side: "right", card: "evidence", keyword: "evidence", delay: 1.48 },
    ];
    setPaths(pairs.map((pair) => {
      const cardEl = cardRefs[pair.card]?.current;
      const keywordEl = keywordRefs[pair.keyword]?.current;
      if (!cardEl || !keywordEl) return null;
      const start = getCardAnchor(cardEl, pair.side);
      const end = getKeywordAnchor(keywordEl, pair.side);
      return { ...pair, d: buildCurve({ start, end, side: pair.side }) };
    }).filter(Boolean));
  };
  useLayoutEffect(() => {
    const raf = requestAnimationFrame(calculate);
    return () => cancelAnimationFrame(raf);
  }, []);
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const timers = [80, 300, 700, 1200, 2000, 2800].map((ms) => setTimeout(calculate, ms));
    const resizeObserver = new ResizeObserver(calculate);
    resizeObserver.observe(overlay);
    window.addEventListener("resize", calculate);
    if (document.fonts?.ready) document.fonts.ready.then(calculate).catch(() => {});
    return () => { timers.forEach(clearTimeout); resizeObserver.disconnect(); window.removeEventListener("resize", calculate); };
  }, []);
  return (
    <svg className="pointer-events-none absolute inset-0 z-[30] hidden h-full w-full overflow-visible lg:block" viewBox={`0 0 ${box.width} ${box.height}`} preserveAspectRatio="none" aria-hidden="true">
      <defs><marker id="autoArrowHead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#0ea5e9" /></marker><filter id="autoArrowGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="1.1" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
      <g fill="none" stroke="#38bdf8" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" opacity="0.78" filter="url(#autoArrowGlow)">
        {paths.map((path) => <motion.path key={path.id} d={path.d} markerEnd="url(#autoArrowHead)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.78 }} transition={{ delay: path.delay, duration: 0.5, ease: "easeOut" }} />)}
      </g>
    </svg>
  );
}

function PhoneMockup({ keywordRefs }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }} className="relative z-[8] mx-auto w-[300px] origin-top">
      <div className="absolute inset-0 rounded-[36px] bg-cyan-200/30 blur-2xl" />
      <div className="relative rounded-[36px] bg-[#071228] p-[7px] shadow-[0_28px_80px_rgba(2,132,199,0.18)]">
        <div className="overflow-hidden rounded-[29px] bg-[#f4f7fb]">
          <div className="flex h-8 items-center justify-between border-b border-slate-200/80 bg-white/90 px-5 text-[10px] text-slate-400"><span className="font-semibold">9:41</span><span className="text-[12px] font-bold text-slate-700">招生智脑</span><span className="font-semibold">5G</span></div>
          <div className="space-y-2 px-3.5 py-3">
            <div className="mx-auto w-fit rounded-full bg-sky-100 px-3 py-1 text-[10px] font-bold text-sky-700">院校官方 AI 招生咨询</div>
            <ChatBubble role="student" delay={0.52}>我想报 211 师范院校的工科，但又担心理工学校专业更强。家里更看重 211 平台，我该怎么选？</ChatBubble>
            <ChatBubble role="ai" delay={0.95}>你 <Highlight ref={keywordRefs.struggle}>纠结</Highlight> 的不是简单选学校。<br />更像是在 <Highlight>权衡</Highlight> 平台、专业氛围、保研和就业。</ChatBubble>
            <ChatBubble role="ai" delay={1.38}>我们先拆成 <Highlight ref={keywordRefs.dimensions} nowrap>三个维度</Highlight>：学校平台、专业培养强度、未来升学就业。</ChatBubble>
            <ChatBubble role="ai" delay={1.82}>如果必须排序，你更看重 <Highlight ref={keywordRefs.platform} nowrap>211 平台</Highlight>、保研机会，还是 <Highlight nowrap>就业方向</Highlight>？</ChatBubble>
            <ChatBubble role="ai" delay={2.26}>如果你希望兼顾平台和实践，可以重点了解电子信息类。<br />我可以继续展示它的 <Highlight ref={keywordRefs.evidence} nowrap>培养方案</Highlight>、竞赛资源和毕业去向。</ChatBubble>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ConversationPage() {
  const overlayRef = useRef(null);
  const cardRefs = { empathy: useRef(null), conflict: useRef(null), value: useRef(null), evidence: useRef(null) };
  const keywordRefs = { struggle: useRef(null), dimensions: useRef(null), platform: useRef(null), evidence: useRef(null) };
  return (
    <section className="relative h-[100svh] min-h-[720px] overflow-hidden bg-[#f8fbff] text-slate-950">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/page2-bg.png')" }} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,251,255,0.86)_0%,rgba(248,251,255,0.70)_24%,rgba(248,251,255,0.60)_58%,rgba(248,251,255,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.88),rgba(255,255,255,0.25)_48%,transparent_74%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_50%,rgba(186,230,253,0.30),transparent_26%),radial-gradient(circle_at_84%_50%,rgba(186,230,253,0.30),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f8fbff] via-[#f8fbff]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-[#f8fbff]/85 to-[#f8fbff]" />
      <SideAnalysisLines />
      <div className="relative z-10 flex h-full items-center justify-center px-6 py-4">
        <div className="relative mx-auto w-full max-w-[1260px] scale-[0.84] transform-gpu">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.48 }} className="mx-auto mb-4 max-w-5xl text-center">
            <p className="mb-2 text-[13px] font-black uppercase tracking-[0.24em] text-sky-500">CONVERSATION INTELLIGENCE</p>
            <h2 className="text-balance text-[48px] font-black leading-[1.08] tracking-[-0.055em] text-slate-950">从一句“我该怎么选”，看见背后的真实需求</h2>
            <p className="mx-auto mt-3 max-w-3xl text-[16px] font-light leading-7 text-slate-500">AI 招生官不急着给结论，而是通过共情反映、冲突拆解、价值澄清与证据溯源，把一次咨询转化为可分析的学生画像。</p>
          </motion.div>
          <div ref={overlayRef} className="relative mx-auto h-[500px] max-w-[1080px]">
            <AnnotationOverlay overlayRef={overlayRef} cardRefs={cardRefs} keywordRefs={keywordRefs} />
            <div className="grid h-full grid-cols-[250px_1fr_250px] items-center gap-10">
              <div className="relative z-[8] flex h-full flex-col justify-center gap-[96px]"><MethodCard ref={cardRefs.empathy} {...leftMethods[0]} delay={0.8} /><MethodCard ref={cardRefs.value} {...leftMethods[1]} delay={1.25} /></div>
              <div className="relative z-[8] flex h-full items-start justify-center pt-[0px]"><PhoneMockup keywordRefs={keywordRefs} /></div>
              <div className="relative z-[8] flex h-full flex-col justify-center gap-[96px]"><MethodCard ref={cardRefs.conflict} {...rightMethods[0]} delay={1.0} /><MethodCard ref={cardRefs.evidence} {...rightMethods[1]} delay={1.45} /></div>
            </div>
          </div>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: 2.5, duration: 0.42 }} className="relative z-[20] mx-auto mt-12 max-w-2xl text-center text-sm font-medium tracking-wide text-slate-500">每一次对话，都会成为后续生源分析的一条结构化线索。</motion.p>
        </div>
      </div>
    </section>
  );
}

const streamLanes = [
  ["就业去向", "专业难度", "保研机会", "城市生活", "家长期待", "高意向线索"],
  ["课程压力", "GPA压力", "导师资源", "竞赛资源", "课题组机会", "转专业空间"],
  ["就业稳定性", "薪资空间", "企业认可度", "专业对口", "实习资源", "校招竞争力"],
  ["培养方案", "答疑需求", "升学路径", "专业热度", "家庭顾虑", "城市机会"],
  ["兴趣偏好", "风险信号", "咨询主题", "留资意向", "画像沉淀", "策略复盘"],
];

function DataStreamLane({ words, index, side = "left" }) {
  const repeated = [...words, ...words, ...words, ...words, ...words];
  const duration = 30 + index * 4;
  const delay = -index * 4;
  return <div className="data-stream-lane" style={{ top: `${13 + index * 17}%` }}><div className="data-stream-track" style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}>{repeated.map((word, wordIndex) => <span key={`${side}-${index}-${word}-${wordIndex}`} className="data-stream-word" style={{ fontSize: `${index % 2 === 0 ? 21 : 16}px`, opacity: index % 2 === 0 ? 0.22 : 0.16 }}>{word}</span>)}</div></div>;
}
function DataStreamPanel({ side = "left" }) { return <div className={`data-stream-panel data-stream-panel-${side}`}>{streamLanes.map((words, index) => <DataStreamLane key={`${side}-${index}`} words={side === "right" ? [...words].reverse() : words} index={index} side={side} />)}</div>; }
function DataStreamWords() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block" aria-hidden="true">
      <style>{`
        @keyframes dataStreamMove { from { transform: translate3d(-42%, 0, 0); } to { transform: translate3d(0%, 0, 0); } }
        .data-stream-panel { position:absolute; top:0; bottom:0; overflow:hidden; pointer-events:none; z-index:3; }
        .data-stream-panel-left { left:0; width:30vw; -webkit-mask-image:linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.88) 12%, rgba(0,0,0,0.90) 48%, rgba(0,0,0,0.42) 70%, rgba(0,0,0,0.14) 86%, rgba(0,0,0,0) 100%); mask-image:linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.88) 12%, rgba(0,0,0,0.90) 48%, rgba(0,0,0,0.42) 70%, rgba(0,0,0,0.14) 86%, rgba(0,0,0,0) 100%); }
        .data-stream-panel-right { right:0; width:30vw; -webkit-mask-image:linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.14) 14%, rgba(0,0,0,0.42) 30%, rgba(0,0,0,0.90) 52%, rgba(0,0,0,0.88) 88%, rgba(0,0,0,0) 100%); mask-image:linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.14) 14%, rgba(0,0,0,0.42) 30%, rgba(0,0,0,0.90) 52%, rgba(0,0,0,0.88) 88%, rgba(0,0,0,0) 100%); }
        .data-stream-lane { position:absolute; left:-26%; right:-26%; height:42px; transform:translateY(-50%); white-space:nowrap; }
        .data-stream-track { display:flex; width:max-content; align-items:center; gap:50px; animation-name:dataStreamMove; animation-timing-function:linear; animation-iteration-count:infinite; will-change:transform; }
        .data-stream-word { display:inline-block; color:#020617; font-family:Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", sans-serif; font-weight:900; letter-spacing:-0.045em; line-height:1; text-shadow:0 16px 34px rgba(15,23,42,0.16), 0 2px 6px rgba(15,23,42,0.07); filter:blur(0.04px); }
      `}</style>
      <div className="absolute -left-72 top-[8%] z-[1] h-[78%] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,.20),transparent_65%)] blur-[42px]" />
      <div className="absolute -right-72 top-[8%] z-[1] h-[78%] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,.18),transparent_65%)] blur-[42px]" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.88)_30%,rgba(255,255,255,0.46)_56%,rgba(255,255,255,0)_78%),linear-gradient(180deg,rgba(248,251,255,0.70),rgba(248,251,255,0)_28%,rgba(248,251,255,0)_74%,rgba(248,251,255,0.72))]" />
      <DataStreamPanel side="left" />
      <DataStreamPanel side="right" />
    </div>
  );
}

const topics = [
  { id: "all", label: "全部", dashboardLabel: "全部关注点" },
  { id: "employment", label: "就业去向", dashboardLabel: "就业去向" },
  { id: "graduate", label: "保研机会", dashboardLabel: "保研机会" },
  { id: "difficulty", label: "专业难度", dashboardLabel: "专业难度" },
  { id: "parents", label: "家长期待", dashboardLabel: "家长期待" },
];

const dashboardData = {
  all: {
    inputTitle: "从咨询中提取的高频关注点", inputDesc: "选择一个主题，查看它在招生看板中的对应分析。",
    left: { title: "高频咨询主题", desc: "统计学生和家长最常提到的问题，帮助招生办判断内容解释重点。", bars: [{ name: "就业去向", value: 31 }, { name: "专业难度", value: 27 }, { name: "保研机会", value: 22 }, { name: "实验室资源", value: 18 }, { name: "城市生活", value: 16 }, { name: "家长期待", value: 15 }] },
    middle: { title: "意向线索转化", desc: "记录学生从普通咨询到留下线索的关键步骤。", steps: [{ name: "进入咨询", value: "2,486" }, { name: "完成深度对话", value: "1,380" }, { name: "查看专业推荐", value: "920" }, { name: "收藏专业 / 留下联系方式", value: "486" }, { name: "进入高意向名单", value: "312" }] },
    right: { title: "专业热度与答疑需求", desc: "对比各专业的咨询热度和需要进一步解释的问题量。", primaryLabel: "咨询热度", secondaryLabel: "答疑需求", data: [{ name: "电信", primary: 88, secondary: 42 }, { name: "计科", primary: 94, secondary: 64 }, { name: "自动化", primary: 76, secondary: 49 }, { name: "软件", primary: 82, secondary: 56 }, { name: "数媒", primary: 58, secondary: 45 }] },
  },
  employment: {
    inputTitle: "就业去向相关咨询", inputDesc: "学生最关心毕业后能去哪里、行业认可度与城市机会。",
    left: { title: "就业相关关注点", desc: "统计学生在就业主题下最常追问的内容，帮助招生办补充就业说明材料。", bars: [{ name: "就业行业去向", value: 34 }, { name: "薪资与发展空间", value: 28 }, { name: "城市就业机会", value: 24 }, { name: "实习与校招资源", value: 21 }, { name: "企业认可度", value: 18 }, { name: "专业对口程度", value: 15 }] },
    middle: { title: "就业主题转化路径", desc: "观察关心就业的学生，如何从提问进入专业推荐与线索留存。", steps: [{ name: "提出就业相关问题", value: "1,126" }, { name: "查看专业就业数据", value: "742" }, { name: "查看毕业去向案例", value: "538" }, { name: "收藏专业 / 留下联系方式", value: "296" }, { name: "进入高意向名单", value: "184" }] },
    right: { title: "各专业就业关注度", desc: "对比不同专业下，就业话题的咨询热度与答疑需求。", primaryLabel: "就业关注度", secondaryLabel: "就业答疑需求", data: [{ name: "电信", primary: 92, secondary: 50 }, { name: "计科", primary: 96, secondary: 66 }, { name: "自动化", primary: 78, secondary: 48 }, { name: "软件", primary: 90, secondary: 62 }, { name: "数媒", primary: 58, secondary: 42 }] },
  },
  graduate: {
    inputTitle: "保研机会相关咨询", inputDesc: "高分考生更关注培养路径、科研资源和未来升学空间。",
    left: { title: "保研相关关注点", desc: "统计学生围绕升学路径、科研资源和竞争压力提出的高频问题。", bars: [{ name: "保研比例", value: 32 }, { name: "课题组机会", value: 27 }, { name: "竞赛经历", value: 23 }, { name: "GPA 压力", value: 21 }, { name: "导师资源", value: 18 }, { name: "跨校升学去向", value: 14 }] },
    middle: { title: "保研主题转化路径", desc: "观察关注保研的学生，如何从升学问题进入培养路径和专业意向。", steps: [{ name: "提出保研相关问题", value: "864" }, { name: "查看培养路径说明", value: "596" }, { name: "查看竞赛 / 科研资源", value: "431" }, { name: "收藏专业 / 继续追问", value: "264" }, { name: "进入高意向名单", value: "156" }] },
    right: { title: "各专业保研关注度", desc: "对比不同专业下，学生对保研机会和科研资源的关注程度。", primaryLabel: "保研关注度", secondaryLabel: "升学答疑需求", data: [{ name: "电信", primary: 82, secondary: 56 }, { name: "计科", primary: 88, secondary: 64 }, { name: "自动化", primary: 74, secondary: 47 }, { name: "软件", primary: 66, secondary: 39 }, { name: "数学类", primary: 72, secondary: 58 }] },
  },
  difficulty: {
    inputTitle: "专业难度相关咨询", inputDesc: "学生对课程压力、学习门槛和适应风险的顾虑会影响专业选择。",
    left: { title: "专业难度相关顾虑", desc: "统计学生对课程压力、学习门槛和适应风险的主要担忧。", bars: [{ name: "数学要求", value: 30 }, { name: "编程门槛", value: 26 }, { name: "课程压力", value: 24 }, { name: "转专业空间", value: 19 }, { name: "挂科风险", value: 16 }, { name: "学习支持资源", value: 13 }] },
    middle: { title: "顾虑消解路径", desc: "记录学生从提出难度顾虑，到理解专业培养方式的关键过程。", steps: [{ name: "提出难度顾虑", value: "1,032" }, { name: "查看课程结构说明", value: "704" }, { name: "查看学长案例 / 培养路径", value: "492" }, { name: "继续追问 / 对比专业", value: "318" }, { name: "形成专业意向", value: "176" }] },
    right: { title: "各专业难度顾虑分布", desc: "对比学生在哪些专业上更容易产生学习难度和适应风险的担忧。", primaryLabel: "专业咨询热度", secondaryLabel: "难度顾虑强度", data: [{ name: "计科", primary: 94, secondary: 72 }, { name: "电信", primary: 86, secondary: 58 }, { name: "自动化", primary: 78, secondary: 61 }, { name: "软件", primary: 82, secondary: 55 }, { name: "数学类", primary: 64, secondary: 76 }] },
  },
  parents: {
    inputTitle: "家长期待相关咨询", inputDesc: "家长更关注学校层次、稳定性、城市环境和未来风险。",
    left: { title: "家长关注重点", desc: "统计家长在咨询中最关心的稳定性、学校层次和未来风险问题。", bars: [{ name: "就业稳定性", value: 35 }, { name: "学校层次", value: 30 }, { name: "城市环境", value: 24 }, { name: "升学空间", value: 21 }, { name: "专业风险", value: 18 }, { name: "学费与生活成本", value: 12 }] },
    middle: { title: "家长关注转化路径", desc: "观察家长顾虑如何影响学生进一步了解学校和专业。", steps: [{ name: "提出家长顾虑", value: "920" }, { name: "查看学校 / 专业说明", value: "674" }, { name: "查看就业与升学数据", value: "486" }, { name: "家庭进一步比较", value: "310" }, { name: "形成高意向", value: "168" }] },
    right: { title: "各专业家长答疑需求", desc: "对比不同专业在家长咨询中的关注度和需要解释的问题量。", primaryLabel: "家长关注度", secondaryLabel: "家长答疑需求", data: [{ name: "电信", primary: 82, secondary: 52 }, { name: "计科", primary: 90, secondary: 68 }, { name: "师范类", primary: 76, secondary: 44 }, { name: "自动化", primary: 70, secondary: 46 }, { name: "软件", primary: 78, secondary: 60 }] },
  },
};

function TopicTabs({ activeTopic, onChange }) {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.45 }} transition={{ delay: 0.16, duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mb-5 max-w-5xl rounded-[1.65rem] border border-white/70 bg-white/52 px-5 py-3.5 shadow-[0_18px_64px_rgba(14,165,233,0.10)] backdrop-blur-xl"><div className="mb-3 flex flex-col justify-between gap-3 text-center sm:flex-row sm:items-end sm:text-left"><div><p className="text-[11px] font-black uppercase tracking-[0.22em] text-sky-500">Consultation Topics</p><h3 className="mt-1 text-lg font-black tracking-[-0.03em] text-slate-950">从咨询中提取的高频关注点</h3></div><p className="max-w-xl text-sm leading-6 text-slate-500">选择一个主题，查看它在招生看板中的对应分析。</p></div><div className="flex flex-wrap justify-center gap-2.5 sm:justify-start">{topics.map((topic) => { const active = activeTopic === topic.id; return <button key={topic.id} type="button" onClick={() => onChange(topic.id)} className={`rounded-full border px-4 py-1.5 text-sm font-bold shadow-sm transition-all duration-300 ${active ? "border-sky-300 bg-sky-500 text-white shadow-[0_12px_32px_rgba(14,165,233,0.20)]" : "border-white/70 bg-white/60 text-slate-500 hover:border-sky-200 hover:bg-white/88 hover:text-sky-700"}`}>{topic.label}</button>; })}</div></motion.div>;
}
function DashboardHeader({ activeTopic }) { return <div className="mb-3.5 flex flex-col justify-between gap-3 px-1 sm:flex-row sm:items-end"><div><p className="text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">Admissions Dashboard</p><h3 className="mt-1 text-xl font-black tracking-[-0.04em] text-slate-950 sm:text-2xl">生源数据控制台</h3></div><p className="max-w-2xl text-sm font-medium leading-6 text-slate-500 sm:text-right">当前分析主题：<span className="font-black text-sky-700">{activeTopic.dashboardLabel}</span><br className="hidden sm:block" />统计周期：近 30 天 ｜ 样本来源：AI 咨询记录 ｜ 排序方式：按咨询量</p></div>; }
function TopicSummary({ data }) { return <motion.div key={`summary-${data.inputTitle}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }} className="mb-3 rounded-2xl border border-sky-100 bg-sky-50/60 px-4 py-2 text-sm leading-6 text-slate-600"><span className="font-black text-slate-950">{data.inputTitle}</span><span className="mx-2 text-slate-300">/</span>{data.inputDesc}</motion.div>; }
function HorizontalBars({ data }) { const max = Math.max(...data.map((item) => item.value)); return <div className="mt-4 space-y-2.5">{data.map((item, index) => <div key={item.name}><div className="mb-1 flex items-center justify-between text-[13px]"><span className="font-bold text-slate-600">{item.name}</span><span className="font-semibold text-slate-400">{item.value}%</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100"><motion.div initial={{ width: 0 }} animate={{ width: `${(item.value / max) * 100}%` }} transition={{ delay: 0.08 + index * 0.05, duration: 0.52, ease: [0.22, 1, 0.36, 1] }} className="h-full rounded-full bg-sky-400" /></div></div>)}</div>; }
function StepPath({ steps }) { return <div className="mt-4 space-y-2">{steps.map((step, index) => <motion.div key={step.name} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.05, duration: 0.32 }} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/70 px-3 py-2 shadow-sm"><div className="flex items-center gap-2.5"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-[11px] font-black text-sky-700">{index + 1}</span><span className="text-[13px] font-bold text-slate-600">{step.name}</span></div><span className="text-[13px] font-black text-slate-950">{step.value}</span></motion.div>)}</div>; }
function MajorBars({ right }) { return <div className="mt-2 h-56"><div className="mb-1.5 flex gap-4 text-xs font-bold text-slate-500"><span className="inline-flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-sky-400" />{right.primaryLabel}</span><span className="inline-flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-amber-400" />{right.secondaryLabel}</span></div><ResponsiveContainer width="100%" height="100%"><BarChart data={right.data} margin={{ top: 6, right: 8, left: -24, bottom: 0 }}><CartesianGrid vertical={false} stroke="rgba(148,163,184,0.18)" /><XAxis dataKey="name" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} /><YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} /><Tooltip cursor={{ fill: "rgba(14,165,233,0.06)" }} /><Bar dataKey="primary" name={right.primaryLabel} fill="#38bdf8" radius={[8, 8, 0, 0]} /><Bar dataKey="secondary" name={right.secondaryLabel} fill="#fbbf24" radius={[8, 8, 0, 0]} /></BarChart></ResponsiveContainer></div>; }
function DashboardCard({ title, desc, children, delay = 0 }) { return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="rounded-[1.55rem] border border-white/70 bg-white/64 p-4 shadow-[0_18px_64px_rgba(14,165,233,0.10)]"><h4 className="text-lg font-black tracking-[-0.03em] text-slate-950">{title}</h4><p className="mt-1 text-[13px] leading-5 text-slate-500">{desc}</p>{children}</motion.div>; }
function Dashboard({ topicId }) {
  const data = dashboardData[topicId];
  const activeTopic = topics.find((topic) => topic.id === topicId) || topics[0];
  return <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.28 }} transition={{ delay: 0.24, duration: 0.62, ease: [0.22, 1, 0.36, 1] }} className="mx-auto max-w-[84rem] rounded-[2rem] border border-white/70 bg-white/50 p-3.5 shadow-[0_26px_90px_rgba(14,165,233,0.13)] backdrop-blur-2xl"><DashboardHeader activeTopic={activeTopic} /><AnimatePresence mode="wait"><motion.div key={topicId} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}><TopicSummary data={data} /><div className="grid gap-3.5 lg:grid-cols-[1fr_1fr_1.12fr]"><DashboardCard title={data.left.title} desc={data.left.desc} delay={0.02}><HorizontalBars data={data.left.bars} /></DashboardCard><DashboardCard title={data.middle.title} desc={data.middle.desc} delay={0.08}><StepPath steps={data.middle.steps} /></DashboardCard><DashboardCard title={data.right.title} desc={data.right.desc} delay={0.14}><MajorBars right={data.right} /></DashboardCard></div></motion.div></AnimatePresence></motion.div>;
}
function DashboardPage() {
  const [activeTopic, setActiveTopic] = useState("all");
  return <section className="relative min-h-[100svh] overflow-hidden bg-[#f8fbff] text-slate-950"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_7%,rgba(186,230,253,0.42),transparent_34%),radial-gradient(circle_at_10%_42%,rgba(56,189,248,0.13),transparent_28%),radial-gradient(circle_at_90%_42%,rgba(34,211,238,0.12),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#ffffff_12%,#eef8ff_100%)]" /><div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f8fbff] via-[#f8fbff]/80 to-transparent" /><div className="pointer-events-none absolute left-1/2 top-[23%] h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" /><DataStreamWords /><div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6 py-10"><div className="mx-auto w-full max-w-[88rem] scale-[0.80] transform-gpu"><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mb-5 max-w-4xl text-center"><p className="mb-2 text-sm font-black uppercase tracking-[0.24em] text-sky-500">Data Returning</p><h2 className="text-center text-5xl font-black leading-tight tracking-[-0.05em] text-slate-950">听懂上万次真实心声，<br />看清全局生源动态。</h2><p className="mx-auto mt-4 max-w-3xl text-center text-lg font-light leading-7 text-slate-500"><span className="block">系统从学生和家长的自然语言咨询中提取关注点、专业意向和顾虑，</span><span className="block">自动汇总成招生办可以复盘的主题、线索和专业答疑需求。</span></p></motion.div><TopicTabs activeTopic={activeTopic} onChange={setActiveTopic} /><Dashboard topicId={activeTopic} /><motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ delay: 0.58, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mt-4 max-w-2xl text-center text-sm font-medium tracking-wide text-slate-500">每一个标签都来自学生自然语言咨询，而不是人工手动填表。</motion.p></div></div></section>;
}

export default function App() {
  return <main className="overflow-x-hidden bg-[#fbfdff]"><HeroPage /><ConversationPage /><DashboardPage /></main>;
}
