import React, { Component } from "react";
import Yasmin from './components/yasmin';
import BkVideo from './components/yaser'
import 'bootstrap/dist/css/bootstrap.css'
import Show from './components/amal'
import Footer from './components/yaser2'
import Rahma from './components/rahma'
import axios from 'axios';

class App extends Component {
  state = {
    places: []
  };

  //===================== Mounting =======================//
  componentDidMount() {
    axios
      .get("http://localhost:9000/places")
      .then(res => {
        const places = res.data;
        this.setState({ places });
      })
      .catch(error => {
        console.log(error);
      });
  }

  //=================== GET Function =====================//
  getRequest = () => {
    console.log("GET REQUEST");
    axios
      .get("http://localhost:7000/places")
      .then(({ data }) => {
        // handle success
        console.log({ data });
        this.setState({ places: data  });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  //=================== INSERT Function =====================//
  insertData = place => {
    axios
      .post("http://localhost:7000/addPlace", place)
      .then(({ data }) => {
        // handle success
        console.log({ data });
        this.setState({ places:  data });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  render() {
    const { places } = this.state;
    const { getRequest } = this;
    return (
      <div>
        <BkVideo/>
        <h1>Toursim Website</h1>
        <Yasmin getRequest={getRequest}/>
        <Show/>
        <Rahma/>
        <Footer/>
        <button onClick={getRequest}>get Request</button>
        {
          places.map((place,index)=>{
            return (<div><h1>{place.title}</h1><img src={place.imageUrl} alt='Dead Sea'/><p>{place.description}</p></div>)
          })
        }
      </div>
    );
  }
}

export default App;
