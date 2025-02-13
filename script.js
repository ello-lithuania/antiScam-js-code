// Function to get today's date in YYYY-MM-DD format
function getTodayDate() {
    return new Date().toISOString().split('T')[0];
}

// Function to calculate days passed between two dates
function getDaysPassed(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end - start;
    return Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
}

// Function to update opacity
function updateOpacity() {
    let storedData = JSON.parse(localStorage.getItem('opacityData'));
    let today = getTodayDate();
    let initialDate = "2025-02-13";
    
    if (!storedData) {
        storedData = { date: initialDate, opacity: 1 };
    }
    
    let daysPassed = getDaysPassed(initialDate, today);
    storedData.opacity = Math.max(0, 1 - (0.02 * daysPassed));
    storedData.date = today;
    
    document.body.style.opacity = storedData.opacity;
    localStorage.setItem('opacityData', JSON.stringify(storedData));
}

// Apply the opacity update on page load
updateOpacity();
