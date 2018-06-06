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
import { addHistory } from '../actions/historyaction';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      history: createBrowserHistory()
    }
  }
  componentDidMount() {
    this.props.runTest("TestPassed");
  }
  render() {
    this.props.addHistory(this.state.history);
    return (
      <Router history={this.state.history}>
        <div className="App">
          <Route exact={true} path={'/'} component={Home} />
          <Route exact={true} path={'/profile'} render={() => (<h1>This is Profile Page</h1>)} />
          <Route exact={true} path={'/profile/:id'} render={({ match }) => (<h1>This is Profile Page of {match.params.id} </h1>)} />
          <Route exact={true} path={'/photos'} render={() => (<h1>This is Photos Page</h1>)} />
          <Route path={'/account'} component={Account}/>
          <Route exact={true} path={'/login'} render={() => (<h1>This is login page</h1>)} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  test: state.isTestPass,
  history: state.historyData
});
const mapDispatchToProps = dispatch => ({
  runTest: (mess) => { dispatch(runTestAction(mess)) },
  addHistory: (history) => { dispatch(addHistory(history)) }
});

App.propTypes = {
  runTest: PropTypes.func,
  addHistory: PropTypes.func,
  history: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
