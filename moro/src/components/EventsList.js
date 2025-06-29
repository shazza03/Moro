import React from "react";

const EventsList = () => {
  const events = [
    {
      id: 1,
      title: "Client Presentation",
      time: "10:00 AM",
      date: "Tomorrow",
      location: "164 Oxford street",
      type: "presentation",
    },
    {
      id: 2,
      title: "Lunch with Temi",
      time: "12:30 PM",
      date: "Tomorrow",
      location: "Outside at Lantana Cafe",
      type: "personal",
    },
    // {
    //   id: 3,
    //   title: "Lunch with Sarah",
    //   time: "12:30 PM",
    //   date: "Tomorrow",
    //   location: "Downtown Cafe",
    //   type: "personal",
    // },
  ];

  const getEventIcon = (type) => {
    switch (type) {
      case "meeting":
        return "👥";
      case "presentation":
        return "📊";
      case "deadline":
        return "⏰";
      case "personal":
        return "🍽️";
      case "work":
        return "💻";
      default:
        return "📅";
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case "meeting":
        return "bg-blue-100 border-blue-300";
      case "presentation":
        return "bg-purple-100 border-purple-300";
      case "deadline":
        return "bg-red-100 border-red-300";
      case "personal":
        return "bg-green-100 border-green-300";
      case "work":
        return "bg-orange-100 border-orange-300";
      default:
        return "bg-gray-100 border-gray-300";
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Tomorrow's Events
      </h2>
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className={`p-4 rounded-lg border-2 ${getEventColor(
              event.type
            )} shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{getEventIcon(event.type)}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{event.title}</h3>
                <div className="text-sm text-gray-600 mt-1">
                  <div className="flex items-center space-x-2">
                    <span>🕐 {event.time}</span>
                    <span>📍 {event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
