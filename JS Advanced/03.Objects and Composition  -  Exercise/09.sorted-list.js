function createSortedList() {
    let numbers = [];
    function add(elemenent) {
        numbers.push(elemenent);
        result.size = numbers.length;
        numbers.sort((a, b) => a - b);
    } 
    function remove(index) {
        if (index >= 0 && index < numbers.length) {
            numbers.splice(index, 1);
            result.size = numbers.length;
        }
    } 
    function get(index) {
        if (index >= 0 && index < numbers.length) {
            return numbers[index];
        }
    }
    let result = {
        size: 0,
        add,
        remove,
        get
    };
    return result;
}
let list = createSortedList();
list.add(5);
list.add(-6);
list.add(7);
console.log(list);
console.log(list.size); 
list.remove(1);
console.log(list.size);

