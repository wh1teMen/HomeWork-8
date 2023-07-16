var countBugs;
document.getElementById('btn-refresh').addEventListener('click', () => {
    countBugs = 5;
    setInterval(() => {
        document.getElementById('box').innerHTML = '';
        for (let i = 0; i < +countBugs; i++) {
            let X = getRandomCoordinate(0, 300);
            let Y = getRandomCoordinate(0, 550);
            box.innerHTML += (
                ` <div "  style="display: inline-block;">
                 <img class="bug"   id="bugId${i}" style=" left: ${X}px; top: ${Y}px;"
                src="images/bugs.jpg" alt="bugs">  </div> `
            )
        }
    }, 1000);
});

//функция рандома координат
function getRandomCoordinate(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


document.getElementById('box').addEventListener('click', e => {
    if (e.target.className == 'bug') {

        let id = e.target.id;
        document.getElementById(`${id}`).style.display = 'none';
        countBugs = +countBugs - 1;
        console.log(`${countBugs}`)
        if (countBugs == 0) {
            setTimeout(() => { alert('Вы победили') }, 100);

        }

    }
});






