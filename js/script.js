//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp
//https://regex101.com/r/bL0Nfv/2/

const inputs = document.querySelectorAll('input');
let patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,9}$/i,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{15,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

const validator = (field, regex) => {
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
  // console.log(field);
  // console.log(regex);
  console.log(regex.test(field.value));
  regex.test(field.value);
};

console.log(inputs);
inputs.forEach(input => {
  input.addEventListener('keyup', e => {
    console.log(e.target.attributes.name.value);
    console.log(e.target);
    validator(e.target, patterns[e.target.attributes.name.value]);
  });
});

//
//let flag = 'i'
//
//let regex = new RegExp(patterns, flag);
//
//console.log(regex);

const s = new Set();
const numbers = [1,2,3,4,4,3];
numbers.forEach(x => s.add(x));

console.log(s)