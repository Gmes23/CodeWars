/*
Is Prime

Define a function isPrime that takes one integer argument and 
returns true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number
 greater than 1 that has no positive divisors other than 1 and 
 itself.

Example

isPrime(5)
=> true
Assumptions

You can assume you will be given an integer input.
You can not assume that the integer will be only positive. 
You may be given negative numbers.

Bug!:
###
The Haskell version uses a wrong test case, where negative 
primes should also return True, e.g. it expects isPrime (-2) == True. 
Use abs or similar measures to take care of negative numbers.
The test cases cannot get changed at this point.
Sorry for the inconvenience.
###


*/

// My answer:

function isPrime(number) {
  var num = number.toString().replace('-','');
  var n = parseInt(num)
  if (n===1 || n ===0)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x<n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}


// Best answer:

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2; 
}


// In the for loop you coud use 
// i <= Math.sqrt(num) 
// instead of 
// i < n 
// This would save you A LOT of iterations with the same result.
// Or even better, assign Math.sqrt(num) to a value before doing a loop
//  so it wouldn't calculate it every time.

// or even better i * i <= num instead of i <= Math.sqrt(num) !