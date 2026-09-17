import { AppShell } from '@/components/app-shell';
import { getAssetBySymbol } from '@/lib/market-data';
import { AssetChart } from '@/components/chart-panel';
import { TradingPanel } from '@/components/trading-panel';

export default async function AssetDetailPage({ params }: { params: { symbol: string } }) {
  const asset = await getAssetBySymbol(params.symbol);

  if (!asset) {
    return (
      <AppShell>
        <div className="glass-card rounded-3xl p-10 text-center text-slate-300">Asset not found.</div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Asset</p>
            <h1 className="mt-2 text-3xl font-bold text-white">{asset.name}</h1>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-lg font-semibold text-white">
            {asset.symbol} • ${asset.price.toLocaleString()}
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <AssetChart symbol={asset.symbol} name={asset.name} />
          <TradingPanel asset={asset} />
        </div>
      </div>
    </AppShell>
  );
}
