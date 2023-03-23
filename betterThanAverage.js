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
