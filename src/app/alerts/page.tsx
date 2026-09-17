import { AppShell } from '@/components/app-shell';
import { getMarketOverview } from '@/lib/market-data';

export default async function AlertsPage() {
  const overview = await getMarketOverview();

  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Alerts</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Price notifications</h1>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-white">Create alert</h2>
            <form className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Asset</label>
                <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white">
                  {overview.assets.slice(0, 5).map((asset) => (
                    <option key={asset.symbol}>{asset.symbol}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Trigger</label>
                <input className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white" placeholder="Notify when BTC reaches $100,000" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Price target</label>
                <input type="number" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white" placeholder="100000" />
              </div>
              <button className="w-full rounded-xl bg-sky-500 px-4 py-3 font-semibold text-slate-950">Add alert</button>
            </form>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-white">Triggered alerts</h2>
            <div className="mt-5 space-y-3">
              {[
                { asset: 'BTC', condition: 'Above $100,000', status: 'Triggered' },
                { asset: 'AAPL', condition: 'Below $200', status: 'Armed' },
              ].map((alert) => (
                <div key={`${alert.asset}-${alert.condition}`} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div>
                    <div className="font-medium text-white">{alert.asset}</div>
                    <div className="text-sm text-slate-400">{alert.condition}</div>
                  </div>
                  <span className={`rounded-full px-2 py-1 text-xs ${alert.status === 'Triggered' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-slate-700 text-slate-300'}`}>
                    {alert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
