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

const stonexContainer = document.createElement("div");
stonexContainer.classList.add("stonesx");
document.body.appendChild(stonexContainer);

const stoneCount = 50;
for (let i = 0; i < stoneCount; i++) {
    const stone = document.createElement("div");
    stone.classList.add("stone");
    stone.style.left = `${Math.random() * 100}vw`;
    stone.style.animationDuration = `${Math.random() * 8 + 8}s`;
    stone.style.top = `${Math.random() * 100}vh`;
    stonexContainer.appendChild(stone);
}

const stoneyContainer = document.createElement("div");
stoneyContainer.classList.add("stonesy");
document.body.appendChild(stoneyContainer);

const stoneyCount = 50;
for (let i = 0; i < stoneyCount; i++) {
    const stoney = document.createElement("div");
    stoney.classList.add("stoney");
    stoney.style.left = `${Math.random() * 100}vw`;
    stoney.style.animationDuration = `${Math.random() * 8 + 8}s`;
    stoney.style.top = `${Math.random() * 100}vh`;
    stoneyContainer.appendChild(stoney);
}

const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

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

function setPlanetAccess(selectedPlanet) {
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        planet.classList.remove('disabled');
        if (planet.id !== selectedPlanet) {
            planet.classList.add('disabled');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const selectedPlanet = sessionStorage.getItem('selectedPlanet');
    if (selectedPlanet) {
        const targetElement = document.querySelector(`#${selectedPlanet}`);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setPlanetAccess(selectedPlanet);
    }
});
