//Accessing the dom
const colorBtn = document.getElementById("colorBtn");
const textBtn = document.getElementById("textBtn");
const title = document.getElementById("mainTitle");
const input = document.getElementById("fName");
const display = document.getElementById("randomText");

//onclick event
textBtn.addEventListener("click", ()=> {
    const title = document.getElementById("mainTitle");
    title.textContent = "I have learnt javascript and it is super wooooow!!";
});

//onclick event
colorBtn.onclick = function(){
    const title = document.getElementById("mainTitle");
    title.style.color = "green";
};

//onmouseover hover
title.onmouseover = () => {
    title.style.color = "yellow";
};

//onmouseout hover
title.onmouseout = () => {
    title.style.color = "white";
};

//onchange event
input.onchange = () => {
display.textContent = `Hello ${input.value}!`
};


const validateForm = () => {
    const form = document.getElementById('my-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById("password")
    const feedback = document.getElementById('feedback');

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        let valid = true;
        feedback.textContent = '';

        if(!emailInput.value){
            valid = false;
            feedback.textContent += "Email is required.\n";
        }

        // Email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value && !emailPattern.test(emailInput.value)) {
            valid = false;
            feedback.textContent += 'Invalid email format.\n';
        }

        // Password rules
        if (passwordInput.value.length < 8) {
            valid = false;
            feedback.textContent += 'Password must be at least 8 characters long.\n';
        }

        if (valid) {
            feedback.textContent = 'Form submitted successfully!';
        }
    });

    emailInput.addEventListener('input', () => {
        if (emailPattern.test(emailInput.value)) {
            emailInput.style.borderColor = 'green';
        } else {
            emailInput.style.borderColor = 'red';
        }
    });

    passwordInput.addEventListener("input", () =>{
        if(passwordInput.value.length < 8){
            passwordInput.style.borderColor = "red";
        }
        else{
            passwordInput.style.borderColor = "green";
        }
    });
};

validateForm();