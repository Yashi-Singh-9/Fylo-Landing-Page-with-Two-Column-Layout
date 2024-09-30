document.addEventListener('DOMContentLoaded', () => {
  
  // Hero section form validation
  const emailForm = document.getElementById('emailForm');
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('errorMessage');

  emailForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const emailValue = emailInput.value.trim();

    // Check if email is empty
    if (emailValue === "") {
      errorMessage.innerHTML = "Please enter an email address.";
      errorMessage.style.color = "red";
      emailInput.style.border = "2px solid red";
    } 
    // Simple email validation check
    else if (!validateEmail(emailValue)) {
      errorMessage.innerHTML = "Please enter a valid email address.";
      errorMessage.style.color = "red";
      emailInput.style.border = "2px solid red";
    } 
    // If the email is valid
    else {
      errorMessage.innerHTML = "Form submitted successfully!"; 
      errorMessage.style.color = "hsl(243, 87%, 12%)";
      emailInput.style.border = "2px solid green";
    }
  });

  // CTA section form validation
  const ctaForm = document.getElementById('ctaForm');
  const ctaEmailInput = document.getElementById('ctaEmail');
  const ctaErrorMessage = document.getElementById('ctaErrorMessage');

  ctaForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const ctaEmailValue = ctaEmailInput.value.trim();

    // Check if email is empty
    if (ctaEmailValue === "") {
      ctaErrorMessage.innerHTML = "Please enter an email address.";
      ctaErrorMessage.style.color = "#fff";
      ctaEmailInput.style.border = "2px solid red";
    } 
    // Simple email validation check
    else if (!validateEmail(ctaEmailValue)) {
      ctaErrorMessage.innerHTML = "Please enter a valid email address.";
      ctaErrorMessage.style.color = "#fff";
      ctaEmailInput.style.border = "2px solid red";
    } 
    // If the email is valid
    else {
      ctaErrorMessage.innerHTML = "Form submitted successfully!"; 
      ctaErrorMessage.style.color = "#fff";
      ctaEmailInput.style.border = "2px solid green";
    }
  });

  // Email validation function (Simple RegEx pattern)
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

});
