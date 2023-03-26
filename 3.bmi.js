function bmi(weight, height) {
    let result = weight / Math.pow(height,2)
    let end =''
    if(result <= 18.5){
      return end = 'Underweight'
    } else if (result <= 25.0) {
      return end = 'Normal'
    } else if (result <= 30.0){
      return end = 'Overweight'
    } else {
      return end = 'Obese'
    }
    
}

