/*
    In a factory a printer prints labels for boxes. 
For one kind of boxes the printer has to use colors which, for the sake of simplicity,
 are named with letters from a to m.

The colors used by the printer are recorded in a control string. 
For example a "good" control string would be aaabbbbhaijjjm meaning that 
the printer used three times color a, four times color b, then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" 
control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

You have to write a function printer_error which given a string will output 
the error rate of the printer as a string representing a rational whose numerator 
is the number of errors and the denominator the length of the control string. 
Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.



Examples:

s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"

*/

// My answer:

function printerError(s) {
    /* we first use the match function (The match() 
    method retrieves the matches when matching a string against a regular expression)
    to filter out the unwanted strings then we use the ternary function and say if 
    this has a value let errors be equal to the new array length, else let errors equal 0.
    Finally we turn errors and total to strings but add '/' in between them as the answer
    wants us to return the result as a fraction string like '3/56'  and not a decimal result
    like  '0.0324234234'.
    */
    var errorArray = s.match(/[N-Z]/gi);
    var total = s.length
    let errors = (errorArray) ? errorArray.length : 0;
    return (errors + '/' + total).toString();
}


// best solution
// however if u get null for match() this will return an error and not pass the test
function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}