import { React, Component } from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import Marquee from "react-fast-marquee";
import './css/team.scss'
import { currentTeam } from './js/2021team';
import { pastTeam } from './js/2020team';
import { ParallaxDepthCard } from 'experiment-parallax-depth-card';
import 'experiment-parallax-depth-card/dist/index.css';
import { internTeam } from './js/intern-team';
import Tilt from 'react-tilt';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            teamList: currentTeam,
        };
    }

    handleResize = (e) => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }


    render() {
        return (
            <>
                <span hidden="true" id="page-name">Our Team</span>

                {/* header */}

                <header className="team-header">
                    <div className="p-header-box">
                        <div className="p-header row">
                            <div className="p-header-content">
                                <h1>Our Team</h1>
                                <p className="header-paragraph">Meet the brains behind the ideation,developemnt and execution of Script Winter of Code.</p>
                            </div>
                            <div className="p-header-vector">
                                <div className="p-vector">
                                    <a href="./index.html"><img src={"/img/team.svg"} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* team */}
                <section className="team-body">
                    <a name="/team/#team"></a>
                    <div className="p-search-section team">
                        <div className="p-search">
                            <div className="p-prev-projs">
                                <button className="p-projs2021" type="button" onClick={() => {
                                    this.setState({ teamList: currentTeam })
                                    window.location.href = "/#/team/#team"
                                }}>
                                    2021 Team
                                </button>
                                <button className="p-projs2020" type="button" onClick={() => {
                                    this.setState({ teamList: pastTeam })
                                    window.location.href = "/#/team/#team"
                                }}>
                                    2020 Team
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="t-cards">
                        <div className="t-grid">
                            {this.state.teamList.map((item, index) => {
                                return (
                                    <ParallaxDepthCard backgroundUrl={item.image} title={item.name}>
                                        <div className="member" key={index}>
                                            {/* <picture>
                                                <img src={item.image} />
                                            </picture> */}
                                            <div className="member-info">
                                                <p>{item.position}</p>
                                                <ul>
                                                    {item.profiles.map((el, i) => {
                                                        return (
                                                            <li key={i}><a target="_blank" href={el.link} className={el.icon}></a></li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </ParallaxDepthCard>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <div className="t-bottom-bar mt-5 mb-5">
                    <h2 className="intern-heading">Our Valuable Interns</h2>
                    <Marquee speed="120" pauseOnHover="true" gradient={false}>
                        <div className="intern-grid">
                            {internTeam.map((item, index) => {
                                return (
                                    <Tilt className="Tilt" options={{ max: 85, transition: true, speed: 300, easing: "cubic-bezier(.03,.98,.52,.99)" }}>
                                        <Card inverse className="Tilt-inner m-3">
                                            <CardImg height="300" width="250" className="card-img" src={item.image} alt={item.name} />
                                            <CardImgOverlay className="intern-info">
                                                <p>{item.name}</p>
                                                <div className="member-info">
                                                    <ul>
                                                        {item.profiles.map((el, i) => {
                                                            return (
                                                                <li key={i}><a target="_blank" href={el.link} className={el.icon}></a></li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </CardImgOverlay>
                                        </Card>
                                    </Tilt>
                                )
                            })}
                        </div>
                    </Marquee>
                </div>
            </>
        );
    }
}

export default Team;