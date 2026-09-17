import Link from 'next/link';
import { AppShell } from '@/components/app-shell';

export default function RegisterPage() {
  return (
    <AppShell showToolbar={false}>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="glass-card rounded-3xl p-8">
          <h1 className="text-3xl font-bold text-white">Create an account</h1>
          <p className="mt-2 text-slate-300">Start trading with a simulated $100,000 account.</p>
          <form className="mt-8 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Full name</label>
              <input className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white focus:border-sky-500" placeholder="Alex Investor" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Email</label>
              <input type="email" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white focus:border-sky-500" placeholder="alex@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Password</label>
              <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white focus:border-sky-500" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Confirm password</label>
              <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white focus:border-sky-500" />
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-3 pt-2">
              <Link href="/login" className="text-sm text-sky-400 hover:underline">Already have an account?</Link>
              <button type="submit" className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-400">Create account</button>
            </div>
          </form>
        </div>
      </div>
    </AppShell>
  );
}
