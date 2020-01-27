let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let difX = e.offsetX - target.x;
    let difY = e.offsetY - target.y;
    return Math.sqrt((difX * difX) + (difY * difY));
}

let getDistanceHint = distance => {
    if (distance < 30) {
        return "Quemandote!";
    } else if (distance < 40) {
        return "Muy caliente!";
    } else if (distance < 60) {
        return "Caliente!";
    } else if (distance < 100) {
        return "Tibio!";
    } else if (distance < 180) {
        return "Frío!";
    } else if (distance < 360) {
        return "Muy frío!";
    } else {
        return "Congelado!";
    }
}
