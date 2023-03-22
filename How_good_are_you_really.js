"use strict"
//classPoints - array with points your friend
//yourPoints - it only your point
//let's get started
function betterThanAverage(classPoints, yourPoints) {
    let pointsFriend = classPoints;
    let onlyYourPoint = yourPoints;
    let pointsFriendSum = 0
    let result = false;
    
    pointsFriend.forEach((element) => {
        pointsFriendSum += element;
    })

    let middleFriendPoint = pointsFriendSum / pointsFriend.length;
    if ( middleFriendPoint > onlyYourPoint){
        result = false;
    } else {
        result = true;
    }

    return result;
  }
  
 console.log( betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90],9) );

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

  let choto = [1,2,3,4]
  console.log(choto[1])



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