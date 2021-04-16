const text = '"Hello! Dear Viewers, thank you for visiting our site. we appreciate it." Yours, Martin Sichibeya.....';
const textDisplay = document.querySelector('.text');

let index = 0;

setInterval(() => {
    textDisplay.innerHTML = text.slice(0, index);
    index++;
    if (index > text.length - 1) {
        index = 0;
    }
}, 130);