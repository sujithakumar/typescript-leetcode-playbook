
// Primitive Arrays
let ids: number[] = [1, 2, 3, 4, 5]; // Can only contain numbers
let names: string[] = ['Suji', 'Rathi', 'Pinky']; // Can only contain strings
let options: boolean[] = [true, false, false]; // Can only contain booleans

// Object Array
let books: object[] = [
    { name: 'Red Flags and Green Flags', author: 'Dr. Ali Fenwick' },
    { name: 'The Love Hypothesis', author: 'Ali Hazelwood' },
]; // Can only contain objects

// Any Array (Opting out of type checking)
let arr: any[] = ['hello', 1, true]; // Reverts TypeScript back to standard JavaScript

// Type Enforcement Example
ids.push(6); // OK
//ids.push('7'); // ER: Argument of type 'string' is not assignable to parameter of type 'number'

// TypeScript infers this as: (string | number | boolean)[]
let user = ['Danny', 1, true];
user[0] = 100; // OK
//user[1] = { name: 'JOB' }; // ER: Cannot assign object to (string | number | boolean)[]
user[2] = 'jack'

//Union
let person: (string | number | boolean)[] = ['John', 1, true];
person[0] = 100;
//person[1] = { name: 'John' }; // ER: 'person' array cannot contain objects

//tuples
let listing: [string, number, string[]] = ['jack', 3, ['hi', 'hello']];
listing.push('Hello world');
console.log(listing);

let newUser : readonly [string, number] = ['Jack', 30];
//newUser.push('hello'); //err - no mutation on readonly items
console.log(newUser);



