function subt() {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    if(!(a))
    {
        return;
    }
    document.getElementById("ans").value = a - b;
    document.getElementById("history").value += a + " - " + b + " = " + (a - b) + "\n";
}
function clean() {
    document.getElementById("num1").value='';
    document.getElementById("num2").value='';
    document.getElementById("ans").value = '';
    document.getElementById("history").value='';
    return;
}