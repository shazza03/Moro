import React from "react";
import "./App.css";
import EventsList from "./components/EventsList";
import WeatherNotification from "./components/WeatherNotification";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Moro</h1>
          <p className="text-gray-600">Plan your tomorrow</p>
        </header>

        <main>
          <EventsList />
        </main>
      </div>

      <WeatherNotification />
    </div>
  );
}

export default App;
