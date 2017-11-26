export default function median(x) {
  return science.stats.quantiles(x, [.5])[0];
};
