import React from "react";
import "./index.css";

const Home = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <div className="home-comp">
        <div className="col">
          <h1>
            WE HELP BRANDS LIKE YOU DOMINATE THEIR COMPETITORS WITH OUR HIGH
            QUALITY DESIGNS
          </h1>
        </div>
        <div className="web-dev">
          <h1>Web Design & Development</h1>
          <p>
            Make beautiful and responsive designs to help make your business
            stand out from the rest
          </p>
        </div>
        <div className="web-mod">
          <h1>Web Moderation</h1>
          <p>Elevate your community with seamless engagement and expert moderation through our dynamic 'Chatters and Moderators' platform.</p>
        </div>
        <div className="SFC">
          <h1>Short-Form Content</h1>
          <p>Capture attention instantly and make a lasting impact with our compelling short-form content tailored for TikTok and Instagram.</p>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Home;
