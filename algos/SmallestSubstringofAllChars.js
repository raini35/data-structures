function solveSmallestSubs(str, arr) {
    // Have a beginning and ending pointer
    // Create an object with the key being every character in char and then the value as 1 
    // Move the end pointer at every iteration of the while loop 
    // Increment the value of a key if current char is a key in the object
    // If the first instance of a character in arr is found decrement counter. For every other instance leave it alone
    // If the all characters in arr are found, check if the current len is smaller than the current minimum len move the beginning until counter > 0 
    // The counter will be incremented by 1 if one of the values in the object is greater than 0 

    let begin = end = 0; 
    let len = Infinity;
    let ans = "";
    let counter = arr.length;
    let container = {}

    arr.forEach(val => container[val] = 1);

    while(end < str.length) {
        let endChar = str[end];
        if(container[endChar] !== undefined) {
            container[endChar]--;
            if(container[endChar] == 0) {
                counter--;
            }
        }

        end++;

        while(counter == 0) {
            if(end - begin < len) {
                len = end - begin;
                ans = str.slice(begin, end);
            }
            let beginChar = str[begin];
            if(container[beginChar] !== undefined) {
                container[beginChar]++;
                if(container[beginChar] > 0) {
                    counter++;
                }
            }
            begin++
        }
    }

    return ans;
}

let arr = ['x','y','z'];
let str = "xyyzyzyx";

console.log(solveSmallestSubs(str, arr))
