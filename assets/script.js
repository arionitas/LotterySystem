const openBtn = document.getElementById("openModal");
const openBtn2 = document.getElementById("openModal2");
const openBtn3 = document.getElementById("openModal3");
const closeBtn = document.getElementById("closeModal");
const closeBtn2 = document.getElementById("closeModal2");
const closeBtn3 = document.getElementById("closeModal3");
const modal = document.getElementById("modal");
const modal2 = document.getElementById("modal2");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

openBtn2.addEventListener("click", () => {
    modal2.classList.add("open");
});

openBtn3.addEventListener("click", () => {
    modal2.classList.add("open");
});


closeBtn2.addEventListener("click", () => {
    modal2.classList.remove("open");
});

