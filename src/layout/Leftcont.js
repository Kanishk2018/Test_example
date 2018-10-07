import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import dummy from './../base-style/img/dummy.png'
import axios from 'axios';

import Centercont from './Centercont';
import Rightcont from './Rightcont';
import Gallery from './Gallery';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class Leftcont extends Component {

  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
          const posts = res.data;
          this.setState({ posts });
        })
    }
  render() {
    return (
      <Router>
        <div className="w3-container w3-content contmargin-top">
      <div className="">

            <div className="w3-col m3">

              <div className="w3-card-2 w3-round w3-white box__marbottom">
                <div className="w3-container">
                 <h4 className="w3-center">Kanishk Kumar</h4>
                 <p className="w3-center"><img src={dummy} className="w3-circle img__size"  alt="Avatar"/></p>
                 <hr/>
                 <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>  <Link to="/post">POST</Link></p>
                 <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> <Link to="/Gallery">Gallery</Link></p>
                {/* <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> <Link to="/todo">Todo</Link></p> */}
                </div>
              </div>

              { /*<div className="w3-card-2 w3-round">
                      <div className="w3-white">
                        <button className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups</button>

                        <button  className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events</button>

                        <button  className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-users fa-fw w3-margin-right"></i> My Photos</button>

                      </div>
                  </div> */ }
          </div>
                <Route exact path="/" component={Centercont} />
               <Route exact path="/post" component={Centercont} />
               <Route path="/Gallery" component={Gallery} />

               <Rightcont/>
        </div>
      </div>
      </Router>
    );
  }
}

export default Leftcont;
