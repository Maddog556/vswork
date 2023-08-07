// Write a short program that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
for (i = 1; i <= 100 ; i++){
    var output = ""
    //          && means AND evaluates operands from left to right
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else if (i % 3 === 0){
        console.log("fizz")
        //  The remainder operator (%) returns the remainder left over when one operand is divided by a second operand.
        //  It always takes the sign of the dividend. dividend is the A (a % b)
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }

}