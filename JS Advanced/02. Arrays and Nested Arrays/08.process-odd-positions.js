function solve(numbers) {
    let result = [];
    for (let element in numbers) {
        element = Number(element);
        if (element % 2 != 0) {
            result.push(numbers[element]);
        }
    }
    result = result.map((x) => x*2).reverse();
    return result.join(" ");
}
solve([1,2,3,4,5,6]);