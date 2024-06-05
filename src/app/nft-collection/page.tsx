"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const nfts = [
    { id: 1, title: 'NFT 1', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'NFT 2', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'NFT 3', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'NFT 4', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'NFT 5', image: 'https://via.placeholder.com/150' },
    { id: 6, title: 'NFT 6', image: 'https://via.placeholder.com/150' },
  ];

  // Simulating image loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">NFT Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {nfts.map((nft) => (
          <div key={nft.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center">
            {loading ? (
              <div className="w-full h-96 bg-gray-300 animate-pulse rounded-lg mb-4"></div>
            ) : (
              <Image
                src={nft.image}
                alt={nft.title}
                className="w-full h-96 object-cover rounded-lg mb-4"
                width={150}
                height={250}
              />
            )}
            <h2 className="text-xl font-semibold">{nft.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
