import React, { Component } from 'react';
import './Team.css';

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
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            <div className="name"><strong>Jeffrey Liu</strong></div>
                            <div className="job">Technical Advisor</div>
                        </div>
                        <div className="Person">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            <div className="name"><strong>James Sowers</strong></div>
                            <div className="job">Blockchain Advisor</div>
                        </div>
                        <div className="Person">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            <div className="name"><strong>Ali Kassab</strong></div>
                            <div className="job">Growth Partner - FINTECH</div>
                        </div>
                        <div className="Person">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            <div className="name"><strong>Igor Karavaev</strong></div>
                            <div className="job">Advisor, Marketing</div>
                        </div>
                        <div className="Person">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            <div className="name"><strong>Mofassair Hossain</strong></div>
                            <div className="job">Advisor, Marketing & PR</div>
                        </div>
                    </div>
                    <div className="Teammates">
                            <div className="Consul-head" >
                                <h1><strong>Команда Squeezer</strong></h1>
                            </div>
                        <div className="Person">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            <div className="name"><strong>Nick Chisiu</strong></div>
                            <div className="job">Tech Lead & CEO</div>
                        </div>
                        <div className="Person">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            <div className="name"><strong>Flavius Fulea</strong></div>
                            <div className="job">Marketing Chief</div>
                        </div>
                        <div className="Person">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            <div className="name"><strong>Vlad Tarmure</strong></div>
                            <div className="job">Communications Chief</div>
                        </div>
                        <div className="Person">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            <div className="name"><strong>Ionut Vaida</strong></div>
                            <div className="job">Blockchain Developer</div>
                        </div>
                        <div className="Person">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            <div className="name"><strong>Tia Chisiu</strong></div>
                            <div className="job">Support Manager</div>
                        </div>
                        <div className="Person">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
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