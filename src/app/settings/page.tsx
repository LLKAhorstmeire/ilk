import { AppShell } from '@/components/app-shell';

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Settings</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Profile and security</h1>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="glass-card rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-white">Profile</h2>
            <form className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Name</label>
                <input defaultValue="Demo Trader" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input defaultValue="demo@papertrade.app" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white" />
              </div>
              <button className="rounded-xl bg-sky-500 px-4 py-3 font-semibold text-slate-950">Save profile</button>
            </form>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-white">Security</h2>
            <form className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Current password</label>
                <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">New password</label>
                <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white" />
              </div>
              <button className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-semibold text-white">Update password</button>
            </form>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
