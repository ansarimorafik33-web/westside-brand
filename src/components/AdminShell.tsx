import { signOut } from "next-auth/react";
import Link from "next/link";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white">
      <header className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Admin</p>
            <h1 className="text-xl font-bold">Brand Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-slate-300 hover:text-white">Frontend</Link>
            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}
