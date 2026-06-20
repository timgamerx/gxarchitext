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

 <section className="text-white py-20 px-6"
 style={{ marginTop: -45 }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading 
        <h2 className="text-5xl font-bold mb-16">
          Case Studies
        </h2> */}

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight underline decoration-sky-500 decoration-4 underline-offset-4 mb-16">
          TikTok Ads Growth Case Study — First Client Campaign
        </h1>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 border-b border-white/20 pb-16">
          {/* Left Column */}
          <div>
            {/* Project Overview */}
            <div className="mb-12">
              <h3 className="text-3xl font-semibold mb-6">
                Project Overview
              </h3>

              <p className="text-gray-300 leading-relaxed">
                This project focused on helping a small business owner run
                their first TikTok advertising campaign with a limited budget
                of ₦15,000–₦30,000. The goal was to test paid traffic,
                improve visibility, and generate measurable engagement or
                conversions from targeted audiences.
              </p>
            </div>

            {/* Objective */}
            <div className="mb-12">
              <h3 className="text-3xl font-semibold mb-6">
                Objective
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Launch a structured TikTok ad campaign</li>
                <li>Reach a relevant target audience</li>
                <li>Optimize ad performance for engagement and conversions</li>
                <li>Demonstrate cost-effective digital marketing strategy</li>
              </ul>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-3xl font-semibold mb-6">
                Results
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-6">
                <li>Successfully launched first TikTok ad campaign</li>
                <li>Achieved structured audience targeting and ad delivery</li>
                <li>Improved understanding of cost-efficient paid marketing strategy</li>
                <li>Provided actionable insights for future campaigns</li>
              </ul>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="font-semibold mb-3">
                  Campaign Metrics
                </h4>

                <ul className="space-y-2 text-gray-300">
                  <li>Impressions: To be updated after campaign</li>
                  <li>Clicks: To be updated after campaign+</li>
                  <li>Engagement Rate: To be updated after campaign</li>
                  <li>Conversions: To be updated after campaign</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:border-l border-white/20 md:pl-16">
            {/* Role */}
            <div className="mb-12">
              <h3 className="text-3xl font-semibold mb-6">
                My Role
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>TikTok Ads Strategy & Setup</li>
                <li>Audience Targeting Research</li>
                <li>Ad Copywriting & Messaging</li>
                <li>Campaign Structuring & Optimization</li>
                <li>Performance Tracking & Reporting</li>
              </ul>
            </div>

            {/* Strategy */}
            <div>
              <h3 className="text-3xl font-semibold mb-8">
                Strategy Execution
              </h3>

              <div className="space-y-10">
                <div>
                  <h4 className="font-bold text-xl mb-3">
                    1. Audience Research
                  </h4>

                  <p className="text-gray-300 leading-relaxed">
                    Identified the ideal customer profile based on the business
                    niche, focusing on user interests, behavior patterns, and
                    demographic targeting suitable for TikTok.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-3">
                    2. Campaign Setup
                  </h4>

                  <p className="text-gray-300 leading-relaxed">
                    Structured the campaign with clear objectives
                    (awareness, traffic, or engagement depending on the
                    client's goal). Configured targeting settings to ensure
                    maximum relevance within a limited budget.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-3">
                    3. Creative Direction
                  </h4>

                  <p className="text-gray-300 leading-relaxed">
                    Developed ad messaging and content direction aimed at
                    capturing attention within the first few seconds,
                    ensuring alignment with TikTok's fast-scroll behavior.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-3">
                    4. Optimization Approach
                  </h4>

                  <p className="text-gray-300 leading-relaxed">
                    Monitored early performance signals and adjusted targeting
                    and messaging for better engagement efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="py-16 border-b border-white/20">
          <h3 className="text-3xl font-semibold mb-8">
            Key Learnings
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Small-budget ads require strong targeting precision</li>
              <li>Creative messaging is more important than budget size</li>
            </ul>

            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Continuous optimization improves performance significantly</li>
              <li>TikTok ads require fast, attention-grabbing hooks</li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className="pt-16"
         style={{ marginBottom: -115 }}>
          <h3 className="text-3xl font-semibold mb-6">
            Conclusion
          </h3>

          <p className="text-gray-300 max-w-5xl leading-relaxed">
            This project marks the beginning of my journey in performance
            marketing and paid advertising. It demonstrates my ability to
            plan, execute, and analyze digital campaigns even with limited
            resources, focusing on strategy, creativity, and measurable
            outcomes.
          </p>
        </div>
      </div>
    </section>

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