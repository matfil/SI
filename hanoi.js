const args = process.argv.slice(2);
const numberOfDiscs = Number(args[0]);
console.log('Computing steps for ' + numberOfDiscs + ' discs.');
console.log('init');
const towers = [[], [], []];
for (let disc = numberOfDiscs; disc > 0; disc--) {
    towers[0].push(disc);
    console.log('Placed disc '+ disc + ' on first peg.');
}

if (numberOfDiscs % 2 === 0) {
    console.log('even');
    while (true) {
        //1<->2
        if (sizeOfLastDisc(towers, 0, numberOfDiscs) < sizeOfLastDisc(towers, 1, numberOfDiscs)) {
            console.log('Moving disc from 1st peg to 2nd peg');
            towers[1].push(towers[0].pop());
        } else if (sizeOfLastDisc(towers, 0, numberOfDiscs) > sizeOfLastDisc(towers, 1, numberOfDiscs)){
            console.log('Moving disc from 2nd peg to 1st peg');
            towers[0].push(towers[1].pop());
        }
        //1<->3
        if (sizeOfLastDisc(towers, 0, numberOfDiscs) < sizeOfLastDisc(towers, 2, numberOfDiscs)) {
            console.log('Moving disc from 1st peg to 3rd peg');
            towers[2].push(towers[0].pop());
        } else if (sizeOfLastDisc(towers, 0, numberOfDiscs) > sizeOfLastDisc(towers, 2, numberOfDiscs)){
            console.log('Moving disc from 3rd peg to 1st peg');
            towers[0].push(towers[2].pop());
        }
        if (towers[2].length == numberOfDiscs) {
            break;
        }
        //2<->3
        if (sizeOfLastDisc(towers, 1, numberOfDiscs) < sizeOfLastDisc(towers, 2, numberOfDiscs)) {
            console.log('Moving disc from 2nd peg to 3rd peg');
            towers[2].push(towers[1].pop());
        } else if (sizeOfLastDisc(towers, 1, numberOfDiscs) > sizeOfLastDisc(towers, 2, numberOfDiscs)){
            console.log('Moving disc from 3rd peg to 2nd peg');
            towers[1].push(towers[2].pop());
        }
        if (towers[2].length == numberOfDiscs) {
            break;
        }
    }
} else {
    console.log('odd');
    while (true) {
        //1<->3
        if (sizeOfLastDisc(towers, 0, numberOfDiscs) < sizeOfLastDisc(towers, 2, numberOfDiscs)) {
            console.log('Moving disc from 1st peg to 3rd peg');
            towers[2].push(towers[0].pop());
        } else if (sizeOfLastDisc(towers, 0, numberOfDiscs) > sizeOfLastDisc(towers, 2, numberOfDiscs)){
            console.log('Moving disc from 3rd peg to 1st peg');
            towers[0].push(towers[2].pop());
        } else {}
        if (towers[2].length == numberOfDiscs) {
            break;
        }
        //1<->2
        if (sizeOfLastDisc(towers, 0, numberOfDiscs) < sizeOfLastDisc(towers, 1, numberOfDiscs)) {
            console.log('Moving disc from 1st peg to 2nd peg');
            towers[1].push(towers[0].pop());
        } else if (sizeOfLastDisc(towers, 0, numberOfDiscs) > sizeOfLastDisc(towers, 1, numberOfDiscs)) {
            console.log('Moving disc from 2nd peg to 1st peg');
            towers[0].push(towers[1].pop());
        } else {}
        //2<->3
        if (sizeOfLastDisc(towers, 1, numberOfDiscs) < sizeOfLastDisc(towers, 2, numberOfDiscs)) {
            console.log('Moving disc from 2nd peg to 3rd peg');
            towers[2].push(towers[1].pop());
        } else if (sizeOfLastDisc(towers, 1, numberOfDiscs) > sizeOfLastDisc(towers, 2, numberOfDiscs)) {
            console.log('Moving disc from 3rd peg to 2nd peg');
            towers[1].push(towers[2].pop());
        } else {}
        if (towers[2].length == numberOfDiscs) {
            break;
        }
    }
}
function sizeOfLastDisc(towers, numberOfTower, numberOfDiscs) {
    if (towers[numberOfTower].length === 0) {
        return numberOfDiscs + 1;
    } else {
        return towers[numberOfTower][towers[numberOfTower].length-1];
    }
}
