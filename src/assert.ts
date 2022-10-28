export function assert(
  condition: any,
  // Can provide a string, or a function that returns a string for cases where
  // the message takes a fair amount of effort to compute
  message?: string | (() => string),
  ): asserts condition {
  if (condition) {
    return;
  }

  // Condition not passed
  throw new Error(typeof message === 'function' ? message() : message);
}
