export default function iqr(x) {
  var quartiles = science.stats.quantiles(x, [.25, .75]);
  return quartiles[1] - quartiles[0];
};
