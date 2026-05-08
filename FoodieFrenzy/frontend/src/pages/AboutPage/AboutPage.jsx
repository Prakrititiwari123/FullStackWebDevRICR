import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { aboutfeature, features, stats, teamMembers } from '../../assets/dummydata'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#1b1008] via-[#2d1b0e] to-[#120b06] text-amber-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-4xl border border-amber-500/20 bg-white/5 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.85)] backdrop-blur-sm">
          <div className="grid gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-14">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-sm font-semibold tracking-wide text-amber-300">
                About Foodie Frenzy
              </span>
              <div className="space-y-4">
                <h1 className="font-serif text-4xl leading-tight text-amber-100 sm:text-5xl lg:text-6xl">
                  Crafted for people who want fast food without losing the flavor.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-amber-100/80 sm:text-lg">
                  Foodie Frenzy brings restaurant-quality meals, fast delivery, and a premium ordering experience together in one place. We work with skilled chefs, trusted partners, and a service-first team to make every order feel special.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {aboutfeature.map(({ icon: Icon, title, text, color }) => (
                  <div key={title} className="rounded-2xl border border-amber-500/15 bg-[#241509]/80 p-4 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1">
                    <div className={`mb-3 inline-flex rounded-2xl bg-linear-to-r ${color} p-3 text-white`}>
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-amber-100">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-amber-100/70">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {stats.map(({ number, label, icon: Icon, gradient }) => (
                <div key={label} className={`rounded-3xl bg-linear-to-r ${gradient} p-px shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)]`}>
                  <div className="rounded-3xl bg-[#221307] p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-4xl font-bold text-amber-100">{number}</p>
                        <p className="mt-1 text-sm uppercase tracking-[0.3em] text-amber-100/60">{label}</p>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-4 text-3xl text-amber-300">
                        <Icon />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">What we do best</p>
              <h2 className="mt-2 font-serif text-3xl text-amber-100 sm:text-4xl">A service built around speed, quality, and consistency.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-amber-100/70 sm:text-right">
              From the kitchen to your doorstep, every part of the experience is designed to stay reliable, easy to use, and memorable.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map(({ id, title, text, img }) => (
              <article key={id} className="group overflow-hidden rounded-[1.75rem] border border-amber-500/15 bg-white/5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-amber-400/30">
                <div className="relative h-56 overflow-hidden bg-[#2b1608]">
                  <img src={img} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1b1008] via-transparent to-transparent" />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="text-xl font-semibold text-amber-100">{title}</h3>
                  <p className="text-sm leading-6 text-amber-100/70">{text}</p>
                </div>
              </article>
            ))}
          </div>
          
        </section>

        <section className="mt-12 rounded-4xl border border-amber-500/15 bg-[#241509]/75 px-6 py-10 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.8)] lg:px-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Our team</p>
              <h2 className="mt-2 font-serif text-3xl text-amber-100 sm:text-4xl">The chefs behind the experience.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-amber-100/70 sm:text-right">
              We collaborate with chefs who care about technique, presentation, and consistency across every menu item.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-3xl border border-amber-500/15 bg-[#1b1008] shadow-lg shadow-black/20">
                <div className="h-64 overflow-hidden bg-amber-950/40">
                  <img src={member.img} alt={member.name} className="h-full w-full object-cover object-top" />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="text-xl font-semibold text-amber-100">{member.name}</h3>
                  <p className="text-sm uppercase tracking-[0.25em] text-amber-300/75">{member.role}</p>
                  <p className="text-sm leading-6 text-amber-100/70">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutPage