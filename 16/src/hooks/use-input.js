import { useState } from "react";

const useInput = (validateValue) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateValue(value)
    const hasError = !isValid && isTouched;

    const inputChangeHandler = event => {
        const value = event.target.value;
        setValue(value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setValue('')
        setIsTouched('')
    }

    return {
        value,
        isValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput