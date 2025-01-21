import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/event.jpg" alt="event" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Crafting Unforgettable Experiences</h1>
          <p>
            We specialize in turning every occasion into a cherished memory.
            Whether it's a grand celebration or an intimate gathering.
             </p>
             <p>We focus on creating events that leave a lasting impression, with meticulous
            attention to every detail. Your moments, our mission!
          </p>
          <Link to="book" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
