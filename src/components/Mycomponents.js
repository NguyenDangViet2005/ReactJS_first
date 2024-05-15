//có  2 cách để định nghĩa 1 component
// 1. class component
// 2. function component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class Mycomponent extends React.Component {
  state = {
    ListUser: [
      { id: 1, name: "nguyen dang viet", age: 20 },
      { id: 2, name: "le ngoc tan", age: 19 },
      { id: 3, name: "doan xuan song", age: 12 },
    ],
  };
  HandleAddnewUser = (userObj) => {
    console.log("check data from parent", userObj);
    this.setState({
      ListUser: [...this.state.ListUser, userObj],
    });
  };
  render() {
    return (
      <div>
        <AddUserInfor HandleAddnewUser={this.HandleAddnewUser} />
        {/* cái ni đáng lưu ý nè cu */}
        <DisplayInfor ListUser={this.state.ListUser} />
      </div>
    );
    //Javascipt được định nghĩa bằng cặp dấu {}
  }
}

export default Mycomponent;
