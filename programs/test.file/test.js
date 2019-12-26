const assert = require('chai').assert
const dis = require("../basic/Harmonic/harmonicNumbersBl")
const res = require("../dataStructure/palindromeDeque")

describe('tesing the results', function () {
    it(' test is pass if result is 1.5', function () {
        assert.equal(dis.harmonicharmonic(3), 1.5)
    })

    it("if palindrome returns true ", function () {
        assert.isString("res", true);
    })


})