function solve(steps, footprintLength, speed) {
    let roadInMeters = steps*footprintLength;
    let minutesForBreak = Math.floor(roadInMeters/500);
    let speedInMeters = speed*1000/3600;
    let timeInSeconds = Math.round(roadInMeters/speedInMeters);
    let hours = Math.floor(timeInSeconds/3600);
    if (hours != 0) {
        timeInSeconds = timeInSeconds % 3600;
    }
    let minutes = Math.floor(timeInSeconds/60);
    if (minutes != 0) {
        timeInSeconds = timeInSeconds % 60;
    }
    minutes += minutesForBreak;
    if (minutes >= 60) {
        minutes = minutes % 60;
        hours++; 
    }
    let seconds = timeInSeconds;
    if (hours <= 9) {
        hours = `0${hours}`;
    }
    if (minutes <= 9) {
        minutes = `0${minutes}`;
    }
    if (seconds <= 9) {
        seconds = `0${seconds}`;
    }
    console.log(`${hours}:${minutes}:${seconds}`);
}
solve(2564, 0.70, 5.5);