const GetNameComponent = (props) => {
    return <h1> {props.person.name} </h1>
  }


  const GetHealth = ({person}) => {
    var healthBar = person.health >3 
                  ? <h3> Health : {person.health} </h3> 
                  : person.health > 0 
                  ? <h3 style= {{color: 'red'}} className='blink_me'> Health : {person.health} </h3>
                  : <h3 style= {{color: 'red'}}> DEAD </h3>
    
    return healthBar
   }
   
   

export const StatsComponent = ({person}) => {
  return ( 
    <div>
      <p>Name: {
        person.name === 'Mike' 
        ? `'Money' ${person.name} ${person.surname}`
        : `${person.name} ${person.surname}` 
      }</p>  
      Age: {person.age} <p> </p>
      <GetHealth person={person} />
      <h3> Attack : {person.attack} </h3>
      {person.money > 0 || person.class !== 'Player' 
        ? <h3> Money: {person.money} </h3> 
        : <h3> Money : NOT ENOUGH </h3>
      }
    </div>
  )
}

export const Entrance = ({person, onAttack, onHeal}) => {
  return (
    <div className={person.class}>
      <GetNameComponent person={person}/>
      <h2> Please welcome Magnata {person.surname} to the Arena. </h2>
      <StatsComponent person={person}/>
      {person.class !== 'Player' 
        ? <button onClick={onAttack}> Attack </button> 
        : <button onClick={onHeal}> Heal </button>
      }
    </div>
  )
}

export const Restart = ({ onRestart }) => {
  return (
    <div>
      <button onClick={onRestart}> Restart </button>
    </div>
  );
}