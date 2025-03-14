import { useState, useEffect } from "react";
import {
  FaCoffee,
  FaCocktail,
  FaUtensils,
  FaTree,
  FaHiking,
  FaLandmark,
} from "react-icons/fa";

const weekendActivities = [
  {
    icon: <FaCoffee size={24} />,
    title: "Beverages",
    content: (
      <ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://queencitycollectivecoffee.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Queen City Coffee (Baker & RiNo)
          </a>
        </ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://esphifi.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ESP Cocktail Bar (Baker)
          </a>
        </ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://www.odellbrewing.com/locations/fivepoints/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Odell Brewing Five Points Brew House (RiNo)
          </a>
        </ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://www.trvebrewing.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TRVE Brewing Company (Baker)
          </a>
        </ul>
      </ul>
    ),
  },
  {
    icon: <FaUtensils size={24} />,
    title: "Food",
    content: (
      <ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://www.mchcco.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Music City Hot Chicken Denver at TRVE Brewing - Baker
          </a>
        </ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://eatleven.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leven Deul Co - Baker
          </a>
        </ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://www.stowawaydenver.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stowaway Kitchen (brunch, recommend reservation) - RiNo
          </a>
        </ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://www.misterosodenver.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mister Oso - RiNo or Wash Park
          </a>
        </ul>
      </ul>
    ),
  },
  {
    icon: <FaTree size={24} />,
    title: "Parks",
    content: (
      <ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://maps.app.goo.gl/LMFkP9cAn666fmjs5?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wash Park
          </a>
        </ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://maps.app.goo.gl/BvKktM1XfVfv8zoi8?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
          >
            City Park
          </a>
        </ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://maps.app.goo.gl/b7SDTzfs6d6SkJaQA?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sloans Lake
          </a>
        </ul>
      </ul>
    ),
  },
  {
    icon: <FaHiking size={24} />,
    title: "Hikes",
    content: (
      <ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://www.alltrails.com/trail/us/colorado/beaver-brook-chavez-trail-loop"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bear Brook
          </a>
        </ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://www.alltrails.com/trail/us/colorado/red-rocks-trading-post-trail?sh=7tcbkh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Red Rocks Trading Post Trail
          </a>
        </ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://alltrails.com/parks/us/colorado/golden-gate-canyon-state-park"
            target="_blank"
            rel="noopener noreferrer"
          >
            Golden Gate Canyon State Park
          </a>
        </ul>
      </ul>
    ),
  },
  {
    icon: <FaLandmark size={24} />,
    title: "Museums",
    content: (
      <ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://www.denverartmuseum.org/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Denver Art Museum
          </a>
        </ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://clyffordstillmuseum.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clyfford Still Museum
          </a>
        </ul>
        <ul style={{ marginBottom: "10px" }}>
          <a
            href="https://www.dmns.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Denver Museum of Nature and Science
          </a>
        </ul>
      </ul>
    ),
  },
];

export default function PlanningYourWeekend() {
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="weekend-section">
      <h2 className="section-header">Planning Your Weekend</h2>
      {isMobile ? (
        <div className="weekend-details-mobile">
          {weekendActivities.map((item, index) => (
            <div
              key={index}
              className={`weekend-details-item mobile ${
                openIndex === index ? "open" : ""
              }`}
              onClick={() => toggleDetail(index)}
              style={{ textAlign: "center" }}
            >
              <div className="section-header">
                <div className="weekend-details-icon">{item.icon}</div>
                <h3 className="weekend-details-summary">{item.title}</h3>
              </div>
              <div
                className="weekend-details-content"
                style={{ maxHeight: openIndex === index ? "200px" : "0" }}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="weekend-details-grid">
          {weekendActivities.map((item, index) => (
            <div key={index} className="weekend-details-card">
              <div className="weekend-details-icon">{item.icon}</div>
              <h3 className="weekend-details-card-title">{item.title}</h3>
              <div className="weekend-details-card-content">{item.content}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
