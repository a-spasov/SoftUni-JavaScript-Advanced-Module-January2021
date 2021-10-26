function solve(fruit, weight, price) {
    let money = (weight*price/1000).toFixed(2);
    console.log(`I need $${money} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`);
}
solve();