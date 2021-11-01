/*function solve(input) {
    let words = input.match(pattern);
    let result = [];
    if (words == null) {
        console.log("");
    } else {
        for (let currentWord of words) {
            if (currentWord == "") {
                continue;
            } else {
                result.push(currentWord.toUpperCase());
            }
        }
        console.log(result.join(", "));
    }
}*/

function solve(input) {
    let result = [];
    input = input.split(" ");
    for (let currentWord of input) {
        if (currentWord.lengt <= 1) {
            continue;
        } else {
            if (currentWord.includes(".") || currentWord.includes("!") || currentWord.includes("?") || currentWord.includes(":")) {
                currentWord = currentWord.replace(currentWord[currentWord.length - 1], "");
            }
            result.push(currentWord.toUpperCase());
        }
    }
    console.log(result.join(", "));
}
solve("12cvbc3 sdasd as!");