'use client';

import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

export function InvestorFinancialsChart() {
  const data = [
    {
      year: 'Year 1',
      revenue: 7.4,
      grossProfit: 5.1,
      netIncome: -4.8,
    },
    {
      year: 'Year 2',
      revenue: 25.4,
      grossProfit: 20.2,
      netIncome: 12.4,
    },
    {
      year: 'Year 3',
      revenue: 44.7,
      grossProfit: 30.1,
      netIncome: 14.6,
    },
  ];

  return (
    <div className="h-80 w-full pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#222638" vertical={false} />
          <XAxis
            dataKey="year"
            stroke="#9A9CB3"
            tick={{ fill: '#9A9CB3', fontSize: 12, fontFamily: 'monospace' }}
          />
          <YAxis
            stroke="#9A9CB3"
            tick={{ fill: '#9A9CB3', fontSize: 11, fontFamily: 'monospace' }}
            tickFormatter={(val) => `$${val}K`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#0E111C',
              borderColor: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '12px',
            }}
            formatter={(value) => [`$${value}K`, '']}
          />
          <Legend
            wrapperStyle={{
              paddingTop: '16px',
              fontFamily: 'monospace',
              fontSize: '11px',
            }}
          />
          <Bar dataKey="revenue" name="Revenue ($K)" fill="#6D3BF0" radius={[4, 4, 0, 0]} />
          <Bar dataKey="grossProfit" name="Gross Profit ($K)" fill="#3B6BFF" radius={[4, 4, 0, 0]} />
          <Bar dataKey="netIncome" name="Net Income ($K)" fill="#22C55E" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
