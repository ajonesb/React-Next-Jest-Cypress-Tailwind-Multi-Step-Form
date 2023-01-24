export const stepTwoValidate = (values) => {
  console.log(values.stepTwo.phoneNumber, values.phoneNumber);
  console.log(errors);

  console.log(values.stepTwo.email, values.email);
  let errors = {};

  if (!values.stepTwo.phoneNumber) {
    errors.email = "Phone number is required field";
  } else if (/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/.test(values.phoneNumber)) {
    errors.phoneNumber = "Enter a valid phone number";
  }

  if (!values.stepTwo.email) {
    errors.email = "Email address is required field";
  } else if (
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      values.email
    )
  ) {
    errors.email = "Email should have correct format";
  }

  return errors;
};
