const fs = require("fs");
const EventEmitter = require("events");
const express = require("express");
// Prob 1
// console.log("start");
// fs.readFile("webpack1.txt", (err, data) => {
//   if (err) throw err;
//   console.log("file:", data.toString());
// });

// setTimeout(() => console.log("timeout executed"), 0);
// console.log("end");

// Prob 2
// const fsReadStream = fs.createReadStream("webpack.txt")
// const fsWriteStream = fs.createWriteStream("output.txt")
// fsReadStream.pipe(fsWriteStream)
// console.log('end');

//Prob 3
// const emiiter = new EventEmitter()
// emiiter.on('log', (msg) => console.log(msg));
// emiiter.emit('log', 'Hello')

// //Prob 4
// const app = express();
// let users = [];
// app.use(express.json());
// app.get("/users", (req, res) => {
//   return res.json(users);
// });
// app.post("/users", (req, res) => {
//   users.push(req.body);
//   res.status(201).json({ message: "User added" });
// });
// app.put("/users/:id", (req, res) => {
//   const id = req.params.id;
//   users[id] = req.body;
//   res.json({ message: "User updated" });
// });
// app.delete("/users/:id", (req, res) => {
//   const id = req.params.id;
//   users.splice(id);
//   res.json({ message: "User deleted" });
// });
// app.listen("3000", () => console.log("listening"));

// const request = require("supertest");
// const app = require("./app");
// it("create new user", async () => {
//   const response = await request(app)
//     .post("/users")
//     .send({ name: "aa", email: "ss" });
//   expect(response.status).toBe(201);
//   expect(response.body).toHaveProperty("id");
//   expect(response.body.name).toHaveProperty("aa");
//   expect(response.body.email).toHaveProperty("ss");

//   userID = response.body.id;
// });


// controllers / products - logic;
const Products = require("../models/products");
exports.create = async (req, res) => {
  const product = await Products.create(res.body);
  res.status(201).json(product);
  const p1roduct = Products.fidByPk(req.param.id);
  product.update();
  product.destory();
};



// 1-35 items, pagination = 10
// page = 2, limit = 3 - 21, 22, 23 records, eg2 25, 26, 27
const start = page * pagination
const end = start + limit
const filtered = items.slice(start, end)
