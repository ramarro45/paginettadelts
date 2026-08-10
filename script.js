/* =========================================================
   NEWSLETTER
========================================================= */

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailInput = newsletterForm.querySelector("input");
        const button = newsletterForm.querySelector("button");

        if (!emailInput.value) {
            return;
        }

        /*
         * DEMO
         *
         * Qui potrai collegare il form a Brevo,
         * Mailchimp, Buttondown, ConvertKit ecc.
         *
         * Per ora mostriamo semplicemente un messaggio.
         */

        const originalText = button.textContent;

        button.textContent = "Iscritto ✓";

        button.disabled = true;

        emailInput.value = "";

        setTimeout(() => {

            button.textContent = originalText;
            button.disabled = false;

        }, 3000);

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".news-card, .tldr-item, .event, .newsletter-inner"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElements = document.querySelectorAll("[data-year]");

yearElements.forEach((element) => {

    element.textContent = new Date().getFullYear();

});
