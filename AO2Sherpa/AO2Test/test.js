QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing calculate function with several sets of inputs', function (assert) {
  assert.equal(calculator(12, 2, 1), 23.88, 'Tested with three relatively small positive numbers');
  assert.equal(calculator(100, 100, 10), 9990, 'Tested with three large positive numbers.');
  assert.throws(function () {calculator(-20, 10, 2), Nan}, 'Tested with two negative number and a number.');
  assert.throws(function () {calculator("q", "a", -5), Nan}, 'Tested with two string and a number.');
    //
    
    
});
