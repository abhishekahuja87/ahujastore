import React, { Component } from "react";
import { Alert, Row, Col, Button } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
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
            backgroundColor: "black",
            height: "20vh",
            margin: "10px",
            fontSize: "30px"
          }}
        >
          <Col
            style={{
              color: "white",
              textTransform: "capitalize",
              textAlign: "center",
              opacity: "0.9",
              textShadow: "2px 2px #1890ff"
            }}
            span={24}
          >
            Ahuja Store Balod welcomes you
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
          <Col span={24}>
            {" "}
            Please click on the Button to Start ordering online
          </Col>
        </Row>
        <Row>
          <Button
            onClick={this.orderOnline}
            type="primary"
            icon={<UnorderedListOutlined />}
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
