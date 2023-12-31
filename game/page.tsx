import Head from 'next/head';
import { useState } from 'react';
import React from 'react';
import Ball from '@/components/ball/ball';
import Bar from '@/components/gamebar/gamebar';
import MapSelection from "@components/MapSelection/MapSelection";
import './game.css';

export default function HomePage() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [selectedMap, setSelectedMap] = useState<string | null>(null);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  interface map {
    id: number;
    name: string;
    imageUrl: string;
  }

  const maps: map[] = [
    { id: 1, name: 'Map 1', imageUrl: '/img1.jpeg' },
    { id: 2, name: 'Map 2', imageUrl: '/img2.jpeg' },
  ];

  const handleSelectMap = (mapId: string) => {
    setSelectedMap(mapId);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div>
      <Head>{/* ... */}</Head>

      <main className="page">
        <div className="square">
          {isGameStarted ? (
            <div className="gameArea" style={{ backgroundImage: selectedMap ? `url(${maps.find((map: any) => map.id.toString() === selectedMap)?.imageUrl})` : 'none' }}>
              <Ball onPositionChange={setBallPosition} />
              <Bar left={true} />
              <Bar left={false} />
              <div className="verticalLine"></div>
              <div className="leftScore">0</div>
              <div className="rightScore">0</div>
            </div>
          ) : (
            <MapSelection
              maps={maps}
              onSelectMap={handleSelectMap}
              onStartGame={startGame}
            />
          )}
        </div>
      </main>
    </div>
  );
}
