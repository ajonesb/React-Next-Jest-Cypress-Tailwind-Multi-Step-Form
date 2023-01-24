export const stepOneValidate = (values) => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is a required field";
  } else if (values.firstName.match(/\d+/g)) {
    errors.firstName = "First name should not contain numbers";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is a required field";
  } else if (!/^[a-zA-Z]*$/g.test(values.lastName)) {
    errors.lastName = "Last name should not contain numbers";
  }
  if (!values.age) {
    errors.age = "Age must be a number";
  }
  if (values.age && (values.age <= 0 || values.age > 100)) {
    errors.age = "Age should be positive";
  }

  return errors;
};
