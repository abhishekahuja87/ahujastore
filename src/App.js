import React, { Component } from "react";
import HeaderAndSider from "./ReactComponents/HeaderAndSider";
import ReactGA from "react-ga";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  initializeAnalytics() {
    // ReactGA.initialize("UA-164601793-1");
    // ReactGA.pageview("/");
    // ReactGA.pageview("/HomePage");
    // ReactGA.pageview("/items/clothes/ethnicWear");
    // ReactGA.pageview("/items/clothes/fusionWear");
    // ReactGA.pageview("/items/clothes/westernWear");
    // ReactGA.pageview("/items/accessories/earings");
    // ReactGA.pageview("/items/accessories/jewellery_set");
    // ReactGA.pageview("/items/accessories/necklace");
    // ReactGA.pageview("/items/accessories/maang_tika");
    // ReactGA.pageview("/contact");
  }

  render() {
    this.initializeAnalytics();
    return (
      <HeaderAndSider
        wishListedItems={this.state.wishListedItems}
        cartItems={this.state.cartItems}
        removeFromCart={this.removeFromCart}
        removeFromWishlist={this.removeFromWishlist}
        removeAllFromCart={this.removeAllFromCart}
      />
    );
  }
}

export default App;
