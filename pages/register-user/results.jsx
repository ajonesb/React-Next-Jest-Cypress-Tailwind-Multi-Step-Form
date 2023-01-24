import { React } from "react";
import PropTypes from "prop-types";
import BackButton from "../../components/Button/Back";
import Success from "../../components/Success";

// import { useRouter } from "next/router";

const Results = ({ step, setStep, user, setUser }) => {
  return (
    <form>
      <h4 className="font-bold text-lg leading-title mb-6">
        Welcome, you have successfully registered.
      </h4>
      <Success fill="green" width={100} height={100} />
      <h4 className="block font-black text-sm font-normal leading-input mb-4 mt-4">
        Here are your details:
      </h4>
      <div>
        <h4 className="font-bold text-lg leading-title mb-6">First Name:</h4>
        <p
          data-testid="firstName"
          className="block text-gray-700 text-sm font-normal leading-input mb-4"
        >
          {user.firstName}
        </p>
      </div>
      <div>
        <h4 className="font-bold text-lg leading-title mb-6">Last Name:</h4>
        <p
          data-testid="lastName"
          className="block text-gray-700 text-sm font-normal leading-input mb-4"
        >
          {user.lastName}
        </p>
      </div>
      <div>
        <h4 className="font-bold text-lg leading-title mb-6">Age:</h4>
        <p
          data-testid="age"
          className="block text-gray-700 text-sm font-normal leading-input mb-4"
        >
          {user.age}
        </p>
      </div>
      <div>
        <h4 className="font-bold text-lg leading-title mb-6">Email:</h4>
        <p
          data-testid="email"
          className="block text-gray-700 text-sm font-normal leading-input mb-4"
        >
          {user.stepTwo.email}
        </p>
      </div>
      <div>
        <h4 className="font-bold text-lg leading-title mb-6">Phone Number:</h4>
        <p
          data-testid="phone"
          className="block text-gray-700 text-sm font-normal leading-input mb-4"
        >
          {user.stepTwo.phoneNumber}
        </p>
      </div>
      {/* <div>
        <h4 className="font-bold text-lg leading-title mb-6">Seat:</h4>
        <p
          data-testid="seat"
          className="block text-gray-700 text-sm font-normal leading-input mb-4"
        >
          {user.stepThree.seat}
        </p>
      </div>
      <div>
        <h4 className="font-bold text-lg leading-title mb-6">Food:</h4>
        <p
          data-testid="food"
          className="block text-gray-700 text-sm font-normal leading-input mb-4"
        >
          {user.stepThree.food}
        </p>
      </div>
      <div>
        <h4 className="font-bold text-lg leading-title mb-6">Allergies:</h4>
        <p
          data-testid="allergies"
          className="block text-gray-700 text-sm font-normal leading-input mb-4"
        >
          {user.stepThree.allergies}
        </p>
      </div> */}
      <div>
        <h4 className="font-bold text-lg leading-title mb-6">Seat:</h4>
        <p
          data-testid="seat"
          className="block text-gray-700 text-sm font-normal leading-input mb-4"
        >
          {user.stepThree.seat}
        </p>
      </div>

      <div>
        <h4 className="font-bold text-lg leading-title mb-6">Food:</h4>
        <p
          data-testid="food"
          className="block text-gray-700 text-sm font-normal leading-input mb-4"
        >
          {user.stepThree.food}
        </p>
      </div>

      <div>
        <h4 className="font-bold text-lg leading-title mb-6">Allergies:</h4>
        <p
          data-testid="allergies"
          className="block text-gray-700 text-sm font-normal leading-input mb-4"
        >
          {user.stepThree.allergies}
        </p>
      </div>

      <div className="flow-root">
        <div className="float-left">
          <BackButton
            onClick={() => setStep(2)}
            data-testid="back"
            type="button"
          >
            Back
          </BackButton>
        </div>
      </div>
    </form>
  );
};
Results.propTypes = {
  user: PropTypes.object,
  step: PropTypes.number,
  setStep: PropTypes.func,
  setUser: PropTypes.func,
};
export default Results;
