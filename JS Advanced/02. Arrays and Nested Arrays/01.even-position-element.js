function solve(input) {
    let result = [];
    for (let i = 0; i < input.length; i = i + 2) {
        result.push(input[i]);
    }
    return result.join(" ");
}
solve();