//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp
//https://regex101.com/r/bL0Nfv/2/

const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');

console.log(inputs);

const patterns = {
    firstname: {
        pattern: /^[A-Z][a-z]{3,12}$/,
        valid: false,
    },
    lastname: {
        pattern: /^[A-Z][a-z]{3,12}$/,
        valid: false,
    },
    email: {
        pattern: /^([a-z\d\.-]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        valid: false,
    },
    password: {
        pattern: /^[\w@-]{8,20}$/,
        valid: false,
    },
    telephone: {
        pattern: /^[0-9]{3}[ -][0-9]{3}[ -][0-9]{4}$/,
        valid: false,
    },
    bio: {
        pattern: /^[a-zA-Z \.]{10,100}$/,
        valid: false,
    },
};


const patterns = {
    firstname: {
        pattern: /^[A-Z][a-z]{3,12}$/,
        valid: false,
    },
    lastname: {
        pattern: /^[A-Z][a-z]{3,12}$/,
        valid: false,
    },
    email: {
        pattern: /^([a-z\d\.-]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        valid: false,
    },
    password: {
        pattern: /^[\w@-]{8,20}$/,
        valid: false,
    },
    telephone: {
        pattern: /^[0-9]{3}[ -][0-9]{3}[ -][0-9]{4}$/,
        valid: false,
    },
    bio: {
        pattern: /^[a-zA-Z \.]{10,100}$/,
        valid: false,
    },
};

inputs.forEach(element => {
    let name;
    let pattern;
    element.addEventListener('input', e => {
        name = e.target.name;
        pattern = patterns[name]['pattern'];

        formValidator(e.target, pattern);
        if (formValidator(e.target, pattern)) {
            checker = formValidator(e.target, pattern);
            element.className = 'valid';
            patterns[name]['valid'] = true;

            const validValues = patterns.values();
            console.log(validValues)



            if (count === 6) {
                button.disabled = false;
                button.className = 'submit-button';
            } else {
                button.classList.remove('submit-button');
                button.disabled = true;
                button.disabled = true;
            }
        } else {
            checker = formValidator(e.target, pattern);
            patterns[name]['valid'] = true;
            console.log(checker);
            element.className = 'invalid';
        }
    });
});

const formValidator = (element, pattern) => {
    let flag;
    if (pattern.test(element.value)) {
        // element.className = 'valid';
        // button.className = 'submit-button';
        // button.disabled = false;
        flag = true;
    } else {
        // element.className = 'invalid';
        // button.classList.remove('submit-button');
        // button.disabled = true;
        flag = false;
    }

    return flag;
};
