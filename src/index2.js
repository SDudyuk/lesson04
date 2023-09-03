try {
  const inputValue = prompt('Введіть число:');
  const parsedValue = Number(inputValue);
  let temporaryValue = 0;
  let hasPerfectValue = false;

  if (Number.isNaN(parsedValue)) {
    throw 'Введено некоректне число!';
  }

  if (parsedValue < 1) {
    throw 'Введіть число більше або рівне 1!';
  }

  console.log(`Досконалі числа у діапазоні від 1 до ${parsedValue}:`);

  for (let currentNumber=1; currentNumber<=parsedValue; currentNumber++) {

    temporaryValue = 0; 

    for (let i=1; i<=currentNumber/2; i++) {
      if (currentNumber % i === 0) {
        temporaryValue += i;
      }
    }

    if (temporaryValue === currentNumber && temporaryValue !== 0) {
      console.log(`число ${currentNumber} є досконалим`);
      hasPerfectValue = true;
    }
  
  }

  if (!hasPerfectValue) {
    console.log(`- досконалі числа відсутні!`);
  }

} catch (e) {
  console.error(e);
}