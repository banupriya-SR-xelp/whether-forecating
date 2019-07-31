import React, { Component } from "react";
import "./Home.css";
import Wheather from "./Wheather";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      data: null
    };
  }
  hadleClick = async () => {
    let api_key = "73a30d1298cbe84369f1de28b5942918";
    let result = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        this.state.value
      }&APPID=${api_key}`
    );
    let resultJson = await result.json();
    this.setState({ data: resultJson });
    //console.log(resultJson);
  };
  render() {
    console.log(this.state.value, this.state.data);
    return (
      <div className={"base"}>
        <div className={"heading"}>Wheather Forcasting App</div>
        <div className={"searchHolder"}>
          <div className={"inputHolder"}>
            <input
              type="text"
              value={this.state.value}
              placeholder={"Enter the city"}
              onChange={e => {
                this.setState({ value: e.target.value });
              }}
            />
          </div>
          <div className={"searchButton"} onClick={() => this.hadleClick()}>
            Search
          </div>
        </div>
        <div className={"whetherHolder"}>
          {this.state.data && <Wheather data={this.state.data} />}
        </div>
      </div>
    );
  }
}
