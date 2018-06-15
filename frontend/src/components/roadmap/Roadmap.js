import React, { Component } from 'react';
import './Roadmap.css';
import roadpoint from './roadpoint.png';
import roadpoint2 from './roadpoint2.png';

// connect component to redux
import { connect } from 'react-redux';

class Roadmap extends Component{
    render(){
        return(
            <div className= "Roadmap">
                <div className="form " id="road">
                    
                    <div className="road-form">
                        <div id="header-form">
                        <div className="road-line" id="header">
                            <h1><strong>Дорожная карта</strong></h1>
                        </div>
                        </div>
                        <div className="road-line">
                            <div className="road-item aditional">
                            </div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint} />
                            </div>
                            <div className="road-item">
                                    <h4><strong>Февраль 2016</strong></h4>
                                    <p>
                                    Создать общие принципы и<br />
                                    добавить базовые <br />
                                    функциональные <br />
                                    возможности<br /> 
                                    </p>
                            </div>
                        </div>
                        <div className="road-line">
                            <div className="road-item">
                            <h4><strong>Сентябрь 2016</strong></h4>
                                <p>
                                Проверка концепции и 
                                интеграция подключаемых 
                                модулей
                                </p>
                            </div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint} />
                            </div>
                            <div className="road-item aditional"></div>
                        </div>
                        <div className="road-line">
                            <div className="road-item aditional" ></div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint} />
                            </div>
                            <div className="road-item">
                            <h4><strong>Октябрь 2017</strong></h4>
                                <p>
                                Стабильная версия и 
                                поставщики облачных 
                                сервисов
                                </p>
                            </div>
                        </div>
                        <div className="road-line">
                            <div className="road-item">
                            <h4><strong>Май 2018</strong></h4>
                                <p>
                                Этап краудфандинга 
                                предпродажи токенов
                                </p>
                            </div>
                            <div className="road-img aditional">
                                <img className="roadpoint " src={roadpoint} />
                            </div>
                            <div className="road-item aditional"></div>
                        </div>
                        <div className="road-line">
                            <div className="road-item aditional"></div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint} />
                            </div>
                            <div className="road-item">
                            <h4><strong>Июнь 2018</strong></h4>
                                <p>
                                Публичная продажа токенов
                                </p>
                            </div>
                        </div>
                        <div className="road-line">
                            <div className="road-item">
                            <h4><strong>Июль 2018</strong></h4>
                                <p>
                                Нанять дополнительных 
                                разработчиков для 
                                построения облачных 
                                соединителей блокчейн
                                </p>
                            </div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint2} />
                            </div>
                            <div className="road-item aditional"></div>
                        </div>
                        <div className="road-line">
                            <div className="road-item aditional"></div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint2} />
                            </div>
                            <div className="road-item">
                            <h4><strong>Февраль 2019</strong></h4>
                                <p>
                                Обеспечить облачные 
                                компоненты блокчейн и 
                                соединители
                                </p>
                            </div>
                        </div>
                        <div className="road-line">
                            <div className="road-item ">
                            <h4><strong>Апрель 2019</strong></h4>
                                <p>
                                Разрешить покупку подписки 
                                с помощью токена SQR. 
                                Начните создавать 
                                приложения, связанные с
                                блокчейн
                                </p>
                            </div>
                            <div className="road-img aditional">
                                <img className="roadpoint" src={roadpoint2} />
                            </div>
                            <div className="road-item aditional"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Roadmap);