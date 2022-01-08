function solve(input) {
    let heroes = [];
    for (let line of input) {
        let hero = {};
        line = line.split(" / ");
        hero.name = line[0];
        hero.level = Number(line[1]);
        if (line.length > 2) {
            let items = line[2].split(", ");
            hero.items = items;
        } else {
            hero.items = [];
        }
        heroes.push(hero);
    }
    console.log(JSON.stringify(heroes));
}
solve(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);