function cityTaxes(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population*this.taxRate;
            return this.treasury;
        },
        applyGrowth(percentage) {
            this.population = Math.floor(this.population*(1 + (percentage/100)));
            return this.population;
        },
        applyRecession(percentage) {
            this.treasury = Math.floor(this.treasury*(1 - (percentage/100)));
            return this.population;
        }
    };
    return city;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
