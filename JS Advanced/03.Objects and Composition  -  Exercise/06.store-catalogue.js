function solve(input) {
    let catalogue = {};
    for (let line of input) {
        line = line.split(" : ");
        let product = line[0];
        let price = Number(line[1]);
        if (catalogue.hasOwnProperty(product[0])) {
            catalogue[product[0]][product] = price;
        } else {
            catalogue[product[0]] = {};
            catalogue[product[0]][product] = price;
        }     
    }
    let sortedCatalogue = Object.entries(catalogue);
    sortedCatalogue.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [letter, products] of sortedCatalogue) {
        let sortedProducts = Object.entries(products);
        sortedProducts.sort((a, b) => a[0].localeCompare(b[0]));
        console.log(letter);
        for (let [currentProduct, price] of sortedProducts) {
            console.log(`${currentProduct}: ${price}`);
        }
    }
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);