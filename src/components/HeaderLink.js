import { Component } from "react";
import { Link } from "../../node_modules/react-router-dom/dist/index";

class HeaderLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/html">HTML</Link>
        <Link to="/css">CSS</Link>
        <Link to="/javascript">JavaScript</Link>
      </>
    );
  }
}

export default HeaderLink;
