function longestCommonSubstring(str1, str2) {
  let maxLength = Math.max(str1.length, str2.length);
  let dp = new Array(str1.length)

  for (let i = 0; i < dp.length; i++) {
    let temp1 = new Array(str2.length);
    for (let j = 0; j < temp1.length; j++) {
      let temp2 = new Array(maxLength); 
      temp1[j] = temp2;
    }
    dp[i] = temp1;
  }

  return lcsRecurse(dp, str1, str2, 0, 0, 0);
}

function lcsRecurse(dp, s1, s2, i1, i2, count) {
  if(i1 == s1.length || i2 == s2.length) {
    return count;
  }

  if(dp[i1][i2][count] == null) {
    let c1 = count; 
    if (s1.charAt(i1) == s2.charAt(i2)) {
      c1 = lcsRecurse(dp, s1, s2, i1 + 1, i2 + 1, count + 1);
    }

    let c2 = lcsRecurse(dp, s1, s2, i1, i2 + 1, 0);
    let c3 = lcsRecurse(dp, s1, s2, i1 + 1, i2, 0);

    dp[i1][i2][count] = Math.max(c1, Math.max(c2, c3));
  }

  return dp[i1][i2][count]
}

let str1 = 'helloworld';
let str2 = 'heyworld';

console.log(longestCommonSubstring(str1, str2))