// Custom Cursor Script
const cursor = document.querySelector('.cursor');
cursor.style.display = "block";

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 1.5) + "px; left: " + (e.pageX - 1.5) + "px;");
});

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

cursor.addEventListener("mouseover", () => {
    cursor.style.borderColor = "red";
});

// Function to handle the click delay and navigation
function navigateWithDelay(url) {
    // This sets the cursor animation
    cursor.classList.add("expand");

    setTimeout(function() {
        window.location.href = url;
    }, 400);
}

// Adding event listeners to all clickable elements
const clickableItems = document.querySelectorAll('.clickable');

clickableItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default action (if any)
        const targetUrl = item.getAttribute('data-url'); // Get the target URL from a data attribute
        navigateWithDelay(targetUrl);
    });
});

