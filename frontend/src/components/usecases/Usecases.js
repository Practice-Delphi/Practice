import React, { Component } from 'react';
import './Usecases.css';

// connect component to redux
import { connect } from 'react-redux';

class Usecases extends Component {
    render() {
        return (
            <div class="Usecases">
                <div className="form">
                    <div className="head"> 
                        <h2>USE CASES</h2>
                    </div>
                    <div className="count-cases">
                        <div className="payment item">
                            <div className="symbol"> 
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            </div>
                            <strong>Payment</strong> 
                            <p>
                                Online retail choose to integrate<br/>
                                blockchain payments support <br/>
                                available for high intensive orders.<br/>
                            </p>
                            <p>Keys:  <span className="keywords">Quick integration, Scalability, Security</span></p>
                        </div>
                        <div className="voting item"> 
                            <div className="symbol"> 
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            </div>
                            <strong>Voting</strong> 
                            <p>
                            Government of a country needs to<br/>
                             provide a blockchain voting system for<br/>
                              various elections.<br/>
                            </p>
                            <p>Keys:  <span className="keywords">Quick integration, Scalability, Security</span></p>
                        </div>
                        <div className="healthcare item"> 
                            <div className="symbol"> 
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            </div>
                            <strong>Healthcare</strong>
                            <p>
                            Store patient sensitive health data on <br/>
                            blockchain and make it available for <br/>
                            later usage.<br/>
                            </p>
                            <p>Keys:  <span className="keywords">Quick integration, Scalability, Security</span></p>
                        </div>
                        <div className="gaming item"> 
                            <div className="symbol"> 
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            </div>
                            <strong>Gaming</strong>
                            <p>
                                Store gaming online statistics data, <br/>
                                tournaments results and user profile for <br/>
                                later usage.<br/>
                            </p>
                            <p>Keys:  <span className="keywords">Quick integration, Scalability, Security</span></p>
                        </div>
                        <div className="banking item">
                            <div className="symbol"> 
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            </div> 
                            <strong>Banking</strong>
                            <p>
                            Keep & access immutable client <br/>
                            information, bad credit and fraud <br/>
                            information.<br/>
                            </p>
                            <p>Keys:  <span className="keywords">Quick integration, Scalability, Security</span></p>
                        </div>
                        <div className="security item"> 
                            <div className="symbol"> 
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            </div>
                            <strong>Security</strong>
                            <p>
                                Access trough popular security <br/>
                                features like iris or fingerprint backed-<br/>
                                up by the blockchain immutability.<br/>
                            </p>
                            <p>Keys:  <span className="keywords">Quick integration, Scalability, Security</span></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Usecases);