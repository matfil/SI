const args = process.argv.slice(2);
let all = false;
let edge = 0;
const completeSolutions = [];

if (args.length > 2 || args.length === 0) {
    console.log('Usage: node hetman.js [-a][--all] <number>');
}

args.forEach(arg => {
    if (arg === '-a' || arg === '--all') {
        all = true;
    } else {
        edge = Number(arg);
    }
});

if (!edge) {
    console.error('Length of edge has to be longer than 0.');
    return;
}
 

findSolution();
if (all){
    console.log('results:');
completeSolutions.forEach(solution => {
    console.log(JSON.stringify(solution));
});
} else {
    console.log('result:');
    console.log(JSON.stringify(completeSolutions[0]));
}
function findSolution (solution = []) {
    if (solution.length == edge) {
        completeSolutions.push(solution);
        return;
    }
    const currentRow = solution.length;
    const filled = fillBoard(solution);
    //recursive calls
    
    for(let i = 0; i < edge; i++) {
        const passed = solution.map(x => x);
        if (!solution.length) {
            passed.push(i + 1);
            findSolution(passed);
            continue;
        }
        if (filled[currentRow][i] !== 'x') {
            passed.push(i + 1);
            findSolution(passed);
        }
    }
    
}

function createNewBoard(edgeLength) {
    const newBoard = []
    for (let i = 0; i < edgeLength; i++) {
        newBoard.push([]);
        for(let j = 0; j < edgeLength; j++) {
            newBoard[i][j] = 'O';
        }
    }
    return newBoard;
}

function fillBoard(solution = []) {
    
    const filledBoard = createNewBoard(edge);
    for (let i = 0; i < solution.length; i++)
    {
        //row
        for (let c = 0; c < edge; c++) {
            filledBoard[i][c] = 'x';
        }
        //column
        for (let r = 0; r < edge; r++) {
            filledBoard[r][solution[i] - 1] = 'x';
        }
        const baseX = solution[i] -1;
        const baseY = i;
        let difference = 1;
        // upper right diagonal
        while (baseX + difference < edge && baseY + difference < edge) {
            filledBoard[baseY + difference][baseX + difference] = 'x';
            difference++;
        }
        difference = 1;
        //upper left diagonal
        while (baseX - difference >= 0 && baseY + difference < edge) {
            filledBoard[baseY + difference][baseX - difference] = 'x';
            difference++;
        }
    }
    
    return filledBoard;
}
    