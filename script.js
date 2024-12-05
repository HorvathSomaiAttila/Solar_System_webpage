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
