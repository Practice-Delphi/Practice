import React, { Component } from 'react';
import './Profile.css';
import PropTypes from 'prop-types';
// connect component to redux
import { connect } from 'react-redux';
import { logout, updateETHAddress, updateUserEmailAndPassword, clearUpdateStatus } from '../../actions/loginaction';
import { checkUserStatus } from '../../actions/loginaction';
// import { checkUserStatus } from '../../actions/loginaction';

//Import components

// import assets
import etheriumicon from '../../assets/etheriumicon.png';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPatherLinkActive: false,
      isControlPanel: true,
      isSettings: false,
      isAddress: true,
      isProfile: false,
      update: {
        email: null,
        password: null,
        passwordconf: null,
        address: null,
      }
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
  componentDidUpdate() {
    if (!this.props.userData.user && !this.props.userData.loading) {
      this.props.history.replace('/account/login');
    }
  }
  componentDidMount() {
    this.props.clearUpdateStatus();
    if (!this.props.userData.user) {
      this.props.checkUserStatus();
    }
    if (!this.props.userData.user && !this.props.userData.loading) {
      this.props.history.replace('/account/login');
    }
  }
  changePatherState() {
    if (!this.state.isPatherLinkActive) {
      this.setState({ isPatherLinkActive: true });
    }
  }
  changeAddress(event) {
    this.setState({ update: Object.assign(this.state.update, { address: event.target.value }) });
  }
  changeUpdateEmail(event) {
    this.setState({ update: Object.assign(this.state.update, { email: event.target.value }) });
  }
  changeUpdatePassword(event) {
    this.setState({ update: Object.assign(this.state.update, { password: event.target.value }) });
  }
  changeUpdatePasswordConfirm(event) {
    this.setState({ update: Object.assign(this.state.update, { passwordconf: event.target.value }) });
  }
  updateUser() {
    this.props.updateUser(this.state.update.email, this.state.update.password, this.state.update.passwordconf);
  }
  updateAddress() {
    this.props.updateAddress(this.state.update.address);
  }
  changeToControlPanel() {
    this.props.clearUpdateStatus();
    this.setState({ isControlPanel: true, isSettings: false });
  }
  changeToSettings() {
    this.setState({ isControlPanel: false, isSettings: true });
  }
  changeToAddress() {
    this.props.clearUpdateStatus();
    this.setState({ isAddress: true, isProfile: false });
  }
  changeToProfile() {
    this.props.clearUpdateStatus();
    this.setState({ isAddress: false, isProfile: true });
  }
  renderPatherLink() {
    if (!this.state.isPatherLinkActive) {
      return (<div className="Profile-pather-link">
        <button className="Profile-button" onClick={this.changePatherState}>{this.props.lang.profile.controlPanel.affiliatelink}</button>
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
          <div className="Profile-title">{this.props.lang.profile.controlPanel.title1}:</div>
          <div className="Profile-tokens">
            <div className="Profile-tokens-field">
              <p>{this.props.userData.user.tokens}</p><p> SQR</p>
            </div>
            <div className="Profile-text"><span>{this.props.lang.profile.controlPanel.text1}</span></div>
          </div>
          <div className="Profile-address">
            <img src={etheriumicon} alt="" />
            <span>{this.props.lang.profile.ethaddress}:</span>
            <button className="Profile-button" onClick={this.changeToSettings}>{this.props.lang.profile.controlPanel.configure}</button>
          </div>
        </div>
        <div className="Profile-container pather">
          <div className="Profile-pather-left">
            <div className="Profile-title">{this.props.lang.profile.controlPanel.title2}:</div>
          </div>
          <div className="Profile-pather-right">
            <div className="Profile-text">{this.props.lang.profile.controlPanel.text2}</div>
            {this.renderPatherLink()}
            <table className="Profile-pather-table">
              <tbody>
                <tr>
                  <td>{this.props.lang.profile.controlPanel.registrations}</td>
                  <td>{this.props.lang.profile.controlPanel.commission}</td>
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
          <div className="Profile-text">{this.props.lang.profile.settings.text1}</div>
          <div className="Profile-form">
            <input type="text" className="Profile-input" placeholder={this.props.lang.profile.ethaddress} onChange={this.changeAddress.bind(this)} />
            {(() => {
              if (this.props.updateStatus.error) {
                return (<div className="Profile-alert">{this.props.lang.errors[this.props.updateStatus.error]}</div>);
              } else if (this.props.updateStatus.success) {
                return (<div className="Profile-success">{this.props.lang.success[this.props.updateStatus.success]}</div>);
              } else {
                return null;
              }
            })()}
            {/* <div className="Profile-alert">Some alert</div>
            <div className="Profile-success">Success</div> */}
            <button className="Profile-button" onClick={this.updateAddress.bind(this)}>{this.props.lang.profile.settings.save}</button>
          </div>
        </div>
      );
    } else if (this.state.isProfile) {
      return (
        <div className="Profile-settings-main">
          <div className="Profile-form">
            <h4>{this.props.lang.profile.settings.email}</h4>
            <input type="email" className="Profile-input" placeholder={this.props.lang.email} onChange={this.changeUpdateEmail.bind(this)} />
            <h4>{this.props.lang.profile.settings.changepass}</h4>
            <input type="password" className="Profile-input" placeholder={this.props.lang.password} onChange={this.changeUpdatePassword.bind(this)} />
            <input type="password" className="Profile-input" placeholder={this.props.lang.confirmpass} onChange={this.changeUpdatePasswordConfirm.bind(this)} />
            {(() => {
              if (this.props.updateStatus.error) {
                return (<div className="Profile-alert">{this.props.lang.errors[this.props.updateStatus.error]}</div>);
              } else if (this.props.updateStatus.success) {
                return (<div className="Profile-success">{this.props.lang.success[this.props.updateStatus.success]}</div>);
              } else {
                return null;
              }
            })()}
            {/* <div className="Profile-alert">Some alert</div>
            <div className="Profile-success">Success</div> */}
            <button className="Profile-button" onClick={this.updateUser.bind(this)}>{this.props.lang.profile.settings.update}</button>
          </div>
        </div>
      );
    }
  }
  renderSettings() {
    return (<div className="Profile-main">
      <div className="Profile-container settings">
        <div className="Profile-settings-nav">
          <div className={(this.state.isAddress) ? "Profile-settings-nav-button set-active" : "Profile-settings-nav-button"} onClick={this.changeToAddress}>{this.props.lang.profile.settings.ethaddress}</div>
          <div className={(this.state.isProfile) ? "Profile-settings-nav-button set-active" : "Profile-settings-nav-button"} onClick={this.changeToProfile}>{this.props.lang.profile.settings.profile}</div>
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
                  {this.props.lang.profile.controlPanel.dashboard}
                </div>
                <div className={(this.state.isSettings) ? "Profile-nav-button active" : "Profile-nav-button"} onClick={this.changeToSettings}>
                  {this.props.lang.profile.settings.settings}
                </div>
              </div>
              <div className="Profile-header-nav">
                <div className="Profile-nav-email">
                  <span>{this.props.lang.profile.welcome} <i>{this.props.userData.user.email}</i></span>
                </div>
                <div className="Profile-nav-exitbutton" onClick={this.props.logout}>
                  {this.props.lang.profile.logout}
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
  history: PropTypes.object,
  logout: PropTypes.func,
  lang: PropTypes.object,
  updateUser: PropTypes.func,
  updateAddress: PropTypes.func,
  updateStatus: PropTypes.object,
  checkUserStatus: PropTypes.func,
  clearUpdateStatus: PropTypes.func,
}

const mapStateToProps = state => ({
  // some props
  userData: state.userData,
  history: state.historyData,
  lang: state.langData,
  updateStatus: state.updateProfileStatus,
});
const mapDispatchToProps = dispatch => ({
  // some action creators
  logout: () => { dispatch(logout()) },
  updateAddress: (address) => { dispatch(updateETHAddress(address)) },
  updateUser: (email, pass, passconf) => { dispatch(updateUserEmailAndPassword(email, pass, passconf)) },
  checkUserStatus: () => { dispatch(checkUserStatus())},
  clearUpdateStatus: () => { dispatch(clearUpdateStatus())},
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);