import React, { Component } from "react";
import {
  Layout,
  Affix,
  Menu,
  Badge,
  Drawer,
  Button,
  Card,
  Form,
  Input,
  DatePicker,
  message,
  Avatar
} from "antd";
import {
  CrownOutlined,
  SkinOutlined,
  ShoppingOutlined,
  HeartOutlined,
  CloseSquareOutlined
} from "@ant-design/icons";
import Items from "./Items";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import emailjs from "emailjs-com";
import MainPage from "./MainPage";
import Contact from "./Contact";
import {
  _allWishListedItemsLocalStorage,
  _allCartItemsLocalStorage
} from "./Constants";

class HeaderAndSider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishListedItems:
        JSON.parse(localStorage.getItem(_allWishListedItemsLocalStorage)) || [],
      cartItems:
        JSON.parse(localStorage.getItem(_allCartItemsLocalStorage)) || [],
      showCart: false,
      showWishlist: false,
      showChildrenDrawer: false,
      totalAmount: 0,
      startDate: ""
    };
  }

  render() {
    if (this.state.showCart === true) {
      let total = 0;
      return (
        <React.Fragment>
          {this.getHeaderAndSiderPane()}
          <Drawer
            title={"Cart(" + this.state.cartItems.length + ")"}
            width={window.innerWidth > 600 ? "30%" : "100%"}
            s
            placement="right"
            closable={true}
            onClose={this.onCartClose}
            visible={this.state.showCart}
          >
            {this.state.cartItems.map(item => {
              total = total + item.price + item.price * 5;
              return this.getCartViewItem(item);
            })}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                borderTop: "1px solid #e8e8e8",
                padding: "10px 16px",
                textAlign: "right",
                left: 0,
                background: "#fff",
                borderRadius: "0 0 4px 4px"
              }}
            >
              <span style={{ fontWeight: "bold", marginRight: "20px" }}>
                Total: {total}
              </span>
              <Button
                style={{
                  marginRight: 8
                }}
                onClick={this.onCartClose}
              >
                Cancel
              </Button>
              <Button
                onClick={e => this.showOrderPlaceDrawer(total)}
                type="primary"
              >
                Place Order
              </Button>
            </div>

            <Drawer
              title="Place Order"
              width={window.innerWidth > 600 ? "20%" : "90%"}
              closable={true}
              onClose={this.onOrderPlaceClose}
              visible={this.state.showChildrenDrawer}
            >
              {this.getPlaceOrderForm()}
            </Drawer>
          </Drawer>
        </React.Fragment>
      );
    }

    if (this.state.showWishlist === true) {
      return (
        <React.Fragment>
          {this.getHeaderAndSiderPane()}
          <Drawer
            title={"Wishlist(" + this.state.wishListedItems.length + ")"}
            width={window.innerWidth > 600 ? "30%" : "100%"}
            placement="right"
            closable={true}
            onClose={this.onWishlistClose}
            visible={this.state.showWishlist}
          >
            {this.state.wishListedItems.map(item => {
              return this.getCartWishlistItem(item);
            })}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                borderTop: "1px solid #e8e8e8",
                padding: "10px 16px",
                textAlign: "right",
                left: 0,
                background: "#fff",
                borderRadius: "0 0 4px 4px"
              }}
            >
              <Button onClick={this.onWishlistClose} type="primary">
                OK
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      );
    }

    return this.getHeaderAndSiderPane();
  }

  getHeaderAndSiderPane = () => {
    const { SubMenu } = Menu;
    const { Header, Sider } = Layout;
    return (
      <Layout>
        <Affix>
          <Header
            style={{
              width: "100%",
              padding: "0 20px"
            }}
          >
            <div className="logo" onClick={this.goToHome}>
              CadgeIt
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: "64px", float: "right" }}
            >
              <Menu.Item key="nav-cart" onClick={this.showCartDrawer}>
                <span style={{ margin: "0px" }}>
                  <Badge
                    style={{ backgroundColor: "yellow", color: "black" }}
                    count={this.state.cartItems.length}
                  >
                    <ShoppingOutlined style={{ fontSize: "25px" }} />
                  </Badge>
                </span>
              </Menu.Item>
            </Menu>
          </Header>
        </Affix>
        <Layout>
          <Affix offsetTop={60}>
            <Sider
              // style={{ minHeight: "100vh" }}
              style={{
                // overflow: "auto",
                height: "92vh",
                // position: "fixed",
                // position: "revert",
                left: 0
              }}
              breakpoint="lg"
              collapsedWidth="0"
            >
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <SubMenu
                  title={
                    <span>
                      <SkinOutlined />
                      Clothes For Her
                    </span>
                  }
                >
                  <Menu.Item
                    style={{ color: "yellow" }}
                    key="cat1opt1"
                    onClick={this.clothes_ethnicWear}
                  >
                    Ethnic Wear
                  </Menu.Item>
                  <Menu.Item
                    style={{ color: "yellow" }}
                    key="cat1opt2"
                    onClick={this.clothes_fusionWear}
                  >
                    Fusion Wear
                  </Menu.Item>
                  <Menu.Item
                    style={{ color: "yellow" }}
                    key="cat1opt3"
                    onClick={this.clothes_westernWear}
                  >
                    Western Wear
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  title={
                    <span>
                      <CrownOutlined />
                      Jewellery
                    </span>
                  }
                >
                  <Menu.Item
                    style={{ color: "yellow" }}
                    key="cat2opt1"
                    onClick={this.accessories_earings}
                  >
                    Earrings
                  </Menu.Item>
                  <Menu.Item
                    style={{ color: "yellow" }}
                    key="cat2opt2"
                    onClick={this.accessories_jewellery_set}
                  >
                    Jewellery Set
                  </Menu.Item>
                  <Menu.Item
                    style={{ color: "yellow" }}
                    key="cat2opt3"
                    onClick={this.accessories_necklace}
                  >
                    Necklace
                  </Menu.Item>
                  <Menu.Item
                    style={{ color: "yellow" }}
                    key="cat2opt4"
                    onClick={this.accessories_maang_tika}
                  >
                    Maang Tika
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="2" onClick={this.contactPage}>
                  Contact
                </Menu.Item>
                <Menu.Item key="nav-wishlist" onClick={this.showWishlistDrawer}>
                  <span style={{ margin: "0px", lineHeight: "60px" }}>
                    <Badge
                      showZero
                      style={{ backgroundColor: "yellow", color: "black" }}
                      count={this.state.wishListedItems.length}
                    >
                      <HeartOutlined style={{ fontSize: "25px" }} />
                    </Badge>
                  </span>
                </Menu.Item>
              </Menu>
            </Sider>
          </Affix>

          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/items/:category/:subCategory"
                // component={Items}
                render={props => (
                  <Items
                    {...props}
                    isAuthed="propIpassed"
                    wishListedItems={this.state.wishListedItems}
                    cartItems={this.state.cartItems}
                    addToWishList={this.addToWishList}
                    removeFromWishlist={this.removeFromWishlist}
                    addToCart={this.addToCart}
                  />
                )}
              />
            </Switch>
          </BrowserRouter>
        </Layout>
      </Layout>
    );
  };

  onplaceOrder = e => {
    // console.log("place order click");

    var templateParams = {
      to_name: "Neelima",
      from_name: "Abhishek",
      from_email: "abhishek.ahuja87@gmail.com",
      message_html: "Check this out!"
    };

    var sent_to_customer_template = {
      to_name: "asas",
      from_name: "sdadfsadf",
      from_email: "abhishek.ahuja87@gmail.com",
      message_html: "Check this out!"
    };

    emailjs
      .send(
        "default_service",
        "template_JC89zWij",
        templateParams,
        "user_vxi82ZFH1k9v1mk8zd6Tm"
      )
      .then(
        function(response) {
          // console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          // console.log("FAILED...", error);
        }
      );

    emailjs
      .send(
        "default_service",
        "sent_to_customer",
        sent_to_customer_template,
        "user_vxi82ZFH1k9v1mk8zd6Tm"
      )
      .then(
        function(response) {
          // console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          // console.log("FAILED...", error);
        }
      );
  };

  onFinish = values => {
    let items = this.state.cartItems;
    this.setState({ showCart: false, showChildrenDrawer: false });
    let itemsStr = "";
    items.forEach(i => {
      itemsStr = itemsStr + i.description + "(id-" + i.id + ")";
      itemsStr = itemsStr + ",";
    });
    let custName = values.name;
    let custEmail = values.email;
    let custContactNo = values.contactno;
    let custAddress = values.user.address;
    // let messageToCust = "to be decided";
    let notesFromCust = values.user.notes;

    let ownerName = "CadgeIt";
    // let ownerEmail = "cadgeit@gmail.com";

    var send_to_owner_template = {
      to_name: ownerName,
      from_name: custName,
      from_email: custEmail,
      from_contactno: custContactNo,
      address: custAddress,
      message_html: "",
      notes: notesFromCust,
      order_items: itemsStr,
      start_date: this.state.startDate
    };

    var send_to_customer_template = {
      to_name: values.name,
      from_name: values.name,
      from_email: values.email,
      order_items: itemsStr,
      address: custAddress,
      total_amount: this.state.totalAmount,
      // message_html: "",
      notes: notesFromCust,
      start_date: this.state.startDate,
      owner_name: ownerName
    };

    this.removeAllFromCart();
    emailjs
      .send(
        "default_service",
        "template_JC89zWij",
        send_to_owner_template,
        "user_vxi82ZFH1k9v1mk8zd6Tm"
      )
      .then(
        response => {
          this.removeAllFromCart();
          message.success(
            "The email with your order details has been sent. You will receive an email for the same with details.",
            10
          );
        },
        error => {
          message.error(
            "The order details could not be sent. please try again, " + error,
            10
          );
        }
      );

    emailjs
      .send(
        "default_service",
        "sent_to_customer",
        send_to_customer_template,
        "user_vxi82ZFH1k9v1mk8zd6Tm"
      )
      .then(
        function(response) {
          // console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          // console.log("FAILED...", error);
        }
      );
  };

  onChange = (date, dateString) => {
    // console.log(date, dateString);
    this.setState({ startDate: dateString });
  };

  onFinishFailed = errorInfo => {
    // console.log("Failed:", errorInfo);
  };

  getPlaceOrderForm = () => {
    // console.log("sdsdsd");

    // const { RangePicker } = DatePicker;

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 }
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 }
    };

    // const config = {
    //   rules: [{ type: "object", required: true }]
    // };

    return (
      <div>
        <span> Fill out the details to Place Order...</span>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          // onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contact No"
            name="contactno"
            rules={[
              { required: true, message: "Please input your Contact Number!" }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name={["user", "address"]} label="address">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name={["user", "notes"]} label="notes">
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name={["date"]}
            label="date"
            // rules={[{ required: true, message: "Please Select a Date!" }]}
          >
            <DatePicker onChange={this.onChange} />
            <div>End Date will be 3 days from the Start Date</div>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              // onClick={this.onplaceOrder()}
              // onClick={e => this.onFinish(e)}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };

  showCartDrawer = () => {
    this.setState({
      showCart: true
    });
  };

  onCartClose = () => {
    this.setState({
      showCart: false
    });
  };

  showOrderPlaceDrawer = total => {
    this.setState({
      showChildrenDrawer: true,
      totalAmount: total
    });
  };

  onOrderPlaceClose = () => {
    this.setState({
      showChildrenDrawer: false
    });
  };

  showWishlistDrawer = () => {
    this.setState({
      showWishlist: true
    });
  };

  onWishlistClose = () => {
    this.setState({
      showWishlist: false
    });
  };

  contactPage = () => {
    window.location = "/contact";
  };

  clothes_ethnicWear = () => {
    // console.log("clothes_ethnicWear");
    window.location = "/items/clothes/ethnicWear";
  };

  clothes_fusionWear = () => {
    // console.log("clothes_fusionWear");
    window.location = "/items/clothes/fusionWear";
  };

  clothes_westernWear = () => {
    // console.log("clothes_westernWear");
    window.location = "/items/clothes/westernWear";
  };

  accessories_earings = () => {
    // console.log("accessories_earings");
    window.location = "/items/accessories/earings";
  };

  accessories_jewellery_set = () => {
    // console.log("accessories_jewellery_set");
    window.location = "/items/accessories/jewellery_set";
  };

  accessories_necklace = () => {
    // console.log("accessories_necklace");
    window.location = "/items/accessories/necklace";
  };

  accessories_maang_tika = () => {
    // console.log("accessories_necklace");
    window.location = "/items/accessories/maang_tika";
  };

  goToHome = () => {
    window.location = "/";
  };

  onChange(value) {
    // console.log("changed", value);
  }

  getCartViewItem = item => {
    const { Meta } = Card;
    return (
      <React.Fragment>
        <Card
          size="small"
          title={item.description}
          extra={
            <Button
              onClick={e => this.removeFromCart(item)}
              type="primary"
              // shape="circle"
              icon={<CloseSquareOutlined />}
              style={{ marginLeft: "5px" }}
            />
          }
          style={{ width: "100%" }}
        >
          <Meta
            avatar={
              <Avatar
                style={{
                  // width: "15%",
                  height: "58px"
                  // objectFit: "fit"
                }}
                shape="square"
                size="large"
                src={item.images[0]}
              />
            }
            title={
              <React.Fragment>
                <span
                  style={{
                    margin: "0"
                  }}
                >
                  Rs {item.price + item.price * 5}
                </span>
              </React.Fragment>
            }
            description={
              <React.Fragment>
                <span
                // style={{ fontSize: "15px", marginLeft: "5px" }}
                >
                  (Rent: {item.price}, Deposit: {item.price * 5})
                </span>
              </React.Fragment>
            }
          />
        </Card>
        <br />
      </React.Fragment>
    );
  };

  getCartWishlistItem = item => {
    const { Meta } = Card;
    return (
      <React.Fragment>
        <Card
          size="small"
          title={item.description}
          extra={
            <Button
              onClick={e => this.removeFromWishlist(item)}
              type="primary"
              // shape="circle"
              // icon="close-square"
              icon={<CloseSquareOutlined />}
              style={{ marginLeft: "5px" }}
            />
          }
          style={{ width: "100%" }}
        >
          <Meta
            avatar={
              <Avatar
                style={{
                  // width: "15%",
                  height: "55px"
                  // objectFit: "fit"
                }}
                shape="square"
                size="large"
                src={item.images[0]}
              />
            }
            title={
              <React.Fragment>
                <span
                  style={{
                    margin: "0"
                  }}
                >
                  Rs {item.price + item.price * 5}
                </span>
              </React.Fragment>
            }
            description={
              <React.Fragment>
                <span
                // style={{ fontSize: "15px", marginLeft: "5px" }}
                >
                  (Rent: {item.price}, Deposit: {item.price * 5})
                </span>
              </React.Fragment>
            }
          />
        </Card>
        <br />
      </React.Fragment>
    );
  };

  // tpm
  addToWishList = item => {
    message.info("Added to Wishlist");
    // console.log(item);
    let wishListedItemsL = this.state.wishListedItems;
    wishListedItemsL.push(item);
    this.setState({ wishListedItems: wishListedItemsL });

    //store to local storage
    localStorage.setItem(
      _allWishListedItemsLocalStorage,
      JSON.stringify(this.state.wishListedItems)
    );
  };

  addToCart = item => {
    message.info("Added to Cart");
    // console.log(item);
    let cartItemsL = this.state.cartItems;
    cartItemsL.push(item);
    this.setState({ cartItems: cartItemsL });

    //store to local storage
    localStorage.setItem(
      _allCartItemsLocalStorage,
      JSON.stringify(this.state.cartItems)
    );
  };

  removeAllFromCart = () => {
    let a = [];
    this.setState({ cartItems: a });

    //store to local storage
    localStorage.setItem(_allCartItemsLocalStorage, JSON.stringify(a));
  };

  removeFromCart = item => {
    message.info("Removed from cart");
    // console.log(item);
    let cartItemsL = this.state.cartItems;

    let allOtherItems = cartItemsL.filter(x => {
      return x.id !== item.id;
    });

    // cartItemsL.pop(item);
    this.setState({ cartItems: allOtherItems });

    //store to local storage
    localStorage.setItem(
      _allCartItemsLocalStorage,
      JSON.stringify(allOtherItems)
    );
  };

  removeFromWishlist = item => {
    message.info("Removed from wishlist");
    // console.log(item);
    let wishListedItemsL = this.state.wishListedItems;

    let allOtherItems = wishListedItemsL.filter(x => {
      return x.id !== item.id;
    });

    // wishListedItemsL.pop(item);
    this.setState({ wishListedItems: allOtherItems });

    //store to local storage
    localStorage.setItem(
      _allWishListedItemsLocalStorage,
      JSON.stringify(allOtherItems)
    );
  };
}

export default HeaderAndSider;
