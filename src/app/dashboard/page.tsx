import { AppShell } from '@/components/app-shell';
import { getPortfolioData } from '@/lib/portfolio';

export default async function DashboardPage() {
  const portfolio = await getPortfolioData();

  return (
    <AppShell>
      <div className="space-y-8">
        <section className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Overview</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Dashboard</h1>
          </div>
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            Total portfolio value: <span className="font-semibold text-white">{portfolio.summary.totalValue}</span>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {portfolio.metrics.map((metric) => (
            <div key={metric.label} className="glass-card rounded-2xl p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{metric.label}</div>
              <div className="mt-4 text-3xl font-semibold text-white">{metric.value}</div>
              <div className={`mt-2 text-sm ${metric.trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{metric.trend}</div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-white">Portfolio performance</h2>
            <div className="mt-5 h-60 rounded-2xl bg-slate-950/60 p-4">
              <div className="chart-grid h-full rounded-2xl" />
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-white">Top holdings</h2>
            <div className="mt-5 space-y-4">
              {portfolio.holdings.slice(0, 4).map((holding) => (
                <div key={holding.symbol} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                  <div>
                    <div className="font-medium text-white">{holding.symbol}</div>
                    <div className="text-xs text-slate-400">{holding.quantity} shares</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-white">${holding.marketValue.toLocaleString()}</div>
                    <div className={`text-sm ${holding.unrealizedPnl >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {holding.unrealizedPnl >= 0 ? '+' : ''}${holding.unrealizedPnl.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
