function solve (num1, num2) {
    let devisors1 = greatestCommonDevisor(num1);
    let devisors2 = greatestCommonDevisor(num2);
    for (let currentDevisor of devisors1) {
        if (devisors2.includes(currentDevisor)) {
            console.log(currentDevisor);
            break;
        }
    }

    function greatestCommonDevisor(inputNumber) {
        let result = [];
        for (let i = inputNumber; i > 0; i--) {
            if (inputNumber % i == 0) {
                result.push(i);
            }
        }
        return result;
    }
}
solve(12, 15);