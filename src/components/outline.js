import { React, Component } from 'react';
import './css/outline.scss'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  navItems,
  socialMedia,
} from './js/navFootData';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Home from './home';
import Project from './project';
import Team from './team';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            transform : 0,
        };
    }

    backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    backToBottom() {
        window.scrollTo(0,document.body.scrollHeight);
    }    

    handleResize = (e) => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    handleScroll = (e) => {
        this.setState({
            transform: window.pageYOffset,
        });
    }

    changeActivePage = () => {
        setTimeout(() => {
            let currentPage = document.getElementById("page-name").textContent.toLowerCase();
            this.setState({ page: currentPage });
        }, 100)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("resize", this.handleResize);
        Aos.init({
            duration: 500,
        });
        this.changeActivePage();
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }


    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div className={
                    (this.state.transform > 50 && "nav-scrolled")
                    + " " +
                    (this.state.width <= 1100 ? "main-nav win-resize" : "main-nav")
                }>
                    <nav id="nav__nav" style={{ "padding-right": "1.8rem" }}>
                        {this.state.width <= 1100 ?
                        <>
                        <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="hamburger-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                            <ul className="navbar-nav mr-auto">
                                {navItems.map((item, index) => {
                                return (
                                    <li key={index} className="nav-item"><a className="nav-link" href={item.url}>{item.title}</a></li>
                                )
                                })}  
                            </ul>
                        </div>
                        </>
                        :
                        <>
                        <div id="addNavLogo">
                            {this.state.transform > 400 &&
                                <div class="nav-logo">
                                    <a href="/" class="scrollto"><img src="./img/logo-2-no-label.png" /></a>
                                </div>        
                            }
                        </div>
                        <div className={ this.state.transform > 400 ? "nav-comps comp-scrolled" : "nav-comps"}>
                            <ul>
                                {navItems.map((item, index) => {
                                    return (
                                        <li key={index} className={ item.title.toLowerCase() == this.state.page && "nav-active" }><a href={item.url} onClick={this.changeActivePage}>{item.title}</a></li>
                                )
                                })}
                            </ul>
                        </div>
                        </>
                        }
                    </nav>
                </div>
 
                {/* body */}

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/project">
                        <Project />
                    </Route>
                    <Route exact path="/team">
                        <Team />
                    </Route>
                </Switch>                

                {/* footer */}
                <footer>
                    <section id="contact">
                        <a name="/#contact"></a>
                        <div className="footer-content">
                            <div class="footer-top">
                                <button className="back-to-top" type="button" onClick={this.backToTop}>
                                    Back to the top <i class="fa fa-angle-up"></i>
                                </button>
                            </div>
                            <div className="footer-mid">
                                <div className="f-content">
                                    <div className="f-contact">
                                        <div className="f-nav">
                                            <ul>
                                                <li><a href="/" onClick={this.changeActivePage}>Home</a></li>
                                                <li><a href="/#/#about" onClick={this.changeActivePage}>About Us</a></li>
                                                <li><a href="/#/team" onClick={this.changeActivePage}>Our Team</a></li>
                                                <li><a href="/#/#sponsors" onClick={this.changeActivePage}>Sponsors</a></li>
                                            </ul>
                                            <ul className="f-nav-ul">
                                                <li><a href="/#/project" onClick={this.changeActivePage}>Projects</a></li>
                                                <li><a href="/#/#timeline" onClick={this.changeActivePage}>Timeline</a></li>
                                                <li><a target="_blank" href="https://devfolio.co/code-of-conduct#:~:text=No%20discrimination,gender%20identity%20and%20expression">Code of Conduct</a></li>
                                            </ul>
                                        </div>
                                        <div className="footer-copyright-info">
                                            <div className="footer-copyright-right">
                                            Copyright © 2020 Script Foundation under the GPL3 license. All
                                            rights reserved.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="f-logo">
                                        <img src={"/img/46463_Script Foundation_Logo_RD_01.png"} alt="logo" className="logo-footer" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <div className="f-bottom-row">
                                <div className="f-bottom">
                                    <div className="f-bottom-left">
                                        <p>Script Foundation</p>
                                        {/* <img src={"./img/ScriptFoundation_Logo_RD_02.png"} style={{ "width": "162px"}}></img> */}
                                    </div>
                                    <div className="f-bottom-right">
                                        <p>
                                            Made with ❤️ by
                                            <a className="yellow-text underline" href="https://scriptindia.org" target="_blank"> Script Foundation</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="f-media">
                                    <p>
                                        {socialMedia.map((item, index) => {
                                        return (
                                            <a href={item.socialLink} target="_blank">
                                                <i className={item.socialIcon}></i>
                                            </a>
                                        )
                                        })}
                                    </p>
                                </div>
                            </div>   
                        </div>
                    </section>
                </footer>
            </Router>
         );
    }
}
 
export default Index;