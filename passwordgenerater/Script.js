const passwordBox = document.getElementById('password');
const length = 12;
const upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
const lowerCase='abcdefghtjklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%&'
const allChar = upperCase+lowerCase+number+symbol;
function createPassword() {
    let password="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    while(length > password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)];
    }
    passwordBox.value = password;
}

function copyPassword(params) {
    passwordBox.select();
    document.execCommand("copy");
}


const numberBox = document.getElementById('number2');
function generateNumber(params) {
    return numberBox.value = Math.floor(1000 + Math.random()*9000)
}
function copyNumber(params) {
    numberBox.select();
    document.execCommand("copy");
}