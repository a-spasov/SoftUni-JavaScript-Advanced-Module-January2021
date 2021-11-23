function solve(input) {
    let isMagic = true;
    let sum = input[0].reduce((result, currentValue) => result + currentValue);
    for (let i = 0; i < input.length; i++) {
        let currentSum = input[i].reduce((result, currentValue) => result + currentValue);
        if (currentSum == sum) {
            continue;
        } else {
            isMagic = false;
            break;
        }
    }
    for (let j = 0; j < input[0]. length; j++) {
        let column = [];
        for (let k = 0; k < input.length; k++) {
            column.push(input[j][k]);
        }
        let currentSum = column.reduce((result, currentValue) => result + currentValue);
        if (currentSum == sum) {
            column = [];
            continue;
        } else {
            isMagic = false;
            break;
        }
    }
    return isMagic;
}
solve([[11, 32, 45],
 [21, 0, 1],
 [21, 1, 1]]
);