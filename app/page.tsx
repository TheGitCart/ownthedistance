'use client'

import { useState } from 'react'

const fighters = [
  {
    name: 'Zachary Nowell',
    initials: 'ZN',
    side: 'red',
    height: "5'6\"",
    weight: '150 lb',
    mile: 'Sub 16:00',
    punch: '50 PSI',
    note: 'Power & pressure',
  },
  {
    name: 'Fischer Anderson',
    initials: 'FA',
    side: 'blue',
    height: "5'10\"",
    weight: '115 lb',
    mile: 'Sub 6:00',
    punch: '37 PSI',
    note: 'Speed & distance',
  },
]

const stats = [
  { label: 'Height', key: 'height' },
  { label: 'Weight', key: 'weight' },
  { label: 'Mile time', key: 'mile' },
  { label: 'Punch force', key: 'punch' },
] as const

export default function Page() {
  const [pick, setPick] = useState<string | null>(null)
  const [votes, setVotes] = useState({ 'Zachary Nowell': 0, 'Fischer Anderson': 0 })

  const chooseWinner = (name: string) => {
    if (pick === name) return
    setVotes((current) => ({
      ...current,
      ...(pick ? { [pick]: Math.max(0, current[pick as keyof typeof current] - 1) } : {}),
      [name]: current[name as keyof typeof current] + 1,
    }))
    setPick(name)
  }

  const takeBackVote = () => {
    if (!pick) return
    setVotes((current) => ({ ...current, [pick]: Math.max(0, current[pick as keyof typeof current] - 1) }))
    setPick(null)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#11100f] text-[#f5f1e9] selection:bg-[#e8b84b] selection:text-[#11100f]">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#e84932]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-72 h-96 w-96 rounded-full bg-[#2d79b9]/10 blur-3xl" />

        <header className="relative z-10 flex items-center justify-between border-b border-white/15 pb-5">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e8b84b]">Fight night / 01</p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">October 5th</p>
        </header>

        <section className="relative z-10 py-14 text-center sm:py-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-white/45">The main event</p>
          <h1 className="font-sans text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Two styles.<br />
            <span className="text-[#e8b84b]">One fight.</span>
          </h1>
          <div className="mx-auto mt-7 flex max-w-md items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] text-white/50">
            <span className="h-px flex-1 bg-white/20" />
            <span>October 5th</span>
            <span className="h-px flex-1 bg-white/20" />
          </div>
        </section>

        <section aria-labelledby="matchup-heading" className="relative z-10 flex flex-1 flex-col">
          <h2 id="matchup-heading" className="sr-only">Zachary Nowell versus Fischer Anderson stats</h2>
          <div className="grid overflow-hidden border border-white/15 bg-white/[0.03] md:grid-cols-[1fr_auto_1fr]">
            {fighters.map((fighter) => (
              <article key={fighter.name} className={`group relative p-6 sm:p-9 ${fighter.side === 'red' ? 'bg-[#e84932]/[0.08]' : 'bg-[#2d79b9]/[0.08]'} ${fighter.side === 'blue' ? 'md:order-3' : ''}`}>
                <div className={`absolute inset-x-0 top-0 h-1 ${fighter.side === 'red' ? 'bg-[#e84932]' : 'bg-[#2d79b9]'}`} />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-white/45">{fighter.side === 'red' ? 'Red corner' : 'Blue corner'}</p>
                    <h3 className="max-w-[12rem] text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-5xl">{fighter.name}</h3>
                  </div>
                  <span className={`shrink-0 text-5xl font-black leading-none tracking-[-0.08em] sm:text-6xl ${fighter.side === 'red' ? 'text-[#e84932]/30' : 'text-[#2d79b9]/35'}`}>{fighter.initials}</span>
                </div>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.12em] text-white/55">{fighter.note}</p>
                <div className="mt-9 grid grid-cols-2 gap-y-5 border-t border-white/15 pt-5 sm:grid-cols-4 sm:gap-y-0">
                  {stats.map((stat) => (
                    <div key={stat.key} className="min-w-0 border-white/10 pr-3 even:border-l even:pl-3 sm:border-l sm:pl-4 sm:pr-4 first:border-l-0 first:pl-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">{stat.label}</p>
                      <p className="mt-2 whitespace-nowrap text-base font-black tracking-tight sm:text-lg">{fighter[stat.key]}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}

            <div className="relative flex items-center justify-center border-y border-white/15 bg-[#e8b84b] px-4 py-7 text-center text-[#11100f] md:order-2 md:border-x md:border-y-0">
              <div>
                <p className="text-5xl font-black italic tracking-[-0.1em] sm:text-6xl">VS</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.24em]">October 5th</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-x border-b border-white/15 px-6 py-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">Official matchup card</p>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-white/80">1. Mile race <span className="text-white/35">→</span> 2. MMA fight</p>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e8b84b]">Who owns the distance?</p>
          </div>

          <section aria-labelledby="poll-heading" className="order-first mt-8 border border-white/15 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e8b84b]">Fan poll</p>
                <h2 id="poll-heading" className="mt-2 text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl">Who wins the mile, then the MMA fight?</h2>
              </div>
              <p className="text-xs uppercase tracking-[0.15em] text-white/40">One vote per person</p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {fighters.map((fighter) => {
                const total = votes['Zachary Nowell'] + votes['Fischer Anderson']
                const count = votes[fighter.name as keyof typeof votes]
                const percent = total ? Math.round((count / total) * 100) : 0
                return (
                  <button key={fighter.name} type="button" onClick={() => chooseWinner(fighter.name)} aria-pressed={pick === fighter.name} className={`relative overflow-hidden border p-4 text-left transition ${pick === fighter.name ? 'border-[#e8b84b] bg-[#e8b84b]/15' : 'border-white/15 bg-white/[0.03] hover:border-white/40'}`}>
                    <span className="relative z-10 flex items-center justify-between gap-3 text-sm font-black uppercase tracking-[0.08em]">
                      <span>{fighter.name}</span><span className="text-[#e8b84b]">{percent}%</span>
                    </span>
                    <span className="relative z-10 mt-2 block text-xs uppercase tracking-[0.14em] text-white/45">{count} vote{count === 1 ? '' : 's'} · {pick === fighter.name ? 'Your pick' : 'Vote'} </span>
                    <span className="absolute inset-y-0 left-0 bg-[#e8b84b]/10 transition-all" style={{ width: `${percent}%` }} />
                  </button>
                )
              })}
            </div>
            {pick && <button type="button" onClick={takeBackVote} className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-white/55 underline decoration-white/25 underline-offset-4 hover:text-white">Take back my vote</button>}
          </section>
        </section>

        <footer className="relative z-10 flex items-center justify-between pt-8 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <span>Fight night</span><span>October 5th</span><span>Matchup 01</span>
        </footer>
      </div>
    </main>
  )
}
