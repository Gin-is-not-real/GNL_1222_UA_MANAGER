/////////////////////////////////////////////////
// VARIABLES
let submitConnection = document.querySelector('#UA-connection input[type=submit]');
let submitRegister = document.querySelector('#UA-register input[type=submit]');



/////////////////////////////////////////////////
// MAIN

// at first, change submit elements type for button for bypass the form submition
submitConnection.type = "button";
submitRegister.type = "button";





/////////////////////////////////////////////////
// FUNCTIONS
function UAFormSubmit(submitElt) {
    submitElt.type ="submit";
    submitElt.click();
}




/////////////////////////////////////////////////
// EVENTS

submitConnection.addEventListener('click', function(e) {
    console.log('connection');

    UAFormSubmit(this);
})

submitRegister.addEventListener('click', function(e) {
    console.log('register');

    UAFormSubmit(this);
})