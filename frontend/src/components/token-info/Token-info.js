import React, { Component } from 'react';
import './Token-info.css';

// connect component to redux
import { connect } from 'react-redux';

class Tokeninfo extends Component{
    render(){
        return(
            <div className= "Tokeninfo">
                <div className="form info-form">
                    <h2>
                        Подробная информация о токенах
                    </h2>
                    <div className="info-elements">
                        <div className="first">
                            <strong>Тикер:</strong> SQR<br/>
                            <strong> Цена:</strong> 1 SQR = $0.20<br/>
                            <strong>Минимальный предел:</strong> <br/>
                                    9,375,000 SQR<br/>
                            <strong>Максимальное значение:</strong> <br/>
                                    75,000,000 SQR<br/>
                        </div>
                        <div className="second">
                            <strong>Предпродажа:</strong> <br/>
                                    Май 1, 2018 - Май 12, 2018<br/>
                            <strong>Цель: </strong> 11,250,000 SQR<br/>
                        </div>
                        <div className="third">
                            <strong> Продажа токенов:</strong><br/>
                                     Июнь 20, 2018 - Июнь 30, 2018<br/>
                            <strong>Цель: </strong>63,750,000 SQR<br/>
                        </div>
                        <div className="four">
                            <strong>Совместимость:</strong> Ethereum ERC20<br/>
                            <strong>Использование:</strong> Подписка на платформу; консультационные услуги<br/>
                            <strong>Дата доставки токенов:</strong> 10 дней после завершения продажи токенов

                            По окончании продажи токенов, все непроданные токены сгорят.
                        </div>
                    </div>
                    <div className="distribution">
                        <h1><strong>Распределение токенов</strong></h1>
                            <div className="">
                                <div>
                                    <div>    
                                        <img class="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png"/> 
                                    </div>
                                    <div>
                                    <strong>Продажа токенов:</strong><br/>
                                    75,000,000 SQR (40%)
                                    По окончании продажи 
                                    токенов, все 
                                    непроданные токены 
                                    сгорят.
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img class="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png"/> 
                                    </div>
                                    <div>
                                    <strong>Платформа Squeezer:</strong><br/>
                                    56,250,000 SQR (30%)
                                    Резерв, требуемый для 
                                    обеспечения работы
                                    платформы. Заперто в 
                                    смарт-контракте с
                                    ограничением платежей 
                                    на 12 месяцев.
                                    </div>
                                </div>
                                <div>    
                                    <div>
                                        <img class="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png"/> 
                                    </div>
                                    <div>
                                    <strong>Команда:  </strong><br/>
                                    37,500,000 SQR (20%)
                                    Заперто в смарт-
                                    контракте с 
                                    ограничением платежей 
                                    на 24 месяца.
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img class="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png"/> 
                                    </div>
                                    <div>
                                    <strong>Консультанты:   </strong><br/>
                                    9,375,000 SQR (5%)  
                                    Заперто в смарт-
                                    контракте с 
                                    ограничением платежей 
                                    на 24 месяца.
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img class="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png"/> 
                                    </div>
                                    <div>
                                    <strong>Маркетинг и партнеры:</strong><br/>
                                    9,375,000 SQR (5%)
                                    </div>
                                </div>
                        </div>  
                        <div>
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg"/> 
                        </div>  
                    </div>
                    <div className="income">
                        <h2><strong>Распределение токенов</strong></h2>
                        <div>
                            <div >
                                <img class="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png"/> 
                            </div>
                            <div>
                            Техническая разработка: <strong>45%</strong>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img class="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png"/> 
                            </div>
                            <div>
                                Не технический персонал:<strong> 30%</strong>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img class="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png"/> 
                            </div>
                            <div>
                                Расходы на маркетинг: <strong> 10%</strong>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img class="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png"/> 
                            </div>
                            <div>
                                Расходы на инфраструктуру: <strong> 8%</strong>
                            </div>
                        </div>
                        <div>                            
                            <div>
                                <img class="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png"/> 
                            </div>
                            <div>
                                Другие операционные расходы :<strong> 7%</strong>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tokeninfo);