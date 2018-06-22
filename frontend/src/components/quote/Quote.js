import React, { Component } from 'react';
import './Quote.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

class Quote extends Component{
    render(){
        return(
            <div className= "Quote">
                <div className="Quate-text">
                    {this.props.lang.quote.text}
                </div>
                <div className= "Writer"> <p>
                    {this.props.lang.quote.writer}
                </p></div>
            </div>
        );
    }
}

Quote.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Quote);