import React, { Component } from 'react';
import './Quote.css';

// connect component to redux
import { connect } from 'react-redux';

class Quote extends Component{
    render(){
        return(
            <div className= "Quote">
                <div className="Quate-text">Мне кажется, что у нас не хватает<br/>
             интересных инноваций, связанных с<br/> 
             самой технологией блокчейна. Этот <br/> 
             проект обещает быть очень <br/> 
             интересным, если он будет успешно<br/> 
             воплощен стараниями опытной и<br/> 
             преданной команды.
                </div>
                <div className= "Writer"> <p>
                Игорь Каравев, советник и эксперт из топ-20 ICOBench.
                </p></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Quote);