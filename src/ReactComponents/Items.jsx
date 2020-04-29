import React, { Component } from "react";
import myTestData from "./itemCollection1.json";
import { Card, Row, Col, Button } from "antd";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import {
  HeartOutlined,
  ShoppingOutlined,
  HeartFilled
} from "@ant-design/icons";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToShow: [],
      category: this.props.match.params.category,
      subCategory: this.props.match.params.subCategory,
      photoIndex: 0,
      isOpen: false,
      imageLightBox: [],
      wishListedItems: this.props.wishListedItems,
      cartItems: this.props.cartItems,
      openedImgDesc: ""
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ category: this.props.match.params.category });
    this.setState({ subCategory: this.props.match.params.subCategory });
    this.setState({ cartItems: this.props.cartItems });
    // this.setState({ wishListedItems: this.props.wishListedItems });
    this.setState({ wishListedItems: newProps.wishListedItems });
  }

  render() {
    // console.log(this.props.isAuthed);
    // const { photoIndex, isOpen } = this.state;
    const { Meta } = Card;
    if (myTestData === undefined) {
      return "loading";
    }

    if (this.state.isOpen === true) {
      return (
        <Lightbox
          // imagePadding={20}
          clickOutsideToClose={true}
          imageCaption={
            this.state.photoIndex + 1 + " / " + this.state.imageLightBox.length
          }
          imageTitle={this.state.openedImgDesc}
          style={{ imageOrientation: "from-image" }}
          mainSrc={this.state.imageLightBox[this.state.photoIndex]}
          nextSrc={
            this.state.imageLightBox[
              (this.state.photoIndex + 1) % this.state.imageLightBox.length
            ]
          }
          prevSrc={
            this.state.imageLightBox[
              (this.state.photoIndex + this.state.imageLightBox.length - 1) %
                this.state.imageLightBox.length
            ]
          }
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex:
                (this.state.photoIndex + this.state.imageLightBox.length - 1) %
                this.state.imageLightBox.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex:
                (this.state.photoIndex + 1) % this.state.imageLightBox.length
            })
          }
        />
      );
    }

    let cat = this.state.category;
    let subCat = this.state.subCategory;

    let filteredItems = myTestData.items.filter(item => {
      if (item.category === cat && item.subCategory === subCat) return item;
      return undefined;
    });

    return (
      <Row style={{ width: "100%", backgroundColor: "" }}>
        {filteredItems.map(item => {
          return (
            <Col key={item.id} span={window.innerWidth > 600 ? 8 : 24}>
              <Card
                style={{
                  margin: "7% 15% 15% 15%",
                  // maxHeight: "500px",
                  // border: "2px solid yellow",
                  borderBottom: "3px solid yellow",
                  backgroundColor: "#d9d9d9"
                  //   display: "flex",
                  //   justifyContent: "spaceBetween",
                  //   flexWrap: "wrap"
                }}
                hoverable
                cover={
                  <img
                    onClick={e => this.clickImg(item)}
                    style={{
                      // imageOrientation: "from-image",
                      width: "100%",
                      height: "55vh", //"450px",
                      objectFit: "fit"
                    }}
                    alt="example"
                    // src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    src={item.images[0]}
                  />
                }
                actions={[
                  this.state.wishListedItems.filter(e => e.id === item.id)
                    .length === 0 ? (
                    <HeartOutlined
                      style={{ fontSize: "22px", marginTop: "6px" }}
                      onClick={e => this.addToWishList(item)}
                    />
                  ) : (
                    <HeartFilled
                      // theme="filled"
                      style={{
                        color: "#1890ff",
                        fontSize: "22px",
                        marginTop: "6px"
                      }}
                      onClick={e => this.removeFromWishlist(item)}
                    />
                  ),
                  this.state.cartItems.filter(e => e.id === item.id).length ===
                  0 ? (
                    <Button
                      icon={<ShoppingOutlined />}
                      onClick={e => this.addToCart(item)}
                    />
                  ) : (
                    <Button type="primary" icon={<ShoppingOutlined />} />
                  )
                ]}
              >
                <Meta
                  //   style={{ backgroundColor: "grey", padding: "10px" }}
                  title={"Rs " + item.price}
                  description={item.description}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }

  clickImg = item => {
    let images = item.images;
    this.setState({ isOpen: true });
    this.setState({ imageLightBox: images });
    this.setState({ openedImgDesc: item.description });
  };

  addToWishList = item => {
    this.props.addToWishList(item);
  };

  removeFromWishlist = item => {
    this.props.removeFromWishlist(item);
  };

  addToCart = item => {
    this.props.addToCart(item);
  };
}

export default Items;
