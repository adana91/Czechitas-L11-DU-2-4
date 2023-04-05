console.log('Funguju')

const headline = document.querySelector('h1')
const kameny = document.querySelectorAll('.kamen')

const playTone = (event) => {
    const tone = event.textContent
    headline.textContent = tone
 
    const music = new Audio(`tony/${tone}.mp3`)
    music.play()
}

const pressKey = (event2) => {
    playTone(event2.target)
}

for (let i = 0; i < kameny.length; i++) {
    kameny[i].addEventListener('click', pressKey)
}

