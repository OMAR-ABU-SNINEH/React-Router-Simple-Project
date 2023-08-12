import { Component } from "react";
import HeaderLink from "./HeaderLink";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <header>
          <HeaderLink />
        </header>
      </>
    );
  }
}

export default Header;
