const action = document.getElementById('action')
const output = document.getElementById('Output')
const kartinka = document.getElementById('kartinka')
const complete = document.getElementById('Complete')
const stat = document.getElementById('stat')
let feed = 1
// 1 - голодный 2 - поел 3 - обьелся
let play = 0
// 1 - не играл 2 - устал играть
let sleep = 0

complete.addEventListener('click', () => {

    if (action.value == "Feed") {
        if (feed == 1) {
            play = 1
            feed = 2

            output.innerHTML = "Филюшка покушал и может поиграть"
        }
        else if (feed == 2) {
            output.innerHTML = "Филюшка уже покушал и больше не хочет! Он не против поиграть или поспать"
            play = 1
            feed = 2
        }
    }
    if (action.value == "Play") {
        if (feed == 1) {
            output.innerHTML = "Филюшик не хочет играть, он хочет кушать!"
            play = 1
            feed = 1
        }
        else if (feed == 2) {
            output.innerHTML = "Филюша поиграл и не против поспать"
            feed = 1
            play = 2
        }
    }

    stat.innerHTML = `Feed: ${feed} Play: ${play}`

})

kartinka.src = ''