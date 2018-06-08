import React, { Component } from 'react';
import './Langselect.css';

// connect component to redux
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/languageaction';
import PropTypes from 'prop-types';

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
            <option className="Langselect-option" value="EN" onClick={this.props.changeLang}>
            EN
            </option>
            <option className="Langselect-option" value="UA" onClick={this.props.changeLang}>
            UA
            </option>
            <option className="Langselect-option" value="RU" onClick={this.props.changeLang}>
            RU
            </option>
        </div>
      )
    } else {
      return null;
    }
  }
  render() {
    return (
      <div className='btn btn-outline-light Langselect-button' onClick={this.changeLangSelect.bind(this)}>{this.props.lang.type}
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
  changeLang: (event) => { console.log(event.target); dispatch(changeLanguage(event.target.value)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Langselect);