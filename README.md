# CodeRally Matrix Challenge - Countdown Timer 🔋

A sleek, Matrix-themed countdown timer for CodeRally events featuring cyberpunk aesthetics, glowing green effects, and digital rain particle animations.

## 🔋 Matrix Theme Features

- **� Cyberpunk Design**: Pure black backgrounds with bright green (#03FF8C) matrix code aesthetic
- **⚡ Digital Glow**: All elements have green digital glow effects like the Matrix
- **🌟 Code Rain**: Interactive particle system with digital elements
- **👨‍� Terminal Feel**: Monospace fonts for authentic hacker/coder experience
- **🎯 Precision Digital**: Clean white accents for contrast and readability

## Features

- ⏰ **Flip Clock Display**: Elegant animated countdown with customizable clock faces
- 🌍 **Timezone Support**: Configure any timezone for your event
- 🔔 **Notifications**: Browser notifications and sound alerts when countdown ends
- ✨ **Particle Effects**: Interactive particle system background
- 🌊 **Animated Waves**: Smooth CSS wave animations
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- ⚙️ **Easy Configuration**: Simple config file for quick customization

## Quick Start

1. Clone or download this repository
2. Edit `config.js` to set your event date and preferences
3. Open `index.html` in a web browser
4. Optionally add a notification sound file to the `assets` folder

## Configuration

Edit the `config.js` file to customize your countdown:

```javascript
const TIMER_CONFIG = {
  eventName: "Your Event Name",
  eventDate: "2025-12-31 23:59", // YYYY-MM-DD HH:mm
  timezone: "Asia/Colombo",
  clockFace: "HourlyCounter", // Options: DailyCounter, HourlyCounter, MinuteCounter
  playSound: true,
  showNotification: true,
  // ... more options
};
```

## Clock Face Options

- **DailyCounter** (with days hidden): Shows Hours (00-23), Minutes, Seconds - **Current Setup**
- **DailyCounter**: Shows Days, Hours, Minutes, Seconds (full format)  
- **HourlyCounter**: Shows cumulative Hours, Minutes, Seconds (hours can exceed 24)
- **MinuteCounter**: Shows Minutes, Seconds (for very short countdowns)

## Adding Sound Notifications

1. Add your sound file (MP3, WAV, etc.) to the `assets` folder
2. Update the `soundFile` path in `config.js`
3. Set `playSound: true` in the configuration

## Customization

### Changing Colors
Modify the `theme` section in `config.js`:

```javascript
theme: {
  backgroundColor: "#000000",
  textColor: "#ffffff",
  clockBackground: "#ffffff",
  clockTextColor: "#000000"
}
```

### Particle Effects
The particle system can be customized in `particles.js`. You can:
- Change particle colors
- Adjust particle count
- Modify interaction effects
- Set different shapes

### Wave Animations
Wave styles can be modified in `style.css` under the `.waves` and `.parallax` sections.

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Android Chrome)
- Requires JavaScript enabled

## Files Structure

```
├── index.html          # Main HTML file
├── config.js           # Configuration settings
├── script.js           # Main countdown logic
├── particles.js        # Particle system setup
├── style.css           # Main styles
├── flipclock.css       # Flip clock styles
├── assets/             # Sound files and additional assets
├── CodeRally_white.png # Logo
├── favicon.png         # Favicon
└── README.md           # This file
```

## Troubleshooting

### Countdown shows 00:00:00
- Check that your target date is in the future
- Verify the timezone setting matches your intended timezone
- Check browser console for any error messages

### Sound not playing
- Ensure the sound file path is correct in `config.js`
- Some browsers require user interaction before playing audio
- Check that the audio file format is supported

### Particles not showing
- Check browser console for errors
- Ensure you have a stable internet connection (particles library loads from CDN)
- Try refreshing the page

## License

Apache License 2.0 - see LICENSE file for details

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For issues and questions, please open an issue on the GitHub repository.

---

Made with ❤️ for CodeRally events
# Coderally6.0-timer
