function solve(input) {
    let result = [];
    let number = 1;
    for (let line of input) {
        if (line == "add") {
            result.push(number);
        } else {
            number++;
            result.pop();
            continue;
        }
        number++;
    }
    if (result.length > 0) {
        console.log(result.join("\n"));
    } else {
        console.log("Empty");
    }
}
solve(['remove', 
'remove', 
'remove']
);
