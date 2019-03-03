function prettyDecimal(denominator, numerator) {
  let whole = ""
  let remainder = numerator % denominator;
  let quotient = Math.floor(numerator / denominator);
  whole += quotient;

  if(remainder == 0) {
    return whole;
  }

  let history = {}
  
  let decimals = decimalRecurse(remainder, denominator, "", remainder, history);
  
  return whole + decimals;
}

function decimalRecurse(numerator, denominator, decimals, remainder, container) {
  if(remainder == 0) {
    return "." + decimals;
  }

  numerator *= 10;
  let quotient = Math.floor(numerator / denominator);
  
  if(container[quotient]) {
    console.log(quotient)
    console.log(numerator)
    if(container[quotient][numerator]) {
      console.log("ENTERING")
      return '.|' + decimals + '|';
    }
  }

  let product = quotient * denominator;

  remainder = numerator - product;

  decimals += quotient;
  
  if(container[quotient]) {
    container[quotient][remainder] = true;
  } else {
    container[quotient] = {};
    container[quotient][remainder] = true;
  }

  console.log(container)

  return decimalRecurse(remainder, denominator, decimals, remainder, container);
}


console.log(prettyDecimal(3, 2))