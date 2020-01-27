const WIDTH = 400;
const HEIGHT = 400;

let target = {
    x: getRandomNumber (WIDTH),
    y: getRandomNumber (HEIGHT)
}

let $map = document.getElementById('map');
let $distance =document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function(e){
    clicks ++;
    let distance = getDistance(e, target);
    DistanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${DistanceHint}`;

    if (distance < 20) {
        alert(`Encontraste el tesoro después de ${clicks} clicks`);
        location.reload();
    }
}
)