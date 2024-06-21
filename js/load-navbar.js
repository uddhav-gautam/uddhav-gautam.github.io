// load-navbar.js

// Function to load the navbar
function loadNavbar() {
    fetch('/html/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        })
        .catch(error => console.error('Error loading the navbar:', error));
}

// Call the function to load the navbar
document.addEventListener('DOMContentLoaded', loadNavbar);
