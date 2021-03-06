const science = require('../../build/science');

var vows = require('vows'),
  assert = require('assert');

var suite = vows.describe('science.stats.bandwidth');

suite.addBatch({
  bandwidth: {
    nrd0: function () {
      var data = [1, 4, 3, 2];
      assert.equal(science.stats.bandwidth.nrd0(data), 0.7635139420854616);
    },
    nrd: function () {
      var data = [1, 4, 3, 2];
      assert.equal(science.stats.bandwidth.nrd(data), 0.899249754011766);
    },
  },
});

suite.export(module);
