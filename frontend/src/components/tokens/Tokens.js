import React, { Component } from 'react';
import './Tokens.css';
import token1 from './token1.png'
import token2 from './token2.png'

// connect component to redux
import { connect } from 'react-redux';

class Tokens extends Component{
    render(){
        return(
            <div className= "Tokens">
                <div className="form token-form">
                    <div className="token-text">
                        <h1><strong>Токены Squeezer</strong></h1>
                        <br/>
                        <br/>
                        <p>
                            Платформа Squeezer основана на <br/>
                            токенах SQR. Разработчики <br/>
                            покупают подписку на платформу <br/>
                            с использованием токенов для <br/>
                            создания своих приложений. <br/>
                            Кроме того, все консультативные <br/>
                            услуги, предоставляемые <br/>
                            командой Squeezer, оплачиваются <br/>
                            токенами SQR.<br/>
                        </p>
                        <p>    
                            Каждые 6 месяцев мы будем <br/>
                            использовать 25% нашей <br/>
                            прибыли, чтобы выкупать и <br/>
                            уничтожить SQR, пока мы не <br/>
                            купим 40% всех SQR.<br/>
                        </p>
                        <div className="token-text-img">
                                <img class="" src={token1} /> 
                        </div>
                    </div>
                    <div className="token-img">
                        <img class="" src={token2} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Tokens);