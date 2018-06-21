import React, { Component } from 'react';
import './Ourpages.css';
import our from './our.png';

// connect component to redux
import { connect } from 'react-redux';

class Ourpages extends Component {
    render() {
        return (
            <div className="Ourpages">
                <div className="Form">
                    <div className="Page TOP3">    <a href="https://icobench.com/ico/squeezer" target="_blank" rel='noopener noreferrer' title="Squeezer on ICobench"><img className="Imagine" src={our} alt=""/></a></div>
                    <div className="Page ICORated"><a href="https://icobench.com/ico/squeezer" target="_blank" rel='noopener noreferrer' title="Squeezer on ICobench"><img className="Imagine" src="https://icobench.com/rated/squeezer?shape=horizontal&size=m" alt=""/></a></div>
                    <div className="Page TracICO"> <a href="https://www.trackico.io/ico/squeezer/" target="_blank" rel='noopener noreferrer' title="Squeezer on TrackICO"><img className="Imagine" src="https://www.trackico.io/widget/horizontal/squeezer/400.png?v=2" alt=""/></a></div>
                    <div className="Page Foundico"><a href="https://foundico.com/ico/squeezer.html" target="_blank" rel='noopener noreferrer' title="Squeezer on Foundico.com"><img className="Imagine" src="https://foundico.com/widget/?p=8849&f=h" alt=""/></a></div>
                    <div className="Page ICOMarcs"><a href="https://icomarks.com/ico/squeezer" target="_blank" rel='noopener noreferrer' title="Squeezer"><img className="Imagine" src="https://icomarks.com/widget/s/squeezer/horizontal.svg" alt=""/></a></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Ourpages);