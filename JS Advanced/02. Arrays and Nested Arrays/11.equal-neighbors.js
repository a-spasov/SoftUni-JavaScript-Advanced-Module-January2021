function solve(input) {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        for (let index in input[i]) {
            index = Number(index);
            if (input[i][index] == input[i][index + 1]) {
                counter++;
            } 
            if (input[i + 1] == undefined) {
                continue;
            } else {
                if (input[i][index] == input[i + 1][index]) {
                    counter++;
                }
            }           
        }
    }
    console.log(counter);
}
solve([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]
);