import { AppShell } from '@/components/app-shell';
import { AssetTable } from '@/components/asset-table';
import { getAssetCatalog } from '@/lib/market-data';

export default async function MarketsPage() {
  const assets = await getAssetCatalog();

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Markets</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Asset explorer</h1>
          </div>
          <div className="flex gap-2">
            <input className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-white placeholder:text-slate-500" placeholder="Search symbol or name" />
            <button className="rounded-xl bg-sky-500 px-4 py-2.5 font-medium text-slate-950">Filter</button>
          </div>
        </div>

        <AssetTable assets={assets} />
      </div>
    </AppShell>
  );
}
