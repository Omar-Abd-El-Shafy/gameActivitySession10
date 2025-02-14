import { calculateScore } from './Score.js';
async function playGame() {
    try {
        const currentScore = await calculateScore();
        console.log("Current score in playGame:", currentScore);
        
    } catch (error) {
        console.error("Error calculating score:", error.message);
    }
}
playGame();