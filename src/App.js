import './App.css';
import Entrance from './components';

function App() {
  
const person1 = {
    id: 'f1',  // Add unique identifier
    name: 'Fred',
    surname: 'Luz',
    age: 24,
    money: 0,
    health: 10,
    attack: 2,
    class: 'Player'
    }
    
const person2 = {
    id: 'f2',  // Add unique identifier
    name: 'Mike',
    surname: 'Thunder',
    age: 22,
    money: 10,
    health: 6,
    attack: 1,
    class: 'Ally'
    }



var fighters = []
fighters.push(person1)
fighters.push(person2)
const person3= {id: 'f3', name: 'Jimmy', surname: 'Doe', age: 11, money:30, health: 10, attack: 2, class: 'Enemy'}
fighters.push(person3)

const player = fighters.filter(person => person.class =='Player')

  return (
    <div style= {player[0].health <= 3 ? {backgroundColor : 'darkred'} : {} } className="App">
      <Entrance person={person1} />
      <div className="fighters-container">
        {fighters.filter(person => person.id !== 'f1')
                .map(person => <Entrance key={person.id} person={person} />)}
      </div>
    </div>
        
  );
}

export default App;
