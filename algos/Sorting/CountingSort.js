// Count the number of times the values show up in the array
// An auxillary array is needed to keep track of the numbers
function countingSort(input) {
  var max = Math.max(...input) + 1;
  var indexOf = new Array(max).fill(0);
  var newInput = new Array(input.length);

  // count how many times a value shows up in the array
  for(var n = 0; n < input.length; n++)
  {
    indexOf[input[n]] = indexOf[input[n]] + 1;
  }

  // sum up all the numbers to the left of each number
  for(var j = indexOf.length - 1; j >= 0; j--)
  {
    var sum = 0;
    for(var k = j - 1; k >=0; k--) { sum = sum + indexOf[k]; }
    indexOf[j] = sum;
  }

  // place the number into its place 
  for(var n = 0; n < input.length; n++)
  {
    newInput[indexOf[input[n]]] = input[n];
    indexOf[input[n]] = indexOf[input[n]] + 1;
  }

  return newInput
}

// function createCounters(input) {
//   var counters = [0]
//
//   for(var i = 0; i < input.length; i++) {
//       if(input[i] + 1 > counters.length) {
//         var diff = input[i] + 1 - counters.length
//         for(var j = 0; j < diff; j++ ) {
//           counters.push(0);
//         }
//       }
//   }
//
//   return counters;
// }

var input = [2,2,1,0,20];
countingSort(input);
