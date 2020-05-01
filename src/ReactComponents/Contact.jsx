import React, { Component } from "react";
import { Card, Row, Col } from "antd";

import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row style={{ height: "40vh", width: "100%" }}>
        <Col span={window.innerWidth > 600 ? 9 : 2}></Col>
        <Col span={window.innerWidth > 600 ? 6 : 20}>
          <Card
            title="Contact Us"
            style={{
              // marginLeft: "auto",
              // marginRight: "auto",
              marginTop: "30px",
              backgroundColor: "lightYellow"
            }}
          >
            <p>For any queries, Contact us at </p>
            <p style={{ fontWeight: "bold" }}>
              <WhatsAppOutlined /> 9981072500 <PhoneOutlined />
            </p>
          </Card>
        </Col>
        <Col span={window.innerWidth > 600 ? 9 : 2}></Col>
      </Row>
    );
  }
}

export default Contact;
