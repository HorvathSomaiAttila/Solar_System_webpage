function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}



document.addEventListener("scroll", debounce(() => {
    const sections = document.querySelectorAll(".planet .content");
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
}, 50));

// A vízszintesen lapított kövek (stone) tárolója
const stonexContainer = document.createElement("div");
stonexContainer.classList.add("stonesx");
document.body.appendChild(stonexContainer);

// Csökkentjük a csillagok számát, és elosztjuk őket egyenletesebben
const stoneCount = 50; // Csökkentettük a csillagok számát
for (let i = 0; i < stoneCount; i++) {
    const stone = document.createElement("div");
    stone.classList.add("stone");  // Az osztály neve "stone" lesz
    // A csillagok elosztása az egész képernyőn
    stone.style.left = `${Math.random() * 100}vw`; // Véletlenszerű vízszintes helyezkedés
    stone.style.animationDuration = `${Math.random() * 8 + 8}s`; // Random animációs idő
    stone.style.top = `${Math.random() * 100}vh`; // Véletlenszerű kezdőpont
    stonexContainer.appendChild(stone);
}

// A függőlegesen lapított kövek (stoney) tárolója
const stoneyContainer = document.createElement("div");
stoneyContainer.classList.add("stonesy");
document.body.appendChild(stoneyContainer);

// Csökkentett csillagszám a "stoney" típusú köveknél is
const stoneyCount = 50; // Csökkentettük a csillagok számát
for (let i = 0; i < stoneyCount; i++) {
    const stoney = document.createElement("div");
    stoney.classList.add("stoney");  // Az osztály neve "stoney" lesz
    // A csillagok elosztása az egész képernyőn
    stoney.style.left = `${Math.random() * 100}vw`; // Véletlenszerű vízszintes helyezkedés
    stoney.style.animationDuration = `${Math.random() * 8 + 8}s`; // Random animációs idő
    stoney.style.top = `${Math.random() * 100}vh`; // Véletlenszerű kezdőpont
    stoneyContainer.appendChild(stoney);
}


const scrollToTopButton = document.getElementById("scrollToTop");

// Görgetés figyelése a gomb megjelenítéséhez
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) { // 200px-nél lejjebb megjelenik a gomb
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Gomb kattintására görgetés az oldal tetejére
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove("active"));
            navLinks[index].classList.add("active");
        }
    });
});
