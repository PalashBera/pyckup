export default function categoryFormValidator(data) {
  let errors = {};
  let validationResult = false;

  if (data.name === undefined || data.name.trim().length === 0) {
    errors.name = 'This can\'t be blank.';
  }

  if (data.active === undefined || data.active.trim().length === 0) {
    errors.active = 'This can\'t be blank.';
  }

  if (Object.keys(errors).length === 0) {
    validationResult = true;
  }

  return {
    errors,
    isValid: validationResult
  }
}
