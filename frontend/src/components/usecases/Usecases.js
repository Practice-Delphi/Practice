import React, { Component } from 'react';
import './Usecases.css';
import use1 from './use1.png';
import use2 from './use2.png';
import use3 from './use3.png';
import use4 from './use4.png';
import use5 from './use5.png';
import use6 from './use6.png';

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
                                <img class="" src={use1} />
                            </div>
                            <h5><strong>Payment</strong></h5> 
                            <p>
                                Online retail choose to integrate<br/>
                                blockchain payments support <br/>
                                available for high intensive orders.<br/>
                            </p>
                            <p>Keys:  <span className="keywords">Quick integration, Scalability, Security</span></p>
                        </div>
                        <div className="voting item"> 
                            <div className="symbol"> 
                                <img class="" src={use2} />
                            </div>
                            <h5><strong>Voting</strong> </h5>
                            <p>
                            Government of a country needs to<br/>
                             provide a blockchain voting system for<br/>
                              various elections.<br/>
                            </p>
                            <p>Keys:  <span className="keywords">Quick integration, Scalability, Security</span></p>
                        </div>
                        <div className="healthcare item"> 
                            <div className="symbol"> 
                                <img class="" src={use3} />
                            </div>
                            <h5><strong>Healthcare</strong></h5>
                            <p>
                            Store patient sensitive health data on <br/>
                            blockchain and make it available for <br/>
                            later usage.<br/>
                            </p>
                            <p>Keys:  <span className="keywords">Quick integration, Scalability, Security</span></p>
                        </div>
                        <div className="gaming item"> 
                            <div className="symbol"> 
                                <img class="" src={use4} />
                            </div>
                            <h5><strong>Gaming</strong></h5>
                            <p>
                                Store gaming online statistics data, <br/>
                                tournaments results and user profile for <br/>
                                later usage.<br/>
                            </p>
                            <p>Keys:  <span className="keywords">Quick integration, Scalability, Security</span></p>
                        </div>
                        <div className="banking item">
                            <div className="symbol"> 
                                <img class="" src={use5} />
                            </div> 
                            <h5><strong>Banking</strong></h5>
                            <p>
                            Keep & access immutable client <br/>
                            information, bad credit and fraud <br/>
                            information.<br/>
                            </p>
                            <p>Keys:  <span className="keywords">Quick integration, Scalability, Security</span></p>
                        </div>
                        <div className="security item"> 
                            <div className="symbol"> 
                                <img class="" src={use6} />
                            </div>
                            <h5><strong>Security</strong></h5>
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