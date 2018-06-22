import React, { Component } from 'react';
import './Tokens.css';
import token1 from './token1.png'
import token2 from './token2.png'
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

class Tokens extends Component{
    render(){
        return(
            <div className= "Tokens">
                <div className="form token-form">
                    <div className="token-text">
                        <h1><strong>{this.props.lang.tokens.artikle}</strong></h1>
                        <br/>
                        <br/>
                        <p>
                            {this.props.lang.tokens.text1}
                        </p>
                        <p>    
                            {this.props.lang.tokens.text2}
                        </p>
                        <div className="token-text-img">
                                <img className="" src={token1} alt=""/> 
                        </div>
                    </div>
                    <div className="token-img">
                        <img className="" src={token2} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}
Tokens.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Tokens);