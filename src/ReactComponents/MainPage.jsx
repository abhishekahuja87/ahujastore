import React, { Component } from "react";
import { Alert, Row, Col, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
// import MyCarousel from "./MyCarousel";
// import MyTimeline from "./MyTimeline";

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
          backgroundColor: "lightGrey"
        }}
      >
        <Row
          style={{
            backgroundColor: "grey",
            height: "30vh",
            margin: "10px",
            fontSize: "30px"
          }}
        >
          <Col
            style={{
              color: "#1890ff",
              textAlign: "center",
              opacity: "0.9"
              // textShadow: "2px 2px #1890ff"
            }}
            span={24}
          >
            <p style={{ margin: 0, color: "black" }}>Namaste Balod!</p>
            <p style={{ margin: 0, color: "black" }}>Order Now from</p>
            <p style={{ margin: 0, color: "black", fontWeight: "bold" }}>
              Ahuja Collection Online
            </p>
          </Col>
        </Row>
        <Row
          style={{
            color: "black",
            textAlign: "center",
            margin: "10px",
            fontSize: "18px"
          }}
        >
          <Col span={24}> Click on the Button to Start ordering online</Col>
        </Row>
        <Row>
          <Button
            onClick={this.orderOnline}
            type="primary"
            icon={<ShoppingCartOutlined />}
            size="large"
            style={{
              margin: "0 auto",
              backgroundColor: "black",
              color: "white",
              border: "none"
            }}
          >
            Order Online
          </Button>
        </Row>
      </div>
    );
  }

  orderOnline = () => {
    window.location = "/list_items";
  };
}

export default MainPage;
