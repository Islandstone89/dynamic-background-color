
let main = document.querySelector(".main");
let button1 = document.querySelector(".btn-change");
let button2 = document.querySelector(".btn-reset");

let colors = ["red", "green", "blue", "yellow", "salmon", "pink", "orange" ,"brown"]

let i = 0;

button1.addEventListener("click", () => {
    let random_numbers = Math.floor(Math.random() * colors.length)

    main.style.backgroundColor = colors[random_numbers];
});

button2.addEventListener("click", () => {
    main.style.backgroundColor = "white";
})

