function weekDay(input) {
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (week.includes(input)) {
        console.log(Number(week.indexOf(input)) + 1);
    } else {
        console.log("error");
    }
}
weekDay("Friday");