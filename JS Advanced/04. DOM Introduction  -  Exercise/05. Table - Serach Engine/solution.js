function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      let rows = document.getElementsByTagName('tr');
      for (let row of rows) {
         row.className = '';
      }
      let cells = document.querySelectorAll('tbody tr td');
      let pattern = document.querySelector('#searchField').value;
      document.querySelector('#searchField').value = '';
      for (let cell of cells) {
         if (cell.textContent.includes(pattern)) {
            cell.parentNode.className = 'select';
         }
      }
   }
}