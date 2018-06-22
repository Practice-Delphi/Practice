import React, { Component } from 'react';
import './Share.css';
import hands from './hands.png';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Share extends Component{
    render(){
        return(
            <div className= "Share">
                <div className="form Share-form">
                    <img  className="Share-img" src={hands} alt=""/>
                    <div className="Share-text">
                        <h1><strong>
                            {this.props.lang.share.Sharetext}
                        </strong></h1>
                    </div>
                    <div className="Share-link">
                        <Link className='register-link' to={'/account/login'}>{this.props.lang.share.Sharelink}</Link>
                    </div>

                </div>

            </div>
        );
    }
}
Share.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Share);