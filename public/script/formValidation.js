/////////////////////////////////////////////////
// VARIABLES
let submitConnection = document.querySelector('#UA-connection input[type=submit]');
let submitRegister = document.querySelector('#UA-register input[type=submit]');


// let connectionInputs = {
//     username: document.querySelector('#UA-connection input[name=username]'),
//     password: document.querySelector('#UA-connection input[name=password]')
// };
let registerInputs = {
    username: document.querySelector('#UA-register input[name=username]'),
    password: document.querySelector('#UA-register input[name=password]'),
    email: document.querySelector('#UA-register input[name=email]'),
    repeat: document.querySelector('#UA-register input[name=r-password]')
};


/////////////////////////////////////////////////
// MAIN

// at first, change submit elements type for button for bypass the form submition
// submitConnection.type = "button";
submitRegister.type = "button";



/////////////////////////////////////////////////
// FUNCTIONS

function UAFormValid(form) {
    let inputs = form.querySelectorAll('input');
    let error;


    inputs.forEach(input => {
        if(!input.classList.contains('valid')) {
            input.classList.add('invalid');
            error = true;
        }
    });


    if(!error) {
        UAFormSubmit(form);
    }
}


/**
 * Revert element type for submit and active it
 * @param {HTMLSubmitElement} submitElt 
 */
function UAFormSubmit(form) {
    let submit = form.closest('input[type=submit');
    submit.type ="submit";
    submit.click();
}


/**
 * 
 * @param {*} input 
 * @returns 
 */
function getAssociateNoticeElt(input) {
    let parentFormId = input.closest('form').id;

    return document.querySelector('#' + parentFormId + ' .notice');
}


// inputs handler

/**
 * 
 * @param {*} input 
 */
function usernameInputHandler(input) {
    let username = input.value;
    let noticeElt = getAssociateNoticeElt(input);
    let error;

    if(username === '') {
        error = "username is required";

    }
    else {
        // check for pattern 
        let patternUsername = /^[a-zA-Z0-9- ]*$/.test(username);

        // return errors 
        if(!patternUsername || username.length < 2 || username.length > 30) {
            error = "username must be between 2 and 30 characters in length and not include symbols";

        }

    }


    if(error === undefined) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.add('invalid');
        input.classList.remove('valid'); 

    }

    noticeElt.textContent = error;
}


/**
 * 
 * @param {HTMLInputElement} input 
 */
function passwordInputHandler(input) {
    let password = input.value;
    let noticeElt = getAssociateNoticeElt(input);
    let error;

    if(password === '') {
        error = "password is required";

    }
    else {
        // Validate password strength
        let passUppercase = /[A-Z]/.test(password);
        let passLowercase = /[a-z]/.test(password);
        let passNumber    = /[0-9]/.test(password);
        let passSpecialChars = /[^\w]/.test(password);

        // return errors 
        if(!passUppercase || !passLowercase || !passNumber || !passSpecialChars || password.length < 8) {
            error = 'password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character';

        }

    }


    if(error === undefined) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.add('invalid');
        input.classList.remove('valid'); 

    }

    noticeElt.textContent = error;
}



/**
 * 
 * @param {HTMLInputElement} input 
 */
 function repeatInputHandler(input) {
    let repeat = input.value;
    let noticeElt = getAssociateNoticeElt(input);
    let error;

    if(repeat === '') {
        error = "repeat password is required";

    }
    else {
        // return errors 
        if(repeat !== registerInputs['password'].value) {
            error = 'passwords must be identical';
        }

    }


    if(error === undefined) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.add('invalid');
        input.classList.remove('valid'); 

    }

    noticeElt.textContent = error;
}
/////////////////////////////////////////////////
// EVENTS

registerInputs['username'].addEventListener('input', function(e) {
    usernameInputHandler(e.target);
})
registerInputs['password'].addEventListener('input', function(e) {
    passwordInputHandler(e.target);
})
registerInputs['repeat'].addEventListener('input', function(e) {
    repeatInputHandler(e.target);
})



submitConnection.addEventListener('click', function(e) {
    // acces to the submit parent form
    // UAValidInputs(this.closest('form'));
})

submitRegister.addEventListener('click', function(e) {
    // acces to submit parent form
    UAFormValid(this.closest('form'));
})