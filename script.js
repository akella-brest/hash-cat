function openContactForm() {
    document.getElementById('contact-form').setAttribute('style', 'display: flex;');
    document.getElementById('blackout-wrapper').setAttribute('style', 'display: block;');
}

function closeContactForm() {
    document.getElementById('contact-form').setAttribute('style', 'display: none;');
    document.getElementById('blackout-wrapper').setAttribute('style', 'display: none;');
}