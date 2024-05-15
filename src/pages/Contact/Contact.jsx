import React, { useState } from "react";
import "./Contact.css";
import logo from "../../assets/logo.png";
const Bot_Token = "6877779800:AAHAPesR6iXzhC75G5VTwM1F0FhIVYTvYJw";
const Chat_Id = "-1002070275549";
let initialState = {
  fname: "",
  lname: "",
  phone: "",
  comment: "",
};
function Contact() {
  let [data, setData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    let text = "Buyurtma %0A%0A";
    text += ` Ismi: ${data.fname} %0A`;
    text += `Familiyasi: ${data.lname} %0A`;
    text += `Nomer: ${data.phone} %0A`;
    text += `Qo'shimcha: ${data.comment}`;
    let url = `https://api.telegram.org/bot${Bot_Token}/sendMessage?chat_id=${Chat_Id}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };
  return (
    <div className="container">
      <div className="h">
        <img src={logo} alt="" />
        <form onSubmit={handleSubmit} action="">
          <div className="h1">
            <div>
              <p>Name</p>
              <input
                value={data.fname}
                onChange={(e) =>
                  setData((p) => ({ ...p, fname: e.target.value }))
                }
                required
                type="text"
                placeholder="Name..."
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                value={data.lname}
                onChange={(e) =>
                  setData((p) => ({ ...p, lname: e.target.value }))
                }
                required
                type="text"
                placeholder="Last Name..."
              />
            </div>
          </div>
          <p>Phone Number</p>
          <input
            value={data.phone}
            onChange={(e) => setData((p) => ({ ...p, phone: e.target.value }))}
            className="h2"
            required
            type="tel"
          />
          <textarea
            value={data.comment}
            onChange={(e) =>
              setData((p) => ({ ...p, comment: e.target.value }))
            }
            name=""
            id=""
            placeholder="Comment here..."
          ></textarea>
          <button>Contact</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
