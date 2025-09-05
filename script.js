document.addEventListener('DOMContentLoaded', function () {
    // Buy Now demo
    const buyButtons = document.querySelectorAll('.buy-now');
    buyButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            alert('This is a demo. No real purchase will be made!');
        });
    });

    // Sell form demo
    const sellForm = document.querySelector('#sell form');
    if (sellForm) {
        sellForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Thanks for listing your item! (This is a demo)');
            sellForm.reset();
        });
    }

    // Login form demo
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Simple validation
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            if (!email || !password) {
                alert('Please enter both email and password.');
                return;
            }
            alert('Login successful! (Demo only)');
            loginForm.reset();
        });
        document.getElementById('googleLogin').onclick = function() {
            alert('Google login coming soon! (Demo only)');
        };
        document.getElementById('appleLogin').onclick = function() {
            alert('Apple login coming soon! (Demo only)');
        };
    }

    // Signup form demo
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirm = document.getElementById('signupConfirmPassword').value;
            if (!email || !password || !confirm) {
                alert('Please fill all fields.');
                return;
            }
            if (password !== confirm) {
                alert('Passwords do not match.');
                return;
            }
            alert('Signup successful! (Demo only)');
            signupForm.reset();
        });
        document.getElementById('googleSignup').onclick = function() {
            alert('Google signup coming soon! (Demo only)');
        };
        document.getElementById('appleSignup').onclick = function() {
            alert('Apple signup coming soon! (Demo only)');
        };
    }
});
