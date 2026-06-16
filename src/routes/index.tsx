import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Play,
  Scissors,
  Palette,
  Layers,
  Zap,
  Send,
  Instagram,
  ChevronDown,
  Star,
  Clock,
  Film,
  Check,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: EdemDJLanding,
})

// ─── Ticker ────────────────────────────────────────────────────────────────────
function Ticker() {
  const items = [
    'ВИДЕОМОНТАЖ',
    'ЦВЕТОКОРРЕКЦИЯ',
    'MOTION GRAPHICS',
    'REELS & SHORTS',
    'КЛИПЫ',
    'ПРОМО-РОЛИКИ',
  ]
  const doubled = [...items, ...items]
  return (
    <div className="ticker-wrap border-y py-3" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-2)' }}>
      <div className="ticker-inner gap-12">
        {doubled.map((item, i) => (
          <span key={i} className="font-display text-sm tracking-widest px-8 inline-flex items-center gap-4" style={{ color: 'var(--muted)' }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: 'var(--gold)' }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5" style={{ backdropFilter: 'blur(20px)', backgroundColor: 'rgba(7,7,9,0.7)', borderBottom: '1px solid var(--border)' }}>
      <div className="font-display text-2xl tracking-widest" style={{ color: 'var(--gold)' }}>
        ЭДЕМ DJ
      </div>
      <nav className="hidden md:flex items-center gap-8">
        {[['#about', 'ОБО МНЕ'], ['#services', 'УСЛУГИ'], ['#works', 'РАБОТЫ'], ['#pricing', 'ЦЕНЫ']].map(([href, label]) => (
          <a key={href} href={href} className="font-heading text-xs tracking-widest transition-colors duration-200 hover:text-white" style={{ color: 'var(--muted)', fontSize: '10px' }}>
            {label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="font-heading text-xs tracking-widest px-5 py-2.5 transition-all duration-300 hover:opacity-80"
        style={{ backgroundColor: 'var(--gold)', color: 'var(--bg)', fontSize: '10px', letterSpacing: '0.12em' }}
      >
        СВЯЗАТЬСЯ
      </a>
    </header>
  )
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id="hero">
      {/* Background grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(212,168,67,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Diagonal accent bar */}
      <div className="absolute top-0 right-0 w-px h-full opacity-20" style={{ backgroundColor: 'var(--gold)' }} />
      <div
        className="absolute bottom-24 right-0"
        style={{
          width: '45vw',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--gold))',
          opacity: 0.25,
        }}
      />

      {/* Large background text */}
      <div
        className="absolute select-none pointer-events-none font-display"
        style={{
          fontSize: 'clamp(120px, 22vw, 320px)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(212,168,67,0.06)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap',
          letterSpacing: '0.05em',
        }}
      >
        МОНТАЖ
      </div>

      {/* Red accent blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,57,43,0.12) 0%, transparent 70%)',
          top: '10%',
          right: '10%',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 pt-32 pb-16 max-w-screen-xl mx-auto w-full">
        {/* Label */}
        <div className="animate-fade-up flex items-center gap-3 mb-8">
          <div className="w-8 h-px" style={{ backgroundColor: 'var(--gold)' }} />
          <span className="font-heading uppercase tracking-[0.3em] text-xs" style={{ color: 'var(--gold)', fontSize: '10px' }}>
            Профессиональный видеомонтаж
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-display animate-fade-up delay-100 leading-none mb-2"
          style={{ fontSize: 'clamp(80px, 16vw, 220px)', letterSpacing: '0.02em' }}
        >
          <span className="gold-shimmer">ЭДЕМ</span>
        </h1>
        <h1
          className="font-display animate-fade-up delay-200 leading-none"
          style={{ fontSize: 'clamp(80px, 16vw, 220px)', letterSpacing: '0.02em', color: 'var(--cream)' }}
        >
          DJ
        </h1>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-end gap-8 justify-between">
          <p
            className="animate-fade-up delay-300 max-w-md font-light leading-relaxed"
            style={{ color: 'var(--muted)', fontSize: '15px' }}
          >
            Монтирую видео, которое цепляет с первого кадра.<br />
            Клипы, Reels, промо-ролики — быстро, стильно, чётко.
          </p>

          <div className="animate-fade-up delay-400 flex items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 font-heading text-xs tracking-widest transition-all duration-300"
              style={{
                backgroundColor: 'var(--gold)',
                color: 'var(--bg)',
                fontSize: '10px',
                letterSpacing: '0.15em',
              }}
            >
              ЗАКАЗАТЬ МОНТАЖ
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#works"
              className="inline-flex items-center gap-3 px-8 py-4 font-heading text-xs tracking-widest transition-all duration-300 hover:opacity-70"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--cream)',
                fontSize: '10px',
                letterSpacing: '0.15em',
              }}
            >
              <Play size={12} fill="currentColor" />
              РАБОТЫ
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up delay-500 mt-20 pt-8 flex flex-wrap gap-12" style={{ borderTop: '1px solid var(--border)' }}>
          {[
            { n: '200+', label: 'проектов' },
            { n: '3+', label: 'года опыта' },
            { n: '48ч', label: 'срок сдачи' },
            { n: '98%', label: 'клиентов возвращаются' },
          ].map(({ n, label }) => (
            <div key={label}>
              <div className="font-display text-4xl" style={{ color: 'var(--gold)', letterSpacing: '0.05em' }}>{n}</div>
              <div className="font-heading text-xs mt-1 uppercase tracking-widest" style={{ color: 'var(--muted)', fontSize: '9px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700">
        <span className="font-heading text-xs tracking-widest" style={{ color: 'var(--muted)', fontSize: '9px' }}>СКРОЛЛ</span>
        <ChevronDown size={14} style={{ color: 'var(--gold)' }} />
      </div>
    </section>
  )
}

// ─── About ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <Ticker />

      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Visual card */}
          <div className="lg:col-span-5 relative">
            {/* Decorative frame */}
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full"
                style={{ border: '1px solid var(--border)' }}
              />
              <div
                className="relative aspect-[3/4] overflow-hidden"
                style={{ backgroundColor: 'var(--bg-3)' }}
              >
                {/* Abstract film reel visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 rounded-full" style={{ border: '2px solid rgba(212,168,67,0.2)' }} />
                    <div className="absolute inset-6 rounded-full" style={{ border: '1px solid rgba(212,168,67,0.15)' }} />
                    <div className="absolute inset-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(212,168,67,0.1)', border: '2px solid rgba(212,168,67,0.3)' }}>
                      <Film size={32} style={{ color: 'var(--gold)' }} />
                    </div>
                    {[0, 60, 120, 180, 240, 300].map((deg) => (
                      <div
                        key={deg}
                        className="absolute w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: 'var(--gold)',
                          top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 88}px - 6px)`,
                          left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 88}px - 6px)`,
                          opacity: 0.6,
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* Scanline effect */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
                  }}
                />
                {/* Label overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{ background: 'linear-gradient(transparent, rgba(7,7,9,0.95))' }}
                >
                  <div className="font-display text-3xl" style={{ color: 'var(--gold)' }}>ЭДЕМ DJ</div>
                  <div className="font-heading text-xs tracking-widest mt-1" style={{ color: 'var(--muted)', fontSize: '9px' }}>VIDEO EDITOR</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: 'var(--gold)' }} />
              <span className="font-heading uppercase tracking-[0.3em]" style={{ color: 'var(--gold)', fontSize: '10px' }}>ОБО МНЕ</span>
            </div>

            <h2 className="font-display leading-none mb-8" style={{ fontSize: 'clamp(42px, 6vw, 80px)', color: 'var(--cream)' }}>
              МОНТИРУЮ<br />
              <span style={{ WebkitTextStroke: '1px rgba(240,237,230,0.3)', color: 'transparent' }}>
                ТВОЙ КОНТЕНТ
              </span>
            </h2>

            <div className="space-y-5 font-light leading-relaxed" style={{ color: 'var(--muted)', maxWidth: '520px' }}>
              <p>
                Привет, я Эдем — монтажёр с трёхлетним опытом в создании
                видеоконтента. Работаю с музыкантами, блогерами, брендами
                и агентствами.
              </p>
              <p>
                Специализируюсь на динамичных клипах, вирусных Reels и
                промо-роликах. Каждый проект — это история, рассказанная
                через ритм и визуал.
              </p>
              <p>
                Сдаю работу в срок. Правки включены. Результат — горит.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut'].map((tool) => (
                <span
                  key={tool}
                  className="font-heading text-xs px-4 py-2 tracking-wider"
                  style={{ border: '1px solid var(--border)', color: 'var(--muted)', fontSize: '10px' }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services ──────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Scissors,
    title: 'Видеомонтаж',
    desc: 'Чистый, динамичный монтаж с ритмичными склейками. Клипы, влоги, интервью — любой формат.',
    tag: 'БАЗОВАЯ УСЛУГА',
  },
  {
    icon: Palette,
    title: 'Цветокоррекция',
    desc: 'Профессиональный колоргрейдинг в DaVinci Resolve. Кино-лук, яркий поп или приглушённый мрак — выбирай стиль.',
    tag: 'ПОПУЛЯРНО',
  },
  {
    icon: Layers,
    title: 'Motion Graphics',
    desc: 'Анимированные титры, переходы, нижние трети и графика в After Effects.',
    tag: '',
  },
  {
    icon: Zap,
    title: 'Reels & Shorts',
    desc: 'Вертикальный контент для TikTok, Instagram и YouTube. Быстро — 24–48 часов.',
    tag: 'БЫСТРО',
  },
  {
    icon: Film,
    title: 'Промо-ролики',
    desc: 'Рекламные ролики и тизеры для продуктов, мероприятий и брендов.',
    tag: '',
  },
  {
    icon: Star,
    title: 'Музыкальные клипы',
    desc: 'Монтаж клипов с синхронизацией по биту, эффектами и мощной подачей.',
    tag: 'ХАЙЛАЙТ',
  },
]

function Services() {
  return (
    <section id="services" className="py-32" style={{ backgroundColor: 'var(--bg-2)' }}>
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: 'var(--gold)' }} />
              <span className="font-heading uppercase tracking-[0.3em]" style={{ color: 'var(--gold)', fontSize: '10px' }}>УСЛУГИ</span>
            </div>
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(42px, 6vw, 80px)', color: 'var(--cream)' }}>
              ЧТО Я<br />ДЕЛАЮ
            </h2>
          </div>
          <p className="max-w-xs font-light leading-relaxed" style={{ color: 'var(--muted)', fontSize: '14px' }}>
            Полный цикл постпродакшна для любого формата видео
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--border)' }}>
          {services.map(({ icon: Icon, title, desc, tag }) => (
            <div
              key={title}
              className="group relative p-8 transition-all duration-300 hover:z-10"
              style={{ backgroundColor: 'var(--bg-2)' }}
            >
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(212,168,67,0.05) 0%, transparent 60%)' }}
              />

              {tag && (
                <div className="mb-4">
                  <span className="font-heading text-xs px-3 py-1" style={{ backgroundColor: 'rgba(212,168,67,0.12)', color: 'var(--gold)', fontSize: '9px', letterSpacing: '0.15em' }}>
                    {tag}
                  </span>
                </div>
              )}
              {!tag && <div className="mb-4 h-[26px]" />}

              <div
                className="w-10 h-10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ border: '1px solid var(--border)' }}
              >
                <Icon size={18} style={{ color: 'var(--gold)' }} />
              </div>

              <h3 className="font-heading font-bold mb-3" style={{ color: 'var(--cream)', fontSize: '14px', letterSpacing: '0.05em' }}>
                {title}
              </h3>
              <p className="font-light leading-relaxed" style={{ color: 'var(--muted)', fontSize: '13px' }}>
                {desc}
              </p>

              <div
                className="absolute bottom-0 left-0 w-0 h-px transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: 'var(--gold)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Works ─────────────────────────────────────────────────────────────────────
const works = [
  { title: 'Ночной клип', category: 'Музыкальный клип', color: '#1a0a1e', accent: '#8b45c8' },
  { title: 'Городской влог', category: 'Влог / Reels', color: '#0a1020', accent: '#2d6fbe' },
  { title: 'Промо кроссовки', category: 'Реклама', color: '#1a0a0a', accent: '#c0392b' },
  { title: 'Фестиваль', category: 'Event', color: '#0a1a10', accent: '#2d9e5e' },
  { title: 'Cinematic Travel', category: 'Travel Film', color: '#1a1500', accent: '#d4a843' },
  { title: 'Brand Story', category: 'Промо', color: '#0f0f0f', accent: '#888' },
]

function Works() {
  return (
    <section id="works" className="py-32">
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ backgroundColor: 'var(--gold)' }} />
          <span className="font-heading uppercase tracking-[0.3em]" style={{ color: 'var(--gold)', fontSize: '10px' }}>РАБОТЫ</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-display leading-none" style={{ fontSize: 'clamp(42px, 6vw, 80px)', color: 'var(--cream)' }}>
            ПОРТФОЛИО
          </h2>
          <p className="max-w-xs font-light" style={{ color: 'var(--muted)', fontSize: '14px' }}>
            Избранные проекты из 200+ выполненных работ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {works.map((work, i) => {
            const isWide = i === 0 || i === 3
            return (
              <div
                key={work.title}
                className={`group relative overflow-hidden cursor-pointer ${isWide ? 'md:col-span-7' : 'md:col-span-5'}`}
                style={{ aspectRatio: isWide ? '16/9' : '4/3', backgroundColor: work.color }}
              >
                {/* Gradient mesh background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 30% 40%, ${work.accent}40 0%, transparent 60%), radial-gradient(circle at 80% 70%, ${work.accent}20 0%, transparent 50%)`,
                  }}
                />

                {/* Grid lines */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(${work.accent}40 1px, transparent 1px), linear-gradient(90deg, ${work.accent}40 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(212,168,67,0.9)', boxShadow: '0 0 40px rgba(212,168,67,0.5)' }}
                  >
                    <Play size={20} fill="#070709" style={{ color: '#070709', marginLeft: 2 }} />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(7,7,9,0.4)' }} />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300" style={{ background: 'linear-gradient(transparent, rgba(7,7,9,0.85))' }}>
                  <div className="font-heading text-xs mb-1 tracking-widest" style={{ color: work.accent, fontSize: '9px' }}>{work.category}</div>
                  <div className="font-heading font-bold" style={{ color: 'var(--cream)', fontSize: '13px' }}>{work.title}</div>
                </div>

                {/* Border accent */}
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: work.accent }} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ───────────────────────────────────────────────────────────────────
const plans = [
  {
    name: 'BASE',
    rub: '3 000',
    usd: '~35$',
    desc: 'Для коротких роликов и Reels',
    features: ['До 60 секунд', 'Базовый монтаж', 'Цветокоррекция', '1 правка', 'Срок: 24 часа'],
    highlight: false,
  },
  {
    name: 'PRO',
    rub: '8 000',
    usd: '~90$',
    desc: 'Для клипов и промо-роликов',
    features: ['До 4 минут', 'Профессиональный монтаж', 'Цветогрейдинг', 'Motion Graphics', '3 правки', 'Срок: 48 часов'],
    highlight: true,
  },
  {
    name: 'CINEMA',
    rub: '15 000',
    usd: '~170$',
    desc: 'Для сложных проектов и брендов',
    features: ['Без ограничений', 'Полный постпродакшн', 'Авторский колоргрейдинг', 'After Effects эффекты', 'Неограниченные правки', 'Срок: по договорённости'],
    highlight: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-32" style={{ backgroundColor: 'var(--bg-2)' }}>
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: 'var(--gold)' }} />
            <span className="font-heading uppercase tracking-[0.3em]" style={{ color: 'var(--gold)', fontSize: '10px' }}>ЦЕНЫ</span>
            <div className="w-8 h-px" style={{ backgroundColor: 'var(--gold)' }} />
          </div>
          <h2 className="font-display leading-none" style={{ fontSize: 'clamp(42px, 6vw, 80px)', color: 'var(--cream)' }}>
            ТАРИФЫ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col p-8 transition-all duration-300"
              style={{
                backgroundColor: plan.highlight ? 'var(--bg-3)' : 'var(--bg)',
                border: plan.highlight ? '1px solid var(--gold)' : '1px solid var(--border)',
                boxShadow: plan.highlight ? '0 0 60px rgba(212,168,67,0.1)' : 'none',
              }}
            >
              {plan.highlight && (
                <div
                  className="absolute -top-px left-8 right-8 h-px"
                  style={{ backgroundColor: 'var(--gold)' }}
                />
              )}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="font-heading text-xs px-3 py-1" style={{ backgroundColor: 'var(--gold)', color: 'var(--bg)', fontSize: '9px', letterSpacing: '0.15em' }}>
                    ПОПУЛЯРНЫЙ
                  </span>
                </div>
              )}

              <div className="font-display text-xl mb-1 tracking-widest" style={{ color: plan.highlight ? 'var(--gold)' : 'var(--muted)' }}>
                {plan.name}
              </div>
              <div className="font-display mb-1" style={{ fontSize: '52px', color: 'var(--cream)', lineHeight: 1 }}>
                {plan.rub} ₽
              </div>
              <div className="font-heading text-xs mb-2" style={{ color: 'var(--muted)', fontSize: '11px' }}>{plan.usd}</div>
              <p className="font-light mb-8 pb-8" style={{ color: 'var(--muted)', fontSize: '13px', borderBottom: '1px solid var(--border)' }}>
                {plan.desc}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-light" style={{ color: 'var(--cream)', fontSize: '13px' }}>
                    <Check size={13} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="w-full text-center py-4 font-heading text-xs tracking-widest transition-all duration-300 block"
                style={{
                  backgroundColor: plan.highlight ? 'var(--gold)' : 'transparent',
                  color: plan.highlight ? 'var(--bg)' : 'var(--cream)',
                  border: plan.highlight ? 'none' : '1px solid var(--border)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                }}
              >
                ВЫБРАТЬ
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 font-light" style={{ color: 'var(--muted)', fontSize: '13px' }}>
          Нужен индивидуальный проект? Напишите — обсудим.
        </p>
      </div>
    </section>
  )
}

// ─── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', message: '' })

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: 'var(--gold)' }} />
              <span className="font-heading uppercase tracking-[0.3em]" style={{ color: 'var(--gold)', fontSize: '10px' }}>КОНТАКТЫ</span>
            </div>
            <h2 className="font-display leading-none mb-8" style={{ fontSize: 'clamp(42px, 6vw, 80px)', color: 'var(--cream)' }}>
              ДАВАЙ<br />РАБОТАТЬ
            </h2>
            <p className="font-light leading-relaxed mb-12" style={{ color: 'var(--muted)', fontSize: '15px', maxWidth: '400px' }}>
              Готов к новому проекту? Напиши мне в Telegram или Instagram
              — отвечу в течение пары часов.
            </p>

            <div className="space-y-4">
              <a
                href="https://t.me/edemdj"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 transition-all duration-300"
                style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-2)' }}
              >
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(41,182,246,0.1)' }}>
                  <Send size={16} style={{ color: '#29b6f6' }} />
                </div>
                <div>
                  <div className="font-heading font-bold" style={{ color: 'var(--cream)', fontSize: '12px' }}>Telegram</div>
                  <div className="font-light" style={{ color: 'var(--muted)', fontSize: '13px' }}>@edemdj</div>
                </div>
                <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--gold)' }} />
              </a>

              <a
                href="https://instagram.com/edemdj"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 transition-all duration-300"
                style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-2)' }}
              >
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(225,48,108,0.1)' }}>
                  <Instagram size={16} style={{ color: '#e1306c' }} />
                </div>
                <div>
                  <div className="font-heading font-bold" style={{ color: 'var(--cream)', fontSize: '12px' }}>Instagram</div>
                  <div className="font-light" style={{ color: 'var(--muted)', fontSize: '13px' }}>@edemdj</div>
                </div>
                <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--gold)' }} />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 p-4" style={{ backgroundColor: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.15)' }}>
              <Clock size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} />
              <span className="font-light" style={{ color: 'var(--muted)', fontSize: '13px' }}>
                Время ответа: до 2–3 часов в рабочее время
              </span>
            </div>
          </div>

          {/* Right: quick form */}
          <div>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(212,168,67,0.1)', border: '1px solid var(--gold)' }}>
                  <Check size={24} style={{ color: 'var(--gold)' }} />
                </div>
                <div>
                  <div className="font-heading font-bold mb-2" style={{ color: 'var(--cream)', fontSize: '16px' }}>Сообщение отправлено!</div>
                  <div className="font-light" style={{ color: 'var(--muted)', fontSize: '14px' }}>Отвечу в ближайшее время.</div>
                </div>
              </div>
            ) : (
              <div
                className="p-8 h-full"
                style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-2)' }}
              >
                <div className="font-heading font-bold mb-8" style={{ color: 'var(--cream)', fontSize: '14px', letterSpacing: '0.1em' }}>
                  БЫСТРОЕ СООБЩЕНИЕ
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block font-heading text-xs mb-2 tracking-widest" style={{ color: 'var(--muted)', fontSize: '10px' }}>
                      ИМЯ
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Как тебя зовут?"
                      className="w-full px-4 py-3 font-light outline-none transition-all duration-200 placeholder:opacity-40"
                      style={{
                        backgroundColor: 'var(--bg-3)',
                        border: '1px solid var(--border)',
                        color: 'var(--cream)',
                        fontSize: '14px',
                      }}
                    />
                  </div>

                  <div>
                    <label className="block font-heading text-xs mb-2 tracking-widest" style={{ color: 'var(--muted)', fontSize: '10px' }}>
                      СООБЩЕНИЕ
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Расскажи о проекте — формат, длина, дедлайн..."
                      className="w-full px-4 py-3 font-light outline-none resize-none transition-all duration-200 placeholder:opacity-40"
                      style={{
                        backgroundColor: 'var(--bg-3)',
                        border: '1px solid var(--border)',
                        color: 'var(--cream)',
                        fontSize: '14px',
                      }}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (form.name && form.message) setSent(true)
                    }}
                    className="w-full py-4 font-heading text-xs tracking-widest transition-all duration-300 hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--gold)',
                      color: 'var(--bg)',
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      animation: 'pulse-glow 3s ease-in-out infinite',
                    }}
                  >
                    ОТПРАВИТЬ
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-8 px-8 md:px-16 lg:px-24" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl tracking-widest" style={{ color: 'var(--gold)' }}>ЭДЕМ DJ</div>
        <div className="font-heading text-xs tracking-widest" style={{ color: 'var(--muted)', fontSize: '10px' }}>
          © 2024 · ВИДЕОМОНТАЖЁР
        </div>
        <div className="flex items-center gap-6">
          <a href="https://t.me/edemdj" className="transition-colors hover:opacity-70" style={{ color: 'var(--muted)' }}>
            <Send size={14} />
          </a>
          <a href="https://instagram.com/edemdj" className="transition-colors hover:opacity-70" style={{ color: 'var(--muted)' }}>
            <Instagram size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}

// ─── Root ──────────────────────────────────────────────────────────────────────
export default function EdemDJLanding() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Works />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
