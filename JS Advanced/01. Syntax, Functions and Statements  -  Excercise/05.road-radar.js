function solve(speed, area) {
    let restrictions = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };
    let status = "";
    speed = Number(speed);
    let speedDifference = speed - restrictions[area];
    if (speedDifference > 0 && speedDifference <= 20) {
        status = "speeding"
    }
    if (speedDifference > 20 && speedDifference <= 40) {
        status = "excessive speeding";
    }
    if (speedDifference > 40) {
        status = "reckless driving";
    }
    if (speedDifference <= 0) {
        console.log(`Driving ${speed} km/h in a ${restrictions[area]} zone`);
    } else {
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${restrictions[area]} - ${status}`);
    }
}
solve("30", "city");