import React, { useEffect, useState } from "react";

const WeatherNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [weatherData, setWeatherData] = useState({
    condition: "Rain",
    temperature: "10°C",
    icon: "🌧️",
  });

  const [transportData, setTransportData] = useState({
    destination: "Client Presentation",
    travelTime: "37 minutes",
    departureTime: "9:25 AM",
    icon: "🚂",
  });

  useEffect(() => {
    // First notification after 2000 seconds
    const secondTimer = setTimeout(() => {
      setNotifications((prev) => [...prev, { id: 1, type: "weather" }]);
    }, 4000);

    // Second notification after 4000 seconds
    const firstTimer = setTimeout(() => {
      setNotifications((prev) => [...prev, { id: 2, type: "transport" }]);
    }, 2000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

  const handleClose = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  if (notifications.length === 0) {
    return null;
  }

  return (
    <>
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          className="fixed top-6 right-4 z-50 animate-slide-in"
          style={{ top: `${6 + index * 20}rem` }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg max-w-sm border-l-4 border-yellow-400">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">
                  {notification.type === "weather"
                    ? weatherData.icon
                    : transportData.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    {notification.type === "weather"
                      ? "Weather Alert"
                      : "Transport Alert"}
                  </h3>
                  <p className="text-sm opacity-90">
                    {notification.type === "weather"
                      ? "Tomorrow's Forecast"
                      : "Meeting Alert"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleClose(notification.id)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-2">
              {notification.type === "weather" ? (
                <></>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-90">Destination:</span>
                    <span className="font-semibold">
                      {transportData.destination}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-90">Travel Time:</span>
                    <span className="font-semibold">
                      {transportData.travelTime}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-90">Leave by:</span>
                    <span className="font-semibold">
                      {transportData.departureTime}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-white border-opacity-20">
              <p className="text-sm opacity-90">
                {notification.type === "weather"
                  ? `Don't forget your umbrella - ${weatherData.condition} is forecast for your outdoor lunch meeting at Lantana Cafe!`
                  : `Leave by ${transportData.departureTime} to arrive on time for your meeting in Oxford Circus. Underground is running normally, ${transportData.travelTime} travel time.`}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WeatherNotification;
