import React, { Component } from 'react';
import './Media.css';

// connect component to redux
import { connect } from 'react-redux';

class Media extends Component{
    render(){
        return(
            <div className= "Media">
                <div className="form" >
                    <div id="head"><h1><strong>Мультимедиа</strong></h1></div>
                    <div className="media-list">
                        <div className="">
                            <a href="https://www.icoalert.com/" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://icorating.com/ico/squeezer/" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://www.icocountdown.com/" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://www.ccn.com/squeezer-connects-blockchain-world-class-clouds/" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://bitcointalk.org/index.php?topic=3169422" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://medium.com/@nickchisiu/microservices-on-blockchain-4ccf3623a08f" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://www.coinschedule.com/ico/squeezer-token#event1892" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://icobench.com/ico/squeezer" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://bitcoinchaser.com/ico-hub/squeezer" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://steemit.com/bitcoin/@hennessy/ico-overview-squeezer-apps-development-with-blockchain" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://one2crypto.com/reviews/ico-review/ico-squeezer-review-whitepaper-analysis/" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://icocrunch.io/ico/squeezer/" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://www.coinazure.com/icos/squeezer" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://icostock24.com/" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://www.icodata.io/coin/squeezer" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Media);