# WTWR (What To Wear) - React + Vite

This is a simple weather-based clothing app built with **React** and **Vite**. It lets you check the weather and see what clothes you might want to wear. You can also add and delete clothing items, and view your profile.

---

## Features

- 🌤️ **Weather Card:** Shows the current temperature and weather condition for your city.
- 🧢 **Clothing Suggestions:** See a list of clothing items that match the weather.
- ➕ **Add New Clothes:** Add your own clothing items with an image and weather type.
- 🗑️ **Delete Items:** Remove clothing items you don’t want anymore.
- 👤 **Profile Page:** View your items and profile info.
- 🌡️ **Toggle °F/°C:** Switch between Fahrenheit and Celsius.

---

## How to Run

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the app:**

   ```bash
   npm run dev
   ```

   The app will open at [http://localhost:5173](http://localhost:5173) (or whatever port Vite picks).

3. **(Optional) Run the backend:**
   - This project expects a backend running at `http://localhost:3001` (see `src/utils/api.js`).
   - You can use `json-server` with the provided `db.json`:
     ```bash
     npx json-server --watch db.json --port 3001
     ```

---

## Project Structure

```
src/
  components/      # React components (Header, Main, Profile, etc.)
  contexts/        # React context for temperature unit
  utils/           # API and weather helpers
  assets/          # Images and icons
  index.css        # Global styles
```

---

## Main Files

- `App.jsx` - Main app logic and routing
- `Main.jsx` - Home page with weather and clothing cards
- `Profile.jsx` - User profile and clothing management
- `ItemModal.jsx` - Modal for viewing and deleting items
- `AddItemModal.jsx` - Modal for adding new clothing
- `api.js` - Handles API requests to backend

---

## Credits

- Developed by Manahil Sami (2025)
- Inspired by Practicum's WTWR project

---

## Notes

- This is a college project, so some features are basic.
- The weather API and backend are mocked for local development.
- Feel free to fork and improve!

---
