// INSERTION SORT: Using a while loop
// function insertionSort(input) {
//   var lastSortedIndex = 0;
//   while (lastSortedIndex < input.length) {
//     var current = lastSortedIndex;
//     for(var i = lastSortedIndex - 1 ; i >= 0; i--) {
//       if(input[i] >= input[current]) {
//         swap(input, current, i);
//         current--;
//       }
//       else {
//         break;
//       }
//     }
//     lastSortedIndex++
//   }
//   return input
// }

function insertionSort(input) {
  var currentPos;
  for(var i = 0; i < input.length; i++) {
    currentPos = i;
    for(var j = i - 1; j >= 0; j--) {
      if(input[j] >= input[currentPos]) {
        swap(input, j, currentPos)
        currentPos = j;
      } else {
        break;
      }
    }
  }
  return input;
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return;
}

export {insertionSort}; 
