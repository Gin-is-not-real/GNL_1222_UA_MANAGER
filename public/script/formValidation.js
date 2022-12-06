/////////////////////////////////////////////////
// VARIABLES
let submitConnection = document.querySelector('#UA-connection input[type=submit]');
let submitRegister = document.querySelector('#UA-register input[type=submit]');


// let connectionInputs = [
//     username = document.querySelector('#UA-connection input[name=username]'),
//     password = document.querySelector('#UA-connection input[name=password]')
// ];
let connectionInputs = {
    username: document.querySelector('#UA-connection input[name=username]'),
    password: document.querySelector('#UA-connection input[name=password]')
}
let registerInputs = [
    username = document.querySelector('#UA-register input[name=username]'),
    password = document.querySelector('#UA-register input[name=password]'),
    inpRegEmail = document.querySelector('#UA-register input[name=email]'),
    inpRegRPassword = document.querySelector('#UA-register input[name=r-password]')
];


/////////////////////////////////////////////////
// MAIN

// at first, change submit elements type for button for bypass the form submition
submitConnection.type = "button";
submitRegister.type = "button";



/////////////////////////////////////////////////
// FUNCTIONS




/**
 * Revert element type for submit and active it
 * @param {HTMLSubmitElement} submitElt 
 */
function UAFormSubmit(submitElt) {
    submitElt.type ="submit";
    submitElt.click();
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


/////////////////////////////////////////////////
// EVENTS
connectionInputs['username'].addEventListener('input', function(e) {
    usernameInputHandler(e.target);
})

submitConnection.addEventListener('click', function(e) {
    console.log('connection');

    // acces to the submit parent form
    UAValidInputs(this.closest('form'));
})

submitRegister.addEventListener('click', function(e) {
    console.log('register');

    // acces to submit parent form
    UAValidInputs(this.closest('form'));
})