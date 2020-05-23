import React, { Component } from "react";
import passwordGenImage from "../../images/password.png"

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div id="section3" class="container-fluid">
        <h1>Portfolio</h1>

        <div class="row justify-content-center">
          <div class="card picbox col-lg-3 col-sm-4">
            <a href="https://acthomas83.github.io/hw3_PW_Algorithms/" target="_blank"><img src={passwordGenImage}
                class="card-img-top" alt="Password Image"></img></a>
                <a href="https://github.com/acthomas83/hw3_PW_Algorithms" target="_blank" class="capbox">Random Password
                  Generator GitHub Repo</a>
                <a href="https://acthomas83.github.io/hw3_PW_Algorithms/" target="_blank" class="capbox">Random Password
              Generator</a>
          </div>

          <div class="card picbox col-lg-3 col-sm-4">
            <a href="https://scratch.mit.edu/projects/346229034/" target="_blank"><img src="./images/catmouse.png"
                class="card-img-top" alt="CatMouse Image"></img></a>
            <a href="https://scratch.mit.edu/projects/346229034/" target="_blank" class="capbox">Slack Game:
              Cat/Mouse</a>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="card picbox col-lg-3 col-sm-4">
            <a href="https://jessmaple.github.io/lessTraveled/" target="_blank">
              <img src="./images/lessTraveled.png" class="card-img-top" alt="lessTraveled"></img></a>
              <a href="https://github.com/jessmaple/lessTraveled" target="_blank" class="capbox">lessTraveled - Project 1 GitHub Repo</a>
              <a href="https://jessmaple.github.io/lessTraveled/" target="_blank" class="capbox">lessTraveled: National
              Park Finder</a>
          </div>
          <div class="card picbox col-lg-3 col-sm-4">
            <a href="https://acthomas83.github.io/hw6_weather_app/" target="_blank">
              <img src="./images/weathered.png" class="card-img-top" alt="Weathered">
              </img></a>
            <a href="https://github.com/acthomas83/hw6_weather_app" target="_blank" class="capbox">Weathered App GitHub Repo</a>
            <a href="https://acthomas83.github.io/hw6_weather_app/" class="capbox">Weathered App: Look up weather by
              city</a>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="card picbox col-lg-3 col-sm-4">
            <a href=" " target="_blank"><img src="./images/samaya.png"
                class="card-img-top" alt="Samaya Image"></img></a>
                <a href="https://github.com/acthomas83/hw6_weather_app" target="_blank" class="capbox">Samaya - Project 2 GitHub Repo</a>
            <a href=" " target="_blank" class="capbox">Samaya</a>
          </div>

          <div class="card picbox col-lg-3 col-sm-4">
            <a href="https://mmgb.herokuapp.com/" target="_blank"><img src="./images/mmgb.png"
                class="card-img-top" alt="MMGB Image"></img></a>
                <a href="https://github.com/MESellassie/MMGB" target="_blank" class="capbox">MMGB - Project 3 GitHub Repo</a>
            <a href="https://mmgb.herokuapp.com/" target="_blank" class="capbox">MMGB</a>

          </div>
        </div>

        <div class="row justify-content-center">
          <div class="card picbox col-lg-3 col-sm-4">
            <a href="https://acthomas83.github.io/hw5_Day_Planner/" target="_blank"><img src="./images/planit.png"
                class="card-img-top" alt="Samaya Image"></img></a>
                <a href="https://github.com/acthomas83/hw5_Day_Planner" target="_blank" class="capbox">PlanIt GitHub Repo</a>
            <a href="https://acthomas83.github.io/hw5_Day_Planner/" target="_blank" class="capbox">PlanIt: Day Scheduler</a>
          </div>

          <div class="card picbox col-lg-3 col-sm-4">
            <a href="https://mmgb.herokuapp.com/" target="_blank"><img src="./images/blank.png"
                class="card-img-top" alt="MMGB Image"></img></a>
                <a href="" target="_blank" class="capbox">Future Project GitHub Repo</a>
            <a href="" target="_blank" class="capbox">Future Project!</a>

          </div>
        </div>

    </div>
    <div id="pink"></div>

      </div>
      );
    }
  }
  
  export default Portfolio;