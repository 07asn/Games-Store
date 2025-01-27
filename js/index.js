
    // Set the end date for the offer
    const offerEndDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now

    function updateTimer() {
        const now = new Date().getTime();
        const distance = offerEndDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the HTML content
        document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

        // If the countdown ends, display a message
        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("countdownTimer").innerHTML = "<h4>Offer has ended!</h4>";
        }
    }

    // Update the timer every second
    const timerInterval = setInterval(updateTimer, 1000);

// whatsapp

// Opens sticky-chat automatically within 5 seconds of page load
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.getElementById("offchat-menu").checked = true; // يبحث عن عنصر HTML يحتوي على المعرف
    }, 5000);
  });