import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Countdown from "react-countdown";
import "./App.css";

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
    </span>
  );
};

const App = () => {
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar ${showNav ? "slide-in" : "slide-out"}`}>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul
          className={`${
            menuOpen || window.innerWidth > 768 ? "show desktop-menu" : ""
          }`}
        >
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="event-details"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Event Details
            </Link>
          </li>
          <li>
            <Link
              to="weekend"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Planning Your Weekend
            </Link>
          </li>
          <li>
            <Link
              to="registry"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Registry
            </Link>
          </li>
          <li>
            <Link
              to="rsvp"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              RSVP
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section with Carousel */}
      <header className="hero">
        <div className="overlay">
          <h1>Alex Schwartz & Dave Leach</h1>
          <div className="countdown">
            <Countdown
              date={new Date("2025-08-30T16:00:00-06:00")}
              renderer={renderer}
            />
          </div>
        </div>
      </header>

      {/* Sections */}
      <section id="event-details">
        <h2>Event Details</h2>
        <p>Lorem ipsum dolor sit amet...</p>
        <p>Lorem ipsum dolor sit amet...</p>
      </section>

      <section id="weekend">
        <h2>Planning Your Weekend</h2>
        <ul>
          <li>
            <a href="https://maps.google.com" target="_blank">
              Restaurant 1
            </a>
          </li>
          <li>
            <a href="https://maps.google.com" target="_blank">
              Hike 1
            </a>
          </li>
        </ul>
      </section>

      <section id="registry">
        <h2>Registry</h2>
        <p>Coming soon...</p>
      </section>

      <section id="rsvp">
        <h2>RSVP</h2>
        <p>
          Text us at:{" "}
          <button onClick={() => navigator.clipboard.writeText("123-456-7890")}>
            Copy Number
          </button>
        </p>
      </section>
    </div>
  );
};

export default App;
