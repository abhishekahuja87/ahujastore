import React, { Component } from "react";
import { Alert } from "antd";
import MyCarousel from "./MyCarousel";
import MyTimeline from "./MyTimeline";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          width: window.innerWidth > 600 ? "88%" : "100%",
          backgroundColor: "lightyellow"
        }}
      >
        <div>
          <MyCarousel />
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              padding: "20px 0px 20px 0px",
              textAlign: "center"
            }}
          >
            How the Renting works
          </div>

          <span>
            <MyTimeline />
          </span>

          <div style={{ marginBottom: "20px" }}>
            <Alert
              style={{ width: "70%", margin: "auto", marginTop: "40px" }}
              message="Important Note"
              description="We take Security Deposit to avoid any damage or theft of the product, please use the product as your own to make hassle free Deposit Refund"
              type="info"
              showIcon
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
