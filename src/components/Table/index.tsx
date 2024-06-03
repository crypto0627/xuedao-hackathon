"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TableDataType } from '@/src/types/uiTypes';

const initialTableData: TableDataType[] = [
    {
        index: 1,
        name: 'Bitcoin(BTC)',
        symbol: 'BTCUSDT',
        imgSrc: '/images/Companies/bitcoin-btc-logo.svg',
        price: 16458.23,
        change: 3.96,
    },
    {
        index: 2,
        name: 'Binance(BNB)',
        symbol: 'BNBUSDT',
        imgSrc: '/images/Companies/bnb-bnb-logo.svg',
        price: 16458.23,
        change: 3.96,
    },
    {
        index: 3,
        name: 'USDC(USDC)',
        symbol: 'USDCUSDT',
        imgSrc: '/images/Companies/usd-coin-usdc-logo.svg',
        price: 16458.23,
        change: -3.96,
    },
    {
        index: 4,
        name: 'Filecoin(FIL)',
        symbol: 'FILUSDT',
        imgSrc: '/images/Companies/filecoin-fil-logo.svg',
        price: 16458.23,
        change: -3.96,
    },
    {
        index: 5,
        name: 'Sui(SUI)',
        symbol: 'SUIUSDT',
        imgSrc: '/images/Companies/sui-sui-logo.svg',
        price: 16458.23,
        change: -3.96,
    },
    {
        index: 6,
        name: 'TON(TON)',
        symbol: 'TONUSDT',
        imgSrc: '/images/Companies/toncoin-ton-logo.svg',
        price: 16458.23,
        change: -3.96,
    },
];

export default function Table() {
    const [tableData, setTableData] = useState<TableDataType[]>(initialTableData);

    return (
        <>
      <div className='mx-auto max-w-7xl pt-40 px-6' id="exchange-section">
        <div className="table-b bg-navyblue p-8 overflow-x-auto">
          <h3 className="text-offwhite text-2xl">Market Trend Live Stream</h3>
          <table className="table-auto w-full mt-10">
            <thead>
              <tr className="text-white bg-darkblue rounded-lg">
                <th className="px-4 py-4 font-normal">#</th>
                <th className="px-4 py-4 text-start font-normal">NAME</th>
                <th className="px-4 py-4 font-normal">PRICE(USDT)</th>
                <th className="px-4 py-4 font-normal">CHANGE 24H</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, i) => (
                <tr key={i} className="border-b border-b-darkblue">
                  <td className="px-4 py-6 text-center text-white">{item.index}</td>
                  <td className="px-4 py-6 text-center text-white flex items-center justify-start gap-5">
                    <Image src={item.imgSrc} alt={item.imgSrc} height={50} width={50} />
                    {item.name}
                  </td>
                  <td className="px-4 py-6 text-center text-white">${item.price.toLocaleString()}</td>
                  <td className={`px-4 py-6 text-center ${item.change < 0 ? 'text-red' : 'text-green'}`}>{item.change}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
    </>
    );
}
