const ul = document.querySelectorAll("li");
let boolean = false;

ul.forEach(li => li.addEventListener("click",
() => {
    if (!boolean) {
        li.querySelector("span").style.display = "block";
        boolean = true;
    } else {
        li.querySelector("span").style.display = "none";
        boolean = false;
    }
})
);
