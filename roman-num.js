//numbers to numerals conversion array


//function to convert arabic number to roman numeral

function convertToRoman(num) {
  let result = "";
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += numerals[i];
      num -= values[i];
    }
  }
  return result;
}

//button to convert arabic number to roman numeral








//clear button to erase input fields
