function focused() {
    let inputElements = Array.from(document.querySelectorAll('input'));
    inputElements.forEach(elem => {
        elem.addEventListener('focus', onFocus);
        elem.addEventListener('blur', onBlur)
        });
    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
    }
    function onBlur(ev) {
        ev.target.parentNode.className = '';
    }
}