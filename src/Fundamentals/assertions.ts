
const myValue: unknown = "hello world";
const strLength: number = (myValue as string).length;
console.log(strLength);

// const myValue: unknown = "hello world";
// const strLength: number = (<string>myValue).length;
// console.log(strLength);

//non-null assertion 

type User = {
    name : string,
    age?: number,
    address :{
        city : string,
        state : string,
        pin? : number,
    }
}

const user1 : User = {
    name: "sujitha",
    address :{
        city : "Chennai",
        state:'TN'
    }
}

//const result : number = user1.age ?? 20;

const result : number | undefined = user1.age;

const result1 = user1.age!
console.log(result);

