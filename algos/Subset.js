// Backtracking problem
function getSubsets(arr) {
  let output = [];
  recurseSubset(arr, [], output, 0);
  return output
}

function recurseSubset(arr, subset, output, index) {
  output.push(subset);

  // This if statement is necessary to stop the function from going in an 
  // infinite loop
  if(index == arr.length) {
    return;
  }

  for(var i = index; i < arr.length; i++) {
    // this backtracks because the subset stays the same for every iteration
    // the argument for subset in the next call of recurseSubset gets changed
   recurseSubset(arr, [...subset, arr[i]], output, i + 1);
  }
}

console.log(getSubsets([1,2,3]))