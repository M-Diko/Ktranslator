// JavaScript code (optional) for form submission and other interactions
// For this example, we'll show an alert when the form is submitted
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

 // Simulate a delay of 5 seconds before showing the content
 setTimeout(function() {
    document.getElementById('content').style.display = 'block';
    document.querySelector('.loader-container').style.display = 'none';
}, 3000);