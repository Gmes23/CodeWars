/* L is an array, return a new array but with only the intergers
    example L = [1, 2, 3, '123', 'string']
*/

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}