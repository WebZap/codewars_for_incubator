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