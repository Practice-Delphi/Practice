import React, { Component } from 'react';
import './Home.css';

// connect component to redux
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import logo from '../logo.jpg';
import Langselect from '../langselect/Langselect';

//Import components
import Firsthome from '../firsthome/Firsthome';
import Ourpages from '../ourpages/Ourpages';
import Quote from '../quote/Quote';
import Benefits from '../benefits/Benefits';
import Usecases from '../usecases/Usecases';
import Capabilities from '../capabilities/Capabilities';
import Facts from '../facts/Facts';
import Connector from '../connector/Connector';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: false,
      benefits: false,
    }
    window.onscroll = () => {
      this.setState({ scrollY: window.scrollY });
      const header = document.getElementById('home-header');
      if (window.scrollY > 0) {
        header.classList.add("fixed");
      } else if (window.scrollY === 0 && header.classList.contains("fixed")) {
        header.classList.remove("fixed");
      }
      const quote = document.getElementById("Quote");
      if ((window.innerHeight - quote.getBoundingClientRect().top > -1) && quote) {
        this.setState({ quote: true });
      } else {
        this.setState({ quote: false });
      }
      const benefits = document.getElementById("Benefits");
      if ((window.innerHeight - benefits.getBoundingClientRect().top > -1) && benefits) {
        this.setState({ benefits: true });
      } else {
        this.setState({ benefits: false });
      }
    }
  }
  componentDidMount() {
    window.onscroll();
  }
  componentWillUnmount() {
    window.onscroll = () => { };
  }
  render() {
    return (
      <div>
        <header id="home-header" className="Home-header">
          <nav className="Home-navbar">
            <div className="Home-brand">
              <img src={logo} className="Home-logo" alt="logo" />
              <h1 className="Home-title">Site Title</h1>
            </div>
            <Link className='btn btn-outline-light Home-link' to={'/registration'}>Link1</Link>
            <Link className='btn btn-outline-light Home-link' to={'/registration'}>Link2</Link>
            <Link className='btn btn-outline-light Home-link' to={'/registration'}>Link3</Link>
            <Link className='btn btn-outline-light Home-link' to={'/registration'}>Link4</Link>
            <Link className='btn btn-outline-light Home-link' to={'/registration'}>Link5</Link>
            <Langselect />
            <Link className='btn btn-outline-light Home-link' to={'/account/login'}>Log in</Link>
            <Link className='btn btn-outline-light Home-link' to={'/account/register'}>Sign in</Link>
          </nav>
        </header>
        <Firsthome />
        <Ourpages />
        <div id="Quote">
          {(() => {
            if (this.state.quote) {
              return <Quote />
            } else {
              return null;
            }
          })()}
        </div>
        <div id="Benefits">
          {(() => {
            if (this.state.benefits) {
              return <Benefits />
            } else {
              return null;
            }
          })()}
        </div>
        {/* <Benefits /> */}
        <Usecases />
        <Capabilities />
        <Facts />
        <Connector />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);