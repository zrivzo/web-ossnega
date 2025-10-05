// Countdown Timer for Wawancara 1

document.addEventListener('DOMContentLoaded', function() {
    initializeCountdown();
});

function initializeCountdown() {
    // Set target date: October 6, 2024, 08:00 WIB
    const targetDate = new Date('October 6, 2024 08:00:00 GMT+0700').getTime();
    
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Update countdown every second
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // If countdown is over
        if (distance < 0) {
            clearInterval(countdown);
            updateCountdownDisplay(0, 0, 0, 0);
            showCountdownComplete();
            return;
        }
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update display
        updateCountdownDisplay(days, hours, minutes, seconds);
        
        // Add animation when numbers change
        animateCountdownNumbers(days, hours, minutes, seconds);
        
    }, 1000);
}

function updateCountdownDisplay(days, hours, minutes, seconds) {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (daysElement) daysElement.textContent = formatTime(days);
    if (hoursElement) hoursElement.textContent = formatTime(hours);
    if (minutesElement) minutesElement.textContent = formatTime(minutes);
    if (secondsElement) secondsElement.textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function animateCountdownNumbers(days, hours, minutes, seconds) {
    const elements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };
    
    // Store current values
    if (!window.countdownValues) {
        window.countdownValues = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    // Animate if value changed
    Object.keys(elements).forEach(unit => {
        if (elements[unit] && window.countdownValues[unit] !== eval(unit)) {
            elements[unit].classList.add('countdown-number');
            setTimeout(() => {
                elements[unit].classList.remove('countdown-number');
            }, 500);
        }
    });
    
    // Update stored values
    window.countdownValues = { days, hours, minutes, seconds };
}

function showCountdownComplete() {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.innerHTML = `
            <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-check text-green-600 text-2xl"></i>
                </div>
                <h2 class="text-2xl font-bold text-green-900 mb-2">Wawancara 1 Sedang Berlangsung!</h2>
                <p class="text-green-700">Semoga sukses untuk semua peserta!</p>
            </div>
        `;
        
        // Show notification
        if (window.OSIM && window.OSIM.showNotification) {
            window.OSIM.showNotification('Wawancara 1 telah dimulai! Semoga sukses!', 'success');
        }
    }
}

// Additional countdown utility functions
function getTimeRemaining(targetDate) {
    const total = Date.parse(targetDate) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeMultipleCountdowns() {
    // Example for multiple countdowns if needed
    const countdowns = [
        {
            id: 'wawancara-1',
            date: 'October 6, 2024 08:00:00 GMT+0700',
            element: 'countdown'
        }
        // Add more countdowns here
    ];
    
    countdowns.forEach(countdown => {
        const targetDate = new Date(countdown.date).getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance > 0) {
            initializeCountdown();
        }
    });
}

// Export for use in other modules
window.Countdown = {
    initializeCountdown,
    getTimeRemaining
};
