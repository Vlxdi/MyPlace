//delay for the cursor animation
document.getElementById("portfolioBtn").addEventListener("click", function(e) {
    e.preventDefault();
    setTimeout(function() {
        window.location.href = "/PortfolioPage/portfolio.html";
    }, 400);
});
