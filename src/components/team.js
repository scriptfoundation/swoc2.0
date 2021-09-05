import { React, Component } from 'react';
import './css/team.scss'
import Aos from 'aos';
import 'aos/dist/aos.css'

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth, height: window.innerHeight };
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


    render() {
        return (
            <>
                <span hidden="true" id="page-name">Team</span>

                {/* header */}

                <header className="team-header">
                    <div className="t-header-box">
                        <div className="t-header row">
                            <div className="t-header-content">
                                <h1>Our Team</h1>
                                <p className="header-paragraph">Meet the brains behind the ideation,developemnt and execution of Script Winter of Code.</p>                                
                            </div>
                            <div className="t-header-vector">
                                <div className="t-vector">
                                    <a href="./index.html"><img src={"/img/team.svg"} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
         );
    }
}
 
export default Team;