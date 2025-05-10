class CashierQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(person) {
      this.queue.push(person);
    }
  
    dequeue() {
      return this.queue.length > 0 ? this.queue.shift() : null;
    }
  
    peek() {
      return this.queue.length > 0 ? this.queue[0] : null;
    }
  
    size() {
      return this.queue.length;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    getQueue() {
      return [...this.queue];
    }
  }
  
  export default CashierQueue;