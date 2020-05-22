import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
    <div id="section41" class="container-fluid">
      <h1>Contact Me</h1>
      <br></br>
      <div class="row">
        <div class="col-med-3" id="contact-pic-container">
          <img id="contact-pic" src="./images/contact.png" alt="Mail Image"></img>
        </div>
        <div class="col-lg-3">
          <p> Aaron Thomas</p>
          <p> acthomas83@gmail.com</p>
          <p>(678) 558-7897</p>
        </div>
        <div class="col-med-3">
        </div>
      </div>
    </div>
    <div id="orange"></div>
    <div id="section42" class="container-fluid">
      <h1>Follow Me</h1>
      <br></br>
      <a href="https://github.com/acthomas83" target="_blank">GitHub</a>
      <br></br>
      <a href="https://www.linkedin.com/in/aaron-t-653a6676" target="_blank">LinkedIn</a>
    </div>
      </div>
      );
    }
  }
  
  export default Contact;