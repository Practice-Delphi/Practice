import React, { Component } from 'react';
import './Benefits.css';

// connect component to redux
import { connect } from 'react-redux';

class Benefits extends Component {
    render() {
        return (
            <div class="Benefits">
                <div className="form">
                    <div className="topic">
                        <h1><strong><span className="problems">Проблемы</span> при <br/>
                        создании <br/>
                        блокчейн- <br/>
                        приложений</strong></h1>
                    </div>
                    <div className="tegs">
                        <div className="line">
                            <div className="img">
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            </div>
                            <div className="text">
                                Настройка среды разработки блокчейн является<br/>
                                трудоемким процессом, при этом трудно <br/>
                                поддерживать стабильность для тестируемых <br/>
                                версий.<br/>
                            </div>
                        </div>
                        <div className="line">
                            <div className="img">
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            </div>
                            <div className="text">
                                Тысячи новых транзакций блокчейн, как правило,<br/> 
                                будут давать сбой системы серверной части <br/>
                                пользователя.<br/>
                            </div>
                        </div>
                        <div className="line">
                            <div className="img">
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            </div>
                            <div className="text">
                                Разработчики ПО, мало знакомые с технологией <br/>
                                блокчейн, перед построением блокчейн-<br/>
                                приложений должны ознакомиться с кодом генезис <br/>
                                блока и создать сложные синтаксические <br/>
                                анализаторы.<br/>
                            </div>
                        </div>
                    </div>
                    <div className="topic">
                        <h1><strong>Решение <span className="squeezer">Squeezer</span></strong></h1>
                    </div>
                    <div className="tegs">
                        <div className="line">
                            <div className="img">
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            </div>
                            <div className="text">
                                Создать единый универсальный соединитель <br/>
                                блокчейн, который позволит разработчикам <br/>
                                подключаться к любому блокчейну (такому, как BTC, <br/>
                                ETH или LTC) и использовать песочницу для <br/>
                                тестирования приложений.
                            </div>
                        </div>
                        <div className="line">
                            <div className="img">
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            </div>
                            <div className="text">
                                Приложения Squeezer основаны на микроуслугах, <br/>
                                что означает, что функция автомасштаба <br/>
                                включается по умолчанию. Также микроуслуги <br/>
                                поддерживают автоматическое восстановление и <br/>
                                предусматривают бесшумное внедрение облачного <br/>
                                сервиса.
                            </div>
                        </div>
                        <div className="line">
                            <div className="img">
                                <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                            </div>
                            <div className="text">
                                Платформа Squeezer будет создавать и внедрять <br/>
                                приложения на многочисленных этапах от GitHub <br/>
                                или других репозиториев кодов.
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

export default connect(mapStateToProps, mapDispatchToProps)(Benefits);