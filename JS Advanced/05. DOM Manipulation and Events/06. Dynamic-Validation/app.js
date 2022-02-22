function validate() {
    let email = document.querySelector('#email');
    email.addEventListener('change', validateEmail);
    function validateEmail(ev) {
        let pattern = /^[a-z]+@[a-z]+.[a-z]+$/;
        if(pattern.test(email.value)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }
}