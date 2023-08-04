const streakElement = document.getElementById('streak');
const levelElement = document.getElementById('level');
const startBtn = document.getElementById('start-btn');
const taskBtn = document.getElementById('task-btn');
const trophyImage = document.getElementById('trophy');
const totalTrophiesElement = document.getElementById('total-trophies');

let streak = 0;
let level = 1;
let trophies = 0;
let missedTask = false; // To track if the user missed completing the regular task

function updateStreakAndLevel() {
    streakElement.textContent = streak;
    levelElement.textContent = level;
}

function checkForTrophy() {
    if (level % 2 === 0) {
        trophies++;
        trophyImage.classList.add('trophy-earned');
        setTimeout(() => {
            trophyImage.classList.remove('trophy-earned');
        }, 1000);
    }
}

function startNewDay() {
    if (!missedTask) {
        streak++;
    } else {
        streak = 0; // Reset streak if a regular task was missed
        missedTask = false; // Reset the missed task flag
    }
    updateStreakAndLevel();
    updateTrophiesPanel();
}

function completeRegularTask() {
    level++; // Increase level when completing the regular task
    checkForTrophy();
    updateStreakAndLevel();
    updateTrophiesPanel();
}

function updateTrophiesPanel() {
    totalTrophiesElement.textContent = trophies;
}

startBtn.addEventListener('click', () => {
    missedTask = true; // Set the missed task flag to true when starting a new day
    startNewDay();
});

taskBtn.addEventListener('click', () => {
    completeRegularTask();
});

// Initialize the streak, level, and trophies on page load
updateStreakAndLevel();
updateTrophiesPanel();
