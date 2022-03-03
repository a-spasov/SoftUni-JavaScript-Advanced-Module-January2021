function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encodeAndSend);
    function encodeAndSend(ev) {
        let text = ev.target.previousElementSibling;
        let message = text.value;
        let encodedMessage = [];
        message = message.split('');
        for (let char of message) {
            let symbol = char.charCodeAt(0) + 1;
            encodedMessage.push(String.fromCharCode(symbol));
        }
        ev.target.parentNode.nextElementSibling.children[1].value = encodedMessage.join('');
        text.value = '';
    }
    buttons[1].addEventListener('click', decode);
    function decode(ev) {
        let text = ev.target.previousElementSibling;
        let encodedMessage = text.value;
        let decodedMessage = [];
        encodedMessage = encodedMessage.split('');
        for (let char of encodedMessage) {
            let symbol = char.charCodeAt(0) - 1;
            decodedMessage.push(String.fromCharCode(symbol));
        }
        text.value = decodedMessage.join('');
    }
}