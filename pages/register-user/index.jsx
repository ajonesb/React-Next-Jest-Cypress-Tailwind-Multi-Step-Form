import React, { useReducer, useState } from "react";
import { UserReducer, DefaultUser } from "./user-reducer";
import FormSteps from "./steps/form-steps";

const RegisterUser = () => {
  let [step, setStep] = useState(0);
  const [user, setUser] = useReducer(UserReducer, DefaultUser);
  let steps = FormSteps(step, setStep, user, setUser);

  return (
    <div>
      <div className="">{steps[`${step}`].content}</div>
    </div>
  );
};
export default RegisterUser;
