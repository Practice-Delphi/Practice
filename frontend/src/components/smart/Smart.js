import React, { Component } from 'react';
import './Smart.css';

// connect component to redux
import { connect } from 'react-redux';

class Smart extends Component{
    render(){
        return(
            <div className= "Quote">
                <div className="form smart-form">
                    <div className="smart-left">
                        <h1><strong>СМАРТ КОНТРАКТ</strong></h1>
                        Development by <a href="https://ambisafe.com/" title="Squeezer on ICobench">Ambisafe</a>
                    </div>
                    <div className="smart-center">
                        <div className="git-link" >
                            
                            <div className="git-img">
                                <a href="https://i.pinimg.com/originals/0b/e5/40/0be540433c15a6f783fd06e91cb02c96.jpg" title="to git"><img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                            </div>
                            <div className="text-link">
                                <a href="https://i.pinimg.com/originals/0b/e5/40/0be540433c15a6f783fd06e91cb02c96.jpg" title="to git"> See the code at GitHab</a>
                            </div>
                        
                        </div>
                        <div className="git-link" >
                            
                            <div className="git-img">
                                <a href="https://i.pinimg.com/originals/0b/e5/40/0be540433c15a6f783fd06e91cb02c96.jpg" title="to git"><img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                            </div>
                            <div className="text-link">
                                <a href="https://i.pinimg.com/originals/0b/e5/40/0be540433c15a6f783fd06e91cb02c96.jpg" title="to git"> Информация на Etherscan.io</a>
                            </div>
                       
                        </div>
                    </div>
                    <div className="smart-right">
                        <a href="https://i.pinimg.com/originals/0b/e5/40/0be540433c15a6f783fd06e91cb02c96.jpg" title="to git"><img class="smart-img" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Smart);