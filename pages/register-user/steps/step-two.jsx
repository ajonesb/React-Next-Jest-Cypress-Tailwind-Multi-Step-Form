import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../../../components/Input";
import BackButton from "../../../components/Button/Back";
import NextButton from "../../../components/Button/Next";
import { stepTwoValidate } from "../validation/step-two-validate";

/* The StepTwo component handles collecting and validation the step two 
 details, it’s very similar to the stepOne component. 
Form validation is done by the stepTwoValidate function in the 
validation.js file.

*/

const StepTwo = ({ step, setStep, user, setUser }) => {
  const [errors, setErrors] = useState({});
  // handle onchange

  const handleStepTwo = ({ target }) => {
    setUser({
      type: "UPDATE_STEPTWO_INFO",
      payload: { [target.name]: target.value },
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const errors = stepTwoValidate(user);
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setStep(step + 1);
  };

  return (
    <form onSubmit={handleContinue}>
      <h4 data-testid="title" className="font-bold text-lg leading-title mb-6">Step {step + 1}</h4>

      <Input
        type="tel"
        label="Phone number"
        name="phoneNumber"
        data-testid="phone"
        value={user.stepTwo.phoneNumber}
        onChange={(e) => handleStepTwo(e)}
        error={errors.phoneNumber}
      />
      <Input
        type="email"
        label="Email address"
        name="email"
        data-testid="email"
        value={user.stepTwo.email}
        onChange={(e) => handleStepTwo(e)}
        error={errors.email}
      />

      <div className="flow-root">
        <div className="float-left">
          <BackButton
            onClick={() => setStep(step - 1)}
            data-testid="back"
            type="button"
          >
            Back
          </BackButton>
        </div>
        <div className="float-right">
          <NextButton data-testid="submit" type="submit">
            Next
          </NextButton>
        </div>
      </div>
    </form>
  );
};
StepTwo.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  user: PropTypes.object,
  setUser: PropTypes.func,
};
export default StepTwo;
