// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isPhoneNumber tests
test('valid phone without ()', () => {
    expect(isPhoneNumber('619-317-9890')).toBe(true);
});
test('valid phone with ()', () => {
    expect(isPhoneNumber('(983)-317-9890')).toBe(true);
});
test('98-92-3231', () => {
    expect(isPhoneNumber('98-92-3231')).toBe(false);
});
test('6', () => {
    expect(isPhoneNumber('6')).toBe(false);
});

//isEmail tests
test('valid email', () => {
    expect(isEmail('alpha123@test.com')).toBe(true);
});
test('valid email', () => {
    expect(isEmail('user_name@mydomain.org')).toBe(true);
});
test('. before @ fails', () => {
    expect(isEmail('user.name@test.com')).toBe(false);
});
test('tld < 2 letters fails', () => {
    expect(isEmail('hello@domain.c')).toBe(false);
});

//isStrongPasswordtests
test('meets criteria', () => {
    expect(isStrongPassword('abcd123_')).toBe(true);
});
test('meets criteria', () => {
    expect(isStrongPassword('abcd123_abcd123')).toBe(true);
});
test('first char is not letter fails', () => {
    expect(isStrongPassword('1_abcdef2')).toBe(false);
});
test('over 15 length fails', () => {
    expect(isStrongPassword('abcdefghijkl1234')).toBe(false);
});

//isDatetests
test('valid date X = 1', () => {
    expect(isDate('1/2/2003')).toBe(true);
});
test('valid date X = 2', () => {
    expect(isDate('12/12/2003')).toBe(true);
});
test('X=3 fails', () => {
    expect(isDate('001/3/2003')).toBe(false);
});
test('Y != 3 fails', () => {
    expect(isDate('12/12/03')).toBe(false);
});

//isHexColors
test('valid hex starting with #', () => {
    expect(isHexColor('#1A2')).toBe(true);
});
test('valid hex of length 6', () => {
    expect(isHexColor('FF5733')).toBe(true);
});
test('invalid hex char G fails', () => {
    expect(isHexColor('12G')).toBe(false);
});
test('length 5 fails', () => {
    expect(isHexColor('12345')).toBe(false);
});