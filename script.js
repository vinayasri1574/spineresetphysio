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

const countdown = () => {
    const endDate = new Date("Sep 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').querySelector('.number').innerText = days;
    document.getElementById('hours').querySelector('.number').innerText = hours;
    document.getElementById('minutes').querySelector('.number').innerText = minutes;
    document.getElementById('seconds').querySelector('.number').innerText = seconds;

    updateProgress('days', days / 365);
    updateProgress('hours', hours / 24);
    updateProgress('minutes', minutes / 60);
    updateProgress('seconds', seconds / 60);
};

const updateProgress = (id, percent) => {
    const progressCircle = document.getElementById(id).querySelector('.progress-circle');
    const radius = progressCircle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference * (1 - percent);
    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = offset;
};

setInterval(countdown, 1000);
window.onload = countdown;
 // Initial call to set the values immediately




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

