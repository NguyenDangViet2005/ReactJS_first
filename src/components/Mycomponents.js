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
  HandleClick(event) {
    console.log("anh là nguyễn đăng việt đây hahahah");
    // console.log(event.target);
    // in ra event khi thao tác với web
  }
  HandleMouseOver(event) {
    console.log(event.target);
  }
  //JSX
  render() {
    return (
      <div>
        my name is {this.state.name} and i am from {this.state.address}
        <button onClick={this.HandleClick}>Click me</button>
        <button onMouseOver={this.HandleMouseOver}>Hover me</button>
        {/* không cần phải HandleClick() khi gọi hàm */}
      </div>
    );
    //Javascipt được định nghĩa bằng cặp dấu {}
  }
}

export default Mycomponent;
