function solve(number, op1, op2, op3, op4, op5) {
    number = Number(number);
    let operations = [op1, op2, op3, op4, op5];
    for (let currentOperation of operations) {
        switch (currentOperation) {
            case "chop": 
                number = number/2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice": 
                number += 1;
                console.log(number);              
                break;
            case "bake":
                number *= 3;
                console.log(number);
                break;
            case "fillet":
                number *= 0.8;
                console.log(number);
                break;
        }
    }
}
solve();