import { React, Component } from "react";
import Particles from "react-particles-js";
import { Snow } from "./snow";
import "./css/home.scss";
import {
  registerItems,
  timelineItems,
  prizeItems,
  GoldSponsors,
  SilverSponsors,
  PlatformPartners,
  Sponsors,
  CommunityPartners,
  FAQs,
} from "./js/homeData";
import Aos from "aos";
import "aos/dist/aos.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-elastic-carousel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      page: "home",
    };
  }

  handleResize = (e) => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    Aos.init({
      duration: 500,
    });
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }
  carouselBreakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
  ];

  render() {
    const { items } = this.state;
    return (
      <>
        <span hidden="true" id="page-name">
          Home
        </span>
        {/* Header */}

        <header className="header">
          <div className="snow">
            <Particles params={Snow} />
          </div>
          <div className="header-content">
            <h1>Script Winter of Code</h1>
            <div className="header-logo">
              <a href="./index.html">
                <img src={"/img/logo-2.png"} />
              </a>
            </div>
          </div>
        </header>
        {/* body */}

        <a name="/#about"></a>
        <section className="body-content about-swoc" id="about">
          <div className="about-content col-lg-7">
            <h3>
              About <span>SWOC</span>
            </h3>
            <p>
              Script Winter of Code is an open-source program envisioned by the
              Script Foundation. It aims to bring students into the world of
              open source development and see the power of unified
              problem-solving in real time. The projects that we will host have
              been carefully hand-picked to invigorate creative thinking and
              encourage collaboration among all participants.
            </p>
            <p>
              The students will be guided by experienced mentors throughout
              their journey. They will learn the skills essential in the world
              of programming, all the while developing a deep appreciation for
              the world of open-source.
            </p>
          </div>
          <div className="about-vector">
            {/* <img src="./img/about.png" /> */}
            <img src={"/img/graph.gif"} />
          </div>
        </section>

        <section className="cards-bg-sec to-apply">
          <div
            class="alert alert-info alert-dismissible fade show"
            role="alert"
          >
            <strong>NOTE:</strong> Those who are getting the RSVPs from Devfolio
            they need to create a Sole/Individual team.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="apply-sec body-content">
            <h3 className="card__card__title">Registration</h3>
            <div className="row">
              {registerItems.map((item, index) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 card-cover">
                    <div className="h-100 to-apply-card card__card__body">
                      <h5 className="card-title">{item.cardTitle}</h5>
                      <p className="card-text">{item.cardText}</p>
                      {item.cardTitle.toLowerCase() == "participant" ? (
                        <div className="btn-apply devfolio-btn">
                          <div
                            class="apply-button"
                            data-hackathon-slug="swoc"
                            data-button-theme="light"
                          ></div>
                        </div>
                      ) : (
                        <div className="btn-apply">
                          <a
                            href={item.applyLink}
                            target="_blank"
                            className={
                              item.applyStatus.toLowerCase() == "register"
                                ? ""
                                : "disabled"
                            }
                            readonly
                          >
                            {item.applyStatus}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="event-together">
          <div className="body-content">
            <h3>This time we are together</h3>
            <div className="together-logos">
              <div className="logo-swoc">
                <img src={"/img/logo-1-no-label.png"} />
              </div>
              <span>+</span>
              <div className="logo-cwoc">
                <img src={"/img/logos/CatsInTech.png"} />
              </div>
            </div>
            <div className="stay-contributing">#StayContributing</div>
          </div>
        </section>

        {/* timeline */}
        <section className="timeline">
          <a name="/#timeline"></a>
          <div className="timeline-head">
            <h3 className="card__card__title">Program Timeline</h3>
          </div>
          <ul>
            {timelineItems.map((item, index) => {
              return (
                <li>
                  <time>{item.timelineDate}</time>
                  <div className="card__card__body timeline-item">
                    <span className="time-responsive">{item.timelineDate}</span>
                    {item.timelineText}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="overview-section">
          <div className="body-content overview-container">
            <div className="overview-vector">
              <img src="/img/overview.svg" />
            </div>
            <div className="overview-content">
              <h3>Overview</h3>
              <p>
                Script Winter Of Code is the 3 month long open source program by
                Script Foundation India , with the aim to introduce more and
                more people to the world of Open source. In this program all the
                selected participants will get a chance to work on various
                exciting projects under the guidance of experienced Mentors.
              </p>
              <p>
                Participants can select the project based on their interest and
                tech stack , and can communicate with mentors and project admin
                to know the project better during the Community bonding Period .
              </p>
            </div>
          </div>
        </section>

        <section className="prizes cards-bg-sec">
          <div className="">
            <h3 className="card__card__title body-content">
              Prizes And Rewards
            </h3>
            <div className="carousel-container">
              <Carousel breakPoints={this.carouselBreakPoints}>
                {prizeItems.map((item, index) => {
                  return (
                    <div className="prize-card card__card__body">
                      <div className="prize-card-img">
                        <img src={item.prizeVector} />
                      </div>
                      <div className="prize-card-text">
                        <h3 className="card-title">
                          {item.prizeTitle}
                          {item.provider && (
                            <>
                              <br />
                              <span class="provider">{item.provider}</span>
                            </>
                          )}
                        </h3>
                        <ul>
                          {item.prizeDescription.split("|").map((el) => {
                            return (
                              <li>
                                <p className="card-text">{el}</p>
                              </li>
                            );
                          })}
                        </ul>
                        {item.more && (
                          <a
                            target="_blank"
                            href={item.prizeLink}
                            className="learn-more"
                          >
                            {item.more}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>

          {/* <div className="about-vector">
                        <img src={"/img/trophy2-min.jpg"} />
                    </div> */}
        </section>

        <section className="sponsors-section">
          <a name="/#sponsors"></a>
          <div className="body-content powered-conatiner">
            <h3>Powered by</h3>
            <a href="https://devfolio.co/" target="_blank">
              <img src={"/img/logos/Devfolio_Logo.svg"} />
            </a>
          </div>
          <div className="val-sponsors">
            <h1 className="sponsor-heading">Our Valuable Sponsors</h1>
            <div className="underline"></div>
          </div>
          <div className="body-content sponsors-conatiner">
            <br />
            <div className="community">
              <div className="row">
                <div className="col-md-12">
                  <div className="sponsor-header">
                    <div className="line"></div>
                    <h3 className="">Gold Sponsors</h3>
                    <div className="line"></div>
                  </div>
                  <br />
                  <div className="community">
                    <div
                      className="row row-img grid"
                      style={{ "justify-content": "center" }}
                    >
                      {GoldSponsors.map((item, index) => {
                        return (
                          <div className="col-md-4 col-sm-6 img-div">
                            <a href={item.sponsorLink} target="_blank">
                              <img
                                className="sponsor-img"
                                src={item.sponsorImg}
                              />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* <div className="col-md-6">
                                    <h3>Platform Partners</h3>
                                    <br />
                                    <div className="community">
                                        <div className="row row-img grid">
                                            {PlatformPartners.map((item, index) => {
                                            return (
                                                <div className="col-12 img-div">
                                                    <a href={item.sponsorLink} target="_blank">
                                                        <img className="sponsor-img" src={item.sponsorImg} />
                                                    </a>
                                                </div>                                                
                                            )
                                            })}
                                        </div>
                                    </div>
                                </div> */}
              </div>

              <div className="sponsor-header">
                    <div className="line"></div>
                    <h3 className="">Silver Sponsors</h3>
                    <div className="line"></div>
                  </div>
              <div className="row row-img grid mb-4 justify-content-center">
                {SilverSponsors.map((item, index) => {
                  return (
                    <div className="col-md-4 img-div">
                      <a href={item.sponsorLink} target="_blank">
                        <img className="sponsor-img" src={item.sponsorImg} />
                      </a>
                    </div>
                  );
                })}
              </div>

              <div className="sponsor-header">
                    <div className="line"></div>
                    <h3 className="">Bronze Sponsors</h3>
                    <div className="line"></div>
                  </div>
              <br />
              <div className="row row-img grid mb-4">
                {Sponsors.map((item, index) => {
                  return (
                    <div className="col-md-4 img-div">
                      <a href={item.sponsorLink} target="_blank">
                        <img className="sponsor-img" src={item.sponsorImg} />
                      </a>
                    </div>
                  );
                })}
              </div>

              
              <div
                className="btn-container p-4"
                style={{ "text-align": "center" }}
              >
                <br />
                <a
                  href="https://drive.google.com/file/d/1eZxqQoK28EmpMSwWlHiP-Axra-YRnVWA/view?usp=sharing"
                  target="_blank"
                  className="btn btn-info btn-lg"
                >
                  Sponsor Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="faqs">
          <h3 className="faq-title">FAQs</h3>

          <div className="body-content">
            {FAQs.map((item, index) => {
              return (
                <div className="faq-item">
                  <input
                    type="checkbox"
                    id={item.questionId}
                    name="q"
                    className="question-input"
                  />
                  <label for={item.questionId} className="question">
                    <div className="plus">+</div>
                    {item.questionText}
                  </label>
                  <div className="answers">{item.answerText}</div>
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default Home;
