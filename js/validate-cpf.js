// The CPF Number is the Brazilian individual taxpayer registry.
export default function isCPF(field) {
  const cpf = field.value.replace(/\.|-/g, "");

  if(checkRepeatedNumbers(cpf) && validFirstDigit(cpf) && validSecondDigit(cpf)) {
    console.log("Valid CPF");
  } else {
    console.log("Invalid CPF");
  }

}

function checkRepeatedNumbers(cpf) {
  const repeatedNumbers = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ];

  return (repeatedNumbers.includes(cpf) != true);
}

function validFirstDigit(cpf) {
  let sum = 0;
  let multiply = 10;

  for(let size = 0; size < 9; size++) {
    sum += cpf[size] * multiply;
    multiply--;
  }

  sum = (sum * 10) % 11;

  if(sum == 10 || sum == 11) {
    sum = 0;
  }

  return (sum == cpf[9]);
}

function validSecondDigit(cpf) {
  let sum = 0;
  let multiply = 11;

  for(let size = 0; size < 10; size++) {
    sum += cpf[size] * multiply;
    multiply--;
  }

  sum = (sum * 10) % 11;

  if(sum == 10 || sum == 11) {
    sum = 0;
  }

  return (sum == cpf[10]);
}
