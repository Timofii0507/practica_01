class Shape {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  
    getArea() {
      throw new Error("Метод не реалізовано");
    }
  
    getPerimeter() {
      throw new Error("Метод не реалізовано");
    }
  }
  
  class Square extends Shape {
    constructor(sideLength) {
      super("Квадрат");
      this.sideLength = sideLength;
    }
  
    getArea() {
      return this.sideLength ** 2;
    }
  
    getPerimeter() {
      return this.sideLength * 4;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super("Прямокутник");
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Triangle extends Shape {
    constructor(a, b, c) {
      super("Трикутник");
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    getArea() {
      const s = (this.a + this.b + this.c) / 2;
      return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
  
    getPerimeter() {
      return this.a + this.b + this.c;
    }
  }
  
  const shapes = [new Square(5), new Rectangle(4, 7), new Triangle(3, 4, 5)];
  
  shapes.forEach((shape) => {
    console.log(`Назва: ${shape.getName()}`);
    console.log(`Площа: ${shape.getArea()}`);
    console.log(`Периметр: ${shape.getPerimeter()}`);
  });
  