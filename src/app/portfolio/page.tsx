import { AppShell } from '@/components/app-shell';
import { getPortfolioData } from '@/lib/portfolio';

export default async function PortfolioPage() {
  const portfolio = await getPortfolioData();

  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Portfolio</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Portfolio detail</h1>
        </div>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {portfolio.metrics.map((metric) => (
            <div key={metric.label} className="glass-card rounded-2xl p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{metric.label}</div>
              <div className="mt-3 text-2xl font-semibold text-white">{metric.value}</div>
            </div>
          ))}
        </section>

        <section className="glass-card rounded-3xl p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Holdings</h2>
            <span className="text-sm text-slate-400">Allocation</span>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-slate-400">
                <tr>
                  <th className="pb-3">Asset</th>
                  <th className="pb-3">Qty</th>
                  <th className="pb-3">Avg cost</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Value</th>
                  <th className="pb-3">P/L</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.holdings.map((holding) => (
                  <tr key={holding.symbol} className="border-t border-slate-800 text-slate-200">
                    <td className="py-3 font-medium text-white">{holding.symbol}</td>
                    <td className="py-3">{holding.quantity}</td>
                    <td className="py-3">${holding.averagePrice.toFixed(2)}</td>
                    <td className="py-3">${holding.currentPrice.toFixed(2)}</td>
                    <td className="py-3">${holding.marketValue.toLocaleString()}</td>
                    <td className={`py-3 ${holding.unrealizedPnl >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {holding.unrealizedPnl >= 0 ? '+' : ''}${holding.unrealizedPnl.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
