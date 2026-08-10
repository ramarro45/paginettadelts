```javascript
// Anno automatico nel footer

document.getElementById("year").textContent =
    new Date().getFullYear();


// Piccolo effetto quando si cliccano
// i link interni della pagina

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});
```
