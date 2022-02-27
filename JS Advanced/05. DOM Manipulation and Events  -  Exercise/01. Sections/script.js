function create(words) {
   for (let word of words) {
      let section = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      section.appendChild(paragraph);
      document.querySelector('#content').appendChild(section);
   }
   let sections = Array.from(document.querySelectorAll('#content div'));
   sections.map((elem) => elem.addEventListener('click', showContent));
   function showContent(ev) {
      ev.target.children[0].style.display = 'block';
   }
}