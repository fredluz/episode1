const GetNameComponent = (props) => {
    return <h1> {props.person.name} </h1>
  }


  const GetHealth = ({person}) => {
    var healthBar = person.health <= 3 ? 
                    <h3 style={{color: 'red'}} className='blink_me'> Health : {person.health} </h3>
                 :<h3> Health : {person.health} </h3> 
    
    return healthBar
   }
   
   

const StatsComponent = ({person}) => {
  
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
      {person.money > 0 || person.class !== 'Player' ? <h3> Money: {person.money} </h3> : <h3> Money : NOT ENOUGH </h3> }
    
  </div>
  )
  }
/* 
  function FighterDies(attacker, victim) {
    console.log(`${victim.name} has died! ${attacker.name} has gained ${victim.money} money!`)
    attacker.money += victim.money
    victim.money = 0
    victim.class = 'Dead' 
  }

  const AttackFighter = (props) => {
    console.log(`${props.attacker.name} is attacking ${props.victim.name}`);
    props.victim.health = props.victim.health - props.attacker.attack;
    console.log(props.victim.name+' took ' +props.attacker.attack +' damage and has ' +props.victim.health +' health left!' );
    props.victim.health <= 0 ? FighterDies(props.attacker, props.victim): null;
    } */

  const Entrance = (props) =>{

    return (
    <div className = {props.person.class}>
    <GetNameComponent person={props}/>
    <h2> Please welcome Magnata {props.person.surname} to the Arena. </h2>
    <StatsComponent person={props.person}/>
    {props.person.class !== 'Player' ? <button> Attack </button> : <button> Heal </button> }
    </div>
    )
  
  }
  export default Entrance;
