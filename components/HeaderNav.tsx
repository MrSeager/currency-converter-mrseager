'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type CurrencyInfo = {
  iso_code: string;
  name: string;
  symbol: string;
};

type RateObject = {
  base: string;
  quote: string;
  rate: number;
  date: string;
};

type TickerItem = {
  code: string;
  rate: number;
  growth: number;
};

export default function HeaderNav() {
  const [tickerItems, setTickerItems] = useState<TickerItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllRates = async () => {
      try {
        setLoading(true);

        // 1. Get all available currencies
        const currenciesRes = await fetch(
          'https://api.frankfurter.dev/v2/currencies'
        );
        if (!currenciesRes.ok) throw new Error('Failed to fetch currencies');
        const currencies: CurrencyInfo[] = await currenciesRes.json();

        // Filter out EUR (base) and get codes
        const currencyCodes = currencies
          .map((c) => c.iso_code)
          .filter((code) => code !== 'EUR');

        // 2. Get today's date and yesterday's date
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const formatDate = (d: Date) => d.toISOString().split('T')[0];

        // 3. Fetch latest rates (base EUR) — v2 returns ARRAY of objects
        const latestRes = await fetch(
          `https://api.frankfurter.dev/v2/rates?base=EUR&quotes=${currencyCodes.join(',')}`
        );
        if (!latestRes.ok) throw new Error('Failed to fetch latest rates');
        const latestData: RateObject[] = await latestRes.json();

        // 4. Fetch yesterday's rates
        const prevRes = await fetch(
          `https://api.frankfurter.dev/v2/rates?base=EUR&quotes=${currencyCodes.join(',')}&date=${formatDate(yesterday)}`
        );
        if (!prevRes.ok) throw new Error('Failed to fetch previous rates');
        const prevData: RateObject[] = await prevRes.json();

        // 5. Convert arrays to lookup maps for easy access
        const latestMap = new Map(latestData.map((r) => [r.quote, r.rate]));
        const prevMap = new Map(prevData.map((r) => [r.quote, r.rate]));

        // 6. Build ticker items with growth
        const items: TickerItem[] = currencyCodes
          .map((code) => {
            const current = latestMap.get(code);
            const previous = prevMap.get(code);

            if (current == null || previous == null) return null;

            const growth = ((current - previous) / previous) * 100;

            return {
              code,
              rate: current,
              growth,
            };
          })
          .filter((item): item is TickerItem => item !== null);

        setTickerItems(items);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch');
      } finally {
        setLoading(false);
      }
    };

    fetchAllRates();

    // Refresh every 60 seconds
    const interval = setInterval(fetchAllRates, 60000);
    return () => clearInterval(interval);
  }, []);

  // Triple for seamless infinite scroll
  const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <header className="w-full max-w-[120rem] flex flex-col">
      {/* Top bar */}
      <div className="p-3 flex justify-between items-center w-full">
        <Image
          src={'/images/logo.svg'}
          alt="logo"
          width={150}
          height={50}
        />
        <h1 className="uppercase text-sm tracking-wide text-[#707072]">
          55 Currencies &bull; EOD &bull; ECB Data
        </h1>
      </div>

      {/* Ticker bar */}
      <div className="flex h-10">
        {/* Label */}
        <div className="bg-[#cef737] p-3 w-[10rem] flex items-center shrink-0">
          <h1 className="uppercase text-[#0a0a0a] font-semibold text-sm">
            &bull; Live market
          </h1>
        </div>

        {/* Running line */}
        <div className="w-full bg-[#161619] overflow-hidden relative">
          {error && (
            <div className="h-full flex items-center px-4 text-sm text-red-400">
              {error}
            </div>
          )}

          {loading && !error && (
            <div className="h-full flex items-center px-4 text-sm text-gray-500 animate-pulse">
              Loading rates...
            </div>
          )}

          {!loading && !error && tickerItems.length > 0 && (
            <div className="flex whitespace-nowrap h-full items-center animate-marquee">
              {duplicatedItems.map((item, idx) => {
                const isPositive = item.growth >= 0;
                return (
                  <div
                    key={`${item.code}-${idx}`}
                    className="inline-flex items-center gap-2 px-6 font-semibold border-e h-full border-[#48484a]"
                  >
                    <span className="text-[#48484a] font-semibold uppercase tracking-wider">
                      EUR/{item.code}
                    </span>
                    <span className="font-mono text-[#f8f8f9]">
                      {item.rate.toFixed(4)}
                    </span>
                    <span className={`${isPositive ? 'text-[#42cd0e]' : 'text-[#e13a41] rotate-180'}`}>&#9650;</span>
                    <span
                      className={`font-semibold ${
                        isPositive ? 'text-[#42cd0e]' : 'text-[#e13a41]'
                      }`}
                    >
                      {isPositive ? '+' : ''} 
                      {item.growth.toFixed(2)}%
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}