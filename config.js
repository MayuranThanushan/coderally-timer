// CodeRally Timer Configuration - NINJA THEME
const TIMER_CONFIG = {
  // Event Details
  eventName: "CodeRally Matrix Challenge 2025",
  eventDate: "2025-09-04 23:19", // Exactly 24 hours from now
  timezone: "Asia/Colombo",
  
  // Clock Settings
  clockFace: "HourlyCounter", // Simple Hours:Minutes:Seconds
  showDays: false, // No days display
  
  // Visual Settings - NINJA THEME
  theme: {
    backgroundColor: "#000", // Pure black background
    textColor: "#03FF8C", // Bright green for text
    clockBackground: "#000", // Black for clock
    clockTextColor: "#03FF8C", // Bright green for clock digits
    accentColor: "#FFF", // White accent
    shadowColor: "#001a0f" // Dark green shadows
  },
  
  // Sound Settings
  playSound: true,
  soundFile: "./assets/notification.mp3", // Add your sound file here
  
  // Notification Settings
  showNotification: true,
  notificationTitle: "CodeRally Event Started!",
  notificationMessage: "The CodeRally event has begun. Good luck to all participants!",
  
  // Auto-refresh when countdown ends
  redirectUrl: null, // Set to a URL to redirect when timer ends, or null to stay on page
  
  // Debug mode
  debug: false
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TIMER_CONFIG;
}
