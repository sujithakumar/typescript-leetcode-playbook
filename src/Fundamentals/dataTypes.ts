

let score = 100; // Inferred as number
//score = "high"; // Err

let mark: number = 30;

let data: any = 42;
data = "hello world"; // No error
// Compiles fine, but will crash at runtime!
//data.nonExistentMethod(); 

let userInput: unknown = "secure data";
//userInput.toUpperCase();// err: type 'unknown'.


type TrafficLight = "red" | "green";
function getAction(light: TrafficLight) {
  switch (light) {
    case "red":
      return "Stop";
    case "green":
      return "Go";
    default:
      const check: never = light;
      return check;
  }
}
const drive = getAction("green");
//const action = getAction("orange"); 
// err - orange doesnt belong to type TrafficLight
console.log(drive);

function logDetails(msg: string): void {
  console.log(msg);
  // Returns nothing 
}

function sayNanme() : string{
    return "sujitha";
    //return 1; //err - return type is string
}
console.log(logDetails("hi")); //undefined
console.log(sayNanme()); //sujitha

