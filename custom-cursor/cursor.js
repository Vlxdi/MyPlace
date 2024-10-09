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

