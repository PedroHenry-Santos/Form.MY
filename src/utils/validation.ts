export function verifyDocument(strData: string | undefined) {
  if (!strData) return false;

  const strVerify = strData.replace(/[^0-9]/g, '');

  if (strVerify.length === 11) {
    if (
      strVerify === '00000000000' ||
      strVerify === '11111111111' ||
      strVerify === '22222222222' ||
      strVerify === '33333333333' ||
      strVerify === '44444444444' ||
      strVerify === '55555555555' ||
      strVerify === '66666666666' ||
      strVerify === '77777777777' ||
      strVerify === '88888888888' ||
      strVerify === '99999999999'
    ) {
      return false;
    }

    let sum = 0;
    let rest;

    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(strVerify.substring(i - 1, i)) * (11 - i);

    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;

    if (rest != parseInt(strVerify.substring(9, 10))) return false;

    sum = 0;

    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(strVerify.substring(i - 1, i)) * (12 - i);

    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;

    if (rest != parseInt(strVerify.substring(10, 11))) return false;

    return true;
  } else if (strVerify.length >= 11) {
    if (
      strVerify === '00000000000000' ||
      strVerify === '11111111111111' ||
      strVerify === '22222222222222' ||
      strVerify === '33333333333333' ||
      strVerify === '44444444444444' ||
      strVerify === '55555555555555' ||
      strVerify === '66666666666666' ||
      strVerify === '77777777777777' ||
      strVerify === '88888888888888' ||
      strVerify === '99999999999999'
    ) {
      return false;
    }

    let size = strVerify.length - 2;
    let number = strVerify.substring(0, size);
    const digits = strVerify.substring(size);
    let sum = 0;
    let pos = size - 7;
    for (let i = size; i >= 1; i--) {
      sum += parseInt(number.charAt(size - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(0))) return false;
    size = size + 1;
    number = strVerify.substring(0, size);
    sum = 0;
    pos = size - 7;
    for (let i = size; i >= 1; i--) {
      sum += parseInt(number.charAt(size - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result != parseInt(digits.charAt(1))) return false;
    return true;
  }

  return false;
}
