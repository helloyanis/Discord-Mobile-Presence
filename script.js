document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector('#download-app').addEventListener('click', () => {
        window.open('https://www.example.com');
    });
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('code') || urlParams.has('error')) {
        alert('Authentication successful');
        document.querySelector('#authentication-success').classList.remove('hidden');
    }
});
    
