import React, { Component } from 'react';
import './Roadmap.css';
import roadpoint from './roadpoint.png';
import roadpoint2 from './roadpoint2.png';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

class Roadmap extends Component{
    render(){
        return(
            <div className= "Roadmap">
                <div className="form " id="road">
                    
                    <div className="road-form">
                        <div id="header-form">
                        <div className="road-line" id="header">
                            <h1><strong>{this.props.lang.roadmap.head}</strong></h1>
                        </div>
                        </div>
                        <div className="road-line">
                            <div className="road-item aditional">
                            </div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint} alt=""/>
                            </div>
                            <div className="road-item">
                                    <h4><strong>{this.props.lang.roadmap.roadmapdata1}</strong></h4>
                                    <p>
                                        {this.props.lang.roadmap.roadmapgoal1}
                                    </p>
                            </div>
                        </div>
                        <div className="road-line">
                            <div className="road-item">
                            <h4><strong>{this.props.lang.roadmap.roadmapdata2}</strong></h4>
                                <p>
                                {this.props.lang.roadmap.roadmapgoal2}
                                </p>
                            </div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint} alt=""/>
                            </div>
                            <div className="road-item aditional"></div>
                        </div>
                        <div className="road-line">
                            <div className="road-item aditional" ></div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint} alt=""/>
                            </div>
                            <div className="road-item">
                            <h4><strong>{this.props.lang.roadmap.roadmapdata3}</strong></h4>
                                <p>
                                {this.props.lang.roadmap.roadmapgoal3}
                                </p>
                            </div>
                        </div>
                        <div className="road-line">
                            <div className="road-item">
                            <h4><strong>{this.props.lang.roadmap.roadmapdata4}</strong></h4>
                                <p>
                                {this.props.lang.roadmap.roadmapgoal4}
                                </p>
                            </div>
                            <div className="road-img aditional">
                                <img className="roadpoint " src={roadpoint} alt=""/>
                            </div>
                            <div className="road-item aditional"></div>
                        </div>
                        <div className="road-line">
                            <div className="road-item aditional"></div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint} alt=""/>
                            </div>
                            <div className="road-item">
                            <h4><strong>{this.props.lang.roadmap.roadmapdata5}</strong></h4>
                                <p>
                                {this.props.lang.roadmap.roadmapgoal5}
                                </p>
                            </div>
                        </div>
                        <div className="road-line">
                            <div className="road-item">
                            <h4><strong>{this.props.lang.roadmap.roadmapdata6}</strong></h4>
                                <p>
                                {this.props.lang.roadmap.roadmapgoal6}
                                </p>
                            </div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint2} alt=""/>
                            </div>
                            <div className="road-item aditional"></div>
                        </div>
                        <div className="road-line">
                            <div className="road-item aditional"></div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint2} alt=""/>
                            </div>
                            <div className="road-item">
                            <h4><strong>{this.props.lang.roadmap.roadmapdata7}</strong></h4>
                                <p>
                                {this.props.lang.roadmap.roadmapgoal7}
                                </p>
                            </div>
                        </div>
                        <div className="road-line">
                            <div className="road-item ">
                            <h4><strong>{this.props.lang.roadmap.roadmapdata8}</strong></h4>
                                <p>
                                {this.props.lang.roadmap.roadmapgoal8}
                                </p>
                            </div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint2} alt=""/>
                            </div>
                            <div className="road-item aditional"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
Roadmap.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Roadmap);