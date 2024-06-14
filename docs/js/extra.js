document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll('a[href^="http"]');
    links.forEach(function(link) {
        link.setAttribute("target", "_blank");
    });
});