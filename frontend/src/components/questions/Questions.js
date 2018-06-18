import React, { Component } from 'react';
import './Questions.css';

// connect component to redux
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Questions extends Component{
    
    render(){
        return(
            <div className= "Questions">
                <div className="form Questions-form" >
                    <div className="FAQ">
                        <h1><strong>Часто задаваемые вопросы</strong></h1>
                        <div className="FAQ1" onClick={()=> { 
                            (document.getElementById("answer1").hidden == true ) ?
                            document.getElementById("answer1").hidden = false:document.getElementById("answer1").hidden = true} }>
                            <Link className='FAQ-link' to={""}>
                            <h4><strong>Какая польза от токена SQR внутри платформы Squeezer?</strong></h4>
                            </Link>
                        </div>
                        <div id="answer1" hidden= "true">
                            Токен SQR - это топливо, которое питает энергией нашу 
                            платформу. Разработчики будут использовать токены для создания и 
                            внедрения блокчейн-приложений. Кроме того, все консультационные услуги 
                            на платформе Squeezer будут оплачиваться в токенах SQR.
                        </div>
                        <div className="FAQ2" onClick={()=> { 
                            (document.getElementById("answer2").hidden == true ) ?
                             document.getElementById("answer2").hidden = false:document.getElementById("answer2").hidden = true} }>
                            <Link className='FAQ-link' to={""}>    
                            <h4><strong>Как технология блокчейн интегрируется в ваш продукт?</strong></h4>
                            </Link>
                        </div>
                        <div id="answer2" hidden= "true">
                            Для соединения микроуслуг с блокчейн, мы создаем независимый 
                            соединитель, модуль, который используется приложениями для чтения 
                            и записи транзакций блокчейн, либо активации других функций блокчейн, 
                            таких, как смарт контракты.
                        </div>

                        <div className="FAQ3" onClick={()=> { 
                            (document.getElementById("answer3").hidden == true ) ?
                            document.getElementById("answer3").hidden = false:document.getElementById("answer3").hidden = true} }>
                            <Link className='FAQ-link' to={""}>
                            <h4><strong>Вы обладаете необходимыми навыками, чтобы обеспечить выполнение дорожной карты?</strong></h4>
                            </Link>
                        </div>
                        <div id="answer3" hidden= "true">
                            Наш исполнительный директор, Ник Чисиу, специализируется 
                            на микроуслугах. Он успешно завершил многочисленные проекты 
                            в этой области, работая на американские корпорации, входящие 
                            в топ 1000. Кроме того, на протяжении ряда лет он работал консультантом 
                            по блокчейн. Он будет руководить командой разработчиков, гарантируя 
                            выполнение нами наших обещаний.
                        </div>
                        <div className="FAQ4" onClick={()=> { 
                            (document.getElementById("answer4").hidden == true ) ?
                            document.getElementById("answer4").hidden = false:document.getElementById("answer4").hidden = true} }>
                            <Link className='FAQ-link' to={""}>
                            <h4><strong>В настоящее время у вас имеется рабочий продукт (MVP)?</strong></h4>
                            </Link>
                        </div>
                        <div id="answer4" hidden= "true">
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
                            <a href="#">info@squeezer.io </a>  
                        </h4>
                        <div className="img">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                        </div>
                        <div className="img">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                        </div>
                        <div className="img">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                        </div>
                        <div className="img">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                        </div>
                        <div className="img">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
                        </div>
                        <div className="img">
                            <img class="" src="http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Questions);


