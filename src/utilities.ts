export const log = (...messages: any[]) => console.error(messages);

export const convertToValueMap = (
  inputEnum: Record<string, string | number>
): Record<string | number, true> => {
  const result = Object.entries(inputEnum)
    .filter(([key, value]) => Number.isNaN(parseInt(key)))
    .reduce((acc, [key, value]) => {
      acc[value] = true;
      return acc;
    }, {} as Record<string | number, true>);
  return result;
};

export class Pipeline<T> implements IPipeline<T> {
  constructor(value: T) {
    this.value = value;
  }
  private readonly value: T;
  pipe<R>(fn: (arg: T) => R): Pipeline<R> {
    return new Pipeline(fn(this.value));
  }
  exitPipe(): T {
    return this.value;
  }
}
