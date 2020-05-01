import React, { Component } from "react";
import {
  Tabs,
  Row,
  Col,
  Card,
  Avatar,
  Select,
  InputNumber,
  Button,
  Form,
  Input
} from "antd";

import itemsData from "./ItemsList1.json";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";

class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: this.props.cartItems,
      idToIndexForItem: [{ id: "", index: -1 }]
    };
  }

  componentWillReceiveProps(newProps) {
    // this.setState({ category: this.props.match.params.category });
    // this.setState({ subCategory: this.props.match.params.subCategory });
    this.setState({ cartItems: this.props.cartItems });
    // this.setState({ wishListedItems: this.props.wishListedItems });
    // this.setState({ wishListedItems: newProps.wishListedItems });
  }

  handleChangeOfSize = (e, item) => {
    //   this.setState({idToIndexForItem: { item.price.indexOf(e)}   })
    console.log(e);
  };

  handleChangeOfQty = (e, item) => {
    console.log(e);
  };

  OnAddClicked = (e, item) => {
    console.log("asss" + item);
    item.qty = 1;
    this.props.addToCart(item);
  };

  onFinish = (values, item) => {
    let newitem = JSON.parse(JSON.stringify(item));
    // console.log(values);
    let size = values.size.split("|")[0];
    let price = values.size.split("|")[1];
    let newId = newitem.id + values.size;
    newitem.size = [size];
    newitem.price = [price];
    newitem.newId = newId;
    this.props.addToCart(newitem);
  };

  render() {
    console.log(itemsData);
    console.log(this.state.cartItems);
    const { Option } = Select;
    const { TabPane } = Tabs;
    const { Meta } = Card;
    let abc = undefined;
    return (
      <Row
        style={{
          width: window.innerWidth > 600 ? "calc(100% - 220px)" : "100vw",
          margin: "1%"
        }}
      >
        <Tabs defaultActiveKey="1" tabPosition={"top"}>
          <TabPane tab="Daily Essentials" key="1">
            {itemsData.items.map(item => {
              return item.category == "dailyEssentials" ? (
                // <span>{item.description}</span>

                <Card
                  style={{ margin: "3%" }}
                  actions={[
                    <Button
                      disabled={
                        ((abc = this.state.cartItems.filter(cartItem => {
                          return cartItem.id === item.id ? cartItem : undefined;
                        })),
                        abc.length === 0 ? false : true)
                      }
                      type="primary"
                      htmlType="submit"
                      onClick={e => this.OnAddClicked(e, item)}
                    >
                      {abc.length === 0 ? "Add" : "Added"}
                    </Button>
                  ]}
                >
                  <Meta
                    avatar={<Avatar>{item.description[0]}</Avatar>}
                    title={item.description}
                    description={
                      <span>₹{item.price[0] + ", " + item.size[0]}</span>
                    }
                  />
                </Card>
              ) : (
                <span></span>
              );
            })}
          </TabPane>
          <TabPane tab="Food Essentials" key="2">
            {itemsData.items.map(item => {
              return item.category == "foodEssentials" ? (
                // <span>{item.description}</span>

                <Card
                  style={{ margin: "3%" }}
                  actions={[
                    <Button
                      disabled={
                        ((abc = this.state.cartItems.filter(cartItem => {
                          return cartItem.id === item.id ? cartItem : undefined;
                        })),
                        abc.length === 0 ? false : true)
                      }
                      type="primary"
                      htmlType="submit"
                      onClick={e => this.OnAddClicked(e, item)}
                    >
                      {abc.length === 0 ? "Add" : "Added"}
                    </Button>
                  ]}
                >
                  <Meta
                    avatar={<Avatar>{item.description[0]}</Avatar>}
                    title={item.description}
                    description={
                      <span>₹{item.price[0] + ", " + item.size[0]}</span>
                    }
                  />
                </Card>
              ) : (
                <span></span>
              );
            })}
          </TabPane>
          <TabPane tab="baby Essentials" key="3">
            {itemsData.items.map(item => {
              return item.category == "babyEssentials" ? (
                // <span>{item.description}</span>

                <Card
                  style={{ margin: "3%" }}
                  actions={[
                    <Button
                      disabled={
                        ((abc = this.state.cartItems.filter(cartItem => {
                          return cartItem.id === item.id ? cartItem : undefined;
                        })),
                        abc.length === 0 ? false : true)
                      }
                      type="primary"
                      htmlType="submit"
                      onClick={e => this.OnAddClicked(e, item)}
                    >
                      {abc.length === 0 ? "Add" : "Added"}
                    </Button>
                  ]}
                >
                  <Meta
                    avatar={<Avatar>{item.description[0]}</Avatar>}
                    title={item.description}
                    description={
                      <span>₹{item.price[0] + ", " + item.size[0]}</span>
                    }
                  />
                </Card>
              ) : (
                <span></span>
              );
            })}
          </TabPane>
        </Tabs>
      </Row>
    );
  }
}

export default Temp;
