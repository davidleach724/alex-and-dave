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
    content: "Ratio Beerworks - Overland, 2030 S Cherokee St, Denver, CO",
  },
  {
    icon: <FaTshirt size={24} />,
    title: "What to Wear",
    content:
      "Sundresses, slacks, button-downs, or anything stylish but relaxed! We want you to be comfortable and have fun.",
  },
  {
    icon: <FaCar size={24} />,
    title: "Getting There",
    content:
      "Street parking is available, but we recommend using a rideshare to fully enjoy yourselves.",
  },
  {
    icon: <FaUtensils size={24} />,
    title: "Food & Drinks",
    content:
      "Mukja Food Truck will be serving delicious bites with vegetarian and kids options. Open beer bar and N/A drinks provided by Ratio!",
  },
  {
    icon: <FaMusic size={24} />,
    title: "What to Expect",
    content:
      "Live music, food truck, beer, and outdoor games. Check the weather in case you need a light jacket!",
  },
];

export default function EventDetails() {
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useState(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="event-details-section">
      <h2 className="section-header">Event Details</h2>{" "}
      {/* Add class for styling */}
      {isMobile ? (
        <div className="event-details-mobile">
          {eventDetails.map((item, index) => (
            <div
              key={index}
              className={`event-details-item mobile ${
                openIndex === index ? "open" : ""
              }`}
              onClick={() => toggleDetail(index)}
              style={{ textAlign: "center" }} // Center content
            >
              <div className="section-header">
                <div className="event-details-icon">{item.icon}</div>
                <h3 className="event-details-summary">{item.title}</h3>
              </div>
              <div
                className="event-details-content"
                style={{ maxHeight: openIndex === index ? "200px" : "0" }}
              >
                <p>{item.content}</p>
              </div>
            </div>
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
