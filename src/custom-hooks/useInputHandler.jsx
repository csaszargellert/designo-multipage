import { useState, useCallback } from "react";

function useInputHandler(validator) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const handleInput = useCallback(
    function (event) {
      const eventType = event.type;
      const inputValue = event.target.value;

      const errorMessage = validator(inputValue);

      if (eventType === "change") {
        setIsTouched(false);
      } else {
        setIsTouched(true);
      }

      setValue(inputValue);
      setError(errorMessage);
    },
    [validator]
  );

  return [value, error, isTouched, handleInput];
}

export default useInputHandler;
