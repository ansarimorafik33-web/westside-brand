import { works } from "@/data/site";

export default function WorksPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Works</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight">Featured projects and action-driven results.</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {works.map((work) => (
          <div key={work.title} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
            <img src={work.image} alt={work.title} className="h-72 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{work.category}</p>
              <h3 className="mt-3 text-2xl font-bold">{work.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
