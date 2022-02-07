function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   function onClick() {
      let input = document.querySelector('#inputs textarea').value;
      let pattern = /"[^"]+"/g;
      let tokens = input.match(pattern);
      let restaurants = {};
      for (let token of tokens) {
         let [restaurantName, workers] = token.split(' - ');
         restaurantName = restaurantName.slice(1);
         if (!restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName] = {};
         }
         workers = workers.slice(0, workers.length - 1);
         workers = workers.split(', ');
         for (let worker of workers) {
            let [name, salary] = worker.split(' ');
            restaurants[restaurantName][name] = Number(salary);
         }
      }
      for (let [restaurant, workers] of Object.entries(restaurants)) {
         let averageSalary = 0;
         let bestSalary = 0;
         let salaries = Object.values(workers);
         for (let salary of salaries) {
            console.log(salary);
            averageSalary += Number(salary);
            if (bestSalary < Number(salary)) {
               bestSalary = Number(salary);
            }
         }
         averageSalary = (averageSalary/salaries.length).toFixed(2);
         restaurants[restaurant].averageSalary = Number(averageSalary).toFixed(2);
         restaurants[restaurant].bestSalary = bestSalary.toFixed(2);
      }
      let sortedRestaurants = Object.entries(restaurants);
      sortedRestaurants.sort((a, b) => b[1].averageSalary - a[1].averageSalary);
      let bestRestaurant = sortedRestaurants[0][0];
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant} Average Salary: ${restaurants[bestRestaurant].averageSalary} Best Salary: ${restaurants[bestRestaurant].bestSalary}`;
      let workersResult = [];
      let sortedWorkers = Object.entries(restaurants[bestRestaurant]);
      sortedWorkers.sort((a, b) => b[1] - a[1]);
      for (let [worker, salary] of sortedWorkers) {
         if (worker == 'bestSalary' || worker == 'averageSalary') {
            continue;
         }
         workersResult.push(`Name: ${worker} With Salary: ${salary}`);
      }
      document.querySelector('#workers p').textContent = workersResult.join(' ');
   }
}