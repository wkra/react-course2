// import useInputValidation from "../hooks/use-input-validation";
import { default as useInputValidation } from "../hooks/use-input-validation-reducer";

const BasicForm = (props) => {
    const isNotEmpty = (value) => value.trim() !== '';
    const isEmailValid = (value) => value.includes('@');

    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        reset: firstNameReset,
        onBlur: onFirstNameBlurHandler,
        onChangeHandler: onFirstNameChangeHandler
    } = useInputValidation(isNotEmpty);

    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        reset: lastNameReset,
        onBlur: onLastNameBlurHandler,
        onChangeHandler: onLastNameChangeHandler
    } = useInputValidation(isNotEmpty);

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        reset: emailReset,
        onBlur: onEmailBlurHandler,
        onChangeHandler: onEmailChangeHandler
    } = useInputValidation(isEmailValid);

    let formIsValid = false;

    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    function onSubmitHandler(e) {
        e.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log('firstNameValue', firstNameValue);
        console.log('lastNameValue', lastNameValue);
        console.log('emailValue', emailValue);

        firstNameReset();
        lastNameReset();
        emailReset();
    }

    const firstNameClasses = `form-control ${firstNameHasError ? 'invalid' : ''}`;
    const lastNameClasses = `form-control ${lastNameHasError ? 'invalid' : ''}`;
    const emailClasses = `form-control ${emailHasError ? 'invalid' : ''}`;

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="control-group">
                <div className={firstNameClasses}>
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        value={firstNameValue}
                        onChange={onFirstNameChangeHandler}
                        onBlur={onFirstNameBlurHandler}/>
                    {firstNameHasError && <p className="error-text">Input is invalid</p>}

                </div>
                <div className={lastNameClasses}>
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        value={lastNameValue}
                        onChange={onLastNameChangeHandler}
                        onBlur={onLastNameBlurHandler}/>
                    {lastNameHasError && <p className="error-text">Input is invalid</p>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={emailValue}
                    onChange={onEmailChangeHandler}
                    onBlur={onEmailBlurHandler}/>
                {emailHasError && <p className="error-text">Input is invalid</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
