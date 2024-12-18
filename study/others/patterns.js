// singleton Pattern
// use case - 1 db con, logging, config settings
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2);

// factory
// use case - 1. muliple types of db, 2. notification, 3.payment options
class DatabaseFactory {
  static createDatabase(type) {
    switch (type) {
      case "mysql":
        return new MySQLDatabase();
      case "postgres":
        return new PostgresDatabase();
      case "mongo":
        return new MongoDB();
      default:
        throw new Error("Unsupported database type");
    }
  }
}

// observer
// use case - event driven systems like event listeners, chat apps, context api, stock market price updating
class Stock {
  constructor(symbol) {
    this.symbol = symbol;
    this.price = 0;
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((x) => x !== observer);
  }

  notifyObservers() {
    this.observers.forEach((x) => x.update(this));
  }

  setPrice(newPrice) {
    if (this.price != newPrice) {
      this.price = newPrice;
      this.notifyObservers();
    }
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(stock) {
    console.log(
      `client: ${this.name} notfified about ${stock.symbol} for price ${stock.price}`
    );
  }
}

const o1 = new Observer("Client 1");
const o2 = new Observer("Client 2");

const subject = new Stock("AAPL");
subject.addObserver(o1);
subject.addObserver(o2);
subject.setPrice(100);
subject.setPrice(55500);

//strategy
//refer ocp , 1. Payment Processing System, Sorting
