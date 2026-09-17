import { AppShell } from '@/components/app-shell';

const orders = [
  { asset: 'AAPL', side: 'Buy', type: 'Limit', qty: 10, price: 210.5, status: 'Open', date: '2026-09-17 09:20' },
  { asset: 'BTC', side: 'Sell', type: 'Market', qty: 0.2, price: 66000, status: 'Filled', date: '2026-09-16 11:45' },
  { asset: 'NVDA', side: 'Buy', type: 'Market', qty: 8, price: 115.4, status: 'Cancelled', date: '2026-09-14 09:00' },
];

export default function OrdersPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Orders</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Order management</h1>
        </div>

        <div className="glass-card rounded-3xl p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-slate-400">
                <tr>
                  <th className="pb-3">Asset</th>
                  <th className="pb-3">Side</th>
                  <th className="pb-3">Type</th>
                  <th className="pb-3">Qty</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={`${order.asset}-${order.date}`} className="border-t border-slate-800 text-slate-200">
                    <td className="py-3 font-medium text-white">{order.asset}</td>
                    <td className="py-3">{order.side}</td>
                    <td className="py-3">{order.type}</td>
                    <td className="py-3">{order.qty}</td>
                    <td className="py-3">${order.price.toLocaleString()}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2 py-1 text-xs ${order.status === 'Open' ? 'bg-sky-500/10 text-sky-300' : order.status === 'Filled' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
