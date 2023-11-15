// Filename: sophisticated_code.js
// Content: Complex implementation of a Fibonacci series

// Function to calculate Fibonacci series up to a given number of terms
function fibonacciSeries(numTerms) {
  // Validate input
  if (numTerms <= 0) {
    throw new Error("Number of terms should be greater than 0");
  }

  // Store the Fibonacci series
  let fibSeries = [];

  // Calculate first two terms
  fibSeries.push(0);
  fibSeries.push(1);

  // Calculate subsequent terms
  for (let i = 2; i < numTerms; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }

  // Return the Fibonacci series
  return fibSeries;
}

// Function to check if a given number is prime
function isPrime(num) {
  // Validate input
  if (num <= 1) {
    return false;
  }

  // Check divisibility with numbers up to square root of given number
  let sqrtNum = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Generate the Fibonacci series
const numTerms = 10;
const fibSeries = fibonacciSeries(numTerms);

// Find prime numbers in the Fibonacci series
let primeNumbers = [];
for (let number of fibSeries) {
  if (isPrime(number)) {
    primeNumbers.push(number);
  }
}

// Print the result
console.log(`Fibonacci Series (${numTerms} terms):`);
console.log(fibSeries);
console.log("Prime Numbers in the Fibonacci Series:");
console.log(primeNumbers);

// Some additional complex logic and functions...

// Function to calculate factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Calculate the factorial of the last prime number in the Fibonacci series
const lastPrime = primeNumbers[primeNumbers.length - 1];
const factorialResult = factorial(lastPrime);

console.log(`Factorial of the last prime number (${lastPrime}): ${factorialResult}`);

// Any other sophisticated logic and features can be added here...

// End of code