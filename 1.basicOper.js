function basicOp(operation, value1, value2)
{
  let result = 0;
  if (operation == '+'){
    return value1 + value2; 
  } else if ( operation == '-'){
    return value1 - value2;
  } else if ( operation == '*'){
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}