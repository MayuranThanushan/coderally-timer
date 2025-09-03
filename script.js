window.addEventListener('load', (event) => {
  let clock;

  // Use configuration or fallback to defaults
  const config = typeof TIMER_CONFIG !== 'undefined' ? TIMER_CONFIG : {
    clockFace: "HourlyCounter",
    playSound: false,
    showNotification: false,
    debug: false
  };

  // Set countdown to 24 hours (24 * 60 * 60 = 86400 seconds)
  const countdownSeconds = 24 * 60 * 60;

  // Debug logging
  if (config.debug) {
    console.log("Starting a 24-hour countdown.", countdownSeconds, "seconds");
  }

  // Initialize the countdown timer
  clock = $(".clock").FlipClock(countdownSeconds, {
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

