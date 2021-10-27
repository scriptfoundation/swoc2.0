import React, { useState, useEffect } from "react";
import "./css/community.css";

import LogoComponent from "./LogoComponent";
import {
  CommunityPartners1,
  CommunityPartners2,
  CommunityPartners3,
} from "./js/homeData";

const Community = () => {
  return (
    <>
      <span hidden="true" id="page-name">
        Community
      </span>
      <div className="community">
        <div className="community_header">
          <div className="community_header_all">
            <div className="community_header_left">
              <h1>Open source is all about community</h1>
              <h5>
                We at SWOC believe that community bonding can produce the better
                learning environment
              </h5>
              <h2>
                Join us to provide best open source culture with hand-on
                experience
              </h2>
              <a href="https://forms.gle/jcfcdzSF3QQnxsU36" target="_blank">
                Join us
              </a>
            </div>

            <img
              src={"/img/header_logo.png"}
              alt=""
              className="community_header_right"
            />
          </div>
          <img src={"/img/wave.png"} alt="" className="wave" />
        </div>
        <div className="community_component">
          <div className="community_component_header">
            <h1>OUR COMMUNITY PARTNERS</h1>
            <div className="underline"></div>
          </div>

          <div className="community_component_logo">
            <div className="underline1"></div>
            <LogoComponent
              name="right-to-left"
              CommunityPartners={CommunityPartners1}
            />
            <LogoComponent
              name="left-to-right"
              CommunityPartners={CommunityPartners2}
            />
            <LogoComponent
              name="right-to-left"
              CommunityPartners={CommunityPartners3}
            />
            <div className="underline2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
