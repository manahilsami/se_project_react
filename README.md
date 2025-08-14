# WTWR (What To Wear) - React Frontend

A responsive weather-based clothing recommendation app built with **React** and **Vite**. The app integrates with OpenWeatherMap API to provide real-time weather data and suggests appropriate clothing based on current conditions.

---

## ✨ Features

- 🌤️ **Real-time Weather:** Displays current temperature and weather conditions using OpenWeatherMap API
- � **Smart Clothing Suggestions:** Shows clothing items appropriate for current weather conditions
- 👤 **User Authentication:** Register, login, and manage personal profiles
- ➕ **Add/Delete Items:** Add your own clothing items with images and weather categories
- ❤️ **Like System:** Like and unlike clothing items
- 🌡️ **Temperature Toggle:** Switch between Fahrenheit and Celsius
- � **Responsive Design:** Works on desktop, tablet, and mobile devices
- � **Day/Night Themes:** Different weather icons for day and night conditions

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend server running (see [Backend Repository](https://github.com/manahilsami/se_project_express))

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/manahilsami/se_project_react.git
   cd se_project_react
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   ```

### Backend Setup

This frontend requires the WTWR backend API to be running. See the [backend repository](https://github.com/manahilsami/se_project_express) for setup instructions.

---

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── App/            # Main application component
│   ├── Header/         # Navigation header
│   ├── Main/           # Home page layout
│   ├── Profile/        # User profile page
│   ├── WeatherCard/    # Weather display component
│   ├── ItemCard/       # Clothing item card
│   ├── ItemModal/      # Item detail modal
│   ├── AddItemModal/   # Add new item modal
│   ├── DeleteModal/    # Delete confirmation modal
│   ├── LoginModal/     # User login modal
│   ├── RegisterModal/  # User registration modal
│   ├── EditProfileModal/ # Profile editing modal
│   ├── ModalWithForm/  # Base modal component
│   ├── ProtectedRoute/ # Route protection
│   ├── ClothesSection/ # Clothing display section
│   ├── SideBar/        # Profile sidebar
│   ├── ToggleSwitch/   # Temperature unit toggle
│   └── Footer/         # Page footer
├── contexts/           # React Context providers
│   ├── CurrentTemperatureUnitContext.jsx
│   └── CurrentUserContext.jsx
├── utils/              # Utility functions
│   ├── api.js          # Backend API calls
│   ├── auth.js         # Authentication utilities
│   ├── weatherApi.js   # OpenWeatherMap API integration
│   └── constants.js    # App constants and configurations
├── assets/             # Static assets
│   ├── day/            # Daytime weather icons
│   ├── night/          # Nighttime weather icons
│   ├── logo.svg        # Application logo
│   ├── avatar.png      # Default user avatar
│   ├── modal-close.svg # Modal close icon
│   ├── item-modal-close.svg # Item modal close icon
│   ├── liked-button.svg # Like button icon
│   └── unliked-button.png # Unlike button icon
├── fonts/              # Custom font files
├── vendor/             # Third-party CSS (normalize.css)
└── index.css           # Global styles
```

---

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **OpenWeatherMap API** - Weather data
- **CSS3** - Styling with custom properties
- **Cabinet Grotesk** - Custom typography

---

## 🌐 API Integration

### Weather API

- **Provider:** OpenWeatherMap
- **Features:** Current weather, temperature, conditions, day/night detection
- **Location:** Brooklyn, NY (coordinates can be modified in `constants.js`)

### Backend API

- **Authentication:** JWT-based user authentication
- **Clothing Items:** CRUD operations for user clothing items
- **User Management:** Profile creation and updates
- **Like System:** Item favoriting functionality

---

## 🎨 Assets & Icons

All visual assets are included in the `src/assets/` directory:

- **Weather Icons:** Complete set of day/night weather condition icons (clear, cloudy, rain, snow, thunderstorm)
- **UI Icons:** Modal controls, like buttons, and navigation elements
- **Branding:** Custom WTWR logo and default user avatar
- **Fonts:** Cabinet Grotesk font family for consistent typography

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop:** 1280px and above
- **Tablet:** 768px - 1279px
- **Mobile:** 320px - 767px

---

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is part of the Practicum by Yandex Web Development program.

---

## 🔗 Related Projects

- [Backend Repository](https://github.com/manahilsami/se_project_express) - WTWR Express.js API server
