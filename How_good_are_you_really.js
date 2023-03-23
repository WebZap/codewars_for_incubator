"use strict"


//---------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------

 
//---------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------

function getSum(a, b){
  let arr = [];
  let sumArr = 0;
  console.log(arr)
  for (let i = a; i <= b; i++){
    arr.push[i]
  }
  sumArr = arr.map((element) => {
     sumArr += element;
  })
  return sumArr;

}

console.log(getSum(-1, 3))


//---------------------------------------------------------------------------------------------------------

function getSum(a, b){
  let result = 0
  if( a != b) {
    result = a + b;
    return result;
  } else {
    return a;
  }
}

console.log(getSum(2,2))

//---------------------------------------------------------------------------------------------------------

function testGetSum() {
  // Basic tests
  // Testing for fixed tests
  if (getSum(2, 2) !== 4) {
    console.error('Test case 1 failed');
  }
  if (getSum(3, 2) !== 5) {
    console.error('Test case 2 failed');
  }
  if (getSum(0, 0) !== 0) {
    console.error('Test case 3 failed');
  }
}

//---------------------------------------------------------------------------------------------------------

const rps = (p1, p2) => {
  let players = [p1,p2];

  
  if ( p1 == 'scissors' && p2 == 'paper'){
    return `Player ${players.indexOf('scissors' + 1)} won!`
  }
};

console.log(rps('scissors','paper' ))