export function checkGameOver() {
    return new Promise((resolve, reject) => {
        const conditions = false;
        if (conditions) {
            setTimeout(resolve, 2000)
        }
        else {
            setTimeout(reject, 2000)
        }
    });
  }

checkGameOver()
    .then(() => console.log("Continue playing"))
    .catch(() => console.log(`Game over!\n---------\nScore: 20\nDamage: 48`));