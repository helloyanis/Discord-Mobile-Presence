document.onload = () => {
    document.querySelector('#download-app').addEventListener('click', () => {
        window.open('https://www.example.com');
    });
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('param')) {
            document.querySelector('#authentication-success').classList.remove('hidden');
        }
    }
    
