const jokes = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');


btn.addEventListener('click', function(){
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single&idRange=0-319")
    .then(response => response.json())
    .then(data => {
        jokes.innerHTML = data.joke;
    })
})