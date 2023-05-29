import useInputHandler from "../../custom-hooks/useInputHandler";
import {
  emailValidator,
  nameValidator,
  phoneValidator,
  messageValidator,
} from "./formValidator";
// import styled from "styled-components";

function ContactForm() {
  const [email, emailError, emailIsTouched, handleEmailInput] =
    useInputHandler(emailValidator);

  const [name, nameError, nameIsTouched, handleNameInput] =
    useInputHandler(nameValidator);

  const [phone, phoneError, phoneIsTouched, handlePhoneInput] =
    useInputHandler(phoneValidator);

  const [message, messageError, messageIsTouched, handleMessageInput] =
    useInputHandler(messageValidator);

  const handleSubmit = function (event) {
    event.preventDefault();

    if (!emailError && !nameError && !phoneError && !messageError) {
      if (
        emailIsTouched &&
        nameIsTouched &&
        phoneIsTouched &&
        messageIsTouched
      ) {
        console.log("The form can be submitted.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="name"
        name="name"
        id="name"
        placeholder="Name"
        value={name}
        onChange={handleNameInput}
        onBlur={handleNameInput}
      />
      {nameIsTouched && nameError && (
        <p style={{ color: "red" }}>{nameError}</p>
      )}
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        value={email}
        onChange={handleEmailInput}
        onBlur={handleEmailInput}
      />
      {emailIsTouched && emailError && (
        <p style={{ color: "red" }}>{emailError}</p>
      )}
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone"
        value={phone}
        onChange={handlePhoneInput}
        onBlur={handlePhoneInput}
      />
      {phoneIsTouched && phoneError && (
        <p style={{ color: "red" }}>{phoneError}</p>
      )}
      <textarea
        placeholder="Your Message"
        maxLength="200"
        rows="5"
        cols="30"
        name="message"
        id="message"
        value={message}
        onChange={handleMessageInput}
        onBlur={handleMessageInput}
      ></textarea>
      {messageIsTouched && messageError && (
        <p style={{ color: "red" }}>{messageError}</p>
      )}
      <button type="submit">submit</button>
    </form>
  );
}

export default ContactForm;
