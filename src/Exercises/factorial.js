function factorial(n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive step
}

console.log(factorial(3)); // Output: 6