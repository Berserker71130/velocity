
# ☀️ Modern Weather Dashboard App

A responsive, dark-themed weather application designed to provide comprehensive, up-to-date meteorological data using a structured, multi-panel dashboard layout.

## ✨ Features

This application offers a professional and user-friendly experience for checking the weather in any major city:

  * *Structured Dashboard Layout:* Implements a modern *two-column grid* (2/3 data panel, 1/3 forecast panel) for clear information hierarchy.
  * *Dark Theme:* Features a sleek, sophisticated *dark color palette* (bg-slate-900 and bg-gray-800) for visual comfort and focus.
  * *Real-Time Data Fetching:* Utilizes the *OpenWeatherMap API* to fetch current conditions and forecast data.
  * *Detailed Forecast:* Displays an *Hourly Forecast* alongside the main current conditions and a multi-day *7-Day Forecast* list.
  * *Metric/Imperial Toggle:* Allows users to easily switch temperature readings between *Celsius (°C)* and *Fahrenheit (°F)*.
  * *Detailed Air Conditions:* Includes a dedicated section displaying metrics like *Humidity, Wind Speed, Real Feel, and UV Index* (UV data is currently a mock for design purposes).
  * *Responsive Design:* Styled using *Tailwind CSS* to ensure a beautiful and functional experience across desktop and mobile devices.

-----

## 🛠️ Technologies Used

  * *Frontend Framework:* React
  * *Styling:* Tailwind CSS (utility-first approach)
  * *API:* OpenWeatherMap API
  * *State Management:* React Hooks (useState)

-----

## 🚀 Getting Started

Follow these instructions to set up and run the Weather App on your local machine.

### Prerequisites

You need to have *Node.js* (LTS version recommended) and *npm* (or yarn) installed.

### Installation

1.  *Clone the Repository:*

    bash
    git clone https://github.com/Berserker71130/velocity.git
    cd velocity
    

2.  *Install Dependencies:*

    
    npm install
    # or
    yarn install
    

3.  *API Key Configuration:*
    The application uses the OpenWeatherMap API key hardcoded in the WeatherApp.jsx file. For a production environment.
    (Note: Current key is c749497919459389bb1e8db37d371711)

### Running the Application

1.  *Start the Development Server:*
    bash
    npm start
    # or
    yarn start
    
    The application will launch in your browser at http://localhost:3000.

-----

## 📂 Project Structure

The core functionality and display are managed within a single, stateful component:


weather-app/
├── src/
│   ├── WeatherApp.jsx    # Main component containing all state, fetching logic, and the UI
│   ├── index.css         # Includes Tailwind directives
│   └── ...
├── package.json
└── tailwind.config.js


-----

## 🎨 Design Overview

The main display uses a responsive grid:

  * *Desktop View:* A grid-cols-3 layout with the main weather/hourly forecast taking up col-span-2 on the left, and the 7-day forecast taking col-span-1 on the right.
  * *Mobile View:* The layout collapses into a single vertical column (grid-cols-1).

-----
# Screenshots
<img width="1366" height="768" alt="Weather APP" src="https://github.com/user-attachments/assets/91725fd5-9319-4e35-90c2-48a86af44e8a" />

<img width="1366" height="768" alt="WEather app more details" src="https://github.com/user-attachments/assets/4abcce7f-39f9-4ba2-9419-a99c4fc86c76" />

