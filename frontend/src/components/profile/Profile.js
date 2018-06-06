import React, { Component } from 'react';
import './Profile.css';
import PropTypes from 'prop-types';
// connect component to redux
import { connect } from 'react-redux';

//Import components

class Profile extends Component {
  constructor(props) {
    super(props);
    if (!this.props.userData.user) {
      this.props.history.push('/account/login');
    }
    this.state = {
      isPatherLinkActive: false,
      isControlPanel: true,
      isSettings: false,
      isAddress: true,
      isProfile: false,
    }
    this.renderPatherLink = this.renderPatherLink.bind(this);
    this.changePatherState = this.changePatherState.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.renderControlPanel = this.renderControlPanel.bind(this);
    this.renderSettings = this.renderSettings.bind(this);
    this.changeToControlPanel = this.changeToControlPanel.bind(this);
    this.changeToSettings = this.changeToSettings.bind(this);
    this.renderSettingsMain = this.renderSettingsMain.bind(this);
    this.changeToAddress = this.changeToAddress.bind(this);
    this.changeToProfile = this.changeToProfile.bind(this);
  }
  changePatherState() {
    if (!this.state.isPatherLinkActive) {
      this.setState({ isPatherLinkActive: true });
    }
  }
  changeToControlPanel() {
    this.setState({ isControlPanel: true, isSettings: false });
  }
  changeToSettings() {
    this.setState({ isControlPanel: false, isSettings: true });
  }
  changeToAddress() {
    this.setState({ isAddress: true, isProfile: false });
  }
  changeToProfile() {
    this.setState({ isAddress: false, isProfile: true });
  }
  renderPatherLink() {
    if (!this.state.isPatherLinkActive) {
      return (<div className="Profile-pather-link">
        <button className="Profile-button" onClick={this.changePatherState}>Pather link</button>
      </div>);
    } else {
      return (<div className="Profile-pather-link">
        <div>{this.props.userData.user.url}</div>
      </div>);
    }
  }
  renderMain() {
    if (this.state.isControlPanel) {
      return this.renderControlPanel();
    } else if (this.state.isSettings) {
      return this.renderSettings();
    }
  }
  renderControlPanel() {
    return (
      <div className="Profile-main">
        <div className="Profile-container">
          <div className="Profile-title">Main 1</div>
          <div className="Profile-tokens">
            <div className="Profile-tokens-field">
              <p>{this.props.userData.user.tokens}</p><p> GGC</p>
            </div>
            <div className="Profile-text">Text 1</div>
          </div>
          <div className="Profile-address">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt="" />
            <span> Address ETH</span>
            <button className="Profile-button" onClick={this.changeToSettings}>Settings:</button>
          </div>
        </div>
        <div className="Profile-container pather">
          <div className="Profile-pather-left">
            <div className="Profile-title">Main 2</div>
          </div>
          <div className="Profile-pather-right">
            <div className="Profile-text">Text 2</div>
            {this.renderPatherLink()}
            <table className="Profile-pather-table">
              <tbody>
                <tr>
                  <td>Registration</td>
                  <td>Commission</td>
                </tr>
                <tr>
                  <td><b>{this.props.userData.user.registers}</b></td>
                  <td><b>{this.props.userData.user.commission}</b></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  renderSettingsMain() {
    if (this.state.isAddress) {
      return (
        <div className="Profile-settings-main">
          <div className="Profile-text">Text</div>
          <form className="Profile-form">
            <input type="text" className="Profile-input" placeholder="ETH Address" />
            <div className="Profile-alert">Some alert</div>
            <div className="Profile-success">Success</div>
            <button className="Profile-button">Save</button>
          </form>
        </div>
      );
    } else if (this.state.isProfile) {
      return (
        <div className="Profile-settings-main">
          <form className="Profile-form">
            <h4>Email</h4>
            <input type="email" className="Profile-input" placeholder="Email" />
            <h4>Change password</h4>
            <input type="password" className="Profile-input" placeholder="Password" />
            <input type="password" className="Profile-input" placeholder="Password confirm" />
            <div className="Profile-alert">Some alert</div>
            <div className="Profile-success">Success</div>
            <button className="Profile-button">Update</button>
          </form>
        </div>
      );
    }
  }
  renderSettings() {
    return (<div className="Profile-main">
      <div className="Profile-container settings">
        <div className="Profile-settings-nav">
          <div className={(this.state.isAddress) ? "Profile-settings-nav-button set-active" : "Profile-settings-nav-button"} onClick={this.changeToAddress}>Address Ethereum</div>
          <div className={(this.state.isProfile) ? "Profile-settings-nav-button set-active" : "Profile-settings-nav-button"} onClick={this.changeToProfile}>Profile</div>
        </div>
        {this.renderSettingsMain()}
      </div>
    </div>)
  }
  render() {
    if (this.props.userData.user) {
      return (
        <div className="Profile">
          <div className="Profile-header">
            <div className="Profile-header-container">
              <div className="Profile-header-nav">
                <div className={(this.state.isControlPanel) ? "Profile-nav-button active" : "Profile-nav-button"} onClick={this.changeToControlPanel}>
                  Control Panel
                </div>
                <div className={(this.state.isSettings) ? "Profile-nav-button active" : "Profile-nav-button"} onClick={this.changeToSettings}>
                  Settings
                </div>
              </div>
              <div className="Profile-header-nav">
                <div className="Profile-nav-email">
                  <span>Welcome <i>{this.props.userData.user.email}</i></span>
                </div>
                <div className="Profile-nav-exitbutton">
                  Log out
                </div>
              </div>
            </div>
          </div>
          {this.renderMain()}
        </div>
      );
    } else {
      return null;
    }

  }
}

Profile.propTypes = {
  userData: PropTypes.object,
  history: PropTypes.object
}

const mapStateToProps = state => ({
  // some props
  userData: state.userData,
  history: state.historyData
});
const mapDispatchToProps = dispatch => ({
  // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);