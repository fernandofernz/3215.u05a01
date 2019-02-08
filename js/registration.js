
function validate() {
    "use strict";

   //Declare variables
    var userName,
        password,
        passwordVerify,
        firstName,
        lastName,
        email,
        phoneNumber,
        userNameError = false,          //variables used to notify fields with errors
        passwordError = false,
        passwordVerifyError = false,
        firstNameError = false,
        lastNameError = false,
        emailError = false,
        phoneNumberError = false;
        
    
    //Fill varibles 
    userName = document.getElementById('userName').value;
    password = document.getElementById('password').value;
    passwordVerify = document.getElementById('passwordVerify').value;
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    email = document.getElementById('email').value;
    phoneNumber = document.getElementById('phoneNumber').value;

    
    //Clear all warning labels 
    document.getElementById("userNameWarning").innerHTML = "";
    document.getElementById("passwordWarning").innerHTML = "";
    document.getElementById("passwordVerifyWarning").innerHTML = "";
    document.getElementById("firstNameWarning").innerHTML = "";
    document.getElementById("hostNameWarning").innerHTML = "";
    document.getElementById("emailWarning").innerHTML = "";
    document.getElementById("phoneNumberWarning").innerHTML = "";
    
    
    //Data verification logic

    //UserName verification
    var lettersNumbers = /^[0-9a-zA-Z]+$/;
    var letters = /^[A-Za-z]+$/;
    var emailValues = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneValues = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (userName === "") {
        document.getElementById("userNameWarning").innerHTML = " *Please provide a username!";
        userNameError = true;
    } else if (!userName.match(lettersNumbers)) {
        document.getElementById("userNameWarning").innerHTML = " *Please input alphanumeric characters only!";
        userNameError = true;
    }
    
    //Password verification
    if (password === "") {
        document.getElementById("passwordWarning").innerHTML = " *Please provide a password!";
        passwordError = true;
    } else if (password.length < 8) {
        document.getElementById("passwordWarning").innerHTML = " *Password length must be 8 or more characters!";
        passwordError = true;
    }
    
    //passwordVerify verification
    if (passwordVerify === "") {
        document.getElementById("passwordVerifyWarning").innerHTML = " *Please provide a password!";
        passwordVerifyError = true;

    } else if (passwordVerify !== password) {
        document.getElementById("passwordVerifyWarning").innerHTML = " *Password must match!";
        passwordVerifyError = true;
    }
    
    //firstName verification
    if (firstName === "") {
        document.getElementById("firstNameWarning").innerHTML = " *Please provide a first name!";
        firstNameError = true;
    } else if (!firstName.match(letters)) {
        document.getElementById("firstNameWarning").innerHTML = " *Field must be only characters!";
        firstNameError = true;
    }
    
    //lastName verification
    if (lastName === "") {
        document.getElementById("hostNameWarning").innerHTML = " *Please provide a last name!";
        lastNameError = true;
    } else if (!lastName.match(letters)) {
        document.getElementById("hostNameWarning").innerHTML = " *Field must be only characters!";
        lastNameError = true;
    }
    
    //email verification
    if (email === "") {
        document.getElementById("emailWarning").innerHTML = " *Please provide an email!";
        emailError = true;
    } else if (emailValues.test(email) === false) {
        document.getElementById("emailWarning").innerHTML = " *Please input a valid email!";
        emailError = true;
    }
    
    //phoneNumber verification
    if (phoneNumber === "") {
        document.getElementById("phoneNumberWarning").innerHTML = " *Please provide a phone number!";
        phoneNumberError = true;
    } else if (phoneValues.test(phoneNumber) === false) {
        document.getElementById("phoneNumberWarning").innerHTML = " *Please input a valid phone number!";
        phoneNumberError = true;
    }
    
    //Set cursor
    if (userNameError === true) {
        document.getElementById('userName').focus();
        return false;

    } else if (passwordError === true) {
        document.getElementById('password').focus();
        return false;

    } else if (passwordVerifyError === true) {
        document.getElementById('passwordVerify').focus();
        return false;

    } else if (firstNameError === true) {
        document.getElementById('firstName').focus();
        return false;

    } else if (lastNameError === true) {
        document.getElementById('lastName').focus();
        return false;

    } else if (emailError === true) {
        document.getElementById('email').focus();
        return false;

    } else if (phoneNumberError === true) {
        document.getElementById('phoneNumber').focus();
        return false;

    }
    
}