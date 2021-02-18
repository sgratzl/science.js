import quantiles from './quantiles';

export default function median(x) {
  return quantiles(x, [0.5])[0];
}
