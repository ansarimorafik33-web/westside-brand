import Link from "next/link";
import {
  ArrowRight,
  Camera,
  ContactRound,
  Mail,
  MessageSquareText,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { services, teamMembers, works } from "@/data/site";

export default function HomePage() {
  return (
    <main className="bg-[#f8f6f2] text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.12),transparent_55%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="relative z-10">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-700">
              <Sparkles className="h-3.5 w-3.5" />
              Modern retail brand
            </p>

            <h2 className="max-w-xl text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
              Building a bold future in style and growth.
            </h2>

            <p className="mt-6 max-w-lg text-lg text-slate-600">
              We blend fashion, technology, digital storytelling, and customer experience into a powerful global presence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/works"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Explore Works <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400"
              >
                Book a call
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-700">
              <div>
                <p className="text-2xl font-bold text-slate-900">50+</p>
                <p>Daily deliveries</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">24/7</p>
                <p>Auto operations</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">Global</p>
                <p>Expansion ready</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-[#e5d7c4] blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-[#dfeaf8] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
                alt="Brand lifestyle"
                className="h-[560px] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute bottom-10 left-10 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Performance</p>
                <p className="mt-2 text-3xl font-black text-slate-900">+200%</p>
                <p className="text-sm text-slate-600">Brand engagement growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">About us</p>
            <h3 className="mt-4 text-4xl font-black tracking-tight">Built for modern retail experiences.</h3>
          </div>

          <div className="space-y-5 text-lg text-slate-600">
            <p>We create elegant brand experiences that connect customers, creators, and operations under one modern ecosystem.</p>
            <p>From visual storytelling to digital campaigns, every touchpoint is designed to strengthen trust and accelerate business growth.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {services.map((item) => {
            const icons = {
              camera: Camera,
              play: PlayCircle,
              message: MessageSquareText,
              shield: ShieldCheck,
            } as const;

            const Icon = icons[item.icon as keyof typeof icons];

            return (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Leadership</p>
          <h3 className="mt-4 text-4xl font-black tracking-tight">Meet the people shaping the work.</h3>

          <div className="mt-10 grid gap-6 md:grid-cols-3 xl:grid-cols-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="rounded-3xl border border-slate-700 bg-white/5 p-5">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-lg font-black text-slate-900">
                  {member.short}
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="mt-1 text-sm text-amber-300">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Our works</p>
            <h3 className="mt-4 text-4xl font-black tracking-tight">Creative projects that drive action.</h3>
          </div>

          <Link href="/works" className="hidden rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold md:inline-flex">
            View all portfolio
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {works.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.category}</p>
                <h4 className="mt-3 text-xl font-bold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f1efe9] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Contact</p>
            <h3 className="mt-4 text-4xl font-black tracking-tight">Let’s build something remarkable.</h3>
            <p className="mt-5 max-w-md text-lg text-slate-600">
              Whether you need brand growth, creative execution, or a stronger online presence, we’re ready to help.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-slate-700" />
                <span>hello@brandstudio.com</span>
              </div>
              <div className="flex items-center gap-3">
                <ContactRound className="h-5 w-5 text-slate-700" />
                <span>Global operations • 24/7 support</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-slate-700" />
                <span>CEO • HR • Manager • Works • Editors</span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-400" placeholder="Your name" />
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-400" placeholder="Email address" />
              <textarea rows={5} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-400" placeholder="Tell us about your project" />
              <button className="mt-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700">
                Send message
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
