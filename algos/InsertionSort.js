function insertionSort(input) {
  var lastSortedIndex = 0;
  while (lastSortedIndex <= input.length - 1) {
    var current = lastSortedIndex;
    for(var i = lastSortedIndex - 1 ; i >= 0; i--) {
      if(input[i] >= input[current]) {
        swap(input, current, i);
        current--;
      }
    }
    lastSortedIndex++
  }
  return input
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return;
}

var input = [5,4,3,2,1]
console.log(insertionSort(input));
