function bubbleSort(input) {
  var currentMax;
  for(var maxIndex = input.length - 1; maxIndex > 0; maxIndex--) {
    currentMax = 0;
    for(var j = 1; j <= maxIndex; j++) {
      if(input[j] <= input[currentMax]) {
        swap(input, j, currentMax);
        currentMax = j;
      }
    }
  }
}

function swap(input, i, j) {
  var temp = input[i];
  input[i] = input[j];
  input[j] = temp;
  return;
}

var input = [5,4,3,2,1];
console.log(input);
bubbleSort(input);
console.log(input);
