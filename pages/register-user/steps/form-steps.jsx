import React from "react";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepThree from "./step-three";
import Results from "../results";

/* The FormSteps is a functional component that returns an array 
of all the steps to be displayed. */

const FormSteps = (step, setStep, user, setUser) => [
  {
    title: "Step One Details",
    content: (
      <StepOne setStep={setStep} step={step} user={user} setUser={setUser} />
    ),
  },
  {
    title: "Step Two Details",
    content: (
      <StepTwo setStep={setStep} step={step} user={user} setUser={setUser} />
    ),
  },

  {
    title: "Step Three Details",
    content: (
      <StepThree setStep={setStep} step={step} user={user} setUser={setUser} />
    ),
  },
  {
    title: "Results",
    content: (
      <Results setStep={setStep} step={step} user={user} setUser={setUser} />
    ),
  },
];

export default FormSteps;
