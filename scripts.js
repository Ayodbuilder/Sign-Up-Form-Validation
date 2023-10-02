function validateForm() {
    const firstName = document.getElementById("name1");
    const lastName = document.getElementById("name2");
    const email = document.getElementById("email1");
    const password = document.getElementById("password1");
    const errorMessage1 = document.getElementById("errorMessage1");
    const errorMessage2 = document.getElementById("errorMessage2");
    const errorMessage3 = document.getElementById("errorMessage3");
    const errorMessage4 = document.getElementById("errorMessage4");
    // i wanted to display my error icon underneath
    // my error message but i did not get it...
    // const erroricon = document.getElementById("#erroricon1");
// 
    // erroricon1 = document.querySelector(erroricon)


    const thanks = document.getElementById("thanks");
    const form = document.getElementById("form");
    const topRight = document.querySelector(".right");


    let isValid = true;
    
  
    function hideErrorMessage(input, errorMessage,) {
      input.addEventListener("input", function () {
        errorMessage.style.display = "none";
      });
    }

  
    if (firstName.value === "") {
      errorMessage1.style.display = "block";
      hideErrorMessage(firstName, errorMessage1);
      isValid = false;
    } else {
      errorMessage1.style.display = "none";
    }
    if (lastName.value === "") {
      errorMessage2.style.display = "block";
      hideErrorMessage(firstName, errorMessage2);
      isValid = false;
    } else {
      errorMessage2.style.display = "none";
    }
    if (email.value === "") {
      errorMessage3.style.display = "block";
      hideErrorMessage(firstName, errorMessage3);
      isValid = false;
    } else {
      errorMessage3.style.display = "none";
    }
    if (password.value === "") {
      errorMessage4.style.display = "block";
      hideErrorMessage(firstName, errorMessage4);
      isValid = false;
    } else {
      errorMessage4.style.display = "none";
    }
  
    if (isValid) {
      thanks.style.display = "block";
      form.style.display = "none";
      topRight.style.display = "none";
    }
}