function oddOrEven(array) {
    letSumOfArray = 0;
    array.forEach((element) => {
      letSumOfArray += element
    })
    return letSumOfArray % 2 === 0 ? "even" : "odd";
 }