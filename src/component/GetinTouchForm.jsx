import React from "react";
import { useState } from "react";

export default function GetinTouchForm() {
  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");

  function handleClick(event) {
    event.preventDefault();
    const data = {
      Name: Name,
      Mobile: Mobile,
      Email: Email,
      Subject: Subject,
      Comment: Comment,
    };
    console.log(data);
    
  }

  function handleName(event) {
    setName(event.target.value);
  }
  function handleMobile(event) {
    setMobile(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handleSubject(event) {
    setSubject(event.target.value);
  }

  return (
    <>
      <div className="cnt5">
        <div className="contact">Get In Touch</div>
        <div className="touch">Contact Us ------</div>
        <form className="form">
          <div className="detail a1">
            <input
              type="text"
              value={Name}
              onChange={handleName}
              className="input-box"
              name=""
              required=""
            />
            <label>Your Name</label>
          </div>
          <div className="detail b1">
            <input
              type="tel"
              maxLength={10}
              pattern="[0-9]{10}"
              value={Mobile}
              onChange={handleMobile}
              className="input-box"
              name=""
              required=""
            />
            <label>Mobile</label>
          </div>
          <div className="detail c1">
            <input
              type="email"
              value={Email}
              onChange={handleEmail}
              className="input-box"
              name=""
              required=""
            />
            <label>Your E-mail</label>
          </div>
          <div className="detail d1">
            <input
              type="text"
              value={Subject}
              onChange={handleSubject}
              className="input-box"
              name=""
              required=""
            />
            <label>Subject</label>
          </div>
          <div className="detail e1">
            <textarea
              name="textarea"
              rows={4}
              cols={40}
              className="comment"
            ></textarea>
            <label className="comment1">Comments</label>
          </div>
          <div className="submit f1">
            <button className="msg" onClick={handleClick}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
