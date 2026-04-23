// Smooth scroll for navigation
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple contact form alert
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
