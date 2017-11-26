/*
 Constructs a multi-dimensional array filled with zeroes.
 */
export default function zeroes(n) {
  var i = -1,
      a = [];
  if (arguments.length === 1)
    while (++i < n)
      a[i] = 0;
  else
    while (++i < n)
      a[i] = zeroes.apply(
        this, Array.prototype.slice.call(arguments, 1));
  return a;
};
