import './App.css';
import {Entrance, Restart} from './components';
import Fighter from './models/Fighter';
import React, { useState } from 'react';

function App() {
  const initialFighters = [
    new Fighter('f1', 'Fred', 'Luz', 24, 0, 10, 2, 'Player'),
    new Fighter('f2', 'Mike', 'Thunder', 22, 40, 6, 1, 'Ally'),
    new Fighter('f3', 'Jimmy', 'Doe', 11, 10, 10, 2, 'Enemy')
  ];

  const [fighters, setFighters] = useState(initialFighters);

  const handleRestart = () => {
    setFighters(initialFighters.map(fighter => ({...fighter})));
  };

  const handleAttack = (targetId) => {
    setFighters(fighters.map(fighter => {
      if (fighter.id === targetId) {
        const player = fighters.find(f => f.class === 'Player');
        return {...fighter, health: fighter.health - player.attack};
      }
      return fighter;
    }));
  };

  const handleHeal = (targetId) => {
    setFighters(fighters.map(fighter => {
      if (fighter.id === targetId) {
        return fighter.health > 0
          ? {...fighter, health: fighter.health + 1}
          : fighter;
      }
      return fighter;
    }));
  };

  const player = fighters.find(person => person.class === 'Player');

  return (
    <div style={player.health <= 3 ? {backgroundColor: 'darkred'} : {}} className="App">
      <Entrance 
        person={player} 
        onHeal={() => handleHeal(player.id)}
      />
      <div className="fighters-container">
        {fighters.filter(person => person.id !== 'f1')
                .map(person => (
                  <Entrance 
                    key={person.id} 
                    person={person}
                    onAttack={() => handleAttack(person.id)}
                  />
                ))}
      </div>
    <Restart onRestart={handleRestart} />
    </div>
  );
}

export default App;
