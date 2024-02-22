// 1. Write a function to reverse a string.
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString('hello')); // Output: 'olleh'

// 2. Write a function to check if a string is a palindrome.
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  console.log(isPalindrome('racecar')); // Output: true

// 3. Write a function to find the largest number in an array.
function findLargestNumber(arr) {
    return Math.max(...arr);
  }
  console.log(findLargestNumber([1, 5, 2, 10])); // Output: 10

// 4. Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }

// 5. Write a function to find the factorial of a given number.
function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  console.log(factorial(5)); // Output: 120
  
// 6. Write a function to check if a number is prime or not.
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
  
//     if (num % 2 === 0 || num % 3 === 0) return false;
  
//     let i = 5;
//     while (i * i <= num) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//       i += 6;
//     }
//     return true;
//   }
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

  console.log(isPrime(11)); // Output: true

// 7. Write a function to remove duplicates from an array.
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

  
// 8. Write a function to check if two strings are anagrams of each other.
function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }
  console.log(isAnagram('listen', 'silent')); // Output: true

// 9. Write a function to find the sum of all elements in an array.
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

  
// 10. Write a function to merge two sorted arrays into a single sorted array.
function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
  }
  console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

// 11. Write a function to find the missing number in a given integer array of 1 to 100.
function findMissingNumber(arr) {
    const n = arr.length + 1;
    const total = (n * (n + 1)) / 2;
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return total - sum;
  }
  console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3

// 12. Write a function to flatten a nested array.
function flattenArray(arr) {
    return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr), []);
  }
  console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]

// 13. Write a function to count the number of words in a string.
function countWords(str) {
    return str.split(/\s+/).filter(word => word !== '').length;
  }
  console.log(countWords('This is a sample string.')); // Output: 5

// 14. Write a function to generate a random string of specified length.
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  console.log(generateRandomString(8)); // Output: 'HgR7p2Ft'

  
// 15. Write a function to check if a number is an Armstrong number.
function isArmstrongNumber(num) {
    const digits = String(num).split('');
    const n = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), n), 0);
    return sum === num;
  }
  console.log(isArmstrongNumber(153)); // Output: true

// 16. Write a function to check if a number is a perfect number.
function isPerfectNumber(num) {
    if (num <= 0) {
        return false;
    }

    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}

console.log(isPerfectNumber(6)); // Output: true (6 = 1 + 2 + 3)
console.log(isPerfectNumber(28)); // Output: true (28 = 1 + 2 + 4 + 7 + 14)
console.log(isPerfectNumber(12)); // Output: false

// 17. Write a function to check if a number is a strong number.
function isStrongNumber(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
      let digit = temp % 10;
      let factorial = 1;
      for (let i = 1; i <= digit; i++) {
        factorial *= i;
      }
      sum += factorial;
      temp = Math.floor(temp / 10);
    }
    return sum === num;
  }
  console.log(isStrongNumber(145)); // Output: true

// 18. Write a function to check if a number is a Disarium number.
function isDisariumNumber(num) {
    const digits = String(num).split('');
    const sum = digits.reduce((acc, digit, index) => acc + Math.pow(Number(digit), index + 1), 0);
    return sum === num;
  }
  console.log(isDisariumNumber(89)); // Output: true

// 19. Write a function to find the Nth Fibonacci number.
function fibonacci(n) {
    let a = 0, b = 1;
    if (n === 0) return a;
    for (let i = 2; i <= n; i++) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return b;
  }
  console.log(fibonacci(6)); // Output: 8

// 20. Write a function to check if a number is a Harshad number.
function isHarshadNumber(num) {
    const sumOfDigits = String(num).split('').reduce((acc, digit) => acc + Number(digit), 0);
    return num % sumOfDigits === 0;
  }
  console.log(isHarshadNumber(18)); // Output: true

  
//21. Write a function to find the Greatest Common Divisor of two numbers.
function findGCD(a, b) {
    if (!b) {
      return a;
    }
    return findGCD(b, a % b);
  }
  console.log(findGCD(12, 18)); // Output: 6

  
// 22. Write a function to find the Least Common Multiple of two numbers.
function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
  }
  console.log(findLCM(12, 18)); // Output: 36

// 23. Write a function to find the power of a number.
function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  console.log(power(2, 3)); // Output: 8

// 24. Write a function to find the next prime number greater than a given number.
function nextPrime(num) {
    if (num <= 1) return 2;
    let prime = num + 1;
    while (true) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(prime); i++) {
        if (prime % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) return prime;
      prime++;
    }
  }
  console.log(nextPrime(11)); // Output: 13
  
