// // Endpoint for querying the fibonacci numbers

// const fibonacci = require("./fib");

// export default (req, res) => {
//   const { num } = req.params;

//   const fibN = fibonacci(parseInt(num));
//   let result = `fibonacci(${num}) is ${fibN}`;

//   if (fibN < 0) {
//     result = `fibonacci(${num}) is undefined`;
//   }

//   res.send(result);
// };

// Endpoint for querying the fibonacci numbers
import { Request, Response } from 'express';
import fibonacci from './fib';  // Assuming your fibonacci function is the default export from fib

export default (req: Request, res: Response): void => {
  const num = parseInt(req.params.num, 10);  // Parse `num` from request parameters

  // Check if `num` is a valid number
  if (isNaN(num)) {
    res.status(400).send('Invalid number');
    return;
  }

  const fibN = fibonacci(num);  // Call the fibonacci function
  let result: string;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  } else {
    result = `fibonacci(${num}) is ${fibN}`;
  }

  res.send(result);
};
