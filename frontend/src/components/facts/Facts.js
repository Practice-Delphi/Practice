import React, { Component } from 'react';
import './Facts.css';
import facts1 from './facts1.png';
import facts2 from './facts2.png';
import facts3 from './facts3.png';

// connect component to redux
import { connect } from 'react-redux';

class Facts extends Component{
    render(){
        return(
            <div className= "Facts">
                <div className="form">
                    <div className="fact-item">
                        <div >
                            <div className="Facts-symbol1">
                                <img class="" src={facts1} /> 
                            </div>
                            <div className="text-item">
                                <strong>
                                Более 75 000 загрузок<br/> 
                                ежемесячно
                                </strong>
                            </div>
                        </div>
                        <div>
                            <div className="facts-symbol"> 
                                01
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
                            <div className="Facts-symbol">
                                <img class="" src={facts2}/> 
                            </div>
                            <div className="text-item">
                            <strong>
                                Более 7000 обменов
                            </strong>
                            </div>
                        </div>
                        <div>
                            <div className="facts-symbol"> 
                                02
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
                    <div className="fact-item1">
                        <div>
                            <div className="Facts-symbol">
                                <img class="" src={facts3} /> 
                            </div>
                            <div className="text-item">
                                <strong>
                                Запланировано более <br/>
                                40 миллионов <br/>
                                разработчиков
                                </strong>
                            </div>
                        </div>
                        <div>
                            <div className="facts-symbol"> 
                                03
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