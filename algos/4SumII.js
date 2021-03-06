function solveFourSumTwo(A,B,C,D) {
    let left = {};
    let count = 0;

    for(let a of A) {
        for(let b of B) {
            left[a+b] = (left[a+b] || 0) + 1;
        }
    }

    for(let c of C) {
        for(let d of D) {
            count = count + (left[c + d] || 0);
        }
    }

    return count;
}