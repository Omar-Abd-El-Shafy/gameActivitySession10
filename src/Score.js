function calculateScore() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.1;
            
            if (shouldFail) {
                reject(new Error("Failed to calculate score"));
            } else {
                const score = Math.floor(Math.random() * 100);
                console.log("Calculated score:", score);
                resolve(score);
            }
        }, 500);
    });
}
export { calculateScore };
