import React, { Component } from 'react';
import './Media.css';
import media1 from './media1.png';
import media2 from './media2.png';
import media3 from './media3.png';
import media4 from './media4.png';
import media5 from './media5.png';
import media6 from './media6.png';
import media7 from './media7.png';
import media8 from './media8.png';
import media9 from './media9.png';
import media10 from './media10.png';
import media11 from './media11.png';
import media12 from './media12.png';
import media13 from './media13.png';
import media14 from './media14.png';
import media15 from './media15.png';

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
                            <a href="https://www.icoalert.com/" target="_blank"><img class="Media-item" src={media1} /></a>
                        </div>
                        <div className="">
                            <a href="https://icorating.com/ico/squeezer/" target="_blank"><img class="Media-item" src={media2} /></a>
                        </div>
                        <div className="">
                            <a href="https://www.icocountdown.com/" target="_blank"><img class="Media-item" src={media3} /></a>
                        </div>
                        <div className="">
                            <a href="https://www.ccn.com/squeezer-connects-blockchain-world-class-clouds/" target="_blank"><img class="Media-item" src={media4} /></a>
                        </div>
                        <div className="">
                            <a href="https://bitcointalk.org/index.php?topic=3169422" target="_blank"><img class="Media-item" src={media5} /></a>
                        </div>
                        <div className="">
                            <a href="https://medium.com/@nickchisiu/microservices-on-blockchain-4ccf3623a08f" target="_blank"><img class="Media-item" src={media6} /></a>
                        </div>
                        <div className="">
                            <a href="https://www.coinschedule.com/ico/squeezer-token#event1892" target="_blank"><img class="Media-item Big" src={media7} /></a>
                        </div>
                        <div className="">
                            <a href="https://icobench.com/ico/squeezer" target="_blank"><img class="Media-item" src={media8} /></a>
                        </div>
                        <div className="">
                            <a href="https://bitcoinchaser.com/ico-hub/squeezer" target="_blank"><img class="Media-item Big1" src={media9} /></a>
                        </div>
                        <div className="">
                            <a href="https://steemit.com/bitcoin/@hennessy/ico-overview-squeezer-apps-development-with-blockchain" target="_blank"><img class="Media-item" src={media10} /></a>
                        </div>
                        <div className="">
                            <a href="https://one2crypto.com/reviews/ico-review/ico-squeezer-review-whitepaper-analysis/" target="_blank"><img class="Media-item Big1" src={media11} /></a>
                        </div>
                        <div className="">
                            <a href="https://icocrunch.io/ico/squeezer/" target="_blank"><img class="Media-item" src={media12} /></a>
                        </div>
                        <div className="">
                            <a href="https://www.coinazure.com/icos/squeezer" target="_blank"><img class="Media-item" src={media13} /></a>
                        </div>
                        <div className="">
                            <a href="https://icostock24.com/" target="_blank"><img class="Media-item" src={media14} /></a>
                        </div>
                        <div className="">
                            <a href="https://www.icodata.io/coin/squeezer" target="_blank"><img class="Media-item" src={media15} /></a>
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