// QUICK SORT FOR ARRAYS
// The idea of quick sort for arrays is that you need to have two pointers that increment and decrement until each finds a number that is out of place based on the current pivot or equal to the pivot. Then they swap the numbers. They continue doing this until the two pointers are equal to each other. Then you divide the algorithm by start, pivot, and pivot + 1, end. Do the above instructions until there are no more switches
// What if I bring along the pivot

// function quickSort(input) {
//   var start = 0;
//   var end = input.length - 1;
//   qSort(input, start, end);
//   return input
// }
//
// function qSort(input, start, end) {
//   var pivot = start;
//   var i = start + 1;
//   var j = end;
//   var mid = Math.floor((i + j) / 2);
//   while(i < j) {
//     if(i )
//   }
//   swap(input, pivot, mid);
// }
//
// function swap(input, i, j) {
//   console.log("SWAPPED")
//   var temp = input[i];
//   input[i] = input[j];
//   input[j] = temp;
// }
// // QUICK SORT FOR LINKED LISTS
//
// console.log(quickSort([4,3]))
//
//
// function quickSort(input, low, high) {
//   if(low < high) {
//     var pi = partition(input, low, high);
//
//     quickSort(input, low, pi - 1);
//     quickSort(input, pi + 1, high);
//   }
// }
//
// function partition(input, low, high) {
//   var pivot = input[high];
//   var i = low - 1;
// }


// So the purpose of this algorithm is to output the index of the pivot while also sorting the input into two segments.
// The purpose of i is to keep track of the last element of the left side of the input array i.e. all the elements that are lower than the pivot

// function partition (arr, low, high)
// {
//     // pivot (Element to be placed at right position)
//     var pivot = arr[high];
//
//     var i = low - 1  // Index of smaller element
// // the actual purpose of i is to keep track of the last element of the left side of the array
// // Technically this partition function takes out any element less than the pivot from its position and adds it to the left side part of the array
// // only when the element in question is less than or equal to the pivot will you swap elements. otherwise you ignore it because it's meant to be part of the right side part of the array.
//     console.log("FIRST i: " + i)
//     for (var j = low; j <= high - 1; j++)
//     {
//         console.log("j: " + j)
//         console.log("Seeing if " + arr[j] + " is less than or equal to " + pivot)
//         if (arr[j] <= pivot)
//         {
//             console.log("Old i: " + i)
//             i++;
//             console.log("New i: " + i);
//             swap(arr, i, j);
//         }
//         // If an element does not pass the above if statement that means that the element is actually on the right side of the input array i.e. elements that are greater than the pivot.
//         // This means that any element in i + 1 is part of the right side of the array
//
//     }
//
//     // The reason why you would need to add 1 to the index is because if you didn't you would be replacing an element in the left side of the array into the right of the array. If you add one, you'll only be replacing an element in the right side of the array with another element in the right side of the array.
//     console.log("-----------")
//     console.log("FINISHED WHILE LOOP")
//     console.log("i: " + i);
//     console.log("high: " + high);
//     swap(arr, i + 1, high);
//     return (i + 1)
// }

function quickSort(input) {
  qSort(input, 0, input.length - 1);
  return input;
}

// The start and end never changes. The partition is actually the one that divides it up. 
function qSort(input, start, end) {
  if(start < end) {
    var p = getPartition(input, start, end);
    qSort(input, start, p - 1);
    qSort(input, p + 1, end);
  }
}

function getPartition(input, start, end) {
  var pivot = input[end];
  var low = start - 1;
  for(var i = start; i <= end - 1; i++) {
    if(input[i] <= pivot) {
      low++;
      swap(input, low, i);
    }
  }

  swap(input, low + 1, end);

  return low + 1
}

function swap(input, i, j) {
  var temp = input[i];
  input[i] = input[j];
  input[j] = temp;
}

var input = [4,5,2,1,3];
quickSort(input);
