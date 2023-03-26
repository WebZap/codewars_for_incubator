function removeSmallest(numbers) {
    let minNum = Math.min(...numbers);
    let resultArr = []
    for (i = 0; i <= numbers.length; i++){
        if ( minNum == numbers[i]){
          resultArr = numbers.push(numbers[i]);
          continue;
        } else {
          continue;
        }
      }
    console.log(resultArr)
    return resultArr;
}//   return [];
  
                       