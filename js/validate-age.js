export default function isOfLegalAge(field) {
  const dateOfBirth = new Date(field.value);
  if (validateAge(dateOfBirth) == false) {
    field.setCustomValidity('O usuário não é maior de idade.');
  }
}

function validateAge(date) {
  const currentDate = new Date();
  const dateOfLegalAge = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

  return currentDate >= dateOfLegalAge;
}
