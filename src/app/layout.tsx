import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ILK Paper Trading',
  description: 'Professional virtual stock trading platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
