let screen = document.getElementById("screen");

function btnclick(value) 
{
    screen.value += value; 
}

function clearscreen() {
    screen.value = "";
    
}
function findresult() 
{
    var result =eval(screen.value)//eval(10+20)
    screen.value=result;
}