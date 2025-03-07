
function changeImage(){
    const btn = document.getElementById('btn')
    const img = document.getElementById("im") 
    if (btn.value == 'ON') {
        btn.value = 'OFF'
        img.src = 'on.png'
        // console.log('on img');
        document.body.style.backgroundColor = 'white'
    }else{
        btn.value = 'ON',
        img.src = 'off.jpg'
        document.body.style.backgroundColor = 'black'
        // console.log('off img');
    }
}
