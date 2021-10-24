function solve(input) {
    let sumOfNumbers = 0;
    let sumOfInvertedNumbers = 0;
    for (let number of input) {
        num = Number(number);
        invertedNum = 1/num;
        sumOfNumbers += num;
        sumOfInvertedNumbers += invertedNum;
    }
    console.log(sumOfNumbers);
    console.log(sumOfInvertedNumbers);
    console.log(input.join(""));
}
solve(["1", "2", "3"]);