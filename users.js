// Function to display error messages
function displayError(inputElement, errorMessage) {
    const errorElement = document.getElementById(`${inputElement.id}Error`);
    errorElement.textContent = errorMessage;
  }
  
  // Function to clear all error messages
  function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    for (const errorElement of errorElements) {
      errorElement.textContent = '';
    }
  }
  
  // Function to validate the form data
  function validate(formData) {
    const errors = [];
  
    for (const [field, value] of formData.entries()) {
      if (value.trim() === '') {
        errors.push({ field, message: 'This field is required.' });
      }
    }
  
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
  
    if (password !== confirmPassword) {
      errors.push({ field: 'confirmPassword', message: 'Passwords do not match.' });
    }
  
    return {
      isValid: errors.length === 0,
      errors,
    };
  }
  
  // Function to handle form submission
  function onSubmit(event) {
    event.preventDefault();
    clearErrors();
  
    const form = event.target;
    const formData = new FormData(form);
    const validationResult = validate(formData);
  
    if (validationResult.isValid) {
      alert('Registration successful!');
      form.reset();
    } else {
      validationResult.errors.forEach(error => {
        const inputElement = form.querySelector(`[name="${error.field}"]`);
        displayError(inputElement, error.message);
      });
    }
  }
  
  // Initialize form validation for the 'registrationForm'
  const registrationForm = document.getElementById('registrationForm');
  registrationForm.addEventListener('submit', onSubmit);
  