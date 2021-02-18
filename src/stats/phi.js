import erf from './erf';

export default function phi(x) {
  return 0.5 * (1 + erf(x / Math.SQRT2));
}
