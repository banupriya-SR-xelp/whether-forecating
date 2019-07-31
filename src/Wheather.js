import React, { Component } from "react";
import "./Home.css";
import humidity from "./img/humidity.svg";
import pressure from "./img/pressure.jpeg";
import temperature from "./img/temp.svg";
import weather from "./img/weather.svg";
export default class Wheather extends Component {
  render() {
    return (
      <div className={"holder"}>
        {this.props.data && (
          <div className={"holder"}>
            <div className={"whetherDataHolder"}>
              <div className={"description"}>
                <div className={"imageHolder"}>
                  <img src={weather} alt="weather" width="50px" height="50px" />
                </div>
                <div className={"whether"}>
                  {this.props.data &&
                    this.props.data.name &&
                    this.props.data.name.toUpperCase()}
                  -
                  {this.props.data.weather &&
                    this.props.data.weather[0] &&
                    this.props.data.weather[0].description.toUpperCase()}
                </div>
              </div>
              <div className={"humidity"}>
                <div className={"imageHolder"}>
                  <img
                    src={humidity}
                    alt="humidity"
                    width="50px"
                    height="50px"
                  />
                </div>
                <div className={"text"}>Humidity</div>
                <div className={"text"}>
                  {this.props.data.main && this.props.data.main.humidity}
                </div>
              </div>
              <div className={"pressure"}>
                <div className={"imageHolder"}>
                  <img
                    src={pressure}
                    alt="pressure"
                    width="50px"
                    height="50px"
                  />
                </div>
                <div className={"text"}>Pressure</div>
                <div className={"text"}>
                  {this.props.data.main && this.props.data.main.pressure}
                </div>
              </div>
              <div className={"temperature"}>
                <div className={"imageHolder"}>
                  <img
                    src={temperature}
                    alt="temperature"
                    width="50px"
                    height="50px"
                  />
                </div>
                <div className={"text"}>Temperature</div>
                <div className={"text"}>
                  {this.props.data.main && this.props.data.main.temp}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
