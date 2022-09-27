const pass_gen = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#$%&/=?@";

function passGeneret(length = 10 || sho){
    let result = "";
    for (let i = 0; i <= length; i++) {
        result += pass_gen.charAt(Math.floor(Math.random() * pass_gen.length))
     }
    return result;
}


const sho = document.getElementById("lock");
const mos = document.getElementsByTagName("tr");

onclick = passGeneret();
onshow = passGeneret();

app.elements.namedItem('btn').addEventListener('click', passGeneret());



