import React, { Component } from "react";
import video from "../j.mp4";
import "./yaser.css";
import man from "../mann.png";
import woman from "../woman.png";

class BkVideo extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="v-header container">
          <div className="fullscreen-video-wrap">
            <video src={video} autoPlay loop muted></video>
          </div>
          <div className="header-overlay"></div>
          <div className="header-content text-md-center">
            <h1>Welcome to Jordan</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
              impedit amet minima iste autem cumque et maiores blanditiis
              doloribus aut dolorum quaerat non est voluptatum?!
              
            </p>
          </div>
        </header>

        <section >
          <div>
            <img className='man' src={man} />
          </div>
          <div className="clear"></div>

        </section>

        <section>
          <div >
            <div>
              <img className='camel' src={woman} />
            </div>
          </div>
        </section>
        <div className="clear"></div>
      </div>
    );
  }
}

export default BkVideo;
