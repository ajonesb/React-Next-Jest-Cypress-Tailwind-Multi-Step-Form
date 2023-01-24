# Multi Step Form

A ticket-ordering frontend app in React that:

1. Collects user input.
1. Uses correct input types for each field.
1. Validates the fields according to the validation rules provided below.
1. Preserves the state between steps.
1. Displays the collected information on the last step.
1. Includes unit tests for one module of your choice.
1. Makes the provided E2E tests pass.
1. Has the UI styled with design system scalability in mind. Use [this Figma mockup](https://www.figma.com/file/tQ5ZJwlZmNXlrh0ht10GTp/MultiStep-Form?node-id=0%3A1&t=4EGq1sbD0v2Thily-0) as a reference.


### Navigation elements

Each step of the form should also contain the "Submit" and "Back" buttons.

 `data-testid` attributes are used to identify those elements.

### The form steps

The inputs on the form steps have the following `data-testid` attributes:

#### Step 1

```html
<form ...>
  <input data-testid="firstName" ... />
  <input data-testid="lastName" ... />
  <input data-testid="age" ... />
  <button data-testid="submit" />
</form>
```

#### Step 2

```html
<form ...>
  <input data-testid="phone" ... />
  <input data-testid="email" ... />
  <button data-testid="submit" />
  <button data-testid="back" />
</form>
```

#### Step 3

```html
<form ...>
  <input data-testid="seat" ... />
  <input data-testid="food" ... />
  <input data-testid="allergies" ... />
  <button data-testid="submit" />
  <button data-testid="back" />
</form>
```

#### Result

On the results page we see the values collected by the form.
Each element containing the value has a `data-testid` field with the corresponding `field name`:

```html
<div data-testid="<field name>">value</div>
<button data-testid="back" />
```

### Validation rules

Form steps have the following validations:

#### Step 1

- `firstName` is a required field.
  - **Validation message:** `First name is a required field`
- `firstName` should not contain numbers.
  - **Validation message:** `First name should not contain numbers`
- `lastName` is a required field.
  - **Validation message:** `Last name is a required field`
- `lastName` should not contain numbers.
  - **Validation message:** `Last name should not contain numbers`
- `age` is a required field.
  - **Validation message:** `Age must be a number`
- `age` should be a positive number.
  - **Validation message:** `Age should be positive`

#### Step 2

- `email` is a required field.
  - **Validation message:** `Email is a required field`
- `email` should have correct email format.
  - **Validation message:** `Email should have correct format`
- `phone` is a required field.
  - **Validation message:** `Phone number is a required field`

#### Step 3

- `seat` is a required field.
  - **Validation message:** `Seat is a required field`
- `food` is a required field.
  - **Validation message:** `Food is a required field`
- `allergies` is a required field.
  - **Validation message:** `Allergies is a required field`

### Try running the E2E tests locally

```bash
npm install
# Run your app here
npm run test
```

## Application UX experience: 

1. Fulfills the requirements in the task description above.
2. Ensures that state management is well organized.
3. Unit test one module.
4. Avoids duplication and extracts re-usable modules where it makes sense. 
5. Cleaned up code as if it was used in production.

