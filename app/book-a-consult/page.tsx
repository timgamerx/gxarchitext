"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Briefcase,
  Rocket,
  Code2,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-900 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Navbar */}
      <header className="sticky top-0 z-50">
        <div className="mx-auto mt-6 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
          <h1 className="font-semibold">
            Ogundare Iyanuoluwa
          </h1>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            type="button"
            onClick={() =>
              window.open(
                "https://wa.me/2348165340301?text=" +
                  encodeURIComponent(
                    "Hi, I love your work building brands, growth marketing, and product experiences. I'm looking for help with brand strategy, audience growth, and digital marketing campaigns."
                  ),
                "_blank"
              )
            }
            className="rounded-full bg-cyan-500 px-5 py-2 text-slate-950 font-medium"
          >
            Hire Me
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6">
        <div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm"
          >
            <Rocket size={16} />
            Available for Remote Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl text-6xl font-semibold leading-tight md:text-8xl"
          >
            Building Brands.
            <br />
            Growing Products.
            <br />
            Creating Experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 max-w-2xl text-xl text-slate-400"
          >
            A creative marketer combining strategy, design thinking, and performance advertising to build growth systems for modern brands.
          </motion.p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-full bg-cyan-500 px-7 py-4 font-medium text-slate-950">
              View Portfolio
            </button>

            <button className="rounded-full border border-white/10 bg-white/5 px-7 py-4 backdrop-blur">
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="grid gap-6 md:grid-cols-4">

          {[
            ["50+", "Design Projects"],
            ["3", "Startup Projects"],
            ["4+", "Years Experience"],
            ["100%", "Growth Mindset"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {number}
              </h3>

              <p className="mt-2 text-slate-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-32"
      >
        <div className="grid gap-12 md:grid-cols-2">

          <h2 className="text-5xl font-bold">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-slate-400">
            Results-driven Business Development and Digital Marketing professional with skills in brand growth, marketing strategy, content positioning, and audience engagement. Passionate about helping brands scale through strategic marketing, digital innovation, and data-driven growth solutions.
          </p>

        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="mx-auto max-w-6xl px-6 py-32"
      >
        <h2 className="mb-12 text-5xl font-bold">
          Services
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {[
            "Growth Marketing",
            "Brand Strategy",
            "Business Development",
            "Digital Advertising",
            "Content Marketing",
            "Frontend Development",
          ].map((service) => (
            <div
              key={service}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-500"
            >
              <ArrowUpRight className="mb-6 transition group-hover:translate-x-1 group-hover:-translate-y-1" />

              <h3 className="text-xl font-semibold">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-32"
      >
        <h2 className="mb-12 text-5xl font-bold">
          Featured Projects
        </h2>

        <div className="space-y-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h3 className="text-3xl font-semibold">
              Verrsa
            </h3>

            <p className="mt-4 text-slate-400">
              Creator economy platform combining
              articles, podcasts, videos and
              communities in one ecosystem.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h3 className="text-3xl font-semibold">
              TikTok Ads Growth Campaign
            </h3>

            <p className="mt-4 text-slate-400">
              Audience targeting, campaign strategy
              and conversion-focused advertising.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-4xl px-6 py-32 text-center"
      >
        <Mail
          size={60}
          className="mx-auto mb-8 text-cyan-400"
        />

        <h2 className="text-6xl font-bold">
          Let's Build Something Great
        </h2>

        <p className="mt-6 text-xl text-slate-400">
          Open to marketing, growth, startup and
          software opportunities.
        </p>

       

         <a
            href={
              "mailto:growthxarchitect@gmail.com?subject=" +
              encodeURIComponent("Brand growth and marketing inquiry") +
              "&body=" +
              encodeURIComponent(
                "Hi, I love your work building brands, growth marketing, and product experiences. I'm looking for help with brand strategy, audience growth, and digital marketing campaigns."
              )
            }
            className="mt-10 inline-block rounded-full bg-cyan-500 px-8 py-4 text-white cursor-pointer"
          >
            Get In Touch
          </a>


      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">

          <p className="text-slate-500">
            © 2026 Ogundare Iyanuoluwa
          </p>

          <div className="flex gap-4">
            <Briefcase />
            <Code2 />
            <Rocket />
          </div>

        </div>
      </footer>
    </main>
  );
}