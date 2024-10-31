// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents form from refreshing the page upon submission
    
    // Get form values by element ID
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // Retrieve checked checkboxes as an array of values
    const contactMethod = Array.from(document.querySelectorAll('input[name="contactMethod"]:checked'))
                               .map(el => el.value);
                               
    const message = document.getElementById('message').value;
    const color = document.getElementById('color').value;
    const dob = document.getElementById('dob').value;
    
    // Store data in local storage for persistent saving across sessions
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('gender', gender);
    localStorage.setItem('contactMethod', JSON.stringify(contactMethod));
    localStorage.setItem('message', message);
    localStorage.setItem('color', color);
    localStorage.setItem('dob', dob);
    
    alert('Form submitted and saved to local storage!');
});

// Function to clear the form and reset local storage
function clearForm() {
    document.getElementById('contactForm').reset(); // Resets form fields
    localStorage.clear(); // Clears all data from local storage
    alert('Form cleared and local storage emptied.');
}
