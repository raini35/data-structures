function shortestSubseq(arr, string) {
    let table = {};

    for(var i = 0; i < arr.length; i++) {
        table[arr[i]] = 1;
    }

    let ans = '';
    let len = Infinity;
    let begin = 0;
    let end = 0;
    let counter = arr.length;

    while (end <= string.length) {
        let endChar = string[end];
  
        if(table[endChar] !== undefined) {
            table[endChar] = table[endChar] - 1;
            if(table[endChar] == 0) {
                counter = counter - 1;
            }
        }

        end++

        while(counter == 0) {
            if(end - begin < len) {
                len = end - begin;
                ans = string.slice(begin, end);
            }

            let beginChar = string[begin];

            if(table[beginChar] !== undefined) {
                table[beginChar] = table[beginChar] + 1;
                if(table[beginChar] > 0) {
                    counter = counter + 1;
                }
            }
            begin++;
        }
    }
    
    return ans.length;
}

console.log(shortestSubseq(['A', 'B', 'C'], 'ACABC'))