document.addEventListener("DOMContentLoaded", function () {
    // Get the current page's body id
    const currentPage = document.body.id;

    // Remove "active" class from all navigation links
    const navigationLinks = document.querySelectorAll("ul li a");
    navigationLinks.forEach(link => {
        link.classList.remove("active");
    });

    // Add "active" class to the current page's navigation link
    const currentNavLink = document.querySelector(`ul li a[href='${currentPage}.html']`);
    if (currentNavLink) {
        currentNavLink.classList.add("active");
    }
});
