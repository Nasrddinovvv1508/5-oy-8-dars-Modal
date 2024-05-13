let showBtn = document.getElementById(`show-btn`);
let modal = document.getElementById(`modal`);
let closeBtn = document.getElementById(`close-btn`);
let overlay = document.getElementById(`overlay`);

let addHidden = () => {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
}

let removeHidden = () => {
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
}

showBtn.addEventListener(`click`, removeHidden)

closeBtn.addEventListener(`click`, addHidden)

overlay.addEventListener(`click`, addHidden)


document.addEventListener(`keydown`, function (e) {
    if (e.key == `Escape`) {
        addHidden()
    }
})