import React, { Component } from 'react';
import './Questions.css';

// connect component to redux
import { connect } from 'react-redux';

import twiter from '../../assets/twiter.svg';
import facebook from '../../assets/facebook.svg';
import github from '../../assets/github.svg';
import bitcoin from '../../assets/bitcoin.svg';
import medium from '../../assets/medium.svg';
import telegram from '../../assets/telegram.svg';


class Questions extends Component {

    render() {
        return (
            <div className="Questions">
                <div className="form Questions-form" >
                    <div className="FAQ">
                        <h1><strong>Часто задаваемые вопросы</strong></h1>
                        <div className="FAQ1" onClick={() => {
                            (document.getElementById("answer1").hidden === true) ?
                                document.getElementById("answer1").hidden = false : document.getElementById("answer1").hidden = true
                        }}>
                            <div className='FAQ-link'>
                                <h4><strong>Какая польза от токена SQR внутри платформы Squeezer?</strong></h4>
                            </div>
                        </div>
                        <div id="answer1" hidden="true">
                            Токен SQR - это топливо, которое питает энергией нашу
                            платформу. Разработчики будут использовать токены для создания и
                            внедрения блокчейн-приложений. Кроме того, все консультационные услуги
                            на платформе Squeezer будут оплачиваться в токенах SQR.
                        </div>
                        <div className="FAQ2" onClick={() => {
                            (document.getElementById("answer2").hidden === true) ?
                                document.getElementById("answer2").hidden = false : document.getElementById("answer2").hidden = true
                        }}>
                            <div className='FAQ-link'>
                                <h4><strong>Как технология блокчейн интегрируется в ваш продукт?</strong></h4>
                            </div>
                        </div>
                        <div id="answer2" hidden="true">
                            Для соединения микроуслуг с блокчейн, мы создаем независимый
                            соединитель, модуль, который используется приложениями для чтения
                            и записи транзакций блокчейн, либо активации других функций блокчейн,
                            таких, как смарт контракты.
                        </div>

                        <div className="FAQ3" onClick={() => {
                            (document.getElementById("answer3").hidden === true) ?
                                document.getElementById("answer3").hidden = false : document.getElementById("answer3").hidden = true
                        }}>
                            <div className='FAQ-link'>
                                <h4><strong>Вы обладаете необходимыми навыками, чтобы обеспечить выполнение дорожной карты?</strong></h4>
                            </div>
                        </div>
                        <div id="answer3" hidden="true">
                            Наш исполнительный директор, Ник Чисиу, специализируется
                            на микроуслугах. Он успешно завершил многочисленные проекты
                            в этой области, работая на американские корпорации, входящие
                            в топ 1000. Кроме того, на протяжении ряда лет он работал консультантом
                            по блокчейн. Он будет руководить командой разработчиков, гарантируя
                            выполнение нами наших обещаний.
                        </div>
                        <div className="FAQ4" onClick={() => {
                            (document.getElementById("answer4").hidden === true) ?
                                document.getElementById("answer4").hidden = false : document.getElementById("answer4").hidden = true
                        }}>
                            <div className='FAQ-link'>
                                <h4><strong>В настоящее время у вас имеется рабочий продукт (MVP)?</strong></h4>
                            </div>
                        </div>
                        <div id="answer4" hidden="true">
                            Да. Мы уже построили систему нашей платформы,
                            которая будет служить в качестве основного инструмента,
                            который используют разработчики для создания, построения,
                            составления и внедрения своих проектов. Блокчейн коннектор
                            вскоре будет подключен к системе в понятной конфигурации, чтобы
                             она была максимально доступной для разработчиков. Мы приглашаем
                             вас опробовать ее! Скоро вы увидите, как просто создавать и управлять
                             проектом Squeezer на вашем локальном компьютере. Просто перейдите по
                             ссылке: https://squeezer.io/docs/getting-started/
                        </div>
                    </div>
                    <div className="Links">
                        <h4>Для любых запросов или вопросов
                            относительно продажи наших токенов,
                            обращайтесь к нам по адресу:
                            <a href="https://tokensale.squeezer.io/mailto:info@squeezer.io">info@squeezer.io </a>
                        </h4>
                        <div className="Links-img">
                            <a href="https://twitter.com/SqueezerIO" target="_blank" rel='noopener noreferrer' title="@squeezerio"><img src={twiter} alt="Twiter" /></a>
                            <a href="https://www.facebook.com/Squeezer.IO" target="_blank" rel='noopener noreferrer' title="Facebook"><img src={facebook} alt="Facebook" /></a>
                            <a href="https://github.com/SqueezerIO" target="_blank" rel='noopener noreferrer' title="GitHub"><img src={github} alt="GitHub" /></a>
                            <a href="https://bitcointalk.org/index.php?topic=3169422" rel='noopener noreferrer' target="_blank" title="BitCoin Talk"><img src={bitcoin} alt="BitCoin Talk" /></a>
                            <a href="https://medium.com/@squeezer" target="_blank" rel='noopener noreferrer' title="Medium"><img src={medium} alt="Medium" /></a>
                            <a href="https://telegram.me/squeezerio" target="_blank" rel='noopener noreferrer' title="Telegram"><img src={telegram} alt="Telegram" /><span>22k+</span></a>
                        </div>
                        {/* <div className="img">
                            <a href="https://www.facebook.com/Squeezer.IO" target="_blank" rel='noopener noreferrer' title="Facebook"><img src={facebook} alt="Facebook" /></a>
                        </div>
                        <div className="img">
                            <a href="https://github.com/SqueezerIO" target="_blank" rel='noopener noreferrer' title="GitHub"><img src={github} alt="GitHub" /></a>
                        </div>
                        <div className="img">
                            <a href="https://bitcointalk.org/index.php?topic=3169422" rel='noopener noreferrer' target="_blank" title="BitCoin Talk"><img src={bitcoin} alt="BitCoin Talk" /></a>
                        </div>
                        <div className="img">
                            <a href="https://medium.com/@squeezer" target="_blank" rel='noopener noreferrer' title="Medium"><img src={medium} alt="Medium" /></a>
                        </div>
                        <div className="img">
                            <a href="https://telegram.me/squeezerio" target="_blank" rel='noopener noreferrer' title="Telegram"><img src={telegram} alt="Telegram" /><span>22k+</span></a>
                        </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Questions);


