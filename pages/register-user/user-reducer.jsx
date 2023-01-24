/* Initial user values  */

export const DefaultUser = {
  firstName: "",
  lastName: "",
  age: "",
  stepTwo: {
    phoneNumber: "",
    email: "",
  },
  stepThree: {
    seat: "",
    food: "",
    allergies: "",
  },
};

/* The updater function called UserReducer which will be used to update
 the default user values. */

export const UserReducer = (user, { type, payload }) => {
  switch (type) {
    case "UPDATE_STEPONE_INFO":
      return {
        ...user,
        ...payload,
      };
    case "UPDATE_STEPTWO_INFO":
      return {
        ...user,
        stepTwo: {
          ...user.stepTwo,
          ...payload,
        },
      };

    case "UPDATE_STEPTHREE_INFO":
      return {
        ...user,
        stepThree: {
          ...user.stepThree,
          ...payload,
        },
      };

    default:
      return user;
  }
};
