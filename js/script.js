//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp
//https://regex101.com/r/bL0Nfv/2/

const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');

console.log(inputs);

const patterns = {
    firstname: /^[a-zA-Z]{3,5}$/,
    lastname: /[a-z]/,
    email: /[a-z]/,
    password: /^[\w@-]{8,20}$/,
    telephone: /^[0-9]{3}[ -][0-9]{3}[ -][0-9]{4}$/,
    bio:/^[a-zA-Z]{$/
};

inputs.forEach(element => {
    element.addEventListener('input', e => {
        formValidator(e.target, patterns[e.target.name]);
    });
});

const formValidator = (element, pattern) => {
    if (pattern.test(element.value)) {
        element.className = 'valid';
        button.className = 'submit-button';
        button.disabled = false;
    } else {
        element.className = 'invalid';
        button.classList.remove('submit-button');
        button.disabled = true;
    }
};

