const mail = document.querySelector("#email");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zipcode");
const password = document.querySelector("#password");
const confirmation = document.querySelector("#confirmation");
const submit = document.querySelector("#submit");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");
const p6 = document.querySelector("#p6");

function addRed(item){
    item.removeAttribute('class');
    item.classList.add('red');
}

function addGreen(item) {
    item.removeAttribute('class');
    item.classList.add('green');
}

function mailValidation() {
    if (!mail.checkValidity()){
        addRed(mail);
        p1.innerHTML = 'Valid mail = forexample@ourearth.com';
    } else {
        addGreen(mail);
        p1.innerHTML = '';
        return true;
    }
}

function countryValidation(){
    if (!country.checkValidity()){
        addRed(country);
        p2.innerHTML = country.validationMessage;
    } else {
        addGreen(country);
        p2.innerHTML = '';
        return true;
    }
}

function zipCodeValidation(){
    if (!zipCode.checkValidity()){
        addRed(zipCode);
        p3.innerHTML = 'Valid Zip-Code example = 45011'
    } else {
        addGreen(zipCode);
        p3.innerHTML = '';
        return true;
    }
}

function passwordValidation(){
    if (!password.checkValidity()){
        addRed(password);
        p4.innerHTML = 'Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters'
    } else {
        addGreen(password);
        p4.innerHTML = '';
        return true;
    }
}

function confirmationValidation(){
    if (!confirmation.checkValidity()){
        addRed(confirmation);
        p5.innerHTML = confirmation.validationMessage;
    } else if (confirmation.value !== password.value) {
        addRed(confirmation);
        p5.innerHTML = 'Confirmation not match with password';
    } else {
        addGreen(confirmation);
        p5.innerHTML = '';
        return true;
    }
}

const submitForm = () => {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        if (mailValidation() === true && countryValidation() === true && zipCodeValidation() === true && passwordValidation() === true && confirmationValidation() === true) {
            p6.innerHTML = 'High five!'
        } else {
            p6.innerHTML = 'Please fill out the form according to the given instructions.'
        }
    })
}

submitForm();