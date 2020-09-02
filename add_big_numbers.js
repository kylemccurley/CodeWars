/*
  Input: String representation of 2 numbers
  Output: String representation of the 2 numbers
  
  Rules/Requirements:
    - Add the larger numbers
    - The numeric data type for big numbers can't hold
      such values, only a string can
  
  Algorithm:
    - Set carrier to 0
    - Set index to index of the shortest number: idx
    - Iterate through each digit of each number; start at idx: |digit1, digit2|
      - Number(digit1) + Number(digit2) + carrier: initialSum
      - initialSum > 9:
        - Convert initialSum to String; Split(''): digits
        - Add digits[1] to outcome
        - Set carrier to digits[0]
      - Otherwise:
        - Add String(initialSum) to outcome
        - Set carrier to 0
    - If a carrier is left over:
      - Add the carrier digit to the end of outcome
    - Return the reversed the outcome
*/

function add(a, b) {
  let carrier = 0;
  let outcome = '';
  let indexA = (a.length - 1);
  for (let indexB = (b.length - 1); (indexA >= 0) || (indexB >= 0); indexB--, indexA--) {
    let digitA = Number(a[indexA]) || 0;
    let digitB = Number(b[indexB]) || 0;
    let initialSum = digitA + digitB + carrier;
    if (initialSum > 9) {
      let digits = String(initialSum).split('');
      outcome += digits[1];
      carrier = Number(digits[0]);
    } else {
      outcome += String(initialSum);
      carrier = 0;
    }
  }
  
  if (carrier) {
    outcome += carrier;
  }

  return reverse(outcome);
  
  function reverse(str) {
    let reversed = '';
    for(let index = str.length - 1; index >= 0; index--) {
      reversed += str[index];
    }
    
    return reversed;
  }
}
