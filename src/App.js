import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Countdown from "react-countdown";
import EventDetails from "./components/EventDetails";
import PlanningYourWeekend from "./components/PlanningYourWeekend";
import { FaCopy, FaSms } from "react-icons/fa";
import "intersection-observer"; // Correctly import the polyfill
import "./App.css";

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
    </span>
  );
};

const copyToClipboard = (text, setCopied) => {
  navigator.clipboard.writeText(text);
  setCopied(text);
  setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
};

const App = () => {
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(null);
  const lastScrollY = useRef(window.scrollY);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (window.scrollY < lastScrollY.current) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
        if (menuOpen && window.scrollY > lastScrollY.current + 10) {
          setMenuOpen(false);
        }
        lastScrollY.current = window.scrollY;
      });
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      observer.disconnect();
    };
  }, [menuOpen]);

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`navbar ${showNav ? "slide-in" : "slide-out"}`}
        ref={menuRef}
      >
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
              to="event-details-section"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Event Details
            </Link>
          </li>
          <li>
            <Link
              to="weekend-section"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Planning Your Weekend
            </Link>
          </li>
          <li>
            <Link
              to="registry-section"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Registry
            </Link>
          </li>
          <li>
            <Link
              to="rsvp-section"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              RSVP
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section with Countdown */}
      <div className="parallax-section" id="home">
        <div className="hero-content">
          <h1>Alex Schwartz & Dave Leach</h1>
          <div className="countdown">
            <div className="hero-description">
              <p>
                Join us for an outdoor celebration with music, a food truck,
                craft beer, and games as we celebrate following our private
                ceremony!
              </p>
            </div>
            <Countdown
              date={new Date("2025-08-30T16:00:00-06:00")}
              renderer={renderer}
            />
          </div>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="parallax-section" id="event-details-section">
        <section>
          <EventDetails />
        </section>
      </div>

      {/* Planning Your Weekend Section */}
      <div className="parallax-section" id="weekend-section">
        <section>
          <PlanningYourWeekend />
        </section>
      </div>

      {/* Registry Section */}
      <div className="parallax-section" id="registry-section">
        <section className="registry-section">
          <h2 className="section-header">Registry</h2>
          <p className="registry-message">
            Your love and support mean the world to us. If you'd like to give a
            gift, we kindly invite you to contribute to our future together. You
            can do so through Venmo, PayPal, CashApp, or by check. We appreciate
            your kindness and generosity as we begin this new chapter.
          </p>
          <div className="registry-links">
            <a
              href="https://venmo.com/u/davidleachmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="registry-button"
            >
              Venmo
            </a>
            <a
              href="https://www.paypal.com/paypalme/davidleachmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="registry-button"
            >
              PayPal
            </a>
            {/* <a
              href="YOUR_ZELLE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="registry-button"
            >
              Zelle
            </a> */}
            <a
              href="https://cash.app/$davidleachmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="registry-button"
            >
              CashApp
            </a>
          </div>
        </section>
      </div>

      {/* RSVP Section */}
      <div className="parallax-section" id="rsvp-section">
        <section style={{ textAlign: "center" }}>
          <h2 className="section-header">RSVP</h2>
          <p style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>
            Text us your name and how you know Bill:
          </p>

          {[
            { name: "Alex", phone: "720.201.6376" },
            { name: "Dave", phone: "817.637.1865" },
          ].map(({ name, phone }) => (
            <div
              key={phone}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
                justifyContent: "center",
              }}
            >
              <p
                onClick={() => copyToClipboard(phone, setCopied)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "1.5rem",
                }}
                aria-label={`Copy ${name}'s phone number`}
              >
                {name}: {phone} <FaCopy size={18} />
              </p>
              {copied === phone && (
                <span style={{ color: "white", fontSize: "1rem" }}>
                  Copied!
                </span>
              )}
              <a
                href={`sms:${phone}`}
                style={{ textDecoration: "none", color: "inherit" }}
                aria-label={`Send text to ${name}`}
              >
                <FaSms size={20} />
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default App;
