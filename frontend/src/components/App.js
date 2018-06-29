import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

// import Routing tools
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// connect component to redux
import { connect } from 'react-redux';
import { runTestAction } from '../actions/testaction';

//imports component
import Home from './home/Home';
import Account from './account/Account';
import Video from './video/Video';
// import Notfound from './notfound/Notfound';

import { addHistory } from '../actions/historyaction';
// import { checkUserStatus } from '../actions/loginaction';

import Switch from 'react-router-dom/Switch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: createBrowserHistory()
    }
  }
  // componentDidUpdate() {
  //   this.props.checkUserStatus();
  // }
  componentDidMount() {
    // this.props.checkUserStatus();
    // if (!this.props.tokenData.token) {
    //   this.props.checkUserStatus();
    // }
    this.props.runTest("TestPassed");
  }
  render() {
    this.props.addHistory(this.state.history);
    return (
      <Router history={this.state.history}>
        <div className="App">
          <Video />
          <Switch>
            <Route exact={true} path={'/'} component={Home} />
            <Route path={'/account'} component={Account} />
            <Route path={'*'} component={Account} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  test: state.isTestPass,
  history: state.historyData,
  tokenData: state.tokenData,
});
const mapDispatchToProps = dispatch => ({
  runTest: (mess) => { dispatch(runTestAction(mess)) },
  addHistory: (history) => { dispatch(addHistory(history)) },
  // checkUserStatus: () => { dispatch(checkUserStatus()) },
});

App.propTypes = {
  runTest: PropTypes.func,
  addHistory: PropTypes.func,
  history: PropTypes.object,
  // checkUserStatus: PropTypes.func,
  tokenData: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
