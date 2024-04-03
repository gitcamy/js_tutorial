function dayName(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[date.getDay()];
};

// Returns a greeting for the given date.
function greeting(date) {
    if (date.getHours() < 12) {
        return `Good morning, happy ${dayName(date)}.`;
    } else if (date.getHours() < 18) {
        return `Good afternoon, happy ${dayName(date)}.`;
    } else {
        return `Good evening, happy ${dayName(date)}.`;
    }
}
    