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
    let inptUsername = document.querySelectorAll('#' + form.id + ' input[name=username]');
    let inpEmail = document.querySelectorAll('#' + form.id + ' input[name=username]');
    let inptPassword = document.querySelectorAll('#' + form.id + ' input[name=username]');
    let inptRPassword = document.querySelectorAll('#' + form.id + ' input[name=username]');

    console.log(inptUsername);
    

    $errors = [];
    


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

    // acces to submit parent form
    UAValidInputs(this.closest('form'));
})

submitRegister.addEventListener('click', function(e) {
    console.log('register');

    // acces to submit parent form
    UAValidInputs(this.closest('form'));
})