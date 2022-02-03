function search() {
   let pattern = document.querySelector('#searchText').value;
   let towns = document.querySelectorAll('#towns li');
   let counter = 0;
   for (let town of towns) {
      if (town.textContent.includes(pattern)) {
         counter++;
         town.style['font-weight'] = 'bold';
         town.style['text-decoration'] = 'underline';
      }
   }
   document.querySelector('#result').textContent = `${counter} matches found`;
}
