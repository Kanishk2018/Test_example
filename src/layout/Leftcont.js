import React, { Component } from 'react';
import dummy from './../base-style/img/dummy.png'
import axios from 'axios';

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
      <div>
      <div className="">

            <div className="w3-col m3">

              <div className="w3-card-2 w3-round w3-white box__marbottom">
                <div className="w3-container">
                 <h4 className="w3-center">Kanishk Kumar</h4>
                 <p className="w3-center"><img src={dummy} className="w3-circle img__size"  alt="Avatar"/></p>
                 <hr/>
                 <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>Post</p>
                 <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Photo</p>
                 <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>Todo</p>
                </div>
              </div>

               <div className="w3-card-2 w3-round">
                      <div className="w3-white">
                        <button className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups</button>

                        <button  className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events</button>

                        <button  className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-users fa-fw w3-margin-right"></i> My Photos</button>

                      </div>
                  </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leftcont;
