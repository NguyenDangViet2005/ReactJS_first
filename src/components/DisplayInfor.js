import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";
// class DisplayInfor extends React.Component {
//   render() {
//     console.log("call me render");
//     const { ListUser } = this.props;
//     return (
//       <div>
//         {ListUser.map((User, index) => {
//           // if (User.age > 18) {
//           //   return (
//           //     <div key={User.id} className="red">
//           //       {/* thêm key để ko hiện lỗi */}
//           //       <hr />
//           //       <div>My name is {User.name}</div>
//           //       <div>My age is {User.age}</div>
//           //     </div>
//           //   );
//           // } else {
//           //   return (
//           //     <div key={User.id} className="green">
//           //       {/* thêm key để ko hiện lỗi */}
//           //       <hr />
//           //       <div>My name is {User.name}</div>
//           //       <div>My age is {User.age}</div>
//           //     </div>
//           //   );
//           // }
//           return (
//             <div className="display-infor-container">
//               {true && (
//                 <div key={User.id} className={User.age > 18 ? "green" : "red"}>
//                   {/* thêm key để ko hiện lỗi */}
//                   <hr />
//                   <div>
//                     <div>My name is {User.name}</div>
//                     <div>My age is {User.age}</div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.HandleDeleteUser(User.id)}
//                     >
//                       X
//                     </button>
//                   </div>
//                 </div>
//               )}
//               {/* hàm này thằng list sẽ phụ thuộc vào  this.state.isshowListUser nếu true thì nó sẽ chạy hàm còn nếu false thì hàm sẽ kh chạy nghĩa là sẽ k hiện list user*/}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
const DisplayInfor = (props) => {
  const { ListUser } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  // =this.state{
  //   isShowHideListUser : true,
  // }
  const HandleShowListuser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => HandleShowListuser()}>Show list users</span>
        {/* đối với react hook thì không cần dùng keyword this */}
      </div>
      {isShowHideListUser && (
        <>
          {ListUser.map((User, index) => {
            // if (User.age > 18) {
            //   return (
            //     <div key={User.id} className="red">
            //       {/* thêm key để ko hiện lỗi */}
            //       <hr />
            //       <div>My name is {User.name}</div>
            //       <div>My age is {User.age}</div>
            //     </div>
            //   );
            // } else {
            //   return (
            //     <div key={User.id} className="green">
            //       {/* thêm key để ko hiện lỗi */}
            //       <hr />
            //       <div>My name is {User.name}</div>
            //       <div>My age is {User.age}</div>
            //     </div>
            //   );
            // }
            return (
              <div key={User.id} className={User.age > 18 ? "green" : "red"}>
                {/* thêm key để ko hiện lỗi */}
                <hr />
                <div>
                  <div>My name is {User.name}</div>
                  <div>My age is {User.age}</div>
                </div>
                <div>
                  <button onClick={() => props.HandleDeleteUser(User.id)}>
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
      {/* hàm này thằng list sẽ phụ thuộc vào  this.state.isshowListUser nếu true thì nó sẽ chạy hàm còn nếu false thì hàm sẽ kh chạy nghĩa là sẽ k hiện list user*/}
    </div>
  );
};

export default DisplayInfor;
