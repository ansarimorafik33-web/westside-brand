"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsLoading(true);
    setStatus(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setIsLoading(false);

    if (response.ok) {
      setStatus(data.message);
      form.reset();
    } else {
      setStatus(data.message || "Something went wrong.");
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Contact</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight">Let’s create your next growth chapter.</h1>
          <p className="mt-5 text-lg text-slate-600">
            We help brands build stronger experiences, sharper visuals, and faster operational efficiency.
          </p>

          <div className="mt-8 space-y-4 text-slate-700">
            <p>hello@brandstudio.com</p>
            <p>+91 98765 43210</p>
            <p>Global operations • 24/7 support</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <input
              name="name"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-400"
              placeholder="Your name"
              required
            />
            <input
              name="email"
              type="email"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-400"
              placeholder="Email address"
              required
            />
            <input
              name="subject"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-400"
              placeholder="Subject"
            />
            <textarea
              name="message"
              rows={5}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-400"
              placeholder="Tell us about your project"
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700 disabled:opacity-60"
            >
              {isLoading ? "Sending..." : "Send message"}
            </button>

            {status && (
              <p className="rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{status}</p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
