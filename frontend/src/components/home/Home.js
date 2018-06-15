import React, { Component } from 'react';
import './Home.css';

// connect component to redux
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
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
import Tokens from '../tokens/Tokens';
import Tokeninfo from '../token-info/Token-info';
import Smart from '../smart/Smart';
import Roadmap from '../roadmap/Roadmap';
import Team from '../team/Team';
import Media from '../media/Media';
import Clients from '../clients/Clients';
import Share from '../share/Share';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: false,
      benefits: false,
      usecases: false,
      capabilities: false,
      elem: null,
    }
    window.onscroll = () => {
      let newstate = {
        quote: false,
        benefits: false,
        usecases: false,
        capabilities: false,
      }
      // this.setState({ scrollY: window.scrollY });
      //const header = document.getElementById('home-header');
      if (window.scrollY > 0) {
        this.state.elem.header.classList.add("fixed");
      } else if (window.scrollY === 0 && this.state.elem.header.classList.contains("fixed")) {
        this.state.elem.header.classList.remove("fixed");
      }
      //const quote = document.getElementById("Quote");
      if ((window.innerHeight - this.state.elem.quote.getBoundingClientRect().top > -1) && this.state.elem.quote) {
        newstate.quote = true;
      } else {
        newstate.quote = false;
      }
      // const benefits = document.getElementById("Benefits");
      if ((window.innerHeight - this.state.elem.benefits.getBoundingClientRect().top > -1) && this.state.elem.benefits) {
        newstate.benefits = true;
      } else {
        newstate.benefits = false;
      }
      // const usecases = document.getElementById("Usecases");
      // console.log(window.innerHeight - usecases.getBoundingClientRect().top);
      if ((window.innerHeight - this.state.elem.usecases.getBoundingClientRect().top > -1) && this.state.elem.usecases) {
        newstate.usecases = true;
      } else {
        newstate.usecases = false;
      }
      // const capabilities = document.getElementById("Capabilities");
      if ((window.innerHeight - this.state.elem.capabilities.getBoundingClientRect().top > -1) && this.state.elem.capabilities) {
        newstate.capabilities = true;
      } else {
        newstate.capabilities = false;
      }
      this.setState(newstate);
    }
    // window.onscroll.bind(this);
  }
  componentDidMount() {
    this.setState({
      elem: {
        header: document.getElementById('home-header'),
        quote: document.getElementById('Quote'),
        benefits: document.getElementById('Benefits'),
        usecases: document.getElementById('Usecases'),
        capabilities: document.getElementById('Capabilities'),
      }
    });
    if (this.state.elem) {
      console.log(this.state);
      window.onscroll();
    }
  }
  componentWillUnmount() {
    window.onscroll = () => { };
  }
  render() {
    return (
      <div>
        <header id="home-header" className="Home-header">
          <nav className="Home-navbar">
            <a href="/" className="Home-brand">
              <img src={logo} className="Home-logo" alt="logo" />
              {/* <h1 className="Home-title">Squeezer</h1> */}
            </a>
            <Link className='Home-link' to={'/registration'}>Link1</Link>
            <Link className='Home-link' to={'/registration'}>Link2</Link>
            <Link className='Home-link' to={'/registration'}>Link3</Link>
            <Link className='Home-link' to={'/registration'}>Link4</Link>
            <Link className='Home-link' to={'/registration'}>Link5</Link>
            <Langselect />
            <Link className="Home-link account-link" to={'/account'}>My account</Link>
            {/* <Link className='Home-link' to={'/account/login'}>Log in</Link>
            <Link className='Home-link' to={'/account/register'}>Sign in</Link> */}
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
        <div id="Usecases">
          {(() => {
            if (this.state.usecases) {
              return <Usecases />
            } else {
              return null;
            }
          })()}
        </div>
        {/* <Usecases /> */}
        <div id="Capabilities">
          {(() => {
            if (this.state.capabilities) {
              return <Capabilities />
            } else {
              return null;
            }
          })()}
        </div>
        {/* <Capabilities /> */}
        <Facts />
        <Connector />
        <Tokens />
        <Tokeninfo />
        <Smart />
        <Roadmap />
        <Team />
        <Media />
        <Clients />
        <Share />
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