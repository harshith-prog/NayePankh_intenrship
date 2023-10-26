window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 0) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});