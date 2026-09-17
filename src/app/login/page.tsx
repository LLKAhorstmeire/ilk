import Link from 'next/link';
import { AppShell } from '@/components/app-shell';

export default function LoginPage() {
  return (
    <AppShell showToolbar={false}>
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center px-4 py-10">
        <div className="grid w-full gap-6 overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/75 shadow-glow lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-slate-900/70 p-8 sm:p-10">
            <div className="inline-flex w-fit rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300">
              ILK Market
            </div>
            <h1 className="mt-6 text-4xl font-bold text-white">Welcome back</h1>
            <p className="mt-3 text-slate-300">
              Sign in to your simulated trading account and continue testing your portfolio strategy.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-slate-300">
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-3">Demo account: demo@papertrade.app</div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-3">Password: demo123</div>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-white">Log in</h2>
            <form className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input defaultValue="demo@papertrade.app" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-sky-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Password</label>
                <input type="password" defaultValue="demo123" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white outline-none focus:border-sky-500" />
              </div>
              <div className="flex items-center justify-between text-sm text-slate-400">
                <label className="flex items-center gap-2"><input type="checkbox" /> Remember me</label>
                <Link href="/register" className="text-sky-400 hover:underline">Create account</Link>
              </div>
              <button type="submit" className="w-full rounded-xl bg-sky-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-sky-400">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
