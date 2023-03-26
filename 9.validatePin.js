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