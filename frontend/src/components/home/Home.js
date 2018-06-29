import React, { Component } from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import qs from 'query-string';

// connect component to redux
import { connect } from 'react-redux';
import { setReferal, deleteReferal } from '../../actions/referalaction';

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
import Questions from '../questions/Questions';
import Endregister from '../endregister/Endregister';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: null,
    }
    window.onscroll = () => {
      if ((this.state.header.getBoundingClientRect().top < 0)) {
        this.state.header.classList.add("fixed");
      } else if (window.scrollY === 0 && this.state.header.classList.contains("fixed")) {
        this.state.header.classList.remove("fixed");
      }
    }
    // this.state = {
    //   quote: false,
    //   benefits: false,
    //   usecases: false,
    //   capabilities: false,
    //   facts: false,
    //   connector: false,
    //   tokens: false,
    //   tokeninfo: false,
    //   smart: false,
    //   roadmap: false,
    //   elem: null,
    // }
    // window.onscroll = () => {
    //   let newstate = {
    //     quote: false,
    //     benefits: false,
    //     usecases: false,
    //     capabilities: false,
    //     facts: false,
    //     connector: false,
    //     tokens: false,
    //     tokeninfo: false,
    //     smart: false,
    //     roadmap: false,
    //   }
    //   // this.setState({ scrollY: window.scrollY });
    //   //const header = document.getElementById('home-header');
    //   //if (window.scrollY > 0) {
    //   // console.log(this.state.elem.header.getBoundingClientRect().top);
    //   if ((this.state.elem.header.getBoundingClientRect().top < 0)) {
    //     this.state.elem.header.classList.add("fixed");
    //   } else if (window.scrollY === 0 && this.state.elem.header.classList.contains("fixed")) {
    //     this.state.elem.header.classList.remove("fixed");
    //   }
    //   //const quote = document.getElementById("Quote");
    //   if ((window.innerHeight - this.state.elem.quote.getBoundingClientRect().top > -1) && this.state.elem.quote) {
    //     newstate.quote = true;
    //     // this.state.elem.quote.classList.remove("hidden");
    //   } else {
    //     //this.state.elem.quote.classList.add("hidden");
    //     newstate.quote = false;
    //   }
    //   // const benefits = document.getElementById("Benefits");
    //   if ((window.innerHeight - this.state.elem.benefits.getBoundingClientRect().top > -1) && this.state.elem.benefits) {
    //     newstate.benefits = true;
    //   } else {
    //     newstate.benefits = false;
    //   }
    //   // const usecases = document.getElementById("Usecases");
    //   // console.log(window.innerHeight - usecases.getBoundingClientRect().top);
    //   if ((window.innerHeight - this.state.elem.usecases.getBoundingClientRect().top > -1) && this.state.elem.usecases) {
    //     newstate.usecases = true;
    //   } else {
    //     newstate.usecases = false;
    //   }
    //   // const capabilities = document.getElementById("Capabilities");
    //   if ((window.innerHeight - this.state.elem.capabilities.getBoundingClientRect().top > -1) && this.state.elem.capabilities) {
    //     newstate.capabilities = true;
    //   } else {
    //     newstate.capabilities = false;
    //   }

    //   if ((window.innerHeight - this.state.elem.facts.getBoundingClientRect().top > -1) && this.state.elem.facts) {
    //     newstate.facts = true;
    //   } else {
    //     newstate.facts = false;
    //   }

    //   if ((window.innerHeight - this.state.elem.connector.getBoundingClientRect().top > -1) && this.state.elem.connector) {
    //     newstate.connector = true;
    //   } else {
    //     newstate.connector = false;
    //   }

    //   if ((window.innerHeight - this.state.elem.tokens.getBoundingClientRect().top > -1) && this.state.elem.tokens) {
    //     newstate.tokens = true;
    //   } else {
    //     newstate.tokens = false;
    //   }

    //   if ((window.innerHeight - this.state.elem.tokeninfo.getBoundingClientRect().top > -1) && this.state.elem.tokeninfo) {
    //     newstate.tokeninfo = true;
    //   } else {
    //     newstate.tokeninfo = false;
    //   }

    //   if ((window.innerHeight - this.state.elem.smart.getBoundingClientRect().top > -1) && this.state.elem.smart) {
    //     newstate.smart = true;
    //   } else {
    //     newstate.smart = false;
    //   }

    //   if ((window.innerHeight - this.state.elem.roadmap.getBoundingClientRect().top > -1) && this.state.elem.roadmap) {
    //     newstate.roadmap = true;
    //   } else {
    //     newstate.roadmap = false;
    //   }

    //   this.setState(newstate);
    // }
    // window.onscroll.bind(this);
  }
  componentDidMount() {
    this.setState({ header: document.getElementById('home-header') });
    const ref = qs.parse(this.props.location.search).ref;
    if (ref) {
      this.props.setReferal(ref);
    } else {
      this.props.deleteReferal();
    }
  }
  // componentDidMount() {
  //   this.setState({
  //     elem: {
  //       header: document.getElementById('home-header'),
  //       quote: document.getElementById('Quote'),
  //       benefits: document.getElementById('Benefits'),
  //       usecases: document.getElementById('Usecases'),
  //       capabilities: document.getElementById('Capabilities'),
  //       facts: document.getElementById('Facts'),
  //       connector: document.getElementById('Connector'),
  //       tokens: document.getElementById('Tokens'),
  //       tokeninfo: document.getElementById('Tokeninfo'),
  //       smart: document.getElementById('Smart'),
  //       roadmap: document.getElementById('Roadmap'),
  //     }
  //   });
  //   if (this.state.elem) {
  //     // console.log(this.state);
  //     window.onscroll();
  //   }
  // }
  componentWillUnmount() {
    window.onscroll = () => { };
  }
  render() {
    return (
      <div>
        <div className="Home-warning">
          <div className="Home-warning-text">{this.props.lang.header.warning}</div>
        </div>
        <header id="home-header" className="Home-header">
          <nav className="Home-navbar">
            <Link to={"/"} className="Home-brand">
              <img src={logo} className="Home-logo" alt="logo" />
            </Link>
            <div className="Home-links">
              <a href="#Benefits" className="Home-link shadow">{this.props.lang.header.solution}</a>
              <a href="#Capabilities" className="Home-link shadow">{this.props.lang.header.features}</a>
              <a href="#Tokens" className="Home-link shadow">{this.props.lang.header.token}</a>
              <a href="#Roadmap" className="Home-link shadow">{this.props.lang.header.roadmap}</a>
              <a href="#Team" className="Home-link shadow">{this.props.lang.header.team}</a>
              <a href="https://squeezer.breezy.hr/" className="Home-link shadow">{this.props.lang.header.careers}</a>
              <a href="https://squeezer.io/docs/getting-started/" className="Home-link shadow">{this.props.lang.header.mvp}</a>
              <Langselect />
              <Link className="Home-link account-link" to={'/account'}>{this.props.lang.header.account}</Link>
            </div>
          </nav>
        </header>
        <Firsthome />
        <Ourpages />
        <div id="Quote">
          <LazyLoad height={200}>
            <Quote />
          </LazyLoad>
          {/* {(() => {
            if (this.state.quote) {
              return <Quote />
            } else {
              return null;
            }
          })()} */}
        </div>
        <div id="Benefits">
          <LazyLoad height={200}>
            <Benefits />
          </LazyLoad>
          {/* {(() => {
            if (this.state.benefits) {
              return <Benefits />
            } else {
              return null;
            }
          })()} */}
        </div>
        {/* <Benefits /> */}
        <div id="Usecases">
          <LazyLoad height={200}>
            <Usecases />
          </LazyLoad>
          {/* {(() => {
            if (this.state.usecases) {
              return <Usecases />
            } else {
              return null;
            }
          })()} */}
        </div>
        {/* <Usecases /> */}
        <div id="Capabilities">
          <LazyLoad height={200}>
            <Capabilities />
          </LazyLoad>

          {/* {(() => {
            if (this.state.capabilities) {
              return <Capabilities />
            } else {
              return null;
            }
          })()} */}
        </div>
        {/* <Capabilities /> */}
        <div id="Facts">

          <LazyLoad height={200}>
            <Facts />
          </LazyLoad>
          {/* {(() => {
            if (this.state.facts) {
              return <Facts />
            } else {
              return null;
            }
          })()} */}
        </div>
        <div id="Connector">
          <LazyLoad height={200}>
            <Connector />
          </LazyLoad>
          {/* {(() => {
            if (this.state.connector) {
              return <Connector />
            } else {
              return null;
            }
          })()} */}
        </div>
        <div id="Tokens">

          <LazyLoad height={200}>
            <Tokens />
          </LazyLoad>
          {/* {(() => {
            if (this.state.tokens) {
              return <Tokens />
            } else {
              return null;
            }
          })()} */}
        </div>
        <div id="Tokeninfo">
          <LazyLoad height={200}>
            <Tokeninfo />
          </LazyLoad>
          {/* {(() => {
            if (this.state.tokeninfo) {
              return <Tokeninfo />
            } else {
              return null;
            }
          })()} */}
        </div>
        <div id="Smart">
          <LazyLoad height={200}>
            <Smart />
          </LazyLoad>
          {/* {(() => {
            if (this.state.smart) {
              return <Smart />
            } else {
              return null;
            }
          })()} */}
        </div>
        <div id="Roadmap">
          <LazyLoad height={200}>
            <Roadmap />
          </LazyLoad>
          {/* {(() => {
            if (this.state.roadmap) {
              return <Roadmap />
            } else {
              return null;
            }
          })()} */}
        </div>
        <div id="Team">
          <LazyLoad height={200}>
            <Team />
          </LazyLoad>
        </div>
        <div id="Media">
          <LazyLoad height={200}>
            <Media />
          </LazyLoad>
        </div>
        <div id="Clients">
          <LazyLoad height={200}>
            <Clients />
          </LazyLoad>
        </div>
        <div id="Share">
          <LazyLoad height={200}>
            <Share />
          </LazyLoad>
        </div>
        <div id="Questions">
          <LazyLoad height={200}>
            <Questions />
          </LazyLoad>
        </div>
        <div id="Endregister">
          <LazyLoad height={200}>
            <Endregister />
          </LazyLoad>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  lang: PropTypes.object,
  setReferal: PropTypes.func,
  deleteReferal: PropTypes.func,
  location: PropTypes.object,
}

const mapStateToProps = state => ({
  // some props
  lang: state.langData,
});
const mapDispatchToProps = dispatch => ({
  setReferal: (ref) => { dispatch(setReferal(ref)) },
  deleteReferal: () => { dispatch(deleteReferal()) },
  // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);