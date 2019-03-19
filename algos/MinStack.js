class MinStack {
  constructor() {
    this._stack = [];
    this._sortedStack = [];
  }

  pop() {
    let elem = this._stack.pop();

    if(elem === this._sortedStack[this._sortedStack.length - 1]) {
      return this._sortedStack.pop();
    }

    return elem;
  }

  push(elem) {
    this._stack.push(elem);

    if(elem <= this._sortedStack[this._sortedStack.length - 1]) {
      this._sortedStack.push(elem);
    }

    return;
  }

  peak() {
    return this._stack[this._stack.length - 1];
  }

  min() {
    return this._sortedstack[this._sortedStack.length - 1];
  }
}