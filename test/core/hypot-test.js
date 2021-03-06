const science = require('../../build/science');

var vows = require('vows'),
  assert = require('assert');

var suite = vows.describe('science.hypot');

suite.addBatch({
  hypot: {
    'maximum supported hypotenuse': function () {
      var max = Number.MAX_VALUE / Math.sqrt(2);
      assert.equal(science.hypot(max, max), 1.7976931348623155e308);
    },
  },
});

suite.export(module);
