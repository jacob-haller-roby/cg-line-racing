// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./interfaces.d.ts" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./functions.d.ts" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./enums.d.ts" />

declare const readline: () => string;
interface Array<T> {
  zip<U>(arr: U[]): [T, U][];
  applyMap(
    ...args: T extends UnknownFunction ? Parameters<T> : never
  ): T extends UnknownFunction ? ReturnType<T>[] : never;
  unique(): Array<T>;
  excludes(searchElement: T, fromIndex?: number): boolean;
  last(): T;
  first(): T;
  exit(): T;
  filterOut(
    predicate: (value: T, index: number, array: T[]) => boolean,
    thisArg?: unknown
  ): T[];
  matrix<U>(arr: U[]): [T, U][];
  log(...args: unknown[]): Array<T>;
  msg(...args: unknown[]): Array<T>;
  reduceP<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => U
  ): IPipeline<U>;
  reduceA<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => U
  ): [U];
}

interface ArrayConstructor {
  range(length: number): number[];
}
