'use strict';

var assert = require('assert'),
    main   = require('../index');

describe('sort()', function() {
  it('should should order the items in an array', function() {
    // arrange
    var a = [3, 7, 2, 4];

    // act
    main.sort(a);

    // assert
    assert(a, [2, 3, 4, 7], 'The array should be sorted.');
  });
});
