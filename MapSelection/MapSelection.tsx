import React, { useState } from 'react';
import './MapSelection.css';

interface MapSelectionProps {
  maps: any[];
  onSelectMap: (mapId: string) => void;
  onStartGame: () => void;
}

const MapSelection: React.FC<MapSelectionProps> = ({ maps, onSelectMap, onStartGame }) => {
  const [selectedMap, setSelectedMap] = useState<string | null>(null);

  const handleMapSelect = (mapId: string) => {
    setSelectedMap(mapId);
  };

  const handleStartGame = () => {
    if (selectedMap) {
      onSelectMap(selectedMap);
      onStartGame();
    }
  };

  return (
    <>
      <h2 className='game_title'>Select a Map</h2>
      <div className='game_map'>
        <div className='game_items'>
          {maps.map((map: any) => (
            <div key={map.id} className='game_item' onClick={() => handleMapSelect(map.id.toString())}>
              <img src={map.imageUrl} alt={map.name} className="map-image" />
            </div>
          ))}
        </div>

        <div className="container">
          <div className="btn" onClick={handleStartGame}>
            <a href="#">Start Game</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapSelection;
