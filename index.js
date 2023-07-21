 // JavaScript code
 document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Perform form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // Perform further processing (e.g., send data to server, display success message, etc.)
    alert('Form submitted successfully');
    document.getElementById('contact-form').reset();
  });