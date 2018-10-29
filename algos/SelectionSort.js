function selectionSort(input) {
  for(var lastIndex = input.length - 1; lastIndex > 0; lastIndex--) {
    var largest = lastIndex;
    for(var j = 0; j < lastIndex; j++) {
      if(input[j] >= input[largest]) {
        largest = j;
      }
    }
    swap(input, largest, lastIndex)
  }

  return input;
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return;
}

export {selectionSort};
