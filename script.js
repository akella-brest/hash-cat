function openContactForm() {
    document.getElementById('contact-form').setAttribute('style', 'display: flex;');
    document.getElementById('blackout-wrapper').setAttribute('style', 'display: block;');
}

function closeContactForm() {
    document.getElementById('contact-form').setAttribute('style', 'display: none;');
    document.getElementById('blackout-wrapper').setAttribute('style', 'display: none;');
}

(function($) {
    $(document).ready(function () {
        $('.myform').on('submit', function () {
    
            // Add text 'loading...' right after clicking on the submit button. 
            $('.output_message').text('Loading...');
    
            var form = $(this);
            $.ajax({
                type: 'POST',
                url: "email.php",
                method: form.attr('method'),
                data: form.serialize(),
                success: function (result) {
                    console.log(result);
                    if (result == 'success') {
                        $('.output_message').text('Message Sent!');
                    } else {
                        $('.output_message').text('Error Sending email!');
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
    
            // Prevents default submission of the form after clicking on the submit button. 
            return false;
        });
    });
})(jQuery);