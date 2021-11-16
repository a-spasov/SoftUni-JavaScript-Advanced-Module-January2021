function solve(inputArr, rotations) {
    let currentElement;
    for (let i = 1; i <= rotations; i++) {
        currentElement = inputArr.pop();
        inputArr.unshift(currentElement);
    }
    console.log(inputArr.join(" "));
}
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);