function solve(input) {
    let result = [];
    for (let element of input) {
        if (element >= 0) {
            result.push(element);
        } else {
            result.unshift(element);
        }
    }
    console.log(result.join("\n"));
}
solve([1,3,-3,-5,3]);