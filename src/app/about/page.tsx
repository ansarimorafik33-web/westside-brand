import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">About</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight">A brand built for modern retail and digital growth.</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <p className="text-lg leading-8 text-slate-700">
            We combine strategic leadership, visual creativity, customer experience, and digital operations to build a memorable presence in the market.
          </p>
        </div>

        <div className="rounded-[2rem] bg-slate-900 p-7 text-white shadow-sm">
          <p className="text-lg leading-8 text-slate-200">
            Our culture is built on speed, quality, and consistency — giving customers better experiences while helping the brand scale globally.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">★</div>
          <h3 className="text-xl font-bold">Creative Strategy</h3>
          <p className="mt-3 text-slate-600">Strong visual direction and brand identity for modern customer engagement.</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">◎</div>
          <h3 className="text-xl font-bold">Team Culture</h3>
          <p className="mt-3 text-slate-600">People-first leadership, collaboration, and efficient teamwork.</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">✔</div>
          <h3 className="text-xl font-bold">Automation</h3>
          <p className="mt-3 text-slate-600">Always-on workflows designed to improve consistency and responsiveness.</p>
        </div>
      </div>
    </main>
  );
}
