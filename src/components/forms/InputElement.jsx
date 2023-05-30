import styled from "styled-components";

const StyledInput = styled.div`
  position: relative;

  margin-bottom: 2.4rem;
  input,
  textarea {
    border: none;
    outline: none;
    background: transparent;
    font-size: 1.6rem;
    width: 38rem;
    display: inline-block;
    padding: 0.9rem 1.6rem 1.8rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    color: var(--white);
  }

  input:focus,
  textarea:focus {
    border-bottom: 3px solid var(--white);
    cursor: pointer;
  }

  textarea {
    resize: none;
    height: 10rem;
  }

  input::placeholder,
  textarea::placeholder {
    font-family: inherit;
    font-weight: 500;
    font-size: 1.5rem;
    color: var(--white);
    opacity: 0.5;
    text-transform: capitalize;
  }

  span {
    position: absolute;
    top: 4px;
    right: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    font-style: italic;
    user-select: none;
  }

  @media (max-width: 65.625em) {
    input,
    textarea {
      width: 100%;
    }
  }
`;

function InputElement({
  type,
  name,
  placeholder,
  value,
  error,
  isTouched,
  handleInput,
}) {
  let input;

  if (type === "textarea") {
    input = (
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onInput={handleInput}
        onBlur={handleInput}
      ></textarea>
    );
  } else {
    input = (
      <input
        autoComplete="off"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onInput={handleInput}
        onBlur={handleInput}
      />
    );
  }

  return (
    <StyledInput>
      {input}
      {error && isTouched && (
        <span>
          {error}{" "}
          <img src="/assets/contact/desktop/icon-error.svg" alt="error" />
        </span>
      )}
    </StyledInput>
  );
}

export default InputElement;
