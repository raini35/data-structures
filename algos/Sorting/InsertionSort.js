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

// function insertionSort(input) {
//   var currentPos;
//   for(var i = 0; i < input.length; i++) {
//     currentPos = i;
//     for(var j = i - 1; j >= 0; j--) {
//       if(input[j] >= input[currentPos]) {
//         swap(input, j, currentPos)
//         currentPos = j;
//       } else {
//         break;
//       }
//     }
//   }
//   return input;
// }

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return;
}

// export {insertionSort};

function iSort(array) {
  let current;
  for(var i = 1; i < array.length; i++) {
    current = i;
    for(var x = i - 1; x >= 0; x--) {
      if(array[x] < array[current]) {
        break;
      }
      swap(array, current, x)
      current = x;
    }
  }
  return array;
}

let input = [5,4,3,2,1];
console.log(input);
iSort(input);
console.log(input);
