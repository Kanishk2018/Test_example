import React, { Component } from 'react';
import dummy from './../base-style/img/dummy.png'
import axios from 'axios';

class Centercont extends Component {
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

        { /*TODO :  MAKE POST START */ }
        <div className="w3-col m7">
            <div className="w3-row-padding">
              <div className="w3-col m12">
                <div className="w3-card-2 w3-round w3-white">
                  <div className="w3-container w3-padding post">
                    <h6 className=" post--align">Make Post</h6>
                    <p contenteditable="true" className="w3-border w3-padding post--edit w3-opacity">Let's post your thought </p>

                    <button type="button" className="w3-button w3-theme post--button"><i className="fa fa-pencil"></i>  Post</button>
                  </div>
                </div>
              </div>
            </div>
            { /*TODO :  MAKE POST END*/}

          {   /*TODO : POST container */}

          { this.state.posts.map(posts =>
                  <div className="w3-container w3-card-2 w3-white w3-round w3-margin padding__10">
                    <img src={dummy} alt="Avatar" className="w3-left w3-circle w3-margin-right img__size" />
                    <span className="w3-right w3-opacity">1 min</span>
                    <h4 className="post--align">John Doe</h4>
                    <hr className="w3-clear"/>
                      <p className="posted__p" key={posts.id}>{posts.body}</p>
                        <div className=" post--button">
                          <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up"></i>  Like</button>
                          <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment"></i>  Comment </button>
                        </div>
                    </div>
            )}


        </div>




        {/* TODO : END*/}

      </div>

    );
  }
}

export default Centercont;
