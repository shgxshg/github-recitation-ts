// Endpoint for querying the fibonacci numbers

// with this snippet from fibRoute.ts:
import { Request, Response } from "express";
const fibonacci = require("./fib");

export default (req, res) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};

