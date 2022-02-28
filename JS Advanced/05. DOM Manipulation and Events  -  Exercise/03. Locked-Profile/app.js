function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'));
    buttons.map((elem) => elem.addEventListener('click', showContent));
    function showContent(ev) {
        let profile = ev.target.parentNode;
        let unlocked = profile.children[4];
        let locked = profile.children[2];
        let hiddenText = profile.children[9];
        if (unlocked.checked) {
            if (profile.children[10].textContent == 'Show more') {
                hiddenText.style.display = 'block';
                profile.children[10].textContent = 'Hide it';
            } else {
                hiddenText.style.display = '';
                profile.children[10].textContent = 'Show more'; 
            }         
        }
        if (locked.checked) {
            ev.target.removeEventListener('click', showContent);
        }
        ev.target.addEventListener('click', showContent);
    }
}