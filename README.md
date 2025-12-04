## Overview
This is a dynamic front-end application designed to display real-time weather data for global cities. Users can search for a location and view current conditions, temperature, humidity, wind speed and forecast for 3 days.
This project demonstrates proficiency in asynchronous data fetching, state management in React, and integration with third-party APIs.

## Tech Stack
* **Frontend Framework:** **React.js**
* **Styling:** **Tailwind CSS**
* **API Interaction:** **Standard Fetch**
* **Primary Weather API:** **OpenWeatherMap**
* **Key React Hooks:** 'useState', 'useEffect' (used for managing data fetching and component lifecycle)

  ## API Key Setup
  To run this application, you must obtain an API key from OpenWeatherMap.
  
  1. Sign up
  2. Obtain your unique **API Key**
  3. Create a file named **'.env'** in the root directory of this p
  4. Add your API key to the '.env' file using the format below:
    WEATHER_API_KEY=[Your API key here]
5. Ensure your API fetching logic uses this enviroment variable.

   ## Getting Started
   Follow these steps to  set up and run the application locally.

   ### Prerequisites
   1. Node.js (LTS version recommended)
   2. npm (or yarn)
  
      ### Installation
      1. **Clone the repository:**
       git clone https://github.com/Berserker71130/velocity.git

2. **Navigate to project directory:**
   cd velocity
   
   3. **Install dependencies:**
      npm install
      #OR
      #yarn install

      4. **Start the development server:**
         npm start

         The application will now be running and accessible at 'http://localhost:3000'.

         ## Usage
         1. Enter the name of a city or location into the search bar.
         2. Press Enter or click the Search button.
         3. The application will display the weather data fetched from the API for that specific location


# Screenshots

<img width="1366" height="768" alt="Weather forecast " src="https://github.com/user-attachments/assets/91faa6e4-7921-4813-a877-ce5925724172" />
Weather Forecast 1

<img width="1366" height="768" alt="Weather forecast" src="https://github.com/user-attachments/assets/2ff95c73-ca50-492c-9a27-3ce932c62f42" />
More details to the forecast


