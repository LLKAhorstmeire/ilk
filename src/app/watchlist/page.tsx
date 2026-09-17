import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { getAssetCatalog } from '@/lib/market-data';

export default async function WatchlistPage() {
  const assets = await getAssetCatalog();

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Watchlist</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Your tracked assets</h1>
          </div>
          <Link href="/markets" className="rounded-xl bg-sky-500 px-4 py-2.5 font-semibold text-slate-950">Add assets</Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {assets.slice(0, 6).map((asset) => (
            <div key={asset.symbol} className="glass-card rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold text-white">{asset.symbol}</div>
                  <div className="text-sm text-slate-400">{asset.name}</div>
                </div>
                <div className={`rounded-full px-2 py-1 text-xs ${asset.percentChange >= 0 ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300'}`}>
                  {asset.percentChange >= 0 ? '+' : ''}{asset.percentChange.toFixed(2)}%
                </div>
              </div>
              <div className="mt-5 text-2xl font-semibold text-white">${asset.price.toLocaleString()}</div>
              <div className="mt-4 flex justify-between text-sm text-slate-400">
                <span>Volume</span>
                <span>{asset.volume ? asset.volume.toLocaleString() : 'N/A'}</span>
              </div>
              <Link href={`/asset/${asset.symbol}`} className="mt-5 inline-block rounded-xl border border-slate-700 px-3 py-2 text-sm text-sky-300 hover:border-sky-500">Open chart</Link>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
