function updateClock() {
    // Get current UTC time
    var currentTime = new Date();

    // Convert to UTC+8 by adding 8 hours (in ms)
    var utc8Time = new Date(currentTime.getTime() + (8 * 60 * 60 * 1000));

    var currentHours = utc8Time.getUTCHours();
    var currentMinutes = utc8Time.getUTCMinutes();
    var currentSeconds = utc8Time.getUTCSeconds();

    var currentDate = utc8Time.toUTCString();
    var currentWeekday = currentDate.substring(0, 3);
    var currentMonth = currentDate.substring(8, 12);
    var currentYear = utc8Time.getUTCFullYear();
    var currentDay = utc8Time.getUTCDate();

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = (currentHours == 0) ? 12 : currentHours;

    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    $("#clock").html(currentTimeString);
}

$(document).ready(function($) {
    setInterval(updateClock, 1000);
});