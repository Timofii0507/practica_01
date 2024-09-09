class Car {
    constructor(make, model, year, enginePower) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.enginePower = enginePower;
    }
  
    printInfo() {
      console.log(
        `Автомобіль: ${this.make} ${this.model}, Рік: ${this.year}, Потужність двигуна: ${this.enginePower} к.с.`
      );
    }
  }
  
  class Sedan extends Car {
    constructor(make, model, year, enginePower) {
      super(make, model, year, enginePower);
    }
  
    printInfo() {
      console.log(
        `Седан: ${this.make} ${this.model}, Рік: ${this.year}, Потужність двигуна: ${this.enginePower} к.с.`
      );
    }
  }
  
  class Truck extends Car {
    constructor(make, model, year, enginePower) {
      super(make, model, year, enginePower);
    }
  
    printInfo() {
      console.log(
        `Вантажівка: ${this.make} ${this.model}, Рік: ${this.year}, Потужність двигуна: ${this.enginePower} к.с.`
      );
    }
  }
  
  class Bus extends Car {
    constructor(make, model, year, enginePower) {
      super(make, model, year, enginePower);
    }
  
    printInfo() {
      console.log(
        `Автобус: ${this.make} ${this.model}, Рік: ${this.year}, Потужність двигуна: ${this.enginePower} к.с.`
      );
    }
  }
  
  const cars = [
    new Sedan("Honda", "Accord", 2023, 192),
    new Truck("Chevrolet", "Silverado", 2022, 420),
    new Bus("Volkswagen", "Crafter", 2021, 177),
  ];
  
  cars.forEach((car) => car.printInfo());
  