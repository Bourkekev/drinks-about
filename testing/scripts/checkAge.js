function WhatCanIDrink( age ) {
    this.age = 0;
}

// constructor can also be written as:
// Calculator = function() {
//     this.value = 0;
// };

WhatCanIDrink.prototype.checkAge = function(number) {
    if ( typeof(number) == "number" ) {
        if (number < 1) {
            let result = "Sorry. That's not an age!";
            return result; 
        }
        else if (number < 14) {
            let result = "Drink Toddy.";
            return result; 
        }
        else if (number < 18 && number > 13 ) {
            let result = "Drink Coke.";
            return result; 
        }
        else if (number < 21 && number > 17) {
            let result = "Drink Beer.";
            return result; 
        }
        else {
            let result = number;
            return result;
        }
    }
    else {
        alert( "Error!" );
    }
}

// function WhatCanIDrink (age) {
//     if ( typeof(age) == "number" {
//         if (age <= 0) {
        
//         }
//     }
//     else {
//         return "Error! Supply a number."
//     }
// }