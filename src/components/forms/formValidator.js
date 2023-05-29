export const emailValidator = function (inputValue) {
  let errorMessage = "";

  if (!inputValue.trim()) {
    errorMessage = "Cannot be empty";
  } else if (!inputValue.includes("@")) {
    errorMessage = "Must contain '@' sign.";
  } else {
    errorMessage = "";
  }

  return errorMessage;
};

export const nameValidator = function (inputValue) {
  let errorMessage = "";

  if (!inputValue.trim()) {
    errorMessage = "Cannot be empty.";
  } else {
    errorMessage = "";
  }

  return errorMessage;
};

export const phoneValidator = function (inputValue) {
  let errorMessage = "";

  if (!inputValue.trim()) {
    errorMessage = "Cannot be empty.";
  } else if (/[a-z]/.test(inputValue)) {
    errorMessage = "Cannot contain letters.";
  } else {
    errorMessage = "";
  }

  return errorMessage;
};

export const messageValidator = function (inputValue) {
  let errorMessage = "";

  if (!inputValue.trim()) {
    errorMessage = "Cannot be empty.";
  } else if (inputValue.length > 200) {
    errorMessage = "Cannot be more than 200 chars.";
  } else {
    errorMessage = "";
  }

  return errorMessage;
};
