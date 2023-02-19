


function mySlider() {
    document.getElementById("demo").innerHTML = "8"
    let lengthOfPass = document.getElementById("myInput").value
    document.getElementById("demo").textContent = lengthOfPass

    return lengthOfPass
}

function generatePassword() {
    let myPassword = document.getElementById("myPass")
    let myPassLength = mySlider()
    let resultOfPass = []
    let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]
    let myCharacters = []

    if (document.getElementById("upper-case").checked) {
        myCharacters = myCharacters.concat(upperCase)
    }

    if (document.getElementById("lower-case").checked) {
        myCharacters = myCharacters.concat(lowerCase)
    }

    if (document.getElementById("numbers").checked) {
        myCharacters = myCharacters.concat(numbers)
    }

    if (document.getElementById("symbols").checked) {
        myCharacters = myCharacters.concat(symbols)
    }

    if (myCharacters.length === 0){
        alert("Please select at least one feature")
    }
        
    for (i=0; i < myPassLength; i++) {
        
        var randomIndex = Math.floor((Math.random())*myCharacters.length)
        var randomElement = myCharacters[randomIndex].toString()

        resultOfPass.push(randomElement)
    }
    myPassword.value = resultOfPass.join("")
}

function copyPassword() {
    // Get the text field
   let copyText = document.getElementById("myPass");
     
    // Select the text field
    copyText.select();
   
     
    // Copy the text inside the text field
   navigator.clipboard.writeText(copyText.value);
     
   // Alert the copied text
   alert("Copied the Password: " + copyText.value);
}

