function solve(input) {
    let calories = {};
    while(input.length > 0) {
        let key = input.shift();
        let value = Number(input.shift());
        calories[key] = value;
    }
    console.log(calories);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);