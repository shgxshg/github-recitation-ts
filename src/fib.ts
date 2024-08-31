

export default function fibonacci(n: number): number {
  if (n < 0) {
    return -1; 
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
}
