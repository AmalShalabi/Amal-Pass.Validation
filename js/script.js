//Store the field objects into variable
const input1 = document.getElementById("password");

const showHide = document.querySelector('.hide-show');
const char_8 = document.querySelector('.char_8');
const Eng_char = document.querySelector('.Eng_char');
const Uappercase = document.querySelector('.Uappercase');
const Lowercase = document.querySelector('.Lowercase');
const Symbol = document.querySelector('.Symbol');
const threeNumbers = document.querySelector('.threeNumbers');

//now  time to check the entered value by an arrow function 
input1.addEventListener('input', () => {
    const pass = input1.value;

    ///now the  conditions part to check the strength of the password 

    //1 Validate length
    if (pass.length > 8) {
        char_8.classList.add('item__active');
    } else {
        char_8.classList.remove('item__active');
    }
    //2  numbers chars and symbols regex-ENG LETTERS
    var letters = /[^A-Za-z0-9]+/;
    if (pass.match(letters)) {
        Eng_char.classList.add('item__active')
    } else {
        Eng_char.classList.remove('item__active');
    }
    //3 Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (pass.match(upperCaseLetters)) {
        Uappercase.classList.add("item__active");
    } else {
        Uappercase.classList.remove("item__active");
    }

    //4 Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (pass.match(lowerCaseLetters)) {
        Lowercase.classList.add("item__active");
    } else {
        Lowercase.classList.remove("item__active");
    }

    //5 Validate  symbol
    if (/[^A-Za-z0-9]/.test(pass)) {
        Symbol.classList.add('item__active')
    } else {
        Symbol.classList.remove('item__active');
    }


    //6 Check for sequential numerical characters

    if (/(012|123|234|345|456|567|678|789|890|901)/.test(pass)) {
        threeNumbers.classList.remove('item__active');

    } else {
        threeNumbers.classList.add('item__active');
    }



})
// to show/hide the pass 2 the user while entering the password
showHide.addEventListener('click', () => {

    if (input1.type === 'password') {
        input1.type = "text";
        showHide.textContent = 'hide'
    } else {
        input1.type = "password"
        showHide.textContent = 'show'
    }

});