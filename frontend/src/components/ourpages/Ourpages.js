import React, { Component } from 'react';
import './Ourpages.css';
import our from './our.png';

// connect component to redux
import { connect } from 'react-redux';

class Ourpages extends Component {
    render() {
        return (
            <div class="Ourpages">
                <div className="Form">
                    <div class="Page TOP3">    <a href="#" title="Squeezer on ICobench"><img class="Imagine" src={our} /></a></div>
                    <div class="Page ICORated"><a href="#" title="Squeezer on ICobench"><img class="Imagine" src="https://icobench.com/rated/squeezer?shape=horizontal&size=m" /></a></div>
                    <div class="Page TracICO"> <a href="#" title="Squeezer on TrackICO"><img class="Imagine" src="https://www.trackico.io/widget/horizontal/squeezer/400.png?v=2" /></a></div>
                    <div class="Page Foundico"><a href="#" title="Squeezer on Foundico.com"><img class="Imagine" src="https://foundico.com/widget/?p=8849&f=h" /></a></div>
                    <div class="Page ICOMarcs"><a href="#" title="Squeezer"><img class="Imagine" src="https://icomarks.com/widget/s/squeezer/horizontal.svg" /></a></div>
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