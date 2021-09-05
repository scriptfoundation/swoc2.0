import { React, Component } from 'react';
import './css/team.scss'
import { currentTeam } from './js/2021team';
import { pastTeam } from './js/2020team';

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
                    <div className={this.state.scrollStamp > 690 ? "p-search-section search-scrolled" : "p-search-section" }>
                        <div className="p-search">
                            <div className="p-prev-projs">
                                <button className="p-projs2021" type="button" onClick={() => {
                                        this.setState({ teamList: currentTeam})
                                        window.location.href = "/#/project/#projs"
                                    }}>
                                    2021 Projects
                                </button>
                                <button className="p-projs2020" type="button" onClick={() => {
                                        this.setState({ teamList: pastTeam })
                                        window.location.href = "/#/project/#projs"
                                    }}>
                                    2020 Projects
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
         );
    }
}
 
export default Team;