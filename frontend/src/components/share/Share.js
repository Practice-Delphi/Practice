import React, { Component } from 'react';
import './Share.css';

// connect component to redux
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Share extends Component{
    render(){
        return(
            <div className= "Share">
                <div className="form Share-form">
                    <img  className="Share-img" src="https://cdn.icon-icons.com/icons2/1091/PNG/512/handshake_78379.png"/>
                    <div className="Share-text">
                        <h1><strong>
                            Присоединяйтесь к <br />
                            нашей Партнерской <br />
                            программе  сегодня и <br />
                            заработайте 10%  комиссии <br />
                            в ETH <br />
                        </strong></h1>
                    </div>
                    <div className="Share-link">
                        <Link className='register-link' to={'/account/login'}>Присоединиться</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Share);