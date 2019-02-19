// function bubbleSort(input) {
//   var currentMax;
//   for(var maxIndex = input.length - 1; maxIndex > 0; maxIndex--) {
//     currentMax = 0;
//     for(var j = 1; j <= maxIndex; j++) {
//       if(input[j] <= input[currentMax]) {
//         swap(input, j, currentMax);
//         currentMax = j;
//       }
//     }
//   }
// }
//
// function swap(input, i, j) {
//   var temp = input[i];
//   input[i] = input[j];
//   input[j] = temp;
//   return;
// }
//
//

function bSort(array) {
  var current;

  for (var max = array.length - 1; max > 0; max--) {
    current = 0;

    for(var i = 0; i <= max; i++) {
      if(array[i] < array[current]) {
        swap(array, i, current);
        current = i;
      }
    }
  }

  return array;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

var input = [5,4,3,2,1];
console.log(input);
bSort(input);
console.log(input);
