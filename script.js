//your JS code here. If required.
// Wait for the DOM to load
window.onload = function () {
    // Check if credentials are stored in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        // If credentials are stored, display the 'Login as existing user' button
        const existingButton = document.getElementById("existing");
        existingButton.style.display = "block";
    }

    // Event listener for "Submit" button
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const rememberMe = document.getElementById("checkbox").checked;

        // Alert for successful login
        alert(`Logged in as ${username}`);

        if (rememberMe) {
            // If Remember Me is checked, store credentials in localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            // If Remember Me is unchecked, remove saved credentials from localStorage
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        // Clear form fields
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("checkbox").checked = false;
    });

    // Event listener for "Login as existing user" button
    document.getElementById("existing").addEventListener("click", function () {
        const savedUsername = localStorage.getItem("username");
        alert(`Logged in as ${savedUsername}`);
    });
};
