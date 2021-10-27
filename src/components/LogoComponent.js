import React from "react";
import "./css/LogoComponent.css";

const LogoComponent = ({ name, CommunityPartners }) => {
  return (
    <div className="logoComponent">
      <div className="slider">
        <div className={`slide_track ${name}`}>
          {CommunityPartners.map((community, index) => (
            <a href={community.sponsorLink} key={index} className="slide">
              <img src={community.sponsorImg} alt="" />
            </a>
          ))}
          {CommunityPartners.map((community, index) => (
            <a href={community.sponsorLink} key={index} className="slide">
              <img src={community.sponsorImg} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoComponent;
