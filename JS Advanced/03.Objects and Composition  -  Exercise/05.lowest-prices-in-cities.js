function solve(input) {
    let prices = {};
    for (let line of input) {
        line = line.split(" | ");
        let town = line[0];
        let productName = line[1];
        let price = Number(line[2]);
        let currentProduct = {};
        if (prices.hasOwnProperty(productName)) {
            if (prices[productName].price > price) {
                prices[productName].town = town;
                prices[productName].price = price;
            }
        } else {
            prices[productName] = {};
            prices[productName].town = town;
            prices[productName].price = price;
        }
    }
    let result = Object.entries(prices);
    for (let [product, info] of result) {
        let bestPrices = Object.values(info);
        let [town, price] = bestPrices;
        console.log(`${product} -> ${price} (${town})`);
    }
}
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);
