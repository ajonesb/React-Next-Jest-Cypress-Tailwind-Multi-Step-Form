import React, { useState, useReducer } from "react";
import PropTypes from "prop-types";
import Input from "../../../components/Input";
import NextButton from "../../../components/Button/Next";
import { stepOneValidate } from "../validation/step-one-validate";

/* 
The StepOne page is a form that handles the user’s personal details. 
All inputs are updated with the handleUser function. onSubmit of the form, 
the handleContinue function is called.
 */

const StepOne = ({ step, setStep, user, setUser }) => {
  console.log(user);

  const [errors, setErrors] = useState({});

  // handle onchange
  const handleUser = ({ target }) => {
    const newErrors = stepOneValidate(
      { ...user, [target.name]: target.value },
      errors
    );
    setErrors(newErrors);
    setUser({
      type: "UPDATE_STEPONE_INFO",
      payload: { [target.name]: target.value },
    });
  };
  const handleContinue = (e) => {
    e.preventDefault();
    const errors = stepOneValidate(user);
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setStep(step + 1);
  };
  return (
    <form onSubmit={handleContinue}>
      <h4 data-testid="title" className="font-bold text-lg leading-title mb-6">
        Step {step + 1}
      </h4>

      <Input
        type="text"
        name="firstName"
        data-testid="firstName"
        label="First name"
        onChange={(e) => handleUser(e)}
        error={errors.firstName}
        value={user.firstName}
      />
      <Input
        type="text"
        name="lastName"
        data-testid="lastName"
        label="Last name"
        onChange={(e) => handleUser(e)}
        error={errors.lastName}
        value={user.lastName}
      />
      <Input
        type="number"
        label="Age"
        name="age"
        data-testid="age"
        onChange={(e) => handleUser(e)}
        error={errors.age}
        value={user.age}
      />
      <NextButton data-testid="submit" type="submit">
        Next
      </NextButton>
    </form>
  );
};
StepOne.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  user: PropTypes.object,
  setUser: PropTypes.func,
};

export default StepOne;
