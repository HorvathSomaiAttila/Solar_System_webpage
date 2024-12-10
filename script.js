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


const starContainer = document.createElement("div");
starContainer.classList.add("stars");
document.body.appendChild(starContainer);

for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 20 + 5}s`;
    star.style.top = `${Math.random() * 100}vh`;
    starContainer.appendChild(star);
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

// Ellenőrizd, hogy a bolygó már ki van-e választva a sessionStorage-ban
let userPlanet = sessionStorage.getItem("userPlanet");

if (!userPlanet) {
    // Ha nincs bolygó kiválasztva, kérd meg a felhasználót, hogy válasszon
    userPlanet = prompt("Which planet are you from? (Enter the name, e.g., Earth)").toLowerCase();

    // Ellenőrizd az érvényességet
    const validPlanets = [
        "sun", "mercury", "venus", "earth", "mars", 
        "jupiter", "saturn", "uranus", "neptune"
    ];

    if (!validPlanets.includes(userPlanet)) {
        alert("Invalid planet name. Defaulting to 'Earth'.");
        userPlanet = "earth";
    }

    // Mentés a sessionStorage-ba
    sessionStorage.setItem("userPlanet", userPlanet);
}

// Csak a kiválasztott bolygót engedélyezni szerkesztésre
const planetSections = document.querySelectorAll("section.planet");

planetSections.forEach((section) => {
    const planetId = section.id;
    if (planetId !== userPlanet) {
        section.classList.add("restricted");
    }
});

// Figyelmeztetés megjelenítése korlátozott bolygóra kattintáskor
planetSections.forEach((section) => {
    section.addEventListener("click", (e) => {
        if (section.classList.contains("restricted")) {
            e.preventDefault(); // Link vagy művelet megakadályozása
            alert("You can only edit the planet you are from.");
        }
    });
});

// Csak a felhasználó bolygójához tartozó szövegeket tedd szerkeszthetővé
planetSections.forEach((section) => {
    const planetId = section.id;
    const textDiv = section.querySelector(".text");
    if (planetId === userPlanet) {
        textDiv.setAttribute("contenteditable", "true");
        //textDiv.style.border = "2px dashed #ffa500"; // Vizuális jelzés a szerkeszthetőségre
    }
});
