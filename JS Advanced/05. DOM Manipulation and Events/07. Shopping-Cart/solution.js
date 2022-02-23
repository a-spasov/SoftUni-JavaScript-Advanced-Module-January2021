function solve() {
   let productsMap = new Map();
   let addButtons = document.querySelectorAll('.add-product');
   addButtons = Array.from(addButtons);
   addButtons.map((x) => x.addEventListener('click', addToBasket));
   function addToBasket(ev) {
      let product = ev.target.parentNode.previousElementSibling.children[0].textContent;
      let price = ev.target.parentNode.nextElementSibling.textContent;
      price = Number(price);
      document.querySelector('textarea').value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
      if (productsMap.has(product)) {
         let currentPrice = productsMap.get(product);
         let newPrice = currentPrice + price;
         productsMap.set(product, newPrice);
      } else {
         productsMap.set(product,price);
      }
   }
   document.querySelector('.checkout').addEventListener('click', checkOut);
   function checkOut(ev) {
      let selectedProducts = [];
      let totalCost = 0;
      for (let [product, price] of productsMap.entries()) {
         price = Number(price);
         selectedProducts.push(product);
         totalCost += price;
      }
      document.querySelector('textarea').value += `You bought ${selectedProducts.join(', ')} for ${totalCost.toFixed(2)}.`;
      ev.target.removeEventListener('click', checkOut);
      addButtons.map((x) => x.removeEventListener('click', addToBasket));
   }
}