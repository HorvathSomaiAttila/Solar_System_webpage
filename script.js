
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".planet .content");
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
            section.classList.add("active");
            section.querySelector(".picture").classList.add("active");
            section.querySelector(".text").classList.add("active");
        } else {
            section.classList.remove("active");
            section.querySelector(".picture").classList.remove("active");
            section.querySelector(".text").classList.remove("active");
        }
    });
});
