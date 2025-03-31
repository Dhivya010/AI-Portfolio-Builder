// Select the form using its ID
const form = document.getElementById('userForm');

// Add a submit event listener
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting traditionally

  // Collecting form data
  const userData = {
    name: document.getElementById('name').value,
    contact: document.getElementById('contact').value,
    email: document.getElementById('email').value,
    education: document.getElementById('education').value,
    skills: document.getElementById('skills').value,
    experience: document.getElementById('experience').value,
    achievements: document.getElementById('achievements').value
  };

  console.log('User Data:', userData);
  alert('Form submitted successfully!');
});
