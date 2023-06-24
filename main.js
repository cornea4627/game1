const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let gameObjects = []; // Array to store game objects

//create player character
const player = {
    x: 50,
    y: canvas.height - 50,
    width: 30,
    height: 30,
    color: 'blue',
    dx: 5
}
gameObjects.push(player);

// listen for keyboard input
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        player.x += player.dx;
    } else if (e.key === 'ArrowLeft') {
        player.x -= player.dx;
    }
});

// Game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update game objects

    // Render game objects
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    // Request the next animation frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
