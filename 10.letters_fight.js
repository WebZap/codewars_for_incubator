function alphabetWar(fight)
{
  let rightSide = 0, leftSide = 0;
  for ( let i = 0; i <= fight.length; i++){
    switch(fight[i]){
      case 'w':
        leftSide += 4;
        break;
      case 'p':
        leftSide += 3;
        break;
      case 'b':
        leftSide += 2;
        break;
      case 's':
        leftSide += 1;
        break;
      case 'm':
        rightSide += 4;
        break;
      case 'q':
        rightSide += 3;
        break;
      case 'd':
        rightSide += 2;
        break;
      case 'z':
        rightSide += 1;
        break;
    }
  }
  if(leftSide > rightSide){
    return 'Left side wins';
  } else if(rightSide > leftSide) {
    return 'Right side wins!'
  } else {
    return "Let's fight again!"
  }
}
