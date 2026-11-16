
function updateClock() {

    // Get current date and time
    const now = new Date();

    // Get hours, minutes and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // AM / PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Display hours
    document.getElementById("hours").textContent = hours;

    // Display minutes
    document.getElementById("minutes").textContent = minutes;

    // Display seconds
    document.getElementById("seconds").textContent = seconds;

    // Display AM / PM
    document.getElementById("period").textContent = ampm;

    // Display date
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", options);
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);
