import React from "react";
import "../About/About.css";

function About() {
  return (
    <div className="container">
      <div>
        <h1>About Bethany's Pie Shop</h1>
        <p>In this video below, you can see how we create our pie.</p>
      </div>
      <div className="Video-box">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/Oflbho9ZG2U?start=103"
          title="YouTube video player"
          allow="accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;
