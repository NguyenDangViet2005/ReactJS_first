//có  2 cách để định nghĩa 1 component
// 1. class component
// 2. function component

import React from "react";
class Mycomponent extends React.Component {
  state = {
    name: "nguyen dang viet",
    age: 19,
    address: "quang nam",
  };
  //JSX
  render() {
    return (
      <div>
        my name is {this.state.name} and i am from {this.state.address}
      </div>
    );
    //Javascipt được định nghĩa bằng cặp dấu {}
  }
}

export default Mycomponent;
