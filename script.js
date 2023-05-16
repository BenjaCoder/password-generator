window.onload = () => {
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    const password1 = document.querySelector("#password1");
    const password2 = document.querySelector("#password2");
    const passLengthSlider = document.querySelector("#pass-length");
    const generatePasswords = document.querySelector("#generate-passwords-btn");
    const passLengthLabel = document.querySelector("#pass-length-label");

    passLengthSlider.addEventListener("input", () => {
        passLengthLabel.textContent = `Characters: ${passLengthSlider.value}`
    })

    function getRandomCharacter() {
        let randomChar = Math.floor(Math.random() * characters.length);
        return characters[randomChar];
    }

    function generateRandomPassword() {
        let randomPassword = ""
        for (let i = 0; i < passLengthSlider.value; i++) {
            randomPassword += getRandomCharacter();
        }
        return randomPassword;
    }

    generatePasswords.addEventListener("click", () => {
        password1.textContent = generateRandomPassword();
        password2.textContent = generateRandomPassword();
    });
}