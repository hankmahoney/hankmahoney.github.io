const openBtn = document.querySelector(".js-open")
const modalBg = document.getElementById("modal-background")
const modalBox = document.getElementById("modal-box")

openBtn.addEventListener('click', function(event) {
    event.preventDefault()
    modalBg.classList.add("active")
    modalBox.classList.add("active")
})

const closeBtn = document.querySelectorAll(".js-close")

closeBtn.forEach(node => {
    node.addEventListener('click', function(e) {
        modalBg.classList.remove("active")
        modalBox.classList.remove("active")
    })
})