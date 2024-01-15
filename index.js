document.addEventListener("DOMContentLoaded", function () {
    // Get the container and link elements
    const blogContainer = document.getElementById("blogContainer");
    const viewMoreContainer = document.getElementById("viewMoreContainer");
    const viewMoreLink = document.getElementById("viewMoreLink");

    // Function to toggle the visibility of additional blog posts
    function toggleAdditionalBlogPosts() {
        // Toggle a CSS class to show/hide additional blog posts
        blogContainer.classList.toggle("show-more-posts");
    }

    // Event listener for the "View More" link
    if (viewMoreLink) {
        viewMoreLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior
            toggleAdditionalBlogPosts();
        });
    }

    // Get the "Blog" link element
    const blogLink = document.querySelector('.header__link[href="blog.html"]');

    // Highlight the "Blog" link when on the blog page
    if (blogLink && window.location.pathname.includes("blog.html")) {
        blogLink.classList.add("active");
    }
});
