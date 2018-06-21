import React, { Component } from 'react';
import './Capabilities.css';
import capa1 from './capa1.png';
import capa2 from './capa2.png';
import capa3 from './capa3.png';
import capa4 from './capa4.png';
import capa5 from './capa5.png';
import capa6 from './capa6.png';
import capa7 from './capa7.png';
import capa8 from './capa8.png';
import capa9 from './capa9.png';
import capa10 from './capa10.png';
import capa11 from './capa11.png';


// connect component to redux
import { connect } from 'react-redux';

class Capabilities extends Component {
    render() {
        return (
            <div className="Capabilities">
                <div className="form ">
                    <div className="main">
                        <div className="main-text">
                            <div className="text">
                                <h1>
                                    <strong>
                                Основные <br/>
                                функциональные <br/>
                                возможности Squeezer<br/>
                                    </strong>
                                </h1>
                                <p>
                                Squeezer представляет собой платформу, которая
                                помогает разработчикам ПО легко создавать 
                                приложения без работы со всей инфраструктурой 
                                блокчейн. Это также мощный инструмент для 
                                обеспечения высококачественных компонентов ПО 
                                блокчейн для крупных корпоративных 
                                организаций. Squeezer использует платформы
                                микроуслуг мирового класса, такие, как AWS 
                                Lambda, Google Functions и Azure Functions.
                                </p>
                            </div>
                            <div className="main-text-symbols">
                                <div className="text-symbol"> 
                                    <img className="" src={ capa2 } alt=""/>
                                </div>
                                <div className="text-symbol"> 
                                    <img className="" src={ capa3 } alt=""/>
                                </div>
                                <div className="text-symbol"> 
                                    <img className="" src={ capa4 } alt=""/>
                                </div>
                                <div className="text-symbol"> 
                                    <img className="" src={ capa5 } alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="main-picture">                            
                                <img className="" src={capa1} alt=""/>
                        </div>
                    </div>
                    <div className="secondary">
                      <div className="administration tip">
                            <div className="symbol"> 
                                <img className="" src={capa6} alt=""/>
                            </div>
                            <strong>Нулевое <br/> администрирование</strong>
                            <p>
                                Используйте ваш код без <br/>
                                какой-либо <br/>
                                продолжительной <br/>
                                предварительной настройки <br/>
                                или необходимости <br/>
                                последующего управления <br/>
                                чем-либо.<br/>
                            </p>
                      </div>
                      <div className="resize tip">
                            <div className="symbol"> 
                                <img className="" src={capa7} alt=""/>
                            </div>
                            <strong>Автомасштаб</strong>
                            <p>
                            Позвольте вашим <br/>
                            провайдерам услуг <br/>
                            управлять задачами <br/>
                            масштабирования. Нет <br/>
                            необходимости настраивать<br/>
                             оповещения или писать <br/>
                             скрипты для увеличения <br/>
                             или уменьшения масштаба. <br/>
                             Будьте абсолютно спокойны <br/>
                             в периоды высокого или <br/>
                             низкого трафика.<br/>
                            </p>
                      </div>
                      <div className="payment tip">
                            <div className="symbol"> 
                                <img className="" src={capa8} alt=""/>
                            </div>
                            <strong>Оплата по мере <br/> использования</strong>
                            <p>
                            Вычисления функции как <br/>
                            услуги (FaaS) и удаленное <br/>
                            управление, оплачиваемые <br/>
                            на основе пользования, а не <br/>
                            заранее предусмотренной <br/>
                            производительности. Вы <br/>
                            можете использовать все <br/>
                            ваши ресурсы, не платя ни <br/>
                            единого цента за время <br/>
                            ожидания.<br/>
                            </p>
                      </div>
                      <div className="conditions tip">
                            <div className="symbol"> 
                                <img className="" src={capa9} alt=""/>
                            </div>
                            <strong>Условия разработки</strong>
                            <p>
                            Моделируйте среду <br/>
                            поставщика облачных <br/>
                            сервисов на вашем <br/>
                            локальном компьютере. Нет <br/>
                            необходимости при каждой <br/>
                            итерации использовать код. <br/>
                            Ускорьте весь цикл <br/>
                            разработки в 10 раз.<br/>
                            </p>
                      </div>
                      <div className="block tip">
                             <div className="symbol"> 
                                <img className="" src={capa10} alt=""/>
                            </div>
                            <strong>Блокчейн</strong>
                            <p>
                                Будучи поистине <br/>
                                революционной системой, <br/>
                                Squeezer является первой <br/>
                                платформой, которая <br/>
                                объединяет мощь <br/>
                                микроуслуг с <br/>
                                неизменностью технологии <br/>
                                блокчейн.<br/>
                            </p>
                      </div>
                      <div className="token tip">
                            <div className="symbol"> 
                                <img className="" src={capa11} alt=""/>
                            </div>
                            <strong>Токен</strong>
                            <p>
                            Токен Squeezer (SQR) <br/>
                            является основной <br/>
                            утилитой, используемой <br/>
                            разработчиками для <br/>
                            создания и внедрения <br/>
                            приложений на Платформе <br/>
                            Squeezer.<br/>
                            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Capabilities);