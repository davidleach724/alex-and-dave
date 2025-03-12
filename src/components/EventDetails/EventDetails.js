import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaTshirt,
  FaCar,
  FaUtensils,
  FaMusic,
} from "react-icons/fa";

const eventDetails = [
  {
    icon: <FaClock size={24} />,
    title: "Date & Time",
    content: "Saturday, August 30, 2025 at 4:00 PM",
  },
  {
    icon: <FaMapMarkerAlt size={24} />,
    title: "Location",
    content: "Ratio Beerworks – Overland, 2030 S Cherokee St, Denver, CO",
  },
  {
    icon: <FaTshirt size={24} />,
    title: "Dress Code",
    content:
      "Garden Party Chic – Light fabrics, fun prints, relaxed elegance. No formalwear or high heels.",
  },
  {
    icon: <FaCar size={24} />,
    title: "Getting There",
    content:
      "Street parking is available, but we recommend using a rideshare to fully enjoy the evening.",
  },
  {
    icon: <FaUtensils size={24} />,
    title: "Food & Drinks",
    content:
      "Mukja Food Truck will be serving delicious bites with vegetarian options and a kid’s menu. Open beer bar provided by Ratio!",
  },
  {
    icon: <FaMusic size={24} />,
    title: "What to Expect",
    content:
      "Live music, food trucks, beer, and fun patio activities like yard games. Check the weather and bring a light jacket!",
  },
];

export default function EventDetails() {
  const [isMobile, setIsMobile] = useState(false);

  useState(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="event-details-section">
      <h2 className="event-details-title">📍 Event Details</h2>

      {isMobile ? (
        <div className="event-details-mobile">
          {eventDetails.map((item, index) => (
            <details key={index} className="event-details-item mobile">
              <summary className="event-details-summary">{item.title}</summary>
              <p className="event-details-content">{item.content}</p>
            </details>
          ))}
        </div>
      ) : (
        <div className="event-details-grid">
          {eventDetails.map((item, index) => (
            <div key={index} className="event-details-card">
              <div className="event-details-icon">{item.icon}</div>
              <h3 className="event-details-card-title">{item.title}</h3>
              <p className="event-details-card-content">{item.content}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
