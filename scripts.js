// Handle search functionality
function handleSearch() {
    const query = document.querySelector('.search-bar').value;
    if (query) {
        console.log(`Searching for: ${query}`);
    }
}

document.querySelector('.search-bar').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Scrolling Functionality
