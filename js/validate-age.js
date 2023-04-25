export default function isOfLegalAge(field) {
  const dateOfBirth = new Date(field.value);
  console.log(validateAge(dateOfBirth));
}

function validateAge(date) {
  const currentDate = new Date();
  const dateOfLegalAge = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

  return currentDate >= dateOfLegalAge;
}
