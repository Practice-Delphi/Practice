import React, { Component } from 'react';
import './Langselect.css';

// connect component to redux
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/languageaction';
import PropTypes from 'prop-types';

// import assets
import arrow from '../../assets/arrow.svg';

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
          <div className="Langselect-option"  onClick={ () => { this.props.changeLang("EN")} }>
            <img src="https://unpkg.com/react-flag-kit/assets/GB.svg" alt="" />
            {this.props.lang.lang.EN}
          </div>
          <div className="Langselect-option"  onClick={ () => { this.props.changeLang("UA")} }>
            <img src="https://unpkg.com/react-flag-kit/assets/UA.svg" alt="" />
            {this.props.lang.lang.UA}
          </div>
          <div className="Langselect-option"  onClick={ () => { this.props.changeLang("RU")} }>
            <img src="https://unpkg.com/react-flag-kit/assets/RU.svg" alt="" />
            {this.props.lang.lang.RU}
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
  render() {
    return (
      <div className='Langselect-button' onClick={this.changeLangSelect.bind(this)}>
        <img src={arrow}/>
        <img src={ (this.props.lang.type === "EN") ? "https://unpkg.com/react-flag-kit/assets/GB.svg" : `https://unpkg.com/react-flag-kit/assets/${this.props.lang.type}.svg`} alt="" />
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