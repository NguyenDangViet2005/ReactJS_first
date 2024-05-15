import React from "react";
class AddUserInfor extends React.Component {
  state = {
    name: "",
    age: 19,
    address: "",
  };

  // HandleClick(event) {
  //   console.log("anh là nguyễn đăng việt đây hahahah");
  //   console.log("my name is ", this.state.name);
  //   // console.log(event.target);
  //   // in ra event khi thao tác với web
  //   this.setState({
  //     name: "NDV",
  //   });
  // }
  // HandleMouseOver(event) {
  //   console.log(event.target);
  // }
  //JSX
  HandleONchangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  HandleONchangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  HandleONsubmit = (event) => {
    event.preventDefault();
    this.props.HandleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random", //này là để nếu giống id đã có thì nó tạo cái id khác
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        my name is {this.state.name} and i am from {this.state.address}
        <form onSubmit={(event) => this.HandleONsubmit(event)}>
          <label>Your name:</label>
          <input
            type="text"
            onChange={(event) => this.HandleONchangeInput(event)}
          />
          <label>Your age:</label>
          <input
            type="text"
            onChange={(event) => this.HandleONchangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddUserInfor;
