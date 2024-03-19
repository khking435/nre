
// speedDetector.js

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        console.log("OK");
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

const carSpeed = parseFloat(prompt("Enter car speed (in km/h): "));
checkSpeed(carSpeed);
