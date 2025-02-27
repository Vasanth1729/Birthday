// Create confetti effect
const confettiContainer = document.querySelector('.confetti');
const clickMeButton = document.getElementById('clickMeButton');
const birthdayWish = document.querySelector('.birthday-wish');
const message = document.querySelector('.message');
const hearts = document.querySelector('.hearts');

// Function to create confetti
function createConfetti() {
    const confettiPiece = document.createElement('div');
    confettiPiece.classList.add('confetti-piece');
    confettiPiece.style.left = Math.random() * 100 + 'vw';
    confettiPiece.style.backgroundColor = getRandomColor();
    confettiPiece.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random duration
    confettiContainer.appendChild(confettiPiece);

    // Remove the confetti piece after it falls
    setTimeout(() => {
        confettiPiece.remove();
    }, 5000);
}

// Function to get a random color for confetti
function getRandomColor() {
    const colors = ['#ff69b4', '#ffcc00', '#00ccff', '#ff6600', '#66ff00'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to handle the click event
clickMeButton.addEventListener('click', () => {
    // Show the birthday wish and message
    birthdayWish.classList.remove('hidden');
    message.classList.remove('hidden');
    hearts.classList.remove('hidden');

    // Start creating confetti
    setInterval(createConfetti, 200);

    // Hide the button after clicking
    clickMeButton.classList.add('hidden');

    // Show the cake cutting page after a delay
    setTimeout(() => {
        showCakeCuttingPage();
    }, 3000); // Delay before showing the cake cutting page
});

// Function to show the cake cutting page
function showCakeCuttingPage() {
    // Create a new div for the cake cutting page
    const cakeCuttingPage = document.createElement('div');
    cakeCuttingPage.classList.add('cake-cutting');
    cakeCuttingPage.innerHTML = `
        <h1>🎂 Cake Cutting Time! 🎉</h1>
        <img src="Index/Cake.jpg" alt="Birthday Cake" class="cake" id="cakeImage">
        <p>Let's make a wish and blow out the candles!</p>
        <button id="celebrateButton">Celebrate!</button>
    `;
    document.body.appendChild(cakeCuttingPage);

    // Show the cake cutting page
    cakeCuttingPage.style.display = 'block';

        // Add event listener for the celebrate button
        document.getElementById('celebrateButton').addEventListener('click', () => {
            const cakeImage = document.getElementById('cakeImage');
            
            // Add a class to trigger the cutting animation
            cakeImage.classList.add('cake-cut');
    
            // Optional: Add a delay for the alert to allow the animation to finish
            setTimeout(() => {
                alert("Yay! Happy Birthday! 🎉🎈");
            }, 1000); // Delay alert to allow animation to finish
        });
    }
