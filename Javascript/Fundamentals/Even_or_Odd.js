// Create a function that takes an integer as an argument and returns
//  "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    // if number is divided by 2 and has a remainder of 
    // 0 then it must be even so we return "Even" else "Odd"
  if(number % 2 == 0) {
    return("Even")
  } else {
    return("Odd")
  }
}

// Better answer:
function even_or_odd(number) {
    // we divide number by 2 whatever the result that is not 0
    //  will return true which is "Odd" and if false "Even"
  return number % 2 ? "Odd" : "Even"
}