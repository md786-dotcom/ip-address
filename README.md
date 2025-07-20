# IPScope - IP Address Tracker

🌐 **Live Demo: [ipscope.online](https://ipscope.online)**

IPScope is a modern, responsive IP address tracking application that allows users to search for any IP address or domain and view its geographical location on an interactive map. Built with vanilla JavaScript and powered by the IPify API, it provides instant location data with a beautiful, intuitive interface.

![IPScope Screenshot](images/screenshot.png)

## 🚀 Features

- **Real-time IP Tracking**: Instantly locate any IP address or domain
- **Auto-detect Current IP**: Automatically displays your current IP location on page load
- **Interactive Map**: Visual representation using Leaflet.js with custom markers
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, gradient-based design with smooth animations
- **Fast Performance**: Optimized for quick loading and instant searches

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Mapping**: [Leaflet.js](https://leafletjs.com/) - Open-source JavaScript library for interactive maps
- **Icons**: [Font Awesome](https://fontawesome.com/) - Icon toolkit
- **API**: [IPify Geolocation API](https://geo.ipify.org/) - IP geolocation service
- **Hosting**: [Vercel](https://vercel.com/) - Modern deployment platform
- **Domain**: Custom domain at [ipscope.online](https://ipscope.online)

## 📋 Prerequisites

To run this project locally, you'll need:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- An API key from [IPify](https://geo.ipify.org/)
- Basic web server (for local development)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/md786-dotcom/ip-address.git
   cd ip-address
   ```

2. **Get your IPify API Key**
   - Sign up at [geo.ipify.org](https://geo.ipify.org/)
   - Get your free API key
   - Replace the API key in `script.js`:
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```

3. **Run locally**
   - Using Python:
     ```bash
     python -m http.server 8000
     ```
   - Using Node.js:
     ```bash
     npx serve
     ```
   - Or simply open `index.html` in your browser

## 📁 Project Structure

```
ip-address-tracker/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── vercel.json         # Vercel deployment configuration
├── images/             # Image assets
│   ├── favicon-32x32.png
│   ├── icon-location.svg
│   └── pattern-bg-desktop.png
└── README.md          # Project documentation
```

## 🌐 API Integration

IPScope uses the IPify Geolocation API to fetch location data. The API provides:

- **IP Address**: The queried IP address
- **Location**: City, region, country, and postal code
- **Coordinates**: Latitude and longitude for map positioning
- **Timezone**: UTC offset and timezone information
- **ISP**: Internet Service Provider details

### API Endpoints Used:

```javascript
// For IP address search
https://geo.ipify.org/api/v2/country,city?apiKey=YOUR_KEY&ipAddress=IP_ADDRESS

// For domain search
https://geo.ipify.org/api/v2/country,city?apiKey=YOUR_KEY&domain=DOMAIN_NAME
```

## 🚀 Deployment

The project is deployed on Vercel and accessible at [ipscope.online](https://ipscope.online).

### Deploy Your Own:

1. Fork this repository
2. Sign up for [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Deploy with one click!

### Vercel Configuration:

The `vercel.json` file is already configured for optimal static hosting:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "**",
      "use": "@vercel/static"
    }
  ]
}
```

## 💡 Usage

1. **View Your IP**: The app automatically detects and displays your current IP location
2. **Search IP Address**: Enter any valid IP address (e.g., `8.8.8.8`)
3. **Search Domain**: Enter any domain name (e.g., `google.com`)
4. **View Details**: See location, timezone, and ISP information
5. **Interactive Map**: Click and drag to explore the map

## 🎨 Customization

### Colors
Modify CSS variables in `styles.css`:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --dark-bg: #1a1a2e;
    --card-bg: #16213e;
    --accent-color: #7c3aed;
}
```

### API Key
Update in `script.js`:
```javascript
const API_KEY = 'your_api_key_here';
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created by [md786-dotcom](https://github.com/md786-dotcom)

## 🙏 Acknowledgments

- [IPify](https://www.ipify.org/) for the geolocation API
- [Leaflet.js](https://leafletjs.com/) for the mapping library
- [Font Awesome](https://fontawesome.com/) for the icons
- [Vercel](https://vercel.com/) for hosting

---

⭐ Star this repo if you find it helpful!