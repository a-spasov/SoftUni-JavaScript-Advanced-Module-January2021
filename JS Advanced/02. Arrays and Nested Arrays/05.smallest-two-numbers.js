function solve(input) {
    input.sort((a, b) => a - b);
    console.log(input.slice(0, 2).join(" "));
}
solve([5,1,4,7,9,6]);