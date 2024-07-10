greeting() //this is hoisting
y=1;

ychanger() //changing global variable
console.log(y);

function ychanger (){
    y=500;
}

function greeting () {
    console.log("this is a greeting function");
}

    const greetingfucntion = function (a, b) { //this is a anonymous function , a function without any name
        //console.log("this is also a greeting function");

        return a + b;
    }

    const grettingfunctionnew = function newgreeting() {
        console.log("this is again a greeting function");
    }

    greeting(); //we can call this function wherever we want in this file even before its defination
    console.log(greetingfucntion)
    greetingfucntion(210, 5);
    grettingfunctionnew();


    function run(param){

    }
    run(function (){
        console.log("running"); //this inside function is called as callback function
});



    console.log(x);//hoisting variable is not allowed
    x = "harsh";

