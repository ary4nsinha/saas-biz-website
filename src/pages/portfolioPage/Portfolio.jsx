import React from "react";
import Card from "../../components/cards/Card";
import image1 from "../portfolioPage/CARD-1.png";
import image2 from "../portfolioPage/CARD-2.jpg";
import "../portfolioPage/index.css";

const portfolio = () => {
  return (
    <>
      <div className="top-shota">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="portfolio-page">
        <div className="card-1">
          <Card
            title="App Home Page Design"
            description="Sleek and intuitive, the mobile app's design offers effortless navigation with vibrant, modern aesthetics that engage users at every touchpoint."
            imgSrc={image1}
            buttonText="Learn More"
          />
        </div>
        <div className="card-2">
          <Card
            title="Home Page UI web design"
            description="Landing page for a website"
            imgSrc={image2}
            buttonText="Learn More"
          />
        </div>
      </div>
    </>
  );
};

export default portfolio;
