import React from "react";
import "./DisplayInfor.scss";
class DisplayInfor extends React.Component {
  state = {
    isshowListUser: false,
  };
  handleshowHide() {
    this.setState({
      isshowListUser: !this.state.isshowListUser, //khúc ni cái đầu quá to luôn
    });
  }
  render() {
    const { ListUser } = this.props;
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleshowHide();
            }}
          >
            {this.state.isshowListUser === true
              ? "Hide List User"
              : "Show List User"}
          </span>
        </div>
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
            <div className="display-infor-container">
              {this.state.isshowListUser && (
                <div key={User.id} className={User.age > 18 ? "green" : "red"}>
                  {/* thêm key để ko hiện lỗi */}
                  <hr />
                  <div>My name is {User.name}</div>
                  <div>My age is {User.age}</div>
                </div>
              )}
              {/* hàm này thằng list sẽ phụ thuộc vào  this.state.isshowListUser nếu true thì nó sẽ chạy hàm còn nếu false thì hàm sẽ kh chạy nghĩa là sẽ k hiện list user*/}
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfor;
