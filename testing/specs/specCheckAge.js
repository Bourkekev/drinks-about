describe("WhatCanIDrink", function() {
    beforeEach(function() {
        drinkAge = new WhatCanIDrink;
    })

    describe("Check Age", function() {
        it("should return 20", function() {
            let result = drinkAge.checkAge(20)
            expect(result).toBe(20);
        })
        
        it("should return Sorry. That's not an age!", function() {
            let result = drinkAge.checkAge(0)
            expect(result).toBe("Sorry. That's not an age!");
        })

        it("should return an error if a number is not supplied", function() {
            spyOn(window, "alert");
            drinkAge.checkAge("Stringer");
            expect(window.alert).toHaveBeenCalledWith ("Error!")
        })
    })
})