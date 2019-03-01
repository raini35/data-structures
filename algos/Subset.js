function getSubsets(arr) {
  let output = [];
  recurseSubset(arr, [], output, 0);
  return output
}

function recurseSubset(arr, subset, output, index) {
  output.push(subset);
  if(index == arr.length) {
    return;
  }

  for(var i = index; i < arr.length; i++) {
   recurseSubset(arr, [...subset, arr[i]], output, i + 1);
  }
}

console.log(getSubsets([1,2,3]))