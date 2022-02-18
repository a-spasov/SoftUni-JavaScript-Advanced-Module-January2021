function attachGradientEvents() {
    let mouseGradient = document.querySelector('#gradient').addEventListener('mousemove', onMove);
    function onMove(event) {
        let offsetX = event.offsetX/(event.target.clientWidth - 1);
        offsetX = Math.trunc(offsetX*100);
        document.querySelector('#result').textContent = `${offsetX}%`;
    }
}