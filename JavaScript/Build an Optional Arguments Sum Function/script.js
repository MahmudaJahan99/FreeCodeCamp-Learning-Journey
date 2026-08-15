function addTogether(a) {
  if (typeof a !== "number") {
    return undefined;
  }

  if (arguments.length === 1) {
    return function (b) {
      if (typeof b !== "number") {
        return undefined;
      }
      return a + b;
    };
  }
  
  if (arguments.length === 2) {
    const b = arguments[1];
    if (typeof b !== "number") {
      return undefined;
    }
    return a + b;
  }
}
