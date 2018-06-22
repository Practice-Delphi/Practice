import React, { Component } from 'react';
import './Team.css';
import team1 from './team1.png';
import team2 from './team2.png';
import team3 from './team3.png';
import team4 from './team4.png';
import team5 from './team5.png';
import team6 from './team6.png';
import team7 from './team7.png';
import team8 from './team8.png';
import team9 from './team9.png';
import team10 from './team10.png';
import team11 from './team11.png';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

class Team extends Component {
    render() {
        return (
            <div className="Team">
                <div className="form">
                    <div className="Consultants">
                        <div className="Consul-head" >
                            <h1><strong>{this.props.lang.team.head1}</strong></h1>
                        </div>

                        <div className="Person">
                            <img src={team1} alt=""/>
                            <div className="name"><strong>Jeffrey Liu</strong></div>
                            <div className="job">Technical Advisor</div>
                        </div>
                        <div className="Person">
                            <img src={team2} alt=""/>
                            <div className="name"><strong>James Sowers</strong></div>
                            <div className="job">Blockchain Advisor</div>
                        </div>
                        <div className="Person">
                            <img src={team3} alt=""/>
                            <div className="name"><strong>Ali Kassab</strong></div>
                            <div className="job">Growth Partner - FINTECH</div>
                        </div>
                        <div className="Person">
                            <img src={team4} alt=""/>
                            <div className="name"><strong>Igor Karavaev</strong></div>
                            <div className="job">Advisor, Marketing</div>
                        </div>
                        <div className="Person">
                            <img src={team5} alt=""/>
                            <div className="name"><strong>Mofassair Hossain</strong></div>
                            <div className="job">Advisor, Marketing & PR</div>
                        </div>
                    </div>
                    <div className="Teammates">
                        <div className="Consul-head" >
                            <h1><strong>{this.props.lang.team.head2}</strong></h1>
                        </div>
                        <div className="Person">
                            <img src={team6} alt=""/>
                            <div className="name"><strong>Nick Chisiu</strong></div>
                            <div className="job">Tech Lead & CEO</div>
                        </div>
                        <div className="Person">
                            <img src={team7} alt=""/>
                            <div className="name"><strong>Flavius Fulea</strong></div>
                            <div className="job">Marketing Chief</div>
                        </div>
                        <div className="Person">
                            <img src={team8} alt=""/>
                            <div className="name"><strong>Vlad Tarmure</strong></div>
                            <div className="job">Communications Chief</div>
                        </div>
                        <div className="Person">
                            <img src={team9} alt=""/>
                            <div className="name"><strong>Ionut Vaida</strong></div>
                            <div className="job">Blockchain Developer</div>
                        </div>
                        <div className="Person">
                            <img src={team10} alt=""/>
                            <div className="name"><strong>Tia Chisiu</strong></div>
                            <div className="job">Support Manager</div>
                        </div>
                        <div className="Person">
                            <img src={team11} alt=""/>
                            <div className="name"><strong>Odi Onyejekwe</strong></div>
                            <div className="job">Business Developer</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Team.propTypes = {
    lang: PropTypes.object,
    open: PropTypes.func,
}

const mapStateToProps = state => ({
    // some props
    lang: state.langData,
});
const mapDispatchToProps = dispatch => ({
    // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);