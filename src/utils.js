function multiply(a, b) {
  return a * b;
}

export function sum(a, b) {
  return a + b;
}

superSumm = (...numbers) =>
  numbers.length !== 0 ? (numbers.every(n => typeof n === 'number') ? numbers.reduce((sum, number) => sum + number) : null) : null;
