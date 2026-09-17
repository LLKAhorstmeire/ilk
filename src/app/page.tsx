import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { getMarketOverview } from '@/lib/market-data';

export default async function HomePage() {
  const overview = await getMarketOverview();

  return (
    <AppShell>
      <div className="space-y-8">
        <section className="glass-card rounded-3xl p-7 sm:p-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
                Paper Trading / Simulated
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Trade the market with virtual capital.
              </h1>
              <p className="mt-4 max-w-xl text-base text-slate-300">
                Practice real world trading decisions with a polished platform built for learning, strategy testing, and portfolio management without risking real money.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/dashboard" className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-400">
                  Launch dashboard
                </Link>
                <Link href="/markets" className="rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-3 font-semibold text-slate-100 transition hover:border-slate-500">
                  Explore markets
                </Link>
              </div>
            </div>

            <div className="grid min-w-[280px] gap-3 rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Demo account</div>
              <div className="text-3xl font-bold text-white">$100,000</div>
              <div className="text-sm text-emerald-400">+2.14% today</div>
              <div className="text-sm text-slate-400">3 holdings • 2 alerts • 6 watchlist items</div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {overview.stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{stat.label}</div>
              <div className="mt-4 text-3xl font-semibold text-white">{stat.value}</div>
              <div className={`mt-2 text-sm ${stat.trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                {stat.trend}
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
          <div className="glass-card rounded-3xl p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Market overview</h2>
              <Link href="/markets" className="text-sm text-sky-400 hover:underline">View all</Link>
            </div>
            <div className="space-y-3">
              {overview.assets.slice(0, 5).map((asset) => (
                <div key={asset.symbol} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                  <div>
                    <div className="font-semibold text-white">{asset.symbol}</div>
                    <div className="text-xs text-slate-400">{asset.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-white">${asset.price.toLocaleString()}</div>
                    <div className={`text-sm ${asset.percentChange >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {asset.percentChange >= 0 ? '+' : ''}{asset.percentChange.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-white">Quick actions</h2>
            <div className="mt-5 space-y-3">
              <Link href="/dashboard" className="block rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-left hover:border-sky-500/40">
                <div className="font-medium text-white">Dashboard</div>
                <div className="text-sm text-slate-400">Track performance and balances</div>
              </Link>
              <Link href="/watchlist" className="block rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-left hover:border-sky-500/40">
                <div className="font-medium text-white">Watchlist</div>
                <div className="text-sm text-slate-400">Monitor your favorite assets</div>
              </Link>
              <Link href="/orders" className="block rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-left hover:border-sky-500/40">
                <div className="font-medium text-white">Orders</div>
                <div className="text-sm text-slate-400">Review open and filled trades</div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
