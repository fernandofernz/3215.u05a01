//FUnction to parse data from urls
function getUrlParameter(name) {
    console.log(name);
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
// function to get URL parameters
function getParameters () {
    "user strict";
    //storing userName parameter in var
    var userName = getUrlParameter('userName');
    //console.log(userName);

    //storing password parameter in var
    var password = getUrlParameter('password');
    //console.log(password);

    //storing passwordVerify parameter in var
    var passwordVerify = getUrlParameter('passwordVerify');
    //console.log(passwordVerify);

    //storing firstName parameter in var 
    var firstName = getUrlParameter('firstName');
    //console.log(firstName);

    //storing lastName parameter in var
    var lastName = getUrlParameter('lastName');
    //console.log(lastName);

    //storing email parameter in var
    var email = getUrlParameter('email');
    //console.log(email);

    //storing phoneNumber parameter in var
    var phoneNumber = getUrlParameter('phoneNumber');
    //console.log(phoneNumber);

    //storing signUpNewsletter parameter in var
    var signUpNewsletter = getUrlParameter('signUpNewsletter');
    console.log(signUpNewsletter);

     //Create cookies
     //User Name Cookie
     document.cookie = "userName=" + userName + ";";
     //Password Cookie
     document.cookie = "password=" + password + ";";
     //Verified Password Cookie
     document.cookie = "passwordVerify=" + passwordVerify + ";";
     //First Name Cookie
     document.cookie = "firstName=" + firstName + ";";
     //Last Name Cookie
     document.cookie = "lastName=" + lastName + ";";
     //Email Cookie
     document.cookie = "email=" + email + ";";
     //Phone Number Cookie
     document.cookie = "phoneNumber=" + phoneNumber + ";";
     //Sign Up Cookie
     document.cookie = "signUpNewsletter=" + signUpNewsletter + ";";
    //function call to have access to cookie object
    getCookie();
}
// function to get Cookie Data
function getCookie() {
    
    //storing cookie on a var
    var variableCookie = document.cookie;

    // target div id="variableCookie" and pass variableCookie
    document.getElementById('node-cookie').innerHTML = variableCookie;
    
}