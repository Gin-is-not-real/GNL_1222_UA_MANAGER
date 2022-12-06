/////////////////////////////////////////////////
// VARIABLES
// let formConnection = document.querySelector('#UA-connection');
// let formRegister = document.querySelector('#UA-register');

let submitConnection = document.querySelector('#UA-connection input[type=submit]');
let submitRegister = document.querySelector('#UA-register input[type=submit]');



/////////////////////////////////////////////////
// MAIN

// at first, change submit elements type for button for bypass the form submition
submitConnection.type = "button";
submitRegister.type = "button";




/////////////////////////////////////////////////
// FUNCTIONS


function UAValidInputs(form) {
    // get only inputs of the activated form
    let inpUsername = document.querySelector('#' + form.id + ' input[name=username]');
    let inpEmail = document.querySelector('#' + form.id + ' input[name=email]');
    let inpPassword = document.querySelector('#' + form.id + ' input[name=password]');
    let inpRPassword = document.querySelector('#' + form.id + ' input[name=r-password]');

    let eltNotice = document.querySelector('#' + form.id + ' .notice');
    
    let errors = [];
    

    // USERNAME
    // check if exist
    if(inpUsername !== null) {
        // get this value
        let username = inpUsername.value;
        inpUsername.isValid = false;

        
        // check if filled
        if(username === '') {
            errors['username'] = "username is required"; 

        }
        else {
            // check for pattern 
            let patternUsername = /^[a-zA-Z0-9- ]*$/.test(username);

            // return errors 
            if(!patternUsername || username.length < 2 || username.length > 30) {
                errors['username'] = "username must be between 2 and 30 characters in length and not include symbols";

            }

        }
    }


    // EMAIL
    if(inpEmail !== null) {
        let email = inpEmail.value;

        if(email === '') {
            errors['email'] = "email is required"; 

        }
        else {
            let patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

            if(!patternEmail) {
                errors['email'] = "invalid email format";

            }

        }
    }


    // PASSWORD
    if(inpPassword !== null) {
        let password = inpPassword.value;

        if(password === '') {
            errors['password'] = "password is required"; 

        }
        else {
            // Validate password strength
            let testUppercase = /@[A-Z]@/.test(password);
            let testLowercase = /@[a-z]@/.test(password);
            let testNumber    = /@[0-9]@/.test(password);
            let testSpecialChars = /@[^\w]@/.test(password);

            if(!testUppercase || !testLowercase || !testNumber || !testSpecialChars) {
                errors['password'] = 'password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character.';

            }

        }


        // REAPEAT PASSWORD 
        if(inpRPassword !== null) {
            let RPassword = inpRPassword.value;

            if(RPassword === '') {
                errors['Rpassword'] = "repeat password is required";

            }
            else {
                if(RPassword !== inpPassword.value) {
                    errors['Rpassword'] = 'passwords must be identical.';
                }
            }
        }
    }


    console.log(errors);
    return errors;
}



/**
 * Revert element type for submit and active it
 * @param {HTMLSubmitElement} submitElt 
 */
function UAFormSubmit(submitElt) {
    submitElt.type ="submit";
    submitElt.click();
}



/////////////////////////////////////////////////
// EVENTS

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