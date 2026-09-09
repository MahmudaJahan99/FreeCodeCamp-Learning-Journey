function initStack() {
  return {
    collection: [],
  };
}

function push(stack, element) {
  stack.collection.push(element);
}

function pop(stack, element) {
  if (stack.collection.length === 0) return undefined;

  return stack.collection.pop(element);
}

function peek(stack, element) {
  if (stack.collection.length === 0) return undefined;

  return stack.collection[stack.collection.length - 1];
}

function isEmpty(stack) {
  return stack.collection.length === 0 ? true : false;
}

function clear(stack) {
  stack.collection = [];
}
