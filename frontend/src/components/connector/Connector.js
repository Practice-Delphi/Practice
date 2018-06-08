import React, { Component } from 'react';
import './Connector.css';

// connect component to redux
import { connect } from 'react-redux';

class Connector extends Component{
    render(){
        return(
            <div className= "Connector">
                <div className="form">
                    <div className="left">
                        <div className="left-text">
                            <strong>Соединитель <br/>блокчейн <span >Squeezer</span ></strong>
                        </div>
                        <div className="left-video">
                            <img src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/video512x512.png" alt=""/>
                        </div>
                    </div>
                    <div className="right">
                        Наше решение предназначено для создания <br/>
                        простого интерфейса, который позволит<br/>
                         разработчикам ПО проводить транзакции блокчейн <br/>
                         без необходимости использования генезис кода <br/>
                         блокчейн или создания сложных компонентов.<br/>
                        <div className="connection-exeple">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                        </div>
                        <div className="git-link" >
                            
                                <div className="git-img">
                                    <a href="https://i.pinimg.com/originals/0b/e5/40/0be540433c15a6f783fd06e91cb02c96.jpg" title="to git"><img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" /></a>
                                </div>
                                <div className="text-link">
                                    <a href="https://i.pinimg.com/originals/0b/e5/40/0be540433c15a6f783fd06e91cb02c96.jpg" title="to git"> See the code at GitHab</a>
                                </div>
                       
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

export default connect(mapStateToProps, mapDispatchToProps)(Connector);