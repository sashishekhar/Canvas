// import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";

// export default function Home() {
//   return (
//     <div>
//       <Navbar/>
//       <Hero/>
//     </div>
//   );
// }



// app/page.tsx
'use client';

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm border-b border-gray-200">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-black.png"
            alt="logo"
            width={28}
            height={28}
            className="hover:scale-110 transition-transform duration-300"
          />
          <span className="text-black text-xl font-bold tracking-wide hover:text-sky-600 transition-colors duration-300">
            canvas
          </span>
        </Link>

        <div className="flex items-center space-x-4 h-full">
          <LoginLink postLoginRedirectURL="/dashboard">
            <span className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-black border border-gray-300 rounded-md hover:bg-gray-100 transition">
              Login
            </span>
          </LoginLink>
          <RegisterLink>
            <span className="hidden sm:inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-900 transition">
              Register
            </span>
          </RegisterLink>
        </div>

      </div>
    </header>
  );
}

const features = [
  {
    title: 'Real-time Collaboration',
    description: 'Work together in real-time with teammates from anywhere in the world.',
  },
  {
    title: 'Smart Documentation',
    description: 'Create structured documents with AI assistance and markdown support.',
  },
  {
    title: 'Interactive Whiteboard',
    description: 'Visualize ideas with diagrams, sticky notes, and canvas tools.',
  },
  {
    title: 'Version History',
    description: 'Track every change and restore any previous version effortlessly.',
  },
  {
    title: 'Commenting & Annotations',
    description: 'Quickly leave feedback, tag teammates, and highlight important content.',
  },
  {
    title: 'Embed & Integrations',
    description: 'Bring in content from tools like Figma, Loom, or GitHub to centralize your work.',
  },
];

const testimonials = [

  {
    name: 'Ravi Sharma',
    quote:
      'We replaced 3 tools with Canvas. The whiteboard plus docs combo is just brilliant.',
    image: '/avatars/Dillan Nguyen.jpg',
  },
  {
    name: 'Candice Wu',
    quote:
      'I use Canvas daily for ideation and team sync-ups. The speed and UX are unmatched.',
    image: '/avatars/Candice Wu.jpg',
  },
  {
    name: 'Drew Cano',
    quote:
      'Our remote team finally feels connected. We can sketch, comment, and iterate — all in real time.',
    image: '/avatars/Drew Cano.jpg',
  },
  {
    name: 'Elsie Roy',
    quote:
      'The interface is smooth, fast, and thoughtful. Canvas replaced FigJam and Notion for us.',
    image: '/avatars/Elsie Roy.jpg',
  },
  {
    name: 'Jordan Burgess',
    quote:
      'I was skeptical at first, but Canvas genuinely makes team collaboration simpler and more fun.',
    image: '/avatars/Jordan Burgess.jpg',
  },
];


export default function Home() {
  const [paused, setPaused] = useState(false);
  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />

      <section className="pt-32 pb-32 relative overflow-hidden">
        <div className="mx-auto max-w-screen-xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Collaborate & Document Smarter
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600">
              The all-in-one platform for visual thinkers. Docs, whiteboards, and collaboration — unified.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <RegisterLink>
                <span className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition">
                  Try for Free
                </span>
              </RegisterLink>

              <Link href="#features">
                <span className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-black border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                  Explore Features
                </span>
              </Link>
            </div>

          </motion.div>

          <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/headerphoto.png"
              alt="Canvas Demo"
              width={620}
              height={500}
              className="rounded-xl shadow-xl p-4"
            />
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-24 bg-white">
        <div className="mx-auto max-w-screen-xl px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Everything Your Team Needs
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="relative p-8 rounded-3xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="absolute top-0 right-0 m-4 w-10 h-10 bg-sky-100 text-sky-600 text-sm rounded-full flex items-center justify-center font-bold shadow-sm">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-white overflow-hidden"

      >
        <div className="mx-auto relative w-4/5 overflow-hidden px-6 text-center"

        >
          {/* Fade edges */}
          <div className="w-[200px] absolute z-10 top-[50%] left-0 -translate-y-1/2 h-[250px] bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="w-[200px] absolute z-10 top-[50%] right-0 -translate-y-1/2 h-[250px] bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Loved by teams worldwide</h2>

          {/* Scrolling container */}
          <div className="overflow-hidden relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex gap-8 whitespace-nowrap w-fit animate-scroll"
              style={{
                animation: 'scrollX 30s linear infinite',
                animationPlayState: paused ? 'paused' : 'running',
              }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="min-w-[320px] max-w-[280px] border border-gray-200 bg-gray-50 p-6 m-1 rounded-lg shadow-sm hover:shadow-black transition text-left"
                >
                  <p className="text-gray-700 italic mb-4 break-words whitespace-normal overflow-hidden">
                    “{t.quote}”
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animation CSS */}
        <style jsx>{`
    @keyframes scrollX {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
      </section>


      {/* PRICING SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-900 tracking-tight mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-gray-500 text-base mb-16 max-w-xl mx-auto">
            No complex tiers. Start free, upgrade when you're ready.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Free Plan */}
            <div className="group border border-gray-200 rounded-3xl p-10 text-left transition-all hover:shadow-md hover:border-black">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-1">Free</h3>
                <p className="text-3xl font-bold text-gray-900">₹0</p>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>✔ Up to 5 documents</li>
                <li>✔ Shared whiteboard space</li>
                <li>✔ Markdown editor</li>
                <li>✖ Version history</li>
              </ul>
              <button className="w-full text-sm px-5 py-3 rounded-lg border border-black text-black group-hover:bg-black group-hover:text-white transition">
                Start for Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="group border border-gray-900 rounded-3xl p-10 text-left bg-black text-white transition-all hover:shadow-xl hover:scale-[1.01]">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-white mb-1">Pro</h3>
                <p className="text-3xl font-bold text-white">₹9.99<span className="text-base font-normal"> /mo</span></p>
              </div>
              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                <li>✔ Unlimited documents</li>
                <li>✔ Real-time collaboration</li>
                <li>✔ Full version history</li>
                <li>✔ Priority support</li>
              </ul>
              <button className="w-full text-sm px-5 py-3 rounded-lg bg-white text-black group-hover:bg-gray-100 transition">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>





      <section className="py-12 bg-white">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <p className="text-sm text-gray-500 mb-6">Trusted by teams building at</p>
          <div className="flex justify-center items-center gap-10 grayscale-25 opacity-70">
            <Image src="/logos/bc.svg" alt="Google" width={70} height={32} />
            <Image src="/logos/eth.svg" alt="Microsoft" width={70} height={32} />
            <Image src="/logos/slack.svg" alt="Slack" width={70} height={32} />
            <Image src="/logos/soundcloud.svg" alt="Strapi" width={70} height={32} />
            <Image src="/logos/tinder.svg" alt="Neon" width={70} height={32} />
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-8 mt-16 text-center text-gray-500 text-sm">
        © 2025 canvas. Built for teams that build.
      </footer>
    </main>
  );
}

