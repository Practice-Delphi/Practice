import React, { Component } from 'react';
import './Clients.css';

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
                            <a href="https://ambisafe.com/" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://www.biscalex.com/" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="http://www.centurionco.com/" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                        </div>
                        <div className="">
                            <a href="https://mcro.tech/" target="_blank"><img class="Media-item" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
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