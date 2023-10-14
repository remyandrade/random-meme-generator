const memeGeneratorBtn = document.getElementById('meme-generator');
const memeTitle = document.getElementById('meme-title');
const memeImg = document.getElementById('meme-img');
const memeAuthor = document.getElementById('meme-author');
const MEME_API_URL = "https://meme-api.com/gimme/wholesomememes";

const updateData = (title, imgURL, author) => {
    memeTitle.innerHTML = title;
    memeImg.setAttribute("src", imgURL);
    memeAuthor.innerHTML = `Author: ${author}`;
}

const generateMeme = () => {
    const mainDisplay = document.querySelector('.main');
    mainDisplay.classList.add('memeGenerated');

    fetch(MEME_API_URL)
        .then((res) => 
            res.json().then(data => {
                updateData(data.title, data.url, data.author);
            })
        );
}

memeGeneratorBtn.addEventListener("click", generateMeme);
