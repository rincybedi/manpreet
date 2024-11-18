// solid srp
class User1 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  saveToDb() {
    // save user details to db
  }

  email() {
    // email user
  }
}

class User2 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class DbService {}

class EmailService1 {}

// OCP
class Report1 {
  generate(type) {
    if (type == "html") {
    } else if (type == "pdf") {
    }
  }
}
// Strategy Pattern
class ReportStrategy {
  generate(data) {
    throw new Error("Method not implemented");
  }
}

class HTMLReport extends ReportStrategy {
  generate(data) {
    console.log(`Html Report: ${JSON.stringify(data)}`);
  }
}

class ExcelReport extends ReportStrategy {
  generate(data) {
    //
  }
}

class ReportGenerator {
  // closed
  constructor(strategy) {
    this.strategy = strategy;
  }

  generate(data) {
    return this.strategy.generate(data);
  }
}

const htmlReport = new ReportGenerator(new HTMLReport());
htmlReport.generate({ name: "Mnp", age: 30 });

// LSB
class Bird1 {
  fly() {
    console.log("can fly");
  }
}

class Ostrict extends Bird1 {
  fly() {
    throw new Error("Cant fly");
  }
}

function flyBird(obj) {
  obj.fly();
}

flyBird(new Bird1());
// flyBird(new Ostrict())

class Bird {
  layEgg() {
    console.log("can lay egg");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("can fly");
  }
}

class WalkingBird extends Bird {
  //ostrich
  walk() {
    console.log("can walk");
  }
}

function makeBirdyFly(bird) {
  if (bird instanceof FlyingBird) {
    bird.fly();
  } else {
    bird.walk();
  }
}

makeBirdyFly(new FlyingBird());
makeBirdyFly(new WalkingBird());

//isp
class Printer {
  print() {}

  scan() {}

  fax() {}
}

class SimplePrinter extends Printer {
  print() {
    console.log("can print");
  }

  scan() {
    throw new Error("cant scan");
  }
}

class Priter2 {
  print() {}
}

class Scanner {
  scan() {}
}

class FaxMachine {
  fax() {}
}

// DIP
class EmailService {
  // low level module
  send() {
    console.log("send email");
  }
}
class Notification {
  // High level module
  constructor() {
    this.service = new EmailService();
  }

  send() {
    this.service.send();
  }
}

new Notification().send();

//Good

// build an abstraction
class NotifcationService {
  send() {
    throw new Error("Method not implemented");
  }
}
//low level modules 1 & 2
class EmailService3 extends NotifcationService {
  // low level module
  send() {
    console.log("1. send email");
  }
}

class SMSService3 extends NotifcationService {
  // low level module
  send() {
    console.log("2. send sms");
  }
}
//high level module
class NotificationMain {
  constructor(service) {
    this.service = service;
  }
  send() {
    this.service.send();
  }
}

new NotificationMain(new EmailService3()).send();
new NotificationMain(new SMSService3()).send();
