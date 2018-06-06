import React, { Component } from 'react';
import './Langselect.css';

// connect component to redux
import { connect } from 'react-redux';


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
          <div className="Langselect-select" >
            <div className="Langselect-option">
              Lang 1
            </div>
            <div className="Langselect-option">
              Lang 2
            </div>
            <div className="Langselect-option">
              Lang 3
            </div>
          </div>
        )
      } else {
        return null;
      }
  }
  render() {
    return (
        <div className='btn btn-outline-light Langselect-button' onClick={ this.changeLangSelect.bind(this) }>Lang
            {this.renderSelect(this.state.langselect)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Langselect);