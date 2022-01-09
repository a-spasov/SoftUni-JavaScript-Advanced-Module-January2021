function rectangle(width, height, color) {
    function getColorName(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
    function calcArea() {
        return width*height;
    }
    let result = {
        width,
        height,
        color: getColorName(color),
        calcArea
    }
    return result;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
