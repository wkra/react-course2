import { useState } from "react";

const useInputValidation = (validation) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validation(value);
    const hasError = !isValid && isTouched;

    const onBlur = () => {
        setIsTouched(true);
    };

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue('');
        setIsTouched(false);
    };

    return {
        value,
        isValid,
        hasError,
        reset,
        onBlur,
        onChangeHandler
    };
};

export default useInputValidation;