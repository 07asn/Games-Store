document.addEventListener('DOMContentLoaded', function() {
    fetch("./navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch navbar');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);  // For debugging purposes, remove if not needed
            document.getElementById('navbar-placeholder').innerHTML = data;  // Use getElementById
        })
        .catch(error => console.error('Error loading navbar:', error));
});
