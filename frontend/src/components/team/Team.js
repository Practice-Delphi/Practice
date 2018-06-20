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

// connect component to redux
import { connect } from 'react-redux';

class Team extends Component{
    render(){
        return(
            <div className= "Team">
                <div className="form">
                    <div className="Consultants">
                            <div className="Consul-head" >
                                <h1><strong>Консультанты</strong></h1>
                            </div>

                        <div className="Person">
                            <img class="" src={team1} />
                            <div className="name"><strong>Jeffrey Liu</strong></div>
                            <div className="job">Technical Advisor</div>
                        </div>
                        <div className="Person">
                            <img class="" src={team2} />
                            <div className="name"><strong>James Sowers</strong></div>
                            <div className="job">Blockchain Advisor</div>
                        </div>
                        <div className="Person">
                            <img class="" src={team3} />
                            <div className="name"><strong>Ali Kassab</strong></div>
                            <div className="job">Growth Partner - FINTECH</div>
                        </div>
                        <div className="Person">
                            <img class="" src={team4} />
                            <div className="name"><strong>Igor Karavaev</strong></div>
                            <div className="job">Advisor, Marketing</div>
                        </div>
                        <div className="Person">
                            <img class="" src={team5} />
                            <div className="name"><strong>Mofassair Hossain</strong></div>
                            <div className="job">Advisor, Marketing & PR</div>
                        </div>
                    </div>
                    <div className="Teammates">
                            <div className="Consul-head" >
                                <h1><strong>Команда Squeezer</strong></h1>
                            </div>
                        <div className="Person">
                            <img class="" src={team6} />
                            <div className="name"><strong>Nick Chisiu</strong></div>
                            <div className="job">Tech Lead & CEO</div>
                        </div>
                        <div className="Person">
                            <img class="" src={team7} />
                            <div className="name"><strong>Flavius Fulea</strong></div>
                            <div className="job">Marketing Chief</div>
                        </div>
                        <div className="Person">
                            <img class="" src={team8} />
                            <div className="name"><strong>Vlad Tarmure</strong></div>
                            <div className="job">Communications Chief</div>
                        </div>
                        <div className="Person">
                            <img class="" src={team9} />
                            <div className="name"><strong>Ionut Vaida</strong></div>
                            <div className="job">Blockchain Developer</div>
                        </div>
                        <div className="Person">
                            <img class="" src={team10} />
                            <div className="name"><strong>Tia Chisiu</strong></div>
                            <div className="job">Support Manager</div>
                        </div>
                        <div className="Person">
                            <img class="" src={team11} />
                            <div className="name"><strong>Odi Onyejekwe</strong></div>
                            <div className="job">Business Developer</div>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    // some props
});
const mapDispatchToProps = dispatch => ({
  // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);