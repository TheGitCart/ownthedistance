'use client'

import Link from 'next/link'

const events = [
  {
    href: '/fischer-vs-zach',
    eyebrow: 'October 5th · Sock wrestling',
    title: 'Fischer vs Zach',
    description: 'The rematch is set. Pick the winner and predict whether it ends under one minute.',
    accent: 'bg-[#e8b84b]',
  },
  {
    href: '#',
    eyebrow: 'Coming soon · Matchup 02',
    title: 'Fischer vs ?',
    description: 'The next challenger has not been announced yet. Check back when the card drops.',
    accent: 'bg-white/20',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#11100f] text-[#f5f1e9] selection:bg-[#e8b84b] selection:text-[#11100f]">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute -left-32 top-40 size-80 rounded-full bg-[#e84932]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-72 size-96 rounded-full bg-[#2d79b9]/10 blur-3xl" />
        <header className="relative z-10 flex items-center justify-between border-b border-white/15 pb-5">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e8b84b]">Fight night / 01</p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Own the distance</p>
        </header>
        <section className="relative z-10 py-16 sm:py-24">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-white/45">The event hub</p>
          <h1 className="max-w-3xl text-6xl font-black uppercase leading-[0.86] tracking-[-0.07em] sm:text-8xl">Choose your<br /><span className="text-[#e8b84b]">matchup.</span></h1>
          <p className="mt-8 max-w-md text-sm leading-6 text-white/55">Race, wrestle, and make your pick. Each event has its own live fan polls.</p>
        </section>
        <section aria-labelledby="events-heading" className="relative z-10 grid gap-4 md:grid-cols-2">
          <h2 id="events-heading" className="sr-only">Matchups</h2>
          {events.map((event, index) => {
            const content = <><span className={`mb-8 block h-1 w-16 ${event.accent}`} /><p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">{event.eyebrow}</p><h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl">{event.title}</h2><p className="mt-5 max-w-sm text-sm leading-6 text-white/55">{event.description}</p><span className="mt-8 inline-flex border border-white/20 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] transition group-hover:border-[#e8b84b] group-hover:text-[#e8b84b]">{index === 0 ? 'View matchup' : 'Stay tuned'}</span></>
            return event.href === '#' ? <div key={event.title} className="border border-white/10 bg-white/[0.03] p-7 opacity-75 sm:p-9">{content}</div> : <Link key={event.title} href={event.href} className="group border border-white/15 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07] sm:p-9">{content}</Link>
          })}
        </section>
        <footer className="relative z-10 mt-auto flex justify-between pt-16 text-[10px] uppercase tracking-[0.2em] text-white/30"><span>Own the distance</span><span>Matchups</span></footer>
      </div>
    </main>
  )
}
