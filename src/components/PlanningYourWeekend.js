import { useState, useEffect } from "react";
import {
  FaCoffee,
  FaCocktail,
  FaUtensils,
  FaTree,
  FaHiking,
  FaLandmark,
  FaHotel,
} from "react-icons/fa";

export default function PlanningYourWeekend() {
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedHotels, setExpandedHotels] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleDetail = (index) => {
    if (index === 5) {
      setExpandedHotels(!expandedHotels);
    } else {
      setOpenIndex(openIndex === index ? null : index);
      setExpandedHotels(false);
    }
  };

const weekendActivities = [
  {
    icon: <FaCoffee size={24} />, 
    title: "Beverages",
    content: (
      <ul>
        <ul><a href="https://queencitycollectivecoffee.com/" target="_blank" rel="noopener noreferrer">Queen City Coffee</a></ul>
        <ul><a href="https://esphifi.co/" target="_blank" rel="noopener noreferrer">ESP Cocktail Bar</a></ul>
        <ul><a href="https://www.odellbrewing.com/locations/fivepoints/" target="_blank" rel="noopener noreferrer">Odell Brewing Five Points Brew House</a></ul>
        <ul><a href="https://www.trvebrewing.com/" target="_blank" rel="noopener noreferrer">TRVE Brewing Company</a></ul>
      </ul>
    ),
  },
  {
    icon: <FaUtensils size={24} />, 
    title: "Food",
    content: (
      <ul>
        <ul><a href="https://www.mchcco.com/" target="_blank" rel="noopener noreferrer">Music City Hot Chicken Denver at TRVE</a></ul>
        <ul><a href="https://eatleven.com/" target="_blank" rel="noopener noreferrer">Leven Deli Co</a></ul>
        <ul><a href="https://www.stowawaydenver.com/" target="_blank" rel="noopener noreferrer">Stowaway Kitchen (brunch, recommend reservation)</a></ul>
        <ul><a href="https://www.misterosodenver.com/" target="_blank" rel="noopener noreferrer">Mister Oso</a></ul>
      </ul>
    ),
  },
  {
    icon: <FaTree size={24} />, 
    title: "Parks",
    content: (
      <ul>
        <ul><a href="https://maps.app.goo.gl/LMFkP9cAn666fmjs5?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer">Wash Park</a></ul>
        <ul><a href="https://maps.app.goo.gl/BvKktM1XfVfv8zoi8?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer">City Park</a></ul>
        <ul><a href="https://maps.app.goo.gl/b7SDTzfs6d6SkJaQA?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer">Sloans Lake</a></ul>
      </ul>
    ),
  },
  {
    icon: <FaHiking size={24} />, 
    title: "Hikes",
    content: (
      <ul>
        <ul><a href="https://www.alltrails.com/trail/us/colorado/beaver-brook-chavez-trail-loop" target="_blank" rel="noopener noreferrer">Bear Brook</a></ul>
        <ul><a href="https://www.alltrails.com/trail/us/colorado/red-rocks-trading-post-trail?sh=7tcbkh" target="_blank" rel="noopener noreferrer">Red Rocks Trading Post Trail</a></ul>
        <ul><a href="https://alltrails.com/parks/us/colorado/golden-gate-canyon-state-park" target="_blank" rel="noopener noreferrer">Golden Gate Canyon State Park</a></ul>
      </ul>
    ),
  },
  {
    icon: <FaLandmark size={24} />, 
    title: "Museums",
    content: (
      <ul>
        <ul><a href="https://www.denverartmuseum.org/en" target="_blank" rel="noopener noreferrer">Denver Art Museum</a></ul>
        <ul><a href="https://clyffordstillmuseum.org/" target="_blank" rel="noopener noreferrer">Clyfford Still Museum</a></ul>
        <ul><a href="https://www.dmns.org/" target="_blank" rel="noopener noreferrer">Denver Museum of Nature and Science</a></ul>
      </ul>
    ),
  },
  {
    icon: <FaHotel size={24} />, 
    title: "Hotels & Lodging",
    content: (
      expandedHotels ? (
        <>
        <div className="weekend-details-icon"><FaHotel size={24} /></div>
        <h3 className="weekend-details-card-title">Hotels & Lodging</h3>
        <p className="collapse-text">Click to collapse</p>
          <p>We don’t have a reserved room block, but we recommend checking out Airbnb for the best options. If you need help finding a place, just let us know! Some of the best areas to stay with plenty to do nearby are:</p>
          <ul>
            <ul>Baker / South Broadway – A lively strip full of vintage shops, dive bars, and great restaurants.</ul>
            <ul>RiNo (River North) – Denver’s arts district, packed with breweries, murals, and trendy eateries.</ul>
            <ul>Capitol Hill – Historic charm meets a buzzing nightlife scene with cafes, music venues, and museums.</ul>
            <ul>The Highlands – A mix of modern and classic, offering scenic views, top-tier restaurants, and boutique shopping.</ul>
          </ul>
        </>
      ) : (
        <p>Click for more information</p>
      )
    ),
  },
];



  return (
    <section className="weekend-section">
      <h2 className="section-header">Planning Your Weekend</h2>
      {expandedHotels ? (
        <div className="expanded-hotels show" onClick={() => setExpandedHotels(false)}>{weekendActivities[5].content}</div>
      ) : (
        <div className="weekend-details-grid">
          {weekendActivities.map((item, index) => (
            <div key={index} className="weekend-details-card" onClick={() => toggleDetail(index)}>
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
