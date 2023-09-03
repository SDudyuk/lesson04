try {
  const inputValue = prompt('Введіть число:');
  const parsedValue = Number(inputValue);
  let isPrime = false;

  if (Number.isNaN(parsedValue)) {
    throw 'Введено некоректне число!';
  }

  if (parsedValue <= 1) {
    throw 'Введіть число більше 1 (1 - не просте і не складене)!';
  }

  for (let i=2; i<=parsedValue/2; i++) {
    if (parsedValue % i === 0) {
      isPrime = true;
    }
  }

  if (isPrime) {
    console.log(`Число ${parsedValue} не є простим числом`);
  } else {
    console.log(`Число ${parsedValue} є простим числом`);
  }

} catch (e) {
  console.error(e);
}