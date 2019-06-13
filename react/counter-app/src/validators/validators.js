export const validatePassword = (value, constraint) => {
  return value !== '' && value.length >= constraint;
};
export const validateEmail = (value, constraint) => {
  return value !== '' && constraint.test(value);
};
