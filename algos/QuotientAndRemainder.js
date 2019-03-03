function prettyDecimal(denominator, numerator) {
  let whole = ""
  let remainder = numerator % denominator;
  let quotient = Math.floor(numerator / denominator);
  whole += quotient;

  if(remainder == 0) {
    return whole;
  }

  let history = {}
  
  let decimals = decimalRecurse(remainder * 10, denominator, "", remainder, history);
  
  return whole + decimals;
}

function decimalRecurse(numerator, denominator, decimals, remainder, container) {
  if(remainder == 0) {
    return "." + decimals;
  }

  let quotient = Math.floor(numerator / denominator);

  let product = quotient * denominator;

  remainder = numerator - product;

  if(container[quotient]) {
    if(container[quotient][remainder]) {
      return '.|' + decimals + '|';
    }
  }

  decimals += quotient;
  
  if(container[quotient]) {
    container[quotient][remainder] = true;
  } else {
    container[quotient] = {};
    container[quotient][remainder] = true;
  }

  return decimalRecurse(remainder * 10, denominator, decimals, remainder, container);
}


console.log(prettyDecimal(11, 1))