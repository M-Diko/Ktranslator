// JavaScript code (optional) for form submission and other interactions
// For this example, we'll show an alert when the form is submitted
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const Input = document.getElementById("message").value;
    const apiKey = '*****';


    if (Input === '') {
        alert('Enter english phrase to translate');
    }else{
        //document.getElementById('translated').value = 'Translating...'
        

    // Make a GET request to the Yandex Translate API
    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${encodeURIComponent(Input)}&lang=en-ko`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.text && data.text.length > 0) {
            document.getElementById('translated').value = data.text[0];
        } else {
            document.getElementById('translated').value = 'Error occurred while translating.....';
            alert('For the web version, there is no translation, as code will requre my Translation Service API Key, I cannot publish that obviously because of security reasons. I am doing these small projects just to demonstrate skills to potential employers, as well as for my personal development.');
        }
    })
    .catch(error => {
        document.getElementById('translated').value = 'Error occurred while translating.';
    });
    }

        
});

 // Simulate a delay of 5 seconds before showing the content
 setTimeout(function() {
    document.getElementById('content').style.display = 'block';
    document.querySelector('.loader-container').style.display = 'none';
}, 3000);




