const firstPage = document.getElementById("container");
const secondPage= document.getElementById("submit");
function isEmailValid(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const invalid = document.getElementById("invalid");
   


    if (isEmailValid(email)) {
        firstPage.style.display = "none";
        secondPage.style.display = "flex";
        console.log('Email is valid.');


        // Additional logic for a valid email (e.g., form submission)
      } else {

        console.log("error")
        emailInput.style.border = "1px solid red";
        emailInput.style.backgroundColor = "#ffe8e6";
     
        emailInput.style.color = "hsl(4, 100%, 67%)";
        invalid.style.display = "flex";
       
      }
}
    function dismissEmail(){
        firstPage.style.display = "flex";
        secondPage.style.display = "none";

        
    }