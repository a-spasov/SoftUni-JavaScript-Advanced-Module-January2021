function solve(input) {
    let result = [];
    let startIndex = Math.floor(input.length/2);
    input.sort((a, b) => a - b);
    result = input.slice(startIndex);
    return result;
}
solve();