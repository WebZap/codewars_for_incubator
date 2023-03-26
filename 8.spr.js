const rps = (p1, p2) => {
    let players = [p1,p2];
  
    
    if ( p1 == 'scissors' && p2 == 'paper'){
      return `Player ${players.indexOf('scissors' + 1)} won!`
    }
  };
  
  console.log(rps('scissors','paper' ))