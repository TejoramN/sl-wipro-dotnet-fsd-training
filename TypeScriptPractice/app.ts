////var message: string = "Hello world from type script"
////console.log(message)


//class Greeting {
//    greet(): void {
//        console.log("Hello World from TypeScript!!!")
//    }
//}
//var obj = new Greeting();
//obj.greet();


//var name: string = "John";
//var score1: number = 50;
//var score2: number = 42.50
//var sum = score1 + score2
//console.log("name" + name)
//console.log("first score: " + score1)
//console.log("second score: " + score2)
//console.log("sum of the scores: " + sum)

function ToCelsius(degreeF: number) {

    var degreeF: number;
    degreeF = (5 / 9) * (degreeF - 32)
    return degreeF
}
console.log(ToCelsius(212))