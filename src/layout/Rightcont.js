import React, { Component } from 'react';
import dummy from './../base-style/img/dummy.png'
import axios from 'axios';

class Rightcont extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const users = res.data;
          this.setState({ users });
        })
    }
  render() {
    return (
      <div>
      <div className="w3-col m2">
        <div className="w3-card-2 w3-round w3-white w3-center box__marbottom">
          <div className="w3-container">
            <p>Upcoming Events:</p>
            <img src={dummy} alt="Forest" className="img__size"/>
            <p><strong>Holiday</strong></p>
            <p>Friday 15:00</p>
            <p><button className="w3-button w3-block w3-theme-l4">Info</button></p>
          </div>
        </div>


  { this.state.users.map(users =>
        <div className="w3-card-2 w3-round w3-white w3-center box__marbottom">
            <div className="w3-container">
              <p><b>Friend Request</b></p>
              <img src={dummy} alt="Avatar" className="img__size"/><br/>
              <span  key={users.id}>{users.name}</span>
                <div className="w3-row w3-opacity">
                    <div className="w3-half">
                      <button className="w3-button w3-block w3-green w3-section" title="Accept"><i className="fa fa-check"></i></button>
                    </div>
                    <div className="w3-half">
                      <button className="w3-button w3-block w3-red w3-section" title="Decline"><i className="fa fa-remove"></i></button>
                    </div>
                  </div>
                 </div>
              </div>

                )}

              </div>



      </div>
    );
  }
}

export default Rightcont;
