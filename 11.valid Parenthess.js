function validParentheses(parenStr) {
    let counterParenStr = 0;
    for (let i = 0; i <= parenStr.length; i++) {
        if (counterParenStr < 0){
            return false
        };
        if (parenStr[i] == '('){
             counterParenStr++;
             continue;
        } else if (parenStr[i] == ')'){
            counterParenStr--;
            continue;
        } else if ( counterParenStr == 0){
            return true;
        } else {
          return false;
        }
    }
 }