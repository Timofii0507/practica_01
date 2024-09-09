class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    printInfo() {
      console.log(
        `Продукт: ${this.name}, Ціна: ${this.price}, Кількість: ${this.quantity}`
      );
    }
  }
  
  class Book extends Product {
    constructor(name, price, quantity, author) {
      super(name, price, quantity);
      this.author = author;
    }
  
    printInfo() {
      console.log(
        `Книга: ${this.name}, Автор: ${this.author}, Ціна: ${this.price}, Кількість: ${this.quantity}`
      );
    }
  }
  
  class Phone extends Product {
    constructor(name, price, quantity, brand) {
      super(name, price, quantity);
      this.brand = brand;
    }
  
    printInfo() {
      console.log(
        `Телефон: ${this.name}, Бренд: ${this.brand}, Ціна: ${this.price}, Кількість: ${this.quantity}`
      );
    }
  }
  
  class Fridge extends Product {
    constructor(name, price, quantity, capacity) {
      super(name, price, quantity);
      this.capacity = capacity;
    }
  
    printInfo() {
      console.log(
        `Холодильник: ${this.name}, Об'єм: ${this.capacity}л, Ціна: ${this.price}, Кількість: ${this.quantity}`
      );
    }
  }
  
  const products = [
    new Book("Вступ до Python", 30, 7, "Іван Іваненко"),
    new Phone("Samsung Galaxy S21", 850, 15, "Samsung"),
    new Fridge("LG 400L", 750, 4, 400),
  ];
    
  products.forEach((product) => product.printInfo());
  