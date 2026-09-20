// ===== BUKA UNDANGAN =====
function openInvitation() {
    document.getElementById('cover').classList.add('hide');
    document.getElementById('mainContent').classList.add('show');
    
    // Putar musik
    const music = document.getElementById('bgMusic');
    music.play().catch(err => console.log('Autoplay diblokir:', err));
    
    // Scroll ke atas
    window.scrollTo(0, 0);
}

// ===== COUNTDOWN =====
const targetDate = new Date('December 12, 2025 08:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    } else {
        document.getElementById('countdown').innerHTML = 
            '<h3>🎉 Hari Bahagia Telah Tiba! 🎉</h3>';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ===== FORM UCAPAN =====
const wishForm = document.getElementById('wishForm');
const wishList = document.getElementById('wishList');

// Load dari localStorage
let wishes = JSON.parse(localStorage.getItem('wishes')) || [];

function renderWishes() {
    wishList.innerHTML = '';
    wishes.forEach(wish => {
        const div = document.createElement('div');
        div.className = 'wish-item';
        div.innerHTML = `<strong>${wish.name}</strong><p>${wish.message}</p>`;
        wishList.appendChild(div);
    });
}

wishForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && message) {
        wishes.unshift({ name, message });
        localStorage.setItem('wishes', JSON.stringify(wishes));
        renderWishes();
        wishForm.reset();
    }
});

renderWishes();