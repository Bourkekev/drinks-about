function WhatCanIDrink( age ) {
    this.age = 0;
}

// constructor can also be written as:
// Calculator = function() {
//     this.value = 0;
// };

WhatCanIDrink.prototype.checkAge = function(age) {
    if ( typeof(age) == "number" ) {
        this.age = age;
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