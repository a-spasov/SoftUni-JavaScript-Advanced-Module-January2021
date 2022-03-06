function solve() {
  let buttons = document.querySelectorAll('button');
  buttons[0].addEventListener('click', addToTable);
  function addToTable(ev) {
    let input = ev.target.previousElementSibling.value;
    products = JSON.parse(input);
    for (let product of products) {
      let currentRow = document.createElement('tr');
      let image = document.createElement('img');
      image.src = product.img;
      let cell1 = document.createElement('td');
      cell1.appendChild(image);
      currentRow.appendChild(cell1);
      let name = document.createElement('p');
      name.textContent = product.name;
      let cell2 = document.createElement('td');
      cell2.appendChild(name);
      currentRow.appendChild(cell2);
      let price = document.createElement('p');
      price.textContent = Number(product.price);
      let cell3 = document.createElement('td');
      cell3.appendChild(price);
      currentRow.appendChild(cell3);
      let decFactor = document.createElement('p');
      decFactor.textContent = Number(product.decFactor);
      let cell4 = document.createElement('td');
      cell4.appendChild(decFactor);
      currentRow.appendChild(cell4);
      document.querySelector('tbody').appendChild(currentRow);
    }
    
  }
}