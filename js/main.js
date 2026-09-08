document.getElementById("year").textContent = new Date().getFullYear();


const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".content-section");

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const target = link.getAttribute("href").substring(1);

        sections.forEach(section => {
            section.style.display =
                section.id === target ? "block" : "none";
        });
    });
});
```

