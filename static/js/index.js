$(document).ready(function(){
    $("#click_btn").click(function(){
        alert("Hello World");
    })
    
})
async function loadContent(url) {
    try {
        const response = await fetch(url);
        const html = await response.text(); // Get HTML from the response

        // Inject the new content into the target element
        document.querySelector('html').innerHTML = html;

        // Update the browser's URL without reloading
        window.history.pushState({}, '', url);
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Example usage: Call loadContent() when clicking a link


window.onpopstate = function() {
    loadContent(document.location.href);
};