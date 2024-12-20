const displayScreen = document.getElementById("displayScreen");

function AppendToDisplay(value) {
    displayScreen.value += value;
}
function CalculateTheDisplay() {
    try {
        console.log("works");
        displayScreen.value = eval(displayScreen.value);
        

    }catch (error)
    {
        displayScreen.value= "Error";
    }
    
}
function ClearTheDisplay() {
    displayScreen.value = "";
}