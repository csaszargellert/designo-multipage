import styled from "styled-components";

function ContactForm() {
  const handleSubmit = function (event) {
    event.preventDefault();

    console.log("submitted");
  };

  return <form onSubmit={handleSubmit}></form>;
}

export default ContactForm;
