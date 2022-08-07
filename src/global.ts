import { Pipeline } from './utilities';

Array.prototype.zip = function (arr) {
  if (arr.length !== this.length) {
    throw 'Cannot zip arrays of differing size';
  }
  return this.map((item, index) => [item, arr[index]]);
};

Array.prototype.applyMap = function (...args) {
  return this.map((f) => f(...args));
};

Array.prototype.unique = function () {
  return [...new Set(this)];
};

Array.prototype.excludes = function (searchElement, fromIndex) {
  return !this.includes(searchElement, fromIndex);
};

Array.prototype.last = function () {
  return this[this.length - 1];
};

Array.prototype.first = function () {
  return this[0];
};

Array.prototype.exit = function () {
  if (this.length !== 1)
    throw `Attempted to exit ListWorld on an array with length != 1`;
  return this[0];
};

Array.prototype.filterOut = function (predicate, thisArg) {
  return this.filter(
    (item, index, array) => !predicate(item, index, array),
    thisArg || this
  );
};

Array.prototype.matrix = function (arr) {
  return this.flatMap((t) => arr.map((u) => [t, u]));
};

Array.prototype.log = function (...args: unknown[]) {
  console.error(...args);
  console.error(this);
  return this;
};

Array.prototype.msg = function (...args: unknown[]) {
  console.error(...args);
  return this;
};

Array.prototype.reduceP = function (fn) {
  return new Pipeline(this.reduce(fn));
};

Array.prototype.reduceA = function (fn) {
  return [this.reduce(fn)];
};

Array.range = function (length: number) {
  return [...Array(length).keys()];
};
