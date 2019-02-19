// function selectionSort(input) {
//   for(var lastIndex = input.length - 1; lastIndex > 0; lastIndex--) {
//     var largest = lastIndex;
//     for(var j = 0; j < lastIndex; j++) {
//       if(input[j] >= input[largest]) {
//         largest = j;
//       }
//     }
//     swap(input, largest, lastIndex)
//   }
//
//   return input;
// }

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return;
}

// export {selectionSort};

function sSort(array) {
  for(var i = 0; i < array.length - 1; i++) {
    var current = i;
    for(var x = i; x < array.length; x++) {
      if(array[x] < array[current]) {
        current = x;
      }
    }
    swap(array, current, i);
  }
  return array;
}

let input = [5,4,3,2,1];
console.log(input);
sSort(input);
console.log(input);
