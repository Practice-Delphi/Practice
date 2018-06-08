import React, { Component } from 'react';
import './Facts.css';

// connect component to redux
import { connect } from 'react-redux';

class Facts extends Component{
    render(){
        return(
            <div className= "Facts">
                <div className="form">
                    <div className="fact-item">
                        <div >
                            <div className="symbol">
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg"/> 
                            </div>
                            <div className="text-item">
                                <strong>
                                Более 75 000 загрузок<br/> 
                                ежемесячно
                                </strong>
                            </div>
                        </div>
                        <div>
                            <div className="symbol"> 
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg"/>
                            </div>
                            <div className="text-item">
                                Наша система получила <br/> 
                                много благосклонного <br/> 
                                внимания на NPM, одном <br/> 
                                из лучших реестров<br/> 
                                программного <br/> 
                                обеспечения.<br/> 
                            </div>
                        </div>
                    </div>
                    <div className="fact-item">
                        <div>
                            <div className="symbol">
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg"/> 
                            </div>
                            <div className="text-item">
                            <strong>
                                Более 7000 обменов
                            </strong>
                            </div>
                        </div>
                        <div>
                            <div className="symbol"> 
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg"/>
                            </div>
                            <div className="text-item">
                                Наше масштабируемое <br/> 
                                решение сделает <br/> 
                                возможным обмен для <br/> 
                                поддержки транзакций с <br/> 
                                большим объемом.<br/> 
                            </div>
                        </div>
                    </div>
                    <div className="fact-item">
                        <div>
                            <div className="symbol">
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg"/> 
                            </div>
                            <div className="text-item">
                                <strong>
                                Запланировано более <br/>
                                40 миллионов <br/>
                                разработчиков<br/>
                                </strong>
                            </div>
                        </div>
                        <div>
                            <div className="symbol"> 
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg"/>
                            </div>
                            <div className="text-item">
                                Многие разработчики ПО <br/> 
                                каждый день работают в <br/> 
                                среде технологии <br/> 
                                блокчейн. Мы стремимся <br/> 
                                сделать их работу <br/> 
                                максимально простой и <br/> 
                                удобной.<br/> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Facts);