// JavaScript for subscription form
document.getElementById('subscription-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const email = document.getElementById('email').value;

    if (firstName && email) {
        alert(`Thank you, ${firstName}! You've successfully subscribed to our newsletter.`);
        document.getElementById('subscription-form').reset();
    }
});
