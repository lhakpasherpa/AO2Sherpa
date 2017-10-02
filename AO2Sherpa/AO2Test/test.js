//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(calculator(12, 2, 2), 23.76, 'Tested with two relatively small positive numbers');
    assert.throws(function () {calculator(-1, 2, -5), -2.05}, 'Tested with two negative numbers. Any arguments less than 1 will be set to 1.');
    assert.throws(function () {calculator(500, 500, 500), 247500}, 'Tested with two large positive numbers. Any arguments greater than 100 will be set to 100.');
        //throws( block                                    [, expected ] [, message ] ) 
   // assert.throws(function () {calculator(null, null, null); }, /The given argument is not a number/, 'Passing in null correctly raises an Error');
        //throws( block                                    [, expected ] [, message ] ) 
    assert.throws(function () {calculator("Christine",1, "5"); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
});
