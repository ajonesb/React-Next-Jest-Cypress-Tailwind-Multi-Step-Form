export const stepThreeValidate = (values) => {
  let errors = {};

  if (!values.stepThree.seat) {
    errors.seat = "Seat is a required field";
  } else if (!/^[a-zA-Z]*$/g.test(values.seat)) {
    errors.seat = "Seat should not contain numbers";
  }

  if (!values.stepThree.food) {
    errors.food = "Food is a required field";
  } else if (!/^[a-zA-Z]*$/g.test(values.food)) {
    errors.food = "Food should not contain numbers";
  }

  if (!values.stepThree.allergies) {
    errors.allergies = "Allergies is a required field";
  } else if (!/^[a-zA-Z]*$/g.test(values.allergies)) {
    errors.allergies = "Allergies should not contain numbers";
  }

  return errors;
};
