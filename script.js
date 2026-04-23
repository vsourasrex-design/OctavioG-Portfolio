document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       CONTACT FORM HANDLING
    ========================= */
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Simple feedback
            alert("Message sent successfully!");

            // Reset form
            form.reset();
        });
    }

    /* =========================
       SMOOTH SCROLL (for anchors)
    ========================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    /* =========================
       ACTIVE NAV LINK
    ========================= */
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.style.borderBottom = "2px solid #4CAF50";
            link.style.paddingBottom = "2px";
        }
    });

    /* =========================
       SCROLL REVEAL ANIMATION
    ========================= */
    const revealElements = document.querySelectorAll(
        ".card, .grid img, .video-row, .illustration-item, .contact-container"
    );

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 80) {
                el.classList.add("active");
            }
        });
    };

    // Initial state
    revealElements.forEach(el => {
        el.classList.add("hidden");
    });

    window.addEventListener("scroll", revealOnScroll);

    // Trigger once on load
    revealOnScroll();

});
