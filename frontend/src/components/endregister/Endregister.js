import React, { Component } from 'react';
import './Endregister.css';
import uptime from './uptime.png';

// connect component to redux
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Endregister extends Component{

    render(){
        return(
            <div className="footer">
                <div className= "Endregister">
                    <div className="form Endregister-form">
                        <div className="Endregister-left">
                            <h3><strong>Не пропустите последние новости и обновления</strong></h3>
                            <div className="emailfiller">
                            <input type="email" className="Endregister-input" placeholder="Email" onChange={() =>{}} />
                            <Link className='Endregister-button' to={'/account/login'}><strong>Подписаться</strong></Link>
                            </div>
                            <p>
                            Программный интерфейс продажи токенов 
                            полностью обеспечивается Системой Squeezer
                            </p>
                            <img className="" src={uptime} alt=""/>

                        </div>
                        <div className="Endregister-right">
                            <h2><strong>
                                ПРИСОЕДИНЯЙТЕСЬ К 
                                РЕВОЛЮЦИИ БЛОКЧЕЙН-
                                ПРИЛОЖЕНИЙ
                                </strong></h2>
                                <br/>
                            <p>
                                Первая в мире платформа для разработки 
                                ПО, предлагающая микроуслуги для 
                                блокчейн
                            </p>
                            <br/>
                            
                            <div className="End-register"><Link className='Endregister-account' to={'/account/login'}><strong>Войти</strong></Link></div>
                            <div className="End-register"><Link className='Endregister-register' to={'/account/register'}><strong>Зарегистрироваться</strong></Link></div>
                        </div>
                    </div>
                </div>
                <div className="footer-text">
                    <div className="form footer-text-form">
                    <div className="footer-text-article"><p>Отказ от ответственности</p></div>
                    <div className="footer-text-item">
                        <p>
                            Токены не представляют собой собственный капитал, 
                            акции, доли, роялти или права на капитал, прибыль или 
                            доход в платформе, ПО или организации, выдающей 
                            токены, либо любой другой компании или 
                            интеллектуальной собственности, связанной с платформой, 
                            либо любым другим публичным или частным 
                            предприятием, корпорацией, фондом или иным 
                            юридическим лицом в любой юрисдикции.
                        </p>
                        <p>
                            Предлагая информацию, продукты или услуги посредством 
                            данного веб-сайта, мы никому не навязываем 
                            использование такой информации, продуктов или услуг в 
                            какой-либо юрисдикции, где предоставление такой 
                            информации, продуктов или услуг может быть запрещено 
                            законом.
                        </p>
                    </div>
                    <div className="footer-text-item">
                        <p>
                            Вся информация, представленная на данном веб-сайте, 
                            предназначена только для информационных целей и 
                            может изменяться без уведомления. Данный веб-сайт не 
                            предназначен для инвестиционных консультаций, 
                            предложения или рекомендации покупки или продажи 
                            какого-либо финансового инструмента или продукта.
                        </p>                        
                        <p>
                            Продажа токенов Squeezer подразумевает и относится к 
                            разработке и использованию передовых и новых 
                            экспериментальных технологий, которые могут не 
                            оправдать ожиданий или не поставляться в комплектации, 
                            предусмотренной технической документацией.
                        </p>
                    </div>
                </div>    
                </div>
                <div className="footer-links">
                <div className="form footer-form">
                    <div className="footer-links-3">
                    <div className="">© 2018 Squeezer</div>
                    <div className="">Белая Бумага</div>
                    <div className="">Условия для токенов</div>
                    </div>
                    <div className="">Golden Data INC, New Horizon, Ground Floor, 3 1⁄2 Miles Philip S.W. Goldson Highway, Belize City, Belize</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Endregister);