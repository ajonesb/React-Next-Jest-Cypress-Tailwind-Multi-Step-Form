import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../../../components/Input";
import BackButton from "../../../components/Button/Back";
import NextButton from "../../../components/Button/Next";
import { stepThreeValidate } from "../validation/step-three-validate";

/* The StepThree component handles collecting and validation the step three 
 details, it’s very similar to the stepTwo component. 
Form validation is done by the stepThreeValidate function in the 
validation.js file.

*/

const StepThree = ({ step, setStep, user, setUser }) => {
  const [errors, setErrors] = useState({});
  // handle onchange

  const handleStepThree = ({ target }) => {
    setUser({
      type: "UPDATE_STEPTHREE_INFO",
      payload: { [target.name]: target.value },
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const errors = stepThreeValidate(user);
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
        label="Seat"
        name="seat"
        data-testid="seat"
        value={user.stepThree.seat}
        onChange={(e) => handleStepThree(e)}
        error={errors.seat}
      />
      <Input
        type="text"
        label="Food"
        name="food"
        data-testid="food"
        value={user.stepThree.food}
        onChange={(e) => handleStepThree(e)}
        error={errors.food}
      />
      <Input
        type="text"
        label="Allergies"
        name="allergies"
        data-testid="allergies"
        value={user.stepThree.allergies}
        onChange={(e) => handleStepThree(e)}
        error={errors.allergies}
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
StepThree.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  user: PropTypes.object,
  setUser: PropTypes.func,
};
export default StepThree;
