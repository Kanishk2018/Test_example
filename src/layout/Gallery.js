import React, { Component } from 'react';
import dummy from './../base-style/img/dummy.png'
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
//import "node_modules/react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";

class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => {
          const photo = res.data;
          this.setState({ photo });
        })
    }
  render() {


    const images = [
     {
       original: 'http://lorempixel.com/1000/600/nature/1/',
       thumbnail: 'http://lorempixel.com/250/150/nature/1/',
     },
     {
       original: 'http://lorempixel.com/1000/600/nature/2/',
       thumbnail: 'http://lorempixel.com/250/150/nature/2/'
     },
     {
       original: 'http://lorempixel.com/1000/600/nature/3/',
       thumbnail: 'http://lorempixel.com/250/150/nature/3/'
     }
   ]


    return (
      <div>
      { /*TODO :  MAKE POST START */ }
      <div className="w3-col m7">
          <div className="w3-row-padding">
            <div className="w3-col m12">
            <h2>Photo Gallery</h2>
            <hr/>

              <ImageGallery items={images} />

              </div>
            </div>
          </div>
          { /*TODO :  MAKE POST END*/}


      </div>
    );
  }
}

export default Gallery;
