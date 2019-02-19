function solveNQueens(n) {
    let output = [];
    let board = new Array(n);
    for (var i = 0; i < n; i++) {
        board[i] = '.'.repeat(n);
    }

    recurseQueens(0, board, output, board.length)
    
    return output;
    
}

function recurseQueens(col, board, output, n) {
    if(col == n) {
        output.push(board);
        return;
    }

    for(var row = 0; row < board.length; row++) {
        if(validSpot(board, row, col)) {
            let temp = JSON.parse(JSON.stringify(board));
            temp[row] = temp[row].slice(0, col) + 'Q' + temp[row].slice(col + 1);
            recurseQueens(col + 1, [...temp], output, n)
        }
    }
    
    return;

}


function validSpot(board, row, col) {
    for(var i = 1; col - i >= 0; i++) {
        if(board[row][col - i] == 'Q') {
            return false;
        }
    }

    for(var i = 1; col - i >= 0 && row - i >= 0; i++) {
        if(board[row - i][col - i] == 'Q') {
            return false;
        }
    }

    for(var i = 1; col - i >= 0 && row + i < board.length; i++ ) {
        if(board[row + i][col - i] == 'Q') {
            return false;
        }
    }

    return true;
}
solveNQueens(4);