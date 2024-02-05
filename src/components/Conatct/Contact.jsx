import React, { useState } from "react";
import "../Conatct/Contacts.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  const [radioOption, setRadioOption] = useState("");
  const [message, setMessage] = useState("");

  function handleRadioChange(e) {
    setRadioOption(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleCountry(e) {
    setCountry(e.target.value);
  }

  function handleBirthday(e) {
    setBirthday(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.includes("@") || !email.includes(".")) {
      setSubmit(false);
      alert("Email is not valid");
    } else {
      setSubmit(true);
      alert(
        "First Name: " +
          firstName +
          "\nLast Name: " +
          lastName +
          "\nCountry: " +
          country +
          "\nBirthday: " +
          birthday +
          "\nEmail: " +
          email +
          "\nRadio Option: " +
          radioOption +
          "\nMessage: " +
          message
      );

      setFirstName("");
      setLastName("");
      setCountry("");
      setBirthday("");
      setEmail("");
      setRadioOption("");
      setMessage("");
    }
  }

  return (
    <div className="form-container">
      <fieldset className="additional-form-container">
        <legend>Your Information</legend>
        <form>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={handleFirstName} />
          </label>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={handleLastName} />
          </label>
          <label>
            Country:
            <select value={country} onChange={handleCountry}>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
            </select>
          </label>
          <label>
            Birthday:
            <input type="date" value={birthday} onChange={handleBirthday} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmail} />
          </label>
        </form>
      </fieldset>
      <fieldset className="additional-form-container">
        <legend>Additional Information</legend>
        <form>
          <div className="radio-box-main">
            <div className="radio-box">
              <div>
                <input
                  type="radio"
                  value="Option 1"
                  checked={radioOption === "Option 1"}
                  onChange={handleRadioChange}
                />
              </div>
              <div>
                <label htmlFor="">Question</label>
              </div>
            </div>
            <div className="radio-box">
              <div>
                <input
                  type="radio"
                  value="Option 2"
                  checked={radioOption === "Option 2"}
                  onChange={handleRadioChange}
                />
              </div>
              <div>
                <label htmlFor="">Remarks</label>
              </div>
            </div>
            <div className="radio-box">
              <div>
                <input
                  type="radio"
                  value="Option 3"
                  checked={radioOption === "Option 3"}
                  onChange={handleRadioChange}
                />
              </div>
              <div>
                <label htmlFor="">Complaint</label>
              </div>
            </div>
          </div>
        </form>
        <textarea
          placeholder="Enter your message..."
          value={message}
          onChange={handleMessageChange}
        ></textarea>
      </fieldset>

      <div className="btn-box">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
