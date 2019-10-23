import React, { Component } from "react";
import Map from "./amal2";
class Show extends Component {
  state = {
    title: "Kitten the black bolt",
    place: "business park",
    imageUrl: "https://i1.sndcdn.com/artworks-000018349357-7zwxh2-t500x500.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aut voluptates sed dolorem consequatur magni dolores distinctio. Libero amet, illo natus delectus dignissimos vel voluptatem."
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6">
              <h2>{this.state.title}</h2>
              <img src={this.state.imageUrl} />
              <p>{this.state.description}</p>
              <h2>WEATHER API HERE</h2>
              <h2>DISTANCE HERE</h2>
              <h2>OTHER STUFF</h2>
            </div>
            <div className="col-6 col-md-6">
              <Map place={this.state.place} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
