import React, { Component } from 'react';
import './Langselect.css';

// connect component to redux
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/languageaction';
import PropTypes from 'prop-types';

// import assets
import arrow from '../../assets/arrow.svg';
import EN from '../../assets/EN.svg';
import UA from '../../assets/UA.svg';
import RU from '../../assets/RU.svg';

class Langselect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langselect: false
    }
  }
  changeLangSelect() {
    if (this.state.langselect) {
      this.setState({ langselect: false });
    } else {
      this.setState({ langselect: true });
    }
  }
  renderSelect(select) {
    if (select) {
      return (
        <div className="Langselect-select">
          <div className="Langselect-option" onClick={() => { this.props.changeLang("EN") }}>
            <img src={EN} alt="" />
            {this.props.lang.lang.EN}
          </div>
          <div className="Langselect-option" onClick={() => { this.props.changeLang("UA") }}>
            <img src={UA} alt="" />
            {this.props.lang.lang.UA}
          </div>
          <div className="Langselect-option" onClick={() => { this.props.changeLang("RU") }}>
            <img src={RU} alt="" />
            {this.props.lang.lang.RU}
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
  renderFlag() {
    if (this.props.lang.type === 'EN') {
      return (
        <img src={EN} alt="" />
      );
    } else if (this.props.lang.type === 'UA') {
      return (
        <img src={UA} alt="" />
      );
    } else if (this.props.lang.type === 'RU') {
      return (
        <img src={RU} alt="" />
      );
    } else {
      return (
        <img src={EN} alt="" />
      );
    }
  }
  render() {
    return (
      <div className='Langselect-button' onClick={this.changeLangSelect.bind(this)}>
        <img src={arrow} alt="" />
        {this.renderFlag()}
        {this.renderSelect(this.state.langselect)}
      </div>
    );
  }
}

Langselect.propTypes = {
  lang: PropTypes.object,
  changeLang: PropTypes.func,
}

const mapStateToProps = state => ({
  // some props
  lang: state.langData
});
const mapDispatchToProps = dispatch => ({
  // some action creators
  changeLang: (lang) => { dispatch(changeLanguage(lang)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Langselect);