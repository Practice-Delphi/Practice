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
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

class Media extends Component{
    render(){
        return(
            <div className= "Media">
                <div className="form" >
                    <div id="head"><h1><strong>{this.props.lang.media.head}</strong></h1></div>
                    <div className="media-list">
                        <div className="">
                            <a href="https://www.icoalert.com/" target="_blank" rel='noopener noreferrer'><img className="Media-item" src={media1} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://icorating.com/ico/squeezer/" target="_blank" rel='noopener noreferrer'><img className="Media-item" src={media2} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://www.icocountdown.com/" target="_blank" rel='noopener noreferrer'><img className="Media-item" src={media3} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://www.ccn.com/squeezer-connects-blockchain-world-class-clouds/" target="_blank" rel='noopener noreferrer'><img className="Media-item" src={media4} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://bitcointalk.org/index.php?topic=3169422" target="_blank" rel='noopener noreferrer'><img className="Media-item" src={media5} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://medium.com/@nickchisiu/microservices-on-blockchain-4ccf3623a08f" target="_blank" rel='noopener noreferrer'><img className="Media-item" src={media6} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://www.coinschedule.com/ico/squeezer-token#event1892" target="_blank" rel='noopener noreferrer'><img className="Media-item Big" src={media7} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://icobench.com/ico/squeezer" target="_blank" rel='noopener noreferrer'><img className="Media-item" src={media8} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://bitcoinchaser.com/ico-hub/squeezer" target="_blank" rel='noopener noreferrer'><img className="Media-item Big1" src={media9} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://steemit.com/bitcoin/@hennessy/ico-overview-squeezer-apps-development-with-blockchain" target="_blank" rel='noopener noreferrer'><img className="Media-item" src={media10} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://one2crypto.com/reviews/ico-review/ico-squeezer-review-whitepaper-analysis/" target="_blank" rel='noopener noreferrer'><img className="Media-item Big1" src={media11} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://icocrunch.io/ico/squeezer/" target="_blank" rel='noopener noreferrer'><img className="Media-item" src={media12} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://www.coinazure.com/icos/squeezer" target="_blank" rel='noopener noreferrer'><img className="Media-item" src={media13} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://icostock24.com/" target="_blank" rel='noopener noreferrer'><img className="Media-item" src={media14} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://www.icodata.io/coin/squeezer" target="_blank" rel='noopener noreferrer'><img className="Media-item" src={media15} alt=""/></a>
                        </div>
                       
                    </div>
                    
                </div>
            </div>
        );
    }
}
Media.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Media);