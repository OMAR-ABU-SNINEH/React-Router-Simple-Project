import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <main>{this.props.type} Page</main>
      </>
    );
  }
}

export default Main;
