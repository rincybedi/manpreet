//singleton Pattern
// use case- 1 db con, logging, config settings
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
// use case- 1. muliple types of db, 2. notification, 3.payment options
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

//observer
//use case - event driven systems
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((x) => x !== observer);
  }

  notifyObservers(msg) {
    this.observers.forEach((x) => x.update(msg));
  }
}

class Observer {
  update(msg) {
    console.log(msg);
  }
}

const o1 = new Observer()
const o2 = new Observer()

const subject = new Subject()
subject.addObserver(o1)
subject.addObserver(o2)
subject.notifyObservers('Hey from subject')