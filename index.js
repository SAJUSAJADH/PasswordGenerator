const lengthSlider = document.querySelector("#range");
options = document.querySelectorAll(".op input");
copyIcon = document.querySelector(".inputt span");
passwordInput =document.querySelector("#text");
generateBtn = document.querySelector(".btns");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers:   "0123456789",
    symbols: "@#$%^&|()[]{},.:;<>_+/*-?!~-"
}

const generatePassword = ()=>{
    let staticPassword = "",
    randomPassword = "",
    passLength = lengthSlider.value;

    options.forEach(option =>{
       if(option.checked){
            staticPassword += characters[option.id];
       } 
    });
    for(let i=0;i<passLength;i++){
        randomPassword += staticPassword[Math.floor(Math.random()*staticPassword.length)];
    }

    passwordInput.value = randomPassword;
}

const updateSlider = ()=>{
   document.querySelector("#rnm").innerText = lengthSlider.value;
   generatePassword();
}

updateSlider();

const copy = ()=>{
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.innerText = "check";
    setTimeout(() => {
        copyIcon.innerText = "copy_all";
    }, 1500);
}
copyIcon.addEventListener("click", copy);
lengthSlider.addEventListener("input",updateSlider);
generateBtn.addEventListener("click", generatePassword);