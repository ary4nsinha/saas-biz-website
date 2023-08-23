import React from "react";
import Card from "../../components/cards/Card";
import image1 from '../portfolioPage/CARD-1.png';
import image2 from '../portfolioPage/CARD-2.jpg';
import '../portfolioPage/index.css';

const portfolio = () => {
  return (
    <div className="portfolio-page">
      <div className="top-shota">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="cards">
      <Card
        title="App Home Page Design"
        description="UI Design for an IOS Application home page"
        imgSrc={image1}
        buttonText="Learn More"
      />
      <Card
        title="Home Page UI web design"
        description="Landing page for a website"
        imgSrc={image2}
        buttonText="Learn More"
      />
      </div>
    </div>
  );
};

export default portfolio;
