//có  2 cách để định nghĩa 1 component
// 1. class component
// 2. function component(hook)

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
// class Mycomponent extends React.Component {
//   state = {
//     ListUser: [
//       { id: 1, name: "nguyen dang viet", age: 20 },
//       { id: 2, name: "le ngoc tan", age: 19 },
//       { id: 3, name: "doan xuan song", age: 12 },
//     ],
//   };
//   HandleAddnewUser = (userObj) => {
//     console.log("check data from parent", userObj);
//     this.setState({
//       ListUser: [...this.state.ListUser, userObj],
//     });
//   };
//   HandleDeleteUser = (userid) => {
//     let ListUserClone = this.state.ListUser;
//     ListUserClone = ListUserClone.filter((item) => item.id !== userid);
//     this.setState({
//       ListUser: ListUserClone,
//     });
//   };
//   render() {
//     const test = {
//       name: "nguyễn đăng đăng",
//       age: 23,
//       address: "hà nội",
//     };
//     return (
//       <>
//         {JSON.stringify(test)}
//         {/* cặp dấu fragment giúp return được nhiều div mà không cần phải bọc thêm div khác ở ngoài  */}
//         <div class="a">
//           <AddUserInfor HandleAddnewUser={this.HandleAddnewUser} />
//           {/* cái ni đáng lưu ý nè cu */}
//           <DisplayInfor
//             ListUser={this.state.ListUser}
//             HandleDeleteUser={this.HandleDeleteUser}
//           />
//         </div>
//         <div class="b"></div>
//       </>
//     );
//     //Javascipt được định nghĩa bằng cặp dấu {}
//   }
// }
const Mycomponent = (props) => {
  const [ListUser, setlistUser] = useState([
    { id: 1, name: "nguyen dang viet", age: 20 },
    { id: 2, name: "le ngoc tan", age: 19 },
    { id: 3, name: "doan xuan song", age: 12 },
  ]);
  const HandleAddnewUser = (userObj) => {
    setlistUser([...ListUser, userObj]);
  };
  const HandleDeleteUser = (userid) => {
    let ListUserClone = ListUser;
    ListUserClone = ListUserClone.filter((item) => item.id !== userid);
    setlistUser(ListUserClone);
  };
  return (
    <>
      {/* cặp dấu fragment giúp return được nhiều div mà không cần phải bọc thêm div khác ở ngoài  */}
      <div class="a">
        <AddUserInfor HandleAddnewUser={HandleAddnewUser} />
        {/* cái ni đáng lưu ý nè cu */}
        <DisplayInfor ListUser={ListUser} HandleDeleteUser={HandleDeleteUser} />
      </div>
      <div class="b"></div>
    </>
  );
};

export default Mycomponent;
