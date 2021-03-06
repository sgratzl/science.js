import { gaussian } from './kernel';
import { nrd } from './bandwidth';
import functor from '../core/functor';

// http://exploringdata.net/den_trac.htm
export default function kde() {
  var kernel = gaussian,
    sample = [],
    bandwidth = nrd;

  function kde(points, i) {
    var bw = bandwidth.call(this, sample);
    return points.map(function (x) {
      var i = -1,
        y = 0,
        n = sample.length;
      while (++i < n) {
        y += kernel((x - sample[i]) / bw);
      }
      return [x, y / bw / n];
    });
  }

  kde.kernel = function (x) {
    if (!arguments.length) return kernel;
    kernel = x;
    return kde;
  };

  kde.sample = function (x) {
    if (!arguments.length) return sample;
    sample = x;
    return kde;
  };

  kde.bandwidth = function (x) {
    if (!arguments.length) return bandwidth;
    bandwidth = functor(x);
    return kde;
  };

  return kde;
}
