function solveLongPalSub(str) {
    let dp = new Array(str.length);

    for(var i = 0; i < dp.length; i++) {
        let temp = new Array(str.length);
        dp[i] = temp;
    }

    return longPalSubRecurse(dp, str, 0, str.length - 1);
}

function longPalSubRecurse(dp, str, startIndex, endIndex) {
    console.log("START: " + startIndex);
    console.log("END: " + endIndex)
    if(startIndex > endIndex) {
        return 0;
    }

    if(startIndex == endIndex) {
        return 1;
    }

    if(dp[startIndex][endIndex] !== undefined) {
        return dp[startIndex][endIndex];
    }

    if(str[startIndex] == str[endIndex]) {
        return 2 + longPalSubRecurse(dp, str, startIndex + 1, endIndex + 1);
    }

    let pal1 = longPalSubRecurse(dp, str, startIndex + 1, endIndex);
    let pal2 = longPalSubRecurse(dp, str, startIndex, endIndex - 1);

    dp[startIndex][endIndex] = Math.max(pal1, pal2);

    return dp[startIndex][endIndex];
    // if(dp[startIndex][endIndex] == undefined) {
    //     if(str[startIndex] == str[endIndex]) {
    //         dp[startIndex][endIndex] =  2 + longPalSubRecurse(dp, str, startIndex + 1, endIndex + 1);
    //     }
    //     else {
    //         let pal1 = longPalSubRecurse(dp, str, startIndex + 1, endIndex);
    //         let pal2 = longPalSubRecurse(dp, str, startIndex, endIndex - 1);
        
    //         dp[startIndex][endIndex] = Math.max(pal1, pal2);
    //     }   
    // }

    // return dp[startIndex][endIndex]
}

console.log(solveLongPalSub("abdbca"));