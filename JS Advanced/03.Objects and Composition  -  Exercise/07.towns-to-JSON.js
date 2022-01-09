function solve(input) {
    let result = [];
    input.shift();
    for (let line of input) {
        line = line.split(" |");
        let town = line[0];
        let latitude = line[1];
        let longtitude = line[2];
        town = town.replace("| ", "");
        latitude = latitude.replace(" ", "");
        latitude = Number(latitude);
        longtitude = longtitude.replace(" ", "");
        longtitude = Number(longtitude);
        let townInfo = {};
        townInfo["Town"] = town;
        townInfo["Latitude"] = Number(latitude.toFixed(2));
        townInfo["Longitude"] = Number(longtitude.toFixed(2));
        result.push(townInfo);
    }
    console.log(JSON.stringify(result));
}
solve(['| Town | Latitude | Longitude |',
'| Sofia Dolf | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);