window.addEventListener('load', (event) => {
  let clock;

  // Use configuration or fallback to defaults
  const config = typeof TIMER_CONFIG !== 'undefined' ? TIMER_CONFIG : {
    eventDate: "2025-09-04 23:19", // Tomorrow at 23:19
    timezone: "Asia/Colombo",
    clockFace: "HourlyCounter",
    playSound: false,
    showNotification: false,
    debug: false
  };

  let currentDate = new Date();
  let targetDate = moment.tz(config.eventDate, config.timezone);

  // Debug logging
  if (config.debug) {
    console.log("Current date:", currentDate);
    console.log("Target date:", targetDate.format());
    console.log("Time difference (seconds):", (targetDate / 1000 - currentDate.getTime() / 1000));
  }

  // Calculate the difference in seconds between the future and current date
  let diff = targetDate / 1000 - currentDate.getTime() / 1000;

  if (diff <= 0) {
    // If remaining countdown is 0, initialize the clock at 0
    clock = $(".clock").FlipClock(0, {
      clockFace: config.clockFace,
      countdown: true,
      autostart: false
    });
    console.log("Event time has already passed!");
    
    // Show notification if enabled
    if (config.showNotification) {
      showCompletionNotification(config);
    }

  } else {
    // Run countdown timer to the target date
    clock = $(".clock").FlipClock(diff, {
      clockFace: config.clockFace,
      countdown: true,
      callbacks: {
        stop: function() {
          console.log("Timer has ended!");
          
          // Play sound if enabled
          if (config.playSound) {
            playNotificationSound(config.soundFile);
          }
          
          // Show notification if enabled
          if (config.showNotification) {
            showCompletionNotification(config);
          }
          
          // Redirect if URL is provided
          if (config.redirectUrl) {
            setTimeout(() => {
              window.location.href = config.redirectUrl;
            }, 3000); // Wait 3 seconds before redirect
          }
        }
      }
    });
  }
});

// Function to play notification sound
function playNotificationSound(soundFile) {
  try {
    const audio = new Audio(soundFile);
    audio.play().catch(error => {
      console.log("Could not play notification sound:", error);
    });
  } catch (error) {
    console.log("Audio not supported or file not found:", error);
  }
}

// Function to show completion notification
function showCompletionNotification(config) {
  if (!config.showNotification) return;
  
  // Check if browser supports notifications
  if ("Notification" in window) {
    // Request permission if not already granted
    if (Notification.permission === "granted") {
      showNotification(config);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          showNotification(config);
        }
      });
    }
  }
  
  // Also show an alert as fallback
  setTimeout(() => {
    alert(config.notificationTitle + "\n" + config.notificationMessage);
  }, 500);
}

// Function to create and show the notification
function showNotification(config) {
  const notification = new Notification(config.notificationTitle, {
    body: config.notificationMessage,
    icon: "./favicon.png",
    badge: "./favicon.png"
  });
  
  // Auto-close notification after 10 seconds
  setTimeout(() => {
    notification.close();
  }, 10000);
}

