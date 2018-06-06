import React, { Component } from 'react';
import './Ourpages.css';

// connect component to redux
import { connect } from 'react-redux';

class Ourpages extends Component {
    render() {
        return (
            <div class="Ourpages">
                <div className="Form">
                    <div class="Page TOP3">    <a href="#" title="Squeezer on ICobench"><img class="Imagine" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a></div>
                    <div class="Page ICORated"><a href="#" title="Squeezer on ICobench"><img class="Imagine" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a></div>
                    <div class="Page TracICO"> <a href="#" title="Squeezer on TrackICO"><img class="Imagine" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a></div>
                    <div class="Page Foundico"><a href="#" title="Squeezer on Foundico.com"><img class="Imagine" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a></div>
                    <div class="Page ICOMarcs"><a href="#" title="Squeezer"><img class="Imagine" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a></div>
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