import { useMemo } from "react";
import useInputHandler from "../../custom-hooks/useInputHandler";
import {
  emailValidator,
  nameValidator,
  phoneValidator,
  messageValidator,
} from "./formValidator";
import InputElement from "./InputElement";
import styled from "styled-components";

const Form = styled.form`
  width: 70%;

  @media (max-width: 56.25em) {
    width: 100%;
  }

  @media (max-width: 31.5625em) {
    width: 90%;
  }
`;

const ButtonController = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 31.5625em) {
    justify-content: center;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--dark-grey);
  background-color: var(--white);
  border-radius: var(--border-radius);

  display: inline-block;
  padding: 1.6rem 4.8rem;

  transition: all 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--light-peach);
    color: var(--white);
  }
`;

function ContactForm() {
  const [email, emailError, emailIsTouched, handleEmailInput] =
    useInputHandler(emailValidator);

  const [name, nameError, nameIsTouched, handleNameInput] =
    useInputHandler(nameValidator);

  const [phone, phoneError, phoneIsTouched, handlePhoneInput] =
    useInputHandler(phoneValidator);

  const [message, messageError, messageIsTouched, handleMessageInput] =
    useInputHandler(messageValidator);

  const inputFields = useMemo(
    () => [
      {
        id: 1,
        type: "text",
        name: "name",
        placeholder: "name",
        value: name,
        error: nameError,
        isTouched: nameIsTouched,
        handleInput: handleNameInput,
      },
      {
        id: 2,
        type: "email",
        name: "email",
        placeholder: "email address",
        value: email,
        error: emailError,
        isTouched: emailIsTouched,
        handleInput: handleEmailInput,
      },
      {
        id: 3,
        type: "tel",
        name: "phone",
        placeholder: "phone",
        value: phone,
        error: phoneError,
        isTouched: phoneIsTouched,
        handleInput: handlePhoneInput,
      },
      {
        id: 4,
        type: "textarea",
        name: "message",
        placeholder: "your message",
        value: message,
        error: messageError,
        isTouched: messageIsTouched,
        handleInput: handleMessageInput,
      },
    ],
    [
      phone,
      phoneError,
      phoneIsTouched,
      message,
      messageError,
      messageIsTouched,
      email,
      emailError,
      emailIsTouched,
      name,
      nameError,
      nameIsTouched,
      handleMessageInput,
      handleEmailInput,
      handleNameInput,
      handlePhoneInput,
    ]
  );

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
    <Form onSubmit={handleSubmit}>
      {inputFields.map((field) => {
        return <InputElement key={field.id} {...field} />;
      })}
      <ButtonController>
        <Button type="submit">submit</Button>
      </ButtonController>
    </Form>
  );
}

export default ContactForm;
