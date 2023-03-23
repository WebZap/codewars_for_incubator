"use strict"


//---------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------

 function findNeedle(haystack) {
    // your code here
    let needleItem = 'needle';
    let index = haystack.indexOf('needle')
    let result = null;
    haystack.forEach((element)=>{
      if (element == needleItem){
        result = 'found the needle at position '+ (index);
      } else {
        return "Your function didn't return anything"
      }
    })
    return result;
  }
  console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

//---------------------------------------------------------------------------------------------------------

 function validatePIN (pin) {
    let countOfPin = Array.from(String(pin)).length
    let checkSymb = /^\d+$/.test(pin);
    if ((countOfPin == 4 || countOfPin == 6) && checkSymb == true) {
      return true;
    } else {
      return false;
    } 
  }
  console.log(validatePIN('a234'));

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