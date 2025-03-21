let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');
let message = document.getElementById('message');
let str = document.getElementById("str")
eyeicon.onclick = function () {
    if (password.type == 'password') {
        password.type = 'text'
        eyeicon.src = 'eye-open.png'
    } else {
        password.type = 'password'
        eyeicon.src = 'eye-close.png'
    }
}

password.addEventListener("input", () => {
    if (password.value.length > 0) {
        message.style.display = 'block'
    } else {
        message.style.display = 'none'
    }
    if(password.value.length > 0 && password.value.length < 4){
        str.innerHTML = "Weak"
        message.style.color="#ff5925"
    }else if(password.value.length>=4 && password.value.length<8){
        str.innerHTML="Medium"
        message.style.color="yellow"
    }else if(password.value.length>8){
        str.innerHTML="Strong"
        message.style.color="green"
    }
})