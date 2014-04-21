// Filename: iscif.js  
// Timestamp: 2014.04.20-19:13:06 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
//
// valid cif numbers:
// "A58818501", "B-86271723"


var iscif = ((typeof module === 'object') ? module : {}).exports = function (cif) {  
  // first character represents association.
  // last character is checkdigit
  // CIF should be 9 characters
  var unverifiednum = String(cif).replace(/[\-]/gi, '').toUpperCase(),
      letters = "ABCDEFGHJKLMNPRQSUVW", a, b, oddNumbers, x, c, d, e, i, len,
      letters2 = "ABCDEFGHIJ", letter, provinceCode, number, controlCode;
  

  if (!unverifiednum.match(/^[ABCDEFGHJKLMNPRQSUVW]\d{7}[\d[ABCDEFGHIJ]$/)) {
    return false;
  }

  letter = unverifiednum.charAt(0); // first character
  provinceCode = unverifiednum.substr(1, 2); // 2 and 3 charachter

  number = unverifiednum.substr(3, 5);
  controlCode = unverifiednum.substr(8, 1); // last character

  // is all digits digit
  if (letter.match(/[CKLMNPQRSW]/) && /\d/.test(controlCode)) {
    return false;
  }

  if (letter.match(/[ABDEFGHJUV]/) && /[a-zA-Z]/.test(controlCode)) {
    return false;
  }

  a = +provinceCode[1] + +number[1] + +number[3];
  b = 0;

  oddNumbers = [+provinceCode[0], +number[0], +number[2], +number[4]];

  for (i = 0, len = oddNumbers.length; i < len; i++) {
    x = +oddNumbers[i] * 2;
    if (x >= 10) {
      x = (x % 10) + 1;
    }
    b += x;
  }

  c = a + b;
  e = c % 10;

  d = (e) ? 10 - e : 0;

  return +controlCode === d || +controlCode === letters2[d];
};
