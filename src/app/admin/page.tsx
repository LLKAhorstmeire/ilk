import { AppShell } from '@/components/app-shell';

export default function AdminPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Admin</p>
          <h1 className="mt-2 text-3xl font-bold text-white">System administration</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Users', '1,258'],
            ['Orders', '24,709'],
            ['Transactions', '52,420'],
            ['Assets', '72'],
          ].map(([label, value]) => (
            <div key={label} className="glass-card rounded-2xl p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</div>
              <div className="mt-4 text-3xl font-semibold text-white">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
