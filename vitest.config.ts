import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('demo123', 10);

  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@papertrade.app' },
    update: {},
    create: {
      name: 'Demo Trader',
      email: 'demo@papertrade.app',
      passwordHash,
      cash: 100000,
      isDemo: true,
      isAdmin: false,
    },
  });

  const assets = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 214.1, change: 3.92, percentChange: 1.87, marketCap: 3220000000000, volume: 45200000, color: '#4ec3ff' },
    { symbol: 'MSFT', name: 'Microsoft', price: 448.3, change: -2.45, percentChange: -0.54, marketCap: 3330000000000, volume: 21400000, color: '#7ee7d8' },
    { symbol: 'NVDA', name: 'NVIDIA', price: 128.7, change: 6.77, percentChange: 5.56, marketCap: 3180000000000, volume: 37000000, color: '#b794f4' },
    { symbol: 'BTC', name: 'Bitcoin', price: 67240, change: 2840, percentChange: 4.42, marketCap: 1327000000000, volume: 26800000000, color: '#fbbf24' },
    { symbol: 'ETH', name: 'Ethereum', price: 3525, change: -72, percentChange: -2.01, marketCap: 422000000000, volume: 12500000000, color: '#a5f3fc' },
    { symbol: 'TSLA', name: 'Tesla', price: 255.9, change: -8.2, percentChange: -3.1, marketCap: 820000000000, volume: 30000000, color: '#fca5a5' },
  ];

  for (const asset of assets) {
    await prisma.asset.upsert({
      where: { symbol: asset.symbol },
      update: asset,
      create: {
        ...asset,
        active: true,
      },
    });
  }

  const aapl = await prisma.asset.findUnique({ where: { symbol: 'AAPL' } });
  const nvda = await prisma.asset.findUnique({ where: { symbol: 'NVDA' } });
  const btc = await prisma.asset.findUnique({ where: { symbol: 'BTC' } });

  if (aapl && nvda && btc) {
    await prisma.holding.upsert({
      where: { userId_assetId: { userId: demoUser.id, assetId: aapl.id } },
      update: { quantity: 20, averagePrice: 198.4 },
      create: { userId: demoUser.id, assetId: aapl.id, quantity: 20, averagePrice: 198.4 },
    });

    await prisma.holding.upsert({
      where: { userId_assetId: { userId: demoUser.id, assetId: nvda.id } },
      update: { quantity: 12, averagePrice: 105.75 },
      create: { userId: demoUser.id, assetId: nvda.id, quantity: 12, averagePrice: 105.75 },
    });

    await prisma.holding.upsert({
      where: { userId_assetId: { userId: demoUser.id, assetId: btc.id } },
      update: { quantity: 0.4, averagePrice: 58420 },
      create: { userId: demoUser.id, assetId: btc.id, quantity: 0.4, averagePrice: 58420 },
    });
  }

  await prisma.order.createMany({
    data: [
      { userId: demoUser.id, assetId: aapl?.id || '', side: 'buy', type: 'limit', quantity: 10, price: 205, status: 'filled' },
      { userId: demoUser.id, assetId: btc?.id || '', side: 'sell', type: 'limit', quantity: 0.15, price: 66000, status: 'open' },
    ],
    skipDuplicates: true,
  });

  await prisma.transaction.createMany({
    data: [
      { userId: demoUser.id, assetId: aapl?.id || '', side: 'buy', quantity: 20, price: 198.4, total: 3968, type: 'trade' },
      { userId: demoUser.id, assetId: nvda?.id || '', side: 'buy', quantity: 12, price: 105.75, total: 1269, type: 'trade' },
      { userId: demoUser.id, assetId: btc?.id || '', side: 'buy', quantity: 0.4, price: 58420, total: 23368, type: 'trade' },
      { userId: demoUser.id, assetId: null, side: 'credit', quantity: 1, price: 0, total: 100000, type: 'deposit' },
    ],
    skipDuplicates: true,
  });

  console.log('Demo data seeded.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
