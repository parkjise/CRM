// [TIP] 총 8~13자리 숫자로만 구성된 문자열 (하이픈(-) 비허용, 공백 비허용)을 검사하는 RegEx 로직
const regexLogicPhoneNumber: RegExp = /^\d{8,13}$/;

export const regexPhoneNumber = (input: string): boolean => {
  if (input !== undefined) {
    return regexLogicPhoneNumber.test(input);
  }
  return false;
};
/*
// 사용 예시
const input1 = "12345678"; // true
const input2 = "123456789012"; // true
const input3 = "1234567890123"; // false
const input4 = "1234 5678"; // false
const input5 = "1234-5678"; // false
const input6 = "abc123"; // false
const input7 = " "; // false
*/
//

// [TIP] 총 8~13자리 숫자로만 구성된 문자열 (하이픈(-) 비허용, 공백 비허용)을 검사하는 RegEx 로직
const regexLogicSixNumber: RegExp = /^\d{6}$/;

export const regexSixNumber = (input: string) => {
  if (input !== undefined) {
    return regexLogicSixNumber.test(input);
  }
  return false;
};
/*
console.log(isValidNumber('123456')); // true
console.log(isValidNumber('12345-6')); // false
console.log(isValidNumber('12345 6')); // false
console.log(isValidNumber('abc123')); // false
*/
//
