let outputScreenElement = document.getElementById("outputScreen");
function display(num){
    outputScreenElement.value += num;
}
function Calculate(){
    try{
        outputScreenElement.value = eval(outputScreenElement.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function Clear(){
    outputScreenElement.value = "";
}
function del(){
    outputScreenElement.value = outputScreenElement.value.slice(0,-1);
}