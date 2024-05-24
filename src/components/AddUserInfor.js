import React, { useState } from "react";
// class AddUserInfor extends React.Component {
//   state = {
//     name: "",
//     age: 19,
//     address: "",
//   };

//   // HandleClick(event) {
//   //   console.log("anh là nguyễn đăng việt đây hahahah");
//   //   console.log("my name is ", name);
//   //   // console.log(event.target);
//   //   // in ra event khi thao tác với web
//   //   setState({
//   //     name: "NDV",
//   //   });
//   // }
//   // HandleMouseOver(event) {
//   //   console.log(event.target);
//   // }
//   //JSX
//   HandleONchangeInput = (event) => {
//     setState({
//       name: event.target.value,
//     });
//   };
//   HandleONchangeAge = (event) => {
//     setState({
//       age: event.target.value,
//     });
//   };

//   HandleONsubmit = (event) => {
//     event.preventDefault();
//     props.HandleAddnewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random", //này là để nếu giống id đã có thì nó tạo cái id khác
//       name: name,
//       age: age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         my name is {name} and i am {age}
//         <form onSubmit={(event) => HandleONsubmit(event)}>
//           <label>Your name:</label>
//           <input
//             type="text"
//             onChange={(event) => HandleONchangeInput(event)}
//           />
//           <label>Your age:</label>
//           <input
//             type="text"
//             onChange={(event) => HandleONchangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfor = (props) => {
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [age, setage] = useState("");
  //JSX
  const HandleONchangeInput = (event) => {
    setname(event.target.value);
  };
  const HandleONchangeAge = (event) => {
    setage(event.target.value);
  };

  const HandleONsubmit = (event) => {
    event.preventDefault();
    props.HandleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random", //này là để nếu giống id đã có thì nó tạo cái id khác
      name: name,
      age: age,
    });
  };
  return (
    <>
      my name is {name} and i am {age}
      <form onSubmit={(event) => HandleONsubmit(event)}>
        <label>Your name:</label>
        <input type="text" onChange={(event) => HandleONchangeInput(event)} />
        <label>Your age:</label>
        <input type="text" onChange={(event) => HandleONchangeAge(event)} />
        <button>Submit</button>
      </form>
    </>
  );
};
export default AddUserInfor;
