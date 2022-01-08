function solve(car) {
    let result = {};
    result.model = car.model;
    result.engine = {};
    if (car.power <= 90) {
        result.engine.power = 90;
        result.engine.volume = 1800;
    }
    if (car.power > 90 && car.power <= 120) {
        result.engine.power = 120;
        result.engine.volume = 2400;
    }
    if (car.power >  120) {
        result.engine.power = 200;
        result.engine.volume = 3500;
    }
    result.carriage = {};
    result.carriage.type = car.carriage;
    result.carriage.color = car.color;
    result.wheels = [0, 0, 0, 0];
    if (car.wheelsize % 2 == 0) {
        result.wheels.fill(car.wheelsize - 1);
    } else {
        result.wheels.fill(car.wheelsize);
    }
    return result;
}
solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);