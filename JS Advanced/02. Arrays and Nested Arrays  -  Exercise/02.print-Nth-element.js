function solve(inputArr, step) {
    let result = [];
    for (let i = 0; i < inputArr.length; i = i + step) {
        result.push(inputArr[i]);
    }
    return result;
}
solve();