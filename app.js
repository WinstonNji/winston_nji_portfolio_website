function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const emailSubject = `Message from ${name}`;
        const emailBody = `Name: ${name}%0AEmail: ${email}%0A%0AMessage: ${message}`;
        const emailAddress = "winston00russel@gmail.com";
        window.open(`mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`, '_self');
    } else {
        alert("Please fill in all the fields.");
    }
}