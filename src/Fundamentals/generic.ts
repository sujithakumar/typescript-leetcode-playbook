

// This generic function accepts any type T, 
// and returns that exact same type
function identity<T>(arg: T): T {
  return arg;
}

console.log();

// Type is explicitly string
const outputString = identity<string>("hello"); 
console.log(outputString,"  ",typeof(outputString));

 // Type is inferred as number (42)
const outputNumber = identity(42);             
console.log(outputNumber,"  ",typeof(outputNumber));

//constraints

interface HasLength {
  length: number;
}

// Constraint: T MUST have a 'length' property
function logLength<T extends HasLength>(item: T): T {
  console.log(`Length is: ${item.length}`);
  return item;
}

// --- Valid ---
logLength("Hello TypeScript");       
logLength([1, 2, 3, 4]);             
logLength({ length: 10, value: 5 }); 

// --- Invalid ---
// logLength(123); 
// Numbers do not have a .length property!

