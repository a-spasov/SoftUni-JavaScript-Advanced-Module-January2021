function solve(input) {
    let townsInfo = {};
    for (let line of input) {
        line = line.split(" <-> ");
        let [town, population] = line;
        population = Number(population);
        if (townsInfo.hasOwnProperty(town)) {
            townsInfo[town] += population;
        } else {
            townsInfo[town] = population;
        }
    }
    for (let [town, population] of Object.entries(townsInfo)) {
        console.log(`${town} : ${population}`);
    }
}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);