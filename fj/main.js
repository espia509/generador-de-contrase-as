const gop = document.getElementById("lot");
const pass_gen = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#$%&/=?@";


function passGeneret(length = 9){
    
    let result = "";
    for (let i = 0; i <= length; i++) {
        result += pass_gen.charAt(Math.floor(Math.random() * pass_gen.length))
     }
    return result;
}

document.getElementById('btn1').onclick = function(){
    gop.innerHTML=passGeneret();
}
