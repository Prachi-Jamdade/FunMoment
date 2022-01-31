const jokeElement = document.getElementById('jokeElement');
const nextBtn = document.getElementById('next');

function fetchJoke() {
    fetch('https://icanhazdadjoke.com/slack')
        .then(data => data.json())
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            jokeElement.innerHTML = jokeText;
        })
}


fetchJoke();

nextBtn.addEventListener('click', () => {
    jokeElement.innerHTML = "Loading...";
    fetchJoke();
})
