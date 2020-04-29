import React, { Component } from "react";
import { Timeline } from "antd";

class MyTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Timeline mode="alternate">
        <Timeline.Item>Place the order from your cart </Timeline.Item>
        <Timeline.Item color="green">
          CadgeIt will send you order confirmation details in your email
        </Timeline.Item>
        <Timeline.Item
        //   dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
        >
          Send the payment to mentioned UPI ID in the email and share payment
          receipt to CadgeIt
        </Timeline.Item>
        <Timeline.Item color="red">
          CadgeIt will block the product for booked date and send you
          confirmation
        </Timeline.Item>
        <Timeline.Item>
          Use the product on your occassion and send back with no damage to
          CadgeIt
        </Timeline.Item>
        <Timeline.Item
        //   dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
        >
          CadgeIt will verify the returned product condition and refund back the
          Security Deposit amount to your Bank account
        </Timeline.Item>
      </Timeline>
    );
  }
}

export default MyTimeline;
