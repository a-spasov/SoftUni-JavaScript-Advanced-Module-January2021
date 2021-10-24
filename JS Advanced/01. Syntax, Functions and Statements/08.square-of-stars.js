function solve(input) {
    let line = "";
    if (typeof(input) == "number") {
        line = "*".repeat(input);
        line = line.split("");
        line = line.join(" ");
        for (let i = 1; i <= input; i++) {
            console.log(line);
        }
    } else {
        line = "*".repeat(5);
        line = line.split("");
        line = line.join(" ");
        for (let i = 1; i <= 5; i++) {
            console.log(line);
        }
    }
}
solve(2);