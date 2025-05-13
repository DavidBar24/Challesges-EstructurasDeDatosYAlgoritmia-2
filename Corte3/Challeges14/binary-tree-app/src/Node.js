export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  isLeaf() {
    if (this.izquierda === null && this.derecha === null) {
      return true;
    } else {
      return false;
    }
}
}