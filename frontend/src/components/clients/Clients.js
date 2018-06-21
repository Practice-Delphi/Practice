import React, { Component } from 'react';
import './Clients.css';
import clin1 from './clin1.png';
import clin2 from './clin2.png';
import clin3 from './clin3.png';
import clin4 from './clin4.png';

// connect component to redux
import { connect } from 'react-redux';

class Clients extends Component{
    render(){
        return(
            <div className= "Clients">
                <div className="form">
                    <div id="Clients-head"><h1><strong>Партнеры и клиенты</strong></h1></div>
                    <div className="Clients-list">
                        <div className="">
                            <a href="https://ambisafe.com/" target="_blank" rel='noopener noreferrer'><img className="Clin-item" src={clin1} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://www.biscalex.com/" target="_blank" rel='noopener noreferrer'><img className="Clin-item" src={clin2} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="http://www.centurionco.com/" target="_blank" rel='noopener noreferrer'><img className="Clin-item" src={clin3} alt=""/></a>
                        </div>
                        <div className="">
                            <a href="https://mcro.tech/" target="_blank" rel='noopener noreferrer'><img className="Clin-item" src={clin4} alt=""/></a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Clients);