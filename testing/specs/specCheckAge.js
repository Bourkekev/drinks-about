describe("WhatCanIDrink", function() {
    beforeEach(function() {
        drinkAge = new WhatCanIDrink;
    })

    describe("Check Age", function() {
        
        it("should return Sorry. That's not an age!", function() {
            let result = drinkAge.checkAge(0)
            expect(result).toBe("Sorry. That's not an age!");
        })
        it("should return Drink Toddy.", function() {
            let result = drinkAge.checkAge(13)
            expect(result).toBe("Drink Toddy.");
        })
        it("should return Drink Coke.", function() {
            let result = drinkAge.checkAge(17)
            expect(result).toBe("Drink Coke.");
        })
        it("should return Drink Beer.", function() {
            let result = drinkAge.checkAge(20)
            expect(result).toBe("Drink Beer.");
        })

        it("should return an error if a number is not supplied", function() {
            spyOn(window, "alert");
            drinkAge.checkAge("Stringer");
            expect(window.alert).toHaveBeenCalledWith ("Error!")
        })
    })
})