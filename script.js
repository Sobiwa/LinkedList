class LinkedList {
  constructor() {
    this.head = { next: null };
  }

  tail(next = this.head) {
    return next.next === null ? next : this.tail(next.next);
  }

  append(value) {
    const item = new Node(value);
    const tail = this.tail();
    tail.next = item;
  }

  prepend(value) {
    const item = new Node(value);
    item.next = this.head.next;
    this.head.next = item;
  }

  size(next = this.head, count = 0) {
    return next.next === null ? count : this.size(next.next, (count += 1));
  }

  at(index, next = this.head, count = -1) {
    return index === count
      ? next
      : next.next === null
      ? 'index not found'
      : this.at(index, next.next, (count += 1));
  }

  pop(next = this.head) {
    if (this.head.next === null) {
      return 'List is empty. Method unavailable.';
    }
    if (next.next.next === null) {
      next.next = null;
      return;
    }
    this.pop(next.next);
  }

  contains(value, next = this.head) {
    return next.value === value
      ? true
      : next.next === null
      ? false
      : this.contains(value, next.next);
  }

  find(value, next = this.head, count = -1) {
    return next.value === value
    ? count
    : next.next === null
    ? null
    : this.find(value, next.next, count += 1)
  }

  toString(next = this.head.next) {
    return next === null
    ? null
    : next.next === null
    ? `( ${next.value} )` :
    `( ${next.value} ) -> ${this.toString(next.next)}`;
  }

  insertAt(value, index, count = 0, next = this.head) {
    const item = new Node(value);
    if (index < 0) {
      throw new Error('Index must be >= 0.');
    }
    if (index === count) {
      item.next = next.next;
      next.next = item;
      return;
    }
    if (next.next === null) {
      return null;
    }
    return this.insertAt(value, index, count += 1, next.next);
  }

  removeAt(index, count = 0, next = this.head) {
    if (index < 0) {
      throw new Error('Index must be >= 0.');
    }
    if (index === count) {
      next.next = next.next.next;
      return;
    }
    if (next.next === null) {
      return null;
    }
    return this.removeAt(index, count += 1, next.next);
  }
}

class Node {
  constructor(value = null, next) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
