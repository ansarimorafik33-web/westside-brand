import { teamMembers } from "@/data/site";

export default function TeamPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Team</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight">The people behind every success.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member) => (
          <div key={member.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-xl font-black text-white">
              {member.short}
            </div>
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-amber-600">{member.role}</p>
            <p className="mt-4 text-slate-600">{member.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
