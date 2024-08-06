// Function to toggle the language menu
function toggleLanguageMenu() {
    var langMenuOptions = document.querySelector('.lang-menu .lang-menu-options');
    langMenuOptions.style.display = (langMenuOptions.style.display === 'block') ? 'none' : 'block';
}

// Function to change the language
function changeLanguage(lang) {
    // Logic to change the language goes here
    console.log('Language changed to: ' + lang);
}

// Countdown timer logic
const endDate = new Date("September 3, 2024 23:59:59").getTime();
const countdownElements = {
    days: document.getElementById('days-number'),
    hours: document.getElementById('hours-number'),
    minutes: document.getElementById('minutes-number'),
    seconds: document.getElementById('seconds-number'),
};

const targetDate = new Date(Date.now() + 29 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000 + 37 * 60 * 1000 + 24 * 1000);

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('days').textContent = "00";
        document.getElementById('hours').textContent = "00";
        document.getElementById('minutes').textContent = "00";
        document.getElementById('seconds').textContent = "00";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();


function openSearchModal() {
    document.getElementById("searchModal").style.display = "block";
}

function closeSearchModal() {
    document.getElementById("searchModal").style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById("searchModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

