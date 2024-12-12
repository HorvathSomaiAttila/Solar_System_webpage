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

let selectedPlanet = null;

function setPlanetAccess(planet) {
    selectedPlanet = planet;
    document.querySelectorAll('.planet').forEach(el => {
        if (el.dataset.name !== planet) {
            el.classList.add('disabled');
            el.style.pointerEvents = 'none';
            el.style.opacity = '0.5';
        } else {
            el.classList.remove('disabled');
            el.style.pointerEvents = 'auto';
            el.style.opacity = '1';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const selectedPlanet = sessionStorage.getItem('selectedPlanet');
    if (selectedPlanet) {
        setPlanetAccess(selectedPlanet);
        const targetElement = document.querySelector(`#${selectedPlanet}`);
        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    const planetSelector = document.getElementById("planetSelect");
    if (planetSelector) {
        planetSelector.addEventListener("change", (event) => {
            const selectedPlanet = event.target.value;

            const targetPlanet = document.getElementById(selectedPlanet);
            if (targetPlanet) {
                targetPlanet.scrollIntoView({ behavior: "smooth" });
            } else {
                console.error("Section not found for planet:", selectedPlanet);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData && userData.planet) {
        const { planet } = userData;
        const targetPlanet = document.getElementById(planet);
        if (targetPlanet) {
            targetPlanet.scrollIntoView({ behavior: 'smooth' });
        }
        document.querySelectorAll('.planet').forEach(el => {
            if (el.id !== planet) {
                el.classList.add('disabled');
            } else {
                el.classList.remove('disabled');
            }
        });
    }
});
