function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll('input[type="button"]'));
    buttons.map((elem) => elem.addEventListener('click', convertToLeft));
    function convertToLeft(ev) {
        let value = ev.target.parentNode.children[1].value;
        value = Number(value);
        let unit = ev.target.parentNode.children[1].id;
        switch (unit) {
            case 'days':
                document.querySelector('#hours').value = 24*value;
                document.querySelector('#minutes').value = 24*60*value;
                document.querySelector('#seconds').value = 24*60*60*value;
                break;
            case 'hours':
                document.querySelector('#days').value = value/24;
                document.querySelector('#minutes').value = 60*value;
                document.querySelector('#seconds').value = 60*60*value;
                break;
            case 'minutes':
                document.querySelector('#days').value = value/(24*60);
                document.querySelector('#hours').value = value/60;
                document.querySelector('#seconds').value = 60*value;
                break;
            case 'seconds':
                document.querySelector('#days').value = value/(24*60*60);
                document.querySelector('#hours').value = value/(60*60);
                document.querySelector('#minutes').value = value/60;
                break;
        }
    }
}